import RecordingMenu from "@widgets/recording/RecordingMenu";
import { useSentryRoutes } from "@provider/sentry";
import { routes } from "@routes/routes";

const App = () => {
  const content = useSentryRoutes(routes);
  return (
    <>
      {window.knotDesktop && <RecordingMenu />}
      {content}
    </>
  );
};

export default App;
