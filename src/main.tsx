import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AuthProvider } from "./providers/AuthContext";
import App from "./routes/App";
import { ThemeProvider } from "./providers/ThemeProvider";
import ToastWithTheme from "./components/toastTheme/ToastWithTheme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <App />
        <ToastWithTheme />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
