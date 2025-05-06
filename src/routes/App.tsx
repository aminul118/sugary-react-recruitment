import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import { AuthProvider } from "../providers/AuthContex";
import DashboardLayout from "../layouts/DashboardLayout";
import Materials from "../pages/materials/Materials";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="materials" element={<Materials />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
