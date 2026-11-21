import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Library from "./Library";
const meta = {
  title: "Desktop/이 Mac의 녹음",
  component: Library,
  args: { recordings: [], select: () => {}, remove: () => {} },
} satisfies Meta<typeof Library>;
export default meta;
/** 첫 로그인 또는 마지막 원본을 삭제한 뒤의 목록. */
export const Default: StoryObj<typeof meta> = {};
/** 앱이 중단되면 디스크에 커밋된 구간을 다시 재생할 수 있다. */
export const Recovered: StoryObj<typeof meta> = {
  args: {
    recordings: [
      {
        id: 1,
        created: 1795219200000,
        bytes: 320000,
        recovered: true,
        src: "",
      },
    ],
  },
};
