import React from "react";
import { loginUser } from "../../../firebase/authActions";
import useAuth from "../../../hooks/useAuth";

const Login: React.FC = () => {
  const { email, setEmail, password, setPassword, error, loading, handleAuth } =
    useAuth();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0c0c0c] p-4">
      <h1 className="mb-4 text-2xl text-white">Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 p-2 text-black"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 p-2 text-black"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={() => handleAuth(loginUser)}
        className="bg-blue-500 p-2 text-white"
        disabled={loading}
      >
        {loading ? "Logging In..." : "Login"}
      </button>
    </div>
  );
};

export default Login;
