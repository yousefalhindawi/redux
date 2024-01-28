import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../utils/authContext/authContext";

const RequireAuth = () => {
  const auth = useAuth();
  console.log("RequireAuth", auth.user);
  const location = useLocation();
  if (!auth.user) {
    return (
      <Navigate to="/login" state={{ from: location?.pathname }} replace />
    );
  }
  return <Outlet />;
};

export default RequireAuth;
