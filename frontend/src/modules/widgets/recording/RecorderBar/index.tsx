import { useRecorderBar } from "./model/useRecorderBar";
import RecorderBarView from "./RecorderBarView";

export default function RecorderBar() {
  return <RecorderBarView {...useRecorderBar()} />;
}
