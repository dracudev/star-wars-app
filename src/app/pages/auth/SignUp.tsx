import React from "react";
import { signUpUser } from "../../../firebase/authActions";
import useAuth from "../../../hooks/useAuth";

const SignUp: React.FC = () => {
  const { email, setEmail, password, setPassword, error, loading, handleAuth } =
    useAuth();

  return (
    <div className="flex flex-col items-center justify-center bg-[#0c0c0c]">
      <h1 className="mb-4 text-2xl text-white">Sign Up</h1>
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
        onClick={() => handleAuth(signUpUser)}
        className="bg-blue-500 p-2 text-white"
        disabled={loading}
      >
        {loading ? "Signing Up..." : "Sign Up"}
      </button>
    </div>
  );
};

export default SignUp;
