import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import { AuthProvider } from "../providers/AuthContext";
import DashboardLayout from "../layouts/DashboardLayout";
import Materials from "../pages/materials/Materials";
import Dashboard from "@/pages/home/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="materials" element={<Materials />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
