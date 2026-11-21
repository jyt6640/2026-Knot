import { describe, expect, it, vi } from "vitest";
import { DesktopRecordingSave } from "./desktopSave";

describe("Mac 녹음 종료", () => {
  it("조각의 저장 확인 전에는 종료하지 않고 두 곳의 요청이 한 작업을 기다린다", async () => {
    let release!: () => void;
    const gate = new Promise<void>((resolve) => {
      release = resolve;
    });
    const seal = {
      lastSequence: 2,
      totalFrameCount: 84000,
      pendingDescriptors: [],
    };
    const steps = {
      recordingId: 1,
      stop: vi.fn(async () => new Blob()),
      verifyChunks: vi.fn(async () => {
        await gate;
        return seal;
      }),
      end: vi.fn(async () => {}),
      uploadFile: vi.fn(),
      saved: vi.fn(),
    };
    const job = new DesktopRecordingSave(steps);
    const first = job.run();
    expect(job.run()).toBe(first);
    await Promise.resolve();
    expect(steps.end).not.toHaveBeenCalled();
    release();
    await expect(first).resolves.toBe(true);
    expect(steps.end).toHaveBeenCalledExactlyOnceWith(seal);
    expect(steps.saved).toHaveBeenCalledTimes(1);
  });

  it("파일 저장 실패 후 같은 오디오로 재시도하며 종료 요청을 반복하지 않는다", async () => {
    const audio = new Blob(["last sample"]);
    const steps = {
      recordingId: 7,
      stop: vi.fn(async () => audio),
      end: vi.fn(async () => {}),
      uploadFile: vi
        .fn()
        .mockResolvedValueOnce(false)
        .mockResolvedValueOnce(true),
      saved: vi.fn(),
    };
    const job = new DesktopRecordingSave(steps);
    await expect(job.run()).resolves.toBe(false);
    expect(steps.saved).not.toHaveBeenCalled();
    await expect(job.run()).resolves.toBe(true);
    expect(steps.uploadFile.mock.calls).toEqual([[audio], [audio]]);
    expect(steps.stop).toHaveBeenCalledTimes(1);
    expect(steps.end).toHaveBeenCalledTimes(1);
  });
});
