
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthContex";

const Login = () => {
  const [username, setUsername] = useState("react@test.com");
  const [password, setPassword] = useState("playful009");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(username, password);
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
