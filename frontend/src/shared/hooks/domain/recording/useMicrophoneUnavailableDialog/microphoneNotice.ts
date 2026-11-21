const TITLE = "마이크 권한이 꺼져 있어요";
const DESCRIPTION =
  "주소창의 자물쇠나 설정 아이콘에서 마이크를 허용해 주세요.\n안 보이면 브라우저 설정의 사이트 권한에서 바꿀 수 있어요.";

export default function microphoneNotice(errorName: string | null) {
  if (!window.knotDesktop?.requestMicrophoneAccess)
    return { title: TITLE, description: DESCRIPTION };

  switch (errorName) {
    case "NotAllowedError":
      return {
        title: TITLE,
        description:
          "시스템 설정에서 개인정보 보호 및 보안 → 마이크를 열고 Knot의 마이크 접근을 허용해 주세요.\n허용 후에도 이 안내가 뜨면 Knot을 종료하고 다시 열어 주세요.",
      };
    case "MicrophoneRestrictedError":
      return {
        title: "마이크 접근이 제한되어 있어요",
        description: "이 Mac의 사용 제한이나 관리 설정을 확인해 주세요.",
      };
    case "NotFoundError":
      return {
        title: "연결된 마이크를 찾을 수 없어요",
        description:
          "마이크를 연결하고 시스템 설정의 사운드 → 입력에서 장치를 확인한 뒤 다시 시도해 주세요.",
      };
    default:
      return {
        title: "마이크를 사용할 수 없어요",
        description:
          "입력 장치의 연결 상태와 다른 앱의 마이크 사용 여부를 확인한 뒤 다시 시도해 주세요.",
      };
  }
}
