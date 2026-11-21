import styled from "@emotion/styled";
import useKeyDown from "@hooks/common/useKeyDown";
import AlertDialog from "@primitives/ui/AlertDialog";
import Dim from "@primitives/ui/Dim";
import { useDialog } from "@provider/context/dialogContext";
import { useRecordingStore } from "@store/recordingStore";
import { useCallback } from "react";

import CautionIcon from "@/assets/icons/caution.svg";

import microphoneNotice from "./microphoneNotice";

interface MicrophoneUnavailableDialogProps {
  title: string;
  description: string;
  onClose: () => void;
}

/**
 * 마이크를 받지 못했을 때 권한을 허용하는 방법을 알리는 [확인] 알림을 띄우는 도메인 훅.
 *
 * 독에서 녹음을 시작할 때, 녹음 화면에서 이어서 녹음할 때, 녹음 중 마이크가 끊겼을 때 같은 알림을 써요.
 * 한 번 거부한 권한은 사이트가 다시 물을 수 없어 알림은 닫기만 하고, 마이크를 다시 받는 일은
 * 독의 마이크 버튼과 「이어서 녹음」 버튼이 맡아요. 닫아도 화면과 녹음 상태는 그대로예요.
 */
const useMicrophoneUnavailableDialog = () => {
  const { open } = useDialog();

  // 효과 안에서 부르는 곳(독의 마이크 끊김 알림)이 있어 참조를 고정해요
  const openMicrophoneUnavailableDialog = useCallback(() => {
    const notice = microphoneNotice(
      useRecordingStore.getState().microphoneErrorName,
    );
    return open(({ close }) => (
      <MicrophoneUnavailableDialog {...notice} onClose={close} />
    ));
  }, [open]);

  return { openMicrophoneUnavailableDialog };
};

/**
 * 마이크 권한이 없거나 마이크를 찾지 못했을 때의 알림 모달.
 *
 * 알림 유형이라 [확인], 바깥 클릭, ESC 모두 모달만 닫아요.
 *
 * @see {@link https://www.figma.com/design/jyDFCKX5AIztZessq4H7nQ/knot?node-id=2017-35624 녹음/마이크 권한 없음}
 */
function MicrophoneUnavailableDialog({
  onClose,
  title,
  description,
}: MicrophoneUnavailableDialogProps) {
  useKeyDown({ key: "Escape", isEnabled: true, onKeyDown: onClose });

  return (
    <Dim onClick={onClose}>
      <AlertDialog
        role="alertdialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
        icon={<Icon />}
        title={title}
        description={description}
        confirmLabel="확인"
        onConfirm={onClose}
      />
    </Dim>
  );
}

const Icon = styled(CautionIcon)`
  color: ${({ theme }) => theme.sub.caution[700]};
`;

export default useMicrophoneUnavailableDialog;
