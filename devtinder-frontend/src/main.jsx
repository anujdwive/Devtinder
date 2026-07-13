import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import theme from "./theme.js";
import CssBaseline from "@mui/material/CssBaseline";
import store from "./store/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <QueryProvider> */}
        <App />
        {/* </QueryProvider> */}
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
