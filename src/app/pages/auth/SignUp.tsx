import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../../firebase/authActions";
import { AppDispatch } from "../../../redux/store";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setLoading(true);
    setError(null);
    try {
      await dispatch(signUpUser({ email, password })).unwrap();
    } catch (err) {
      console.error("Sign Up Error:", err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0c0c0c]">
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
        onClick={handleSignUp}
        className="bg-blue-500 p-2 text-white"
        disabled={loading}
      >
        {loading ? "Signing Up..." : "Sign Up"}
      </button>
    </div>
  );
};

export default SignUp;
