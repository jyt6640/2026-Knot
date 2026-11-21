import Microphone from "@store/recordingStore/microphone";
import PcmCollector from "@store/recordingStore/pcmCollector";

type Phase = "idle" | "starting" | "active" | "paused" | "saving" | "failed";
export class LocalRecorder {
  phase: Phase = "idle";
  id?: number;
  analyser: AnalyserNode | null = null;
  private mic?: Microphone;
  private pcm?: PcmCollector;
  private pending: Uint8Array[] = [];
  private seq = 0;
  private writing?: Promise<void>;
  private finishing?: Promise<boolean>;
  private transition?: Promise<void>;
  private runningSince = 0;
  private elapsedMs = 0;
  private get disk() {
    return window.knotDesktop!.local!;
  }

  constructor(private changed: () => void) {}
  get seconds() {
    return (
      (this.elapsedMs +
        (this.runningSince ? Date.now() - this.runningSince : 0)) /
      1000
    );
  }
  private freeze() {
    if (this.runningSince) this.elapsedMs += Date.now() - this.runningSince;
    this.runningSince = 0;
  }
  private set(phase: Phase) {
    this.phase = phase;
    this.changed();
  }

  async start() {
    if (this.phase !== "idle") return;
    this.set("starting");
    const mic = new Microphone({
      onLost: () => this.deviceLost(),
      onData: () => {},
    });
    this.mic = mic;
    try {
      const connection = await mic.connect();
      if (!connection)
        throw new DOMException(
          "마이크를 연결할 수 없어요.",
          mic.errorName ?? "NotReadableError",
        );
      this.pcm = await PcmCollector.create({
        stream: connection.stream,
        onLost: () => this.deviceLost(),
        onChunk: (chunk) => {
          this.pending.push(new Uint8Array(chunk));
          if (this.phase !== "failed")
            void this.drain().catch(() => this.writeFailed());
        },
      });
      this.id = await this.disk.begin();
      this.analyser = connection.analyser;
      this.seq = 0;
      this.pending = [];
      this.elapsedMs = 0;
      this.runningSince = Date.now();
      this.pcm.start();
      this.set("active");
    } catch (error) {
      this.releaseMic();
      this.set("idle");
      throw error;
    }
  }
  private releaseMic() {
    this.pcm?.close();
    this.pcm = undefined;
    this.mic?.disconnect();
    this.mic = undefined;
    this.analyser = null;
  }
  private drain(): Promise<void> {
    if (!this.writing)
      this.writing = (async () => {
        while (this.pending.length) {
          await this.disk.append(this.id!, this.seq, this.pending[0]);
          this.pending.shift();
          this.seq++;
        }
      })().finally(() => {
        this.writing = undefined;
      });
    return this.writing;
  }
  private writeFailed() {
    if (this.phase === "failed" || this.phase === "saving" || !this.pcm) return;
    this.freeze();
    this.set("failed");
    // Stop capture while disk is full; retain the failed head and the final short block for retry.
    const closing = (
      this.pcm.isLive ? this.pcm.flush() : Promise.resolve()
    ).finally(() => this.releaseMic());
    this.transition = closing;
  }
  private deviceLost() {
    if (this.phase === "active" || this.phase === "paused") this.writeFailed();
  }
  async toggle() {
    if (this.phase === "active") {
      this.freeze();
      this.set("paused");
      this.transition = this.pcm!.flush();
      await this.transition;
    } else if (this.phase === "paused") {
      await this.transition;
      if (this.phase !== "paused") return;
      this.pcm!.start();
      this.runningSince = Date.now();
      this.set("active");
    }
  }
  finish(): Promise<boolean> {
    if (!this.finishing)
      this.finishing = this.save().finally(() => {
        this.finishing = undefined;
      });
    return this.finishing;
  }
  private async save() {
    if (!this.id) return this.phase === "idle";
    this.freeze();
    this.set("saving");
    try {
      await this.transition;
      await this.pcm?.flush();
      this.releaseMic();
      await this.drain();
      await this.disk.finish(this.id, this.seq);
      this.id = undefined;
      this.transition = undefined;
      this.set("idle");
      return true;
    } catch {
      this.set("failed");
      return false;
    }
  }
}
