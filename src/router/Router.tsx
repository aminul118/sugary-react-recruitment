import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [{}],
  },
  {
    path: "/",
    element: <Login />,
  },
]);

export default router;
