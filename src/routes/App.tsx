import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import { AuthProvider } from "../providers/AuthContext";
import DashboardLayout from "../layouts/DashboardLayout";
import Materials from "../pages/materials/Materials";
import Dashboard from "@/pages/home/Dashboard";
import PrivateRoute from "./PrivateRoute"; // Import PrivateRoute

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          {/* Wrap Dashboard and Materials with PrivateRoute */}
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
