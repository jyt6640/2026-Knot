import { useCallback, useEffect, useReducer, useState } from "react";
import styled from "@emotion/styled";
import Button from "@primitives/ui/Button";
import Logo from "@primitives/ui/Logo";
import ConfirmDialog from "@primitives/ui/ConfirmDialog";
import AlertDialog from "@primitives/ui/AlertDialog";
import Dim from "@primitives/ui/Dim";
import { GreetingTitle } from "@features/member/MemberGreeting";
import RecorderBarView from "@widgets/recording/RecorderBar/RecorderBarView";
import RecordingPanel from "@widgets/recording/RecordingMenu/RecordingPanel";
import RecordingMenuCard from "@widgets/recording/RecordingMenu/ui/RecordingMenuCard";
import microphoneNotice from "@hooks/domain/recording/useMicrophoneUnavailableDialog/microphoneNotice";
import { formatRecordingTime } from "@utils/formatRecordingTime";
import { LocalRecorder } from "./LocalRecorder";
import Library from "./Library";

export default function DesktopHome() {
  const bridge = window.knotDesktop!;
  const disk = bridge.local!;
  const [account, setAccount] = useState<LocalAccount | null>();
  const [rows, setRows] = useState<LocalAudio[]>([]);
  const [selected, select] = useState<LocalAudio>();
  const [remove, setRemove] = useState<LocalAudio>();
  const [confirm, setConfirm] = useState(false);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<{
    title: string;
    description: string;
  }>();
  const [, paint] = useReducer((n) => n + 1, 0);
  const [rec] = useState(() => new LocalRecorder(paint));
  const reload = useCallback(async () => setRows(await disk.list()), [disk]);
  const fail = useCallback(
    (e: unknown) =>
      setNotice({
        title: "작업을 마치지 못했어요",
        description: e instanceof Error ? e.message : "다시 시도해 주세요.",
      }),
    [],
  );
  useEffect(() => {
    disk.account().then(setAccount).catch(fail);
  }, [disk, fail]);
  useEffect(() => {
    if (account) void reload().catch(fail);
  }, [account, reload, fail]);
  const finish = useCallback(async () => {
    setConfirm(false);
    const saved = await rec.finish();
    if (saved) await reload().catch(fail);
    return saved;
  }, [rec, reload, fail]);
  useEffect(
    () =>
      bridge.onFinish((id) =>
        rec.id === id ? finish() : Promise.resolve(false),
      ),
    [bridge, rec, finish],
  );
  const { id, phase, analyser } = rec;
  const paused = phase === "paused",
    failed = phase === "failed",
    saving = phase === "saving" || failed;
  const elapsed = formatRecordingTime(rec.seconds);
  useEffect(() => {
    if (phase === "active") {
      const timer = setInterval(paint, 250);
      return () => clearInterval(timer);
    }
  }, [phase]);
  useEffect(() => {
    if (id)
      bridge.setRecording({
        id,
        phase: saving ? "saving" : "active",
        paused,
        saveFailed: failed,
        elapsedTime: elapsed,
      });
  }, [bridge, id, saving, paused, failed, elapsed]);
  function end() {
    if (failed) void finish();
    else setConfirm(true);
  }
  const returnToMain = () => {
    if (id) bridge.recordingMenu?.returnToMain(id);
  };
  async function start() {
    select(undefined);
    try {
      await rec.start();
    } catch (e) {
      if (e instanceof DOMException) setNotice(microphoneNotice(e.name));
      else fail(e);
    }
  }
  async function withBusy(task: () => Promise<void>) {
    setBusy(true);
    try {
      await task();
    } catch (e) {
      fail(e);
    } finally {
      setBusy(false);
    }
  }
  return (
    <Page>
      <Header>
        <Logo aria-label="Knot" />
        {account && (
          <Button
            variant="outline"
            disabled={busy || phase !== "idle"}
            onClick={() =>
              void withBusy(async () => {
                await disk.logout();
                select(undefined);
                setRemove(undefined);
                setRows([]);
                setConfirm(false);
                setNotice(undefined);
                setAccount(null);
              })
            }
          >
            로그아웃
          </Button>
        )}
      </Header>
      {account === null && (
        <Content>
          <h1>내 Mac의 녹음</h1>
          <p>기록을 열려면 사용하던 Knot 계정으로 로그인해 주세요.</p>
          <Button
            disabled={busy}
            onClick={() =>
              void withBusy(async () => setAccount(await disk.login()))
            }
          >
            Knot 계정으로 로그인
          </Button>
        </Content>
      )}
      {account && (
        <Content>
          <GreetingTitle nickname={account.nickname} />
          {id ? (
            <RecorderBarView
              isPaused={paused}
              isReloaded={false}
              isReloadedWhilePaused={false}
              elapsedTime={elapsed}
              analyser={analyser}
              isEnding={saving}
              desktopSaveFailed={failed}
              handlePause={() => void rec.toggle()}
              handleResume={() => rec.toggle()}
              handleEnd={end}
            />
          ) : (
            <>
              <Button
                disabled={busy || phase !== "idle"}
                onClick={() => void start()}
              >
                회의 녹음 시작
              </Button>
              <Library
                recordings={rows}
                selected={selected}
                select={select}
                remove={setRemove}
              />
            </>
          )}
          {failed && (
            <p role="alert">
              저장하지 못한 구간이 있어요. 입력 장치와 저장 공간을 확인하고 다시
              시도해 주세요.
            </p>
          )}
          <RecordingPanel sessionId={id}>
            <RecordingMenuCard
              nickname={account.nickname}
              elapsedTime={elapsed}
              analyser={analyser}
              paused={paused}
              saving={saving}
              saveFailed={failed}
              onToggle={() => void rec.toggle()}
              onReturn={returnToMain}
              onEnd={() => {
                returnToMain();
                end();
              }}
            />
          </RecordingPanel>
        </Content>
      )}
      {confirm && (
        <Dim>
          <ConfirmDialog
            role="dialog"
            aria-modal="true"
            aria-label="녹음을 끝낼까요?"
            title="녹음을 끝낼까요?"
            description="마지막 발화까지 이 Mac에 저장해요."
            cancelLabel="계속 녹음"
            confirmLabel="녹음 끝내기"
            onCancel={() => setConfirm(false)}
            onConfirm={() => void finish()}
          />
        </Dim>
      )}
      {remove && (
        <Dim>
          <ConfirmDialog
            role="dialog"
            aria-modal="true"
            aria-label="이 Mac에서 삭제할까요?"
            title="이 Mac에서 삭제할까요?"
            description="선택한 원본과 녹음 정보가 이 기기에서 삭제돼요."
            cancelLabel="취소"
            confirmLabel="삭제"
            isDestructive
            onCancel={() => setRemove(undefined)}
            onConfirm={() =>
              void withBusy(async () => {
                select(undefined);
                await disk.remove(remove.id);
                setRemove(undefined);
                await reload();
              })
            }
          />
        </Dim>
      )}
      {notice && (
        <Dim>
          <AlertDialog
            role="alertdialog"
            aria-label={notice.title}
            {...notice}
            confirmLabel="확인"
            onConfirm={() => setNotice(undefined)}
          />
        </Dim>
      )}
    </Page>
  );
}
const Page = styled.main`
  min-height: 100%;
  background: ${({ theme }) => theme.neutral[50]};
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.neutral[0]};
  border-bottom: 1px solid ${({ theme }) => theme.neutral[200]};
`;
const Content = styled.div`
  display: grid;
  gap: 1.5rem;
  max-width: 60rem;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  > button {
    justify-self: center;
  }
`;
