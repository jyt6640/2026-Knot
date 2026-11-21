import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { theme, GlobalStyle } from "@provider/themeProvider";
import DesktopHome from "./index";
createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <DesktopHome />
  </ThemeProvider>,
);
