import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import RecordingMenuCard from "./ui/RecordingMenuCard";

const meta = {
  component: RecordingMenuCard,
  title: "Recording/RecordingMenu",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/i3I7Ak0XIqsbIf9cNreBeD/knot?node-id=8004-48356",
    },
  },
  args: {
    nickname: "유월",
    elapsedTime: "12:48",
    analyser: null,
    paused: false,
    saving: false,
    saveFailed: false,
    onToggle: fn(),
    onEnd: fn(),
    onReturn: fn(),
  },
} satisfies Meta<typeof RecordingMenuCard>;
export default meta;
type Story = StoryObj<typeof meta>;

/** 녹음 중 주변이 조용할 때의 메뉴 막대 팝오버. */
export const Default: Story = {};
export const Paused: Story = { args: { paused: true } };
export const Saving: Story = { args: { saving: true } };
export const SaveFailed: Story = { args: { saving: true, saveFailed: true } };
