import { useDispatch } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { setLastPath } from "../../redux/userSlice";
import { useEffect } from "react";

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

  useEffect(() => {
    if (!canActivate) {
      dispatch(setLastPath(location.pathname));
    }
  }, [canActivate, dispatch, location.pathname]);

  if (!canActivate) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
