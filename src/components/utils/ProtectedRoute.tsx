import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  canActivate: boolean;
  redirectPath: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  canActivate,
  redirectPath,
}) => {
  if (!canActivate) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
