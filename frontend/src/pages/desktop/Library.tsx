import Button from "@primitives/ui/Button";
import styled from "@emotion/styled";

interface Props {
  recordings: LocalAudio[];
  selected?: LocalAudio;
  select: (record: LocalAudio) => void;
  remove: (record: LocalAudio) => void;
}
export default function Library({
  recordings,
  selected,
  select,
  remove,
}: Props) {
  return (
    <Section aria-label="이 Mac의 녹음">
      <h2>이 Mac의 녹음</h2>
      {!recordings.length && <p>아직 녹음이 없어요.</p>}
      {recordings.map((record) => (
        <Row key={record.id}>
          <div>
            <strong>{new Date(record.created).toLocaleString("ko-KR")}</strong>
            <p>
              {record.recovered ? "중단된 녹음 · 복구한 구간" : "저장된 녹음"} ·{" "}
              {Math.floor(record.bytes / 32000)}초
            </p>
          </div>
          <Button
            variant="outline"
            disabled={!record.bytes}
            onClick={() => select(record)}
          >
            원음 재생
          </Button>
          <Button variant="outline" onClick={() => remove(record)}>
            이 Mac에서 삭제
          </Button>
        </Row>
      ))}
      {selected && (
        <audio
          aria-label="녹음 원본"
          key={selected.src}
          src={selected.src}
          controls
          autoPlay
        />
      )}
    </Section>
  );
}
const Section = styled.section`
  padding: 1.5rem;
  background: ${({ theme }) => theme.neutral[0]};
  border: 1px solid ${({ theme }) => theme.neutral[200]};
  border-radius: 1rem;
  display: grid;
  gap: 1rem;
  h2 {
    ${({ theme }) => theme.text.heading03}
  }
  audio {
    width: 100%;
  }
`;
const Row = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
  div {
    margin-right: auto;
  }
  p {
    color: ${({ theme }) => theme.neutral[600]};
  }
`;
