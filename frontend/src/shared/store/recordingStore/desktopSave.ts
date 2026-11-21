import type { PcmAudioSeal } from "./pcmChunkUploadQueue";

interface SaveSteps {
  recordingId: number;
  stop: () => Promise<Blob>;
  verifyChunks?: () => Promise<PcmAudioSeal>;
  end: (seal?: PcmAudioSeal) => Promise<void>;
  uploadFile: (audio: Blob) => Promise<boolean>;
  saved: () => void;
}

/** 독, 녹음 화면, 앱 종료가 같은 작업을 기다린다. 실패한 단계의 입력은 다음 시도까지 보존한다. */
export class DesktopRecordingSave {
  private audio?: Blob;
  private ended = false;
  private running?: Promise<boolean>;

  constructor(readonly steps: SaveSteps) {}

  run() {
    this.running ??= this.save().finally(() => {
      this.running = undefined;
    });
    return this.running;
  }

  private async save() {
    this.audio ??= await this.steps.stop();
    if (!this.ended) {
      const seal = await this.steps.verifyChunks?.();
      await this.steps.end(seal);
      this.ended = true;
    }
    if (!this.steps.verifyChunks && !(await this.steps.uploadFile(this.audio)))
      return false;
    this.steps.saved();
    return true;
  }
}
