import styled from "@emotion/styled";
import ParticleWaveform from "@composites/ParticleWaveform";
import Button from "@primitives/ui/Button";
import Pause from "@/assets/icons/pause.svg";
import Play from "@/assets/icons/play.svg";

interface RecordingMenuProps {
  nickname?: string;
  elapsedTime: string;
  analyser: AnalyserNode | null;
  paused: boolean;
  saving: boolean;
  saveFailed: boolean;
  onToggle: () => void;
  onEnd: () => void;
  onReturn: () => void;
}

export default function RecordingMenuCard({
  nickname,
  elapsedTime,
  analyser,
  paused,
  saving,
  saveFailed,
  onToggle,
  onEnd,
  onReturn,
}: RecordingMenuProps) {
  const live = !paused && !saving;
  const status = saveFailed
    ? "저장 실패"
    : saving
      ? "저장 중"
      : paused
        ? "일시정지"
        : "녹음 중";
  return (
    <Card aria-label="메뉴 막대 녹음 제어">
      <Heading>{nickname ? nickname + " 님의 녹음" : "내 녹음"}</Heading>
      <Summary>
        <Status $live={live}>{status}</Status>
        <Time aria-label="녹음한 시간">{elapsedTime}</Time>
      </Summary>
      <Wave>
        <ParticleWaveform analyser={analyser} isActive={live} height={64} />
      </Wave>
      <Controls>
        <Button variant="outline" onClick={onToggle} disabled={saving}>
          {paused ? <Play aria-hidden /> : <Pause aria-hidden />}
          {paused ? "이어서 녹음" : "일시정지"}
        </Button>
        <Button onClick={onEnd} disabled={saving && !saveFailed}>
          <span aria-hidden>■</span>
          {saveFailed ? "저장 다시 시도" : "녹음 끝내기"}
        </Button>
      </Controls>
      <Return onClick={onReturn}>
        녹음 창 열기 <span aria-hidden>↗</span>
      </Return>
    </Card>
  );
}

const Card = styled.section`
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 24px 52px 64px 48px auto;
  gap: 16px;
  width: 100%;
  max-width: 448px;
  min-height: 340px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.neutral[200]};
  border-radius: 20px;
  background: ${({ theme }) => theme.neutral[50]};
`;
const Heading = styled.h2`
  ${({ theme }) => theme.text.heading03};
  line-height: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const Summary = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;
const Status = styled.span<{ $live: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 96px;
  color: ${({ theme, $live }) =>
    $live ? theme.sub.warning[600] : theme.neutral[600]};
  ${({ theme }) => theme.text.label01};
  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: currentColor;
  }
`;
const Time = styled.strong`
  ${({ theme }) => theme.text.title02};
  font-variant-numeric: tabular-nums;
`;
const Wave = styled.div`
  display: flex;
  min-width: 0;
`;
const Controls = styled.div`
  display: flex;
  gap: 8px;
`;
const Return = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid ${({ theme }) => theme.neutral[200]};
  ${({ theme }) => theme.text.label01};
  line-height: 22px;
`;
