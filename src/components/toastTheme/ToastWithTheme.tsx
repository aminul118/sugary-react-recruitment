import { ToastContainer } from "react-toastify";
import { useTheme } from "@/providers/ThemeProvider";

const ToastWithTheme = () => {
  const { theme } = useTheme();

  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme === "dark" ? "dark" : "light"}
    />
  );
};

export default ToastWithTheme;
