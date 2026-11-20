import { PCM_PROCESSOR_NAME, PcmChunker } from "./pcmChunker";

/** 수집기가 processor에 보내는 명령 */

/** processor가 수집기에 보내는 메시지 */

/**
 * 마이크 소리를 PCM16 조각으로 모으는 AudioWorklet processor. AudioWorklet 전역에서만 돌아요.
 *
 * `start`를 받아야 모으기 시작하고, `flush`를 받으면 남은 소리를 봉인해 `flushed`로 답한 뒤
 * 다음 `start`까지 들어오는 소리는 버려요.
 */
class PcmProcessor extends AudioWorkletProcessor {
  isCollecting = false;
  chunker = new PcmChunker(pcm => this.port.postMessage({
    type: "chunk",
    pcm
  }, [pcm]));
  constructor() {
    super();
    this.port.onmessage = ({
      data
    }) => {
      if (data === "start") this.isCollecting = true;
      if (data === "flush") {
        this.chunker.flush();
        this.isCollecting = false;
        this.port.postMessage({
          type: "flushed"
        });
      }
    };
  }
  process(inputs) {
    if (this.isCollecting) this.chunker.push(inputs[0]);
    return true;
  }
}
registerProcessor(PCM_PROCESSOR_NAME, PcmProcessor);