import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../firebase/authActions";

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
  handleLogout: () => void;
}

const useAuth = (): UseAuthReturn => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const [hasRedirected, setHasRedirected] = useState(false);

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

  // Auth redirection

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  useEffect(() => {
    if (user.isAuthenticated && !hasRedirected) {
      navigate("/starships", { replace: true });
      setHasRedirected(true);
    }
  }, [user.isAuthenticated, navigate, hasRedirected]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    handleAuth,
    handleLogout,
  };
};

export default useAuth;
