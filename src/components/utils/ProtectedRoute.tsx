import { useDispatch } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { setLastPath } from "../../redux/userSlice";

interface ProtectedRouteProps {
  canActivate: boolean;
  redirectPath: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  canActivate,
  redirectPath,
}) => {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  if (!canActivate) {
    dispatch(setLastPath(location.pathname));
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
