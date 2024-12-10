import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../firebase/authActions";
import { AppDispatch } from "../../../redux/store";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0c0c0c] p-4">
      <h1 className="mb-4 text-2xl text-white">Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 p-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 p-2"
      />
      <button onClick={handleLogin} className="bg-blue-500 p-2 text-white">
        Login
      </button>
    </div>
  );
};

export default Login;
