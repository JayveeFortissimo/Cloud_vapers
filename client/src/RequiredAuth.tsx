import { useSelector } from "react-redux";
import { type RootState } from "@/store/store";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequiredAuth = () => {
  const location = useLocation();
  const isAuthenticated = useSelector(
    (state: RootState) => state.userAuthenticationSlice.user
  );
  const accessToken = useSelector(
    (state: RootState) => state.userAuthenticationSlice.accesstoken
  );

  if (accessToken === null || !isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequiredAuth;
