import { useSentryRoutes } from "@provider/sentry";
import { routes } from "@routes/routes";
import useDesktopRecording from "@hooks/domain/recording/useDesktopRecording";

function DesktopRecordingLifecycle() {
  useDesktopRecording();
  return null;
}

const App = () => {
  const content = useSentryRoutes(routes);
  return (
    <>
      {window.knotDesktop && <DesktopRecordingLifecycle />}
      {content}
    </>
  );
};

export default App;
