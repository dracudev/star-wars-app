import React from "react";
import { loginUser } from "../../../firebase/authActions";
import useAuth from "../../../hooks/useAuth";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Button } from "../../../components/shadcn-ui/button";

const Login: React.FC = () => {
  const { email, setEmail, password, setPassword, error, loading, handleAuth } =
    useAuth();
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className="mt-5 flex flex-col items-center justify-center bg-[#0c0c0c] p-4">
      <h1 className="mb-4 text-2xl text-white">Welcome back!!</h1>
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
      {error && <p className="mt-4 text-red-500">{error}</p>}
      <Button
        onClick={() => handleAuth(loginUser)}
        className="text-md mt-2 bg-zinc-800"
        disabled={loading}
      >
        {loading ? "Logging In..." : "Login"}
      </Button>
      {user.isAuthenticated && (
        <p className="text-green-500">Logged in as {user.email}</p>
      )}
    </div>
  );
};

export default Login;
