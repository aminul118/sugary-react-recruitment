import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import { AuthProvider } from "../providers/AuthContext";
import DashboardLayout from "../layouts/DashboardLayout";
import Materials from "../pages/materials/Materials";
import Dashboard from "@/pages/home/Dashboard";
import PrivateRoute from "./PrivateRoute";
import LogOut from "@/pages/auth/LogOut";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/logout" element={<LogOut />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardLayout />
              </PrivateRoute>
            }
          >
            <Route
              index
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="materials"
              element={
                <PrivateRoute>
                  <Materials />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
