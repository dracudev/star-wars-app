import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

interface AuthParams {
  email: string;
  password: string;
}

interface UseAuthReturn {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  error: string | null;
  loading: boolean;
  handleAuth: (
    authAction: (params: AuthParams) => any,
    values: AuthParams,
  ) => Promise<void>;
}

const useAuth = (): UseAuthReturn => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAuth = async (
    authAction: (params: AuthParams) => any,
    values: AuthParams,
  ) => {
    setLoading(true);
    setError(null);
    try {
      await dispatch(authAction(values)).unwrap();
    } catch (err) {
      console.error("Auth Error:", err);
      if (
        err instanceof Error ||
        (err && typeof err === "object" && "message" in err)
      ) {
        const errorMessage = (err as Error).message.replace(/^Firebase: /, "");
        setError(errorMessage);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    handleAuth,
  };
};

export default useAuth;
