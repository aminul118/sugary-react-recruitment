import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./providers/AuthContex";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
