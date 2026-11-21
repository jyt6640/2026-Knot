import { ThemeProvider } from "@emotion/react";
import { theme } from "@provider/themeProvider";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import RecordingMenuCard from "./ui/RecordingMenuCard";

describe("메뉴 막대 녹음 카드", () => {
  const props = {
    nickname: "내 이름",
    elapsedTime: "12:48",
    analyser: null,
    paused: false,
    saving: false,
    saveFailed: false,
    onToggle: vi.fn(),
    onEnd: vi.fn(),
    onReturn: vi.fn(),
  };
  it.each([
    [false, false, false, "녹음 중", "일시정지", "녹음 끝내기"],
    [true, false, false, "일시정지", "이어서 녹음", "녹음 끝내기"],
    [true, true, false, "저장 중", "이어서 녹음", "녹음 끝내기"],
    [true, true, true, "저장 실패", "이어서 녹음", "저장 다시 시도"],
  ] as const)(
    "%s/%s/%s 상태의 제어와 경과 시간",
    (paused, saving, saveFailed, label, toggle, end) => {
      render(
        <ThemeProvider theme={theme}>
          <RecordingMenuCard
            {...props}
            paused={paused}
            saving={saving}
            saveFailed={saveFailed}
          />
        </ThemeProvider>,
      );
      expect(screen.getByText(label, { selector: "span" })).toBeVisible();
      expect(screen.getByLabelText("녹음한 시간")).toHaveTextContent("12:48");
      expect(screen.getByRole("button", { name: toggle })).toHaveProperty(
        "disabled",
        saving,
      );
      expect(screen.getByRole("button", { name: end })).toHaveProperty(
        "disabled",
        saving && !saveFailed,
      );
      fireEvent.click(screen.getByRole("button", { name: "녹음 창 열기" }));
      expect(props.onReturn).toHaveBeenCalled();
    },
  );
});
