import { useSelector } from "react-redux";
import { type RootState } from "@/store/store";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequiredAuth = () => {
  const location = useLocation();

  const { user , autoCheck} = useSelector((state: RootState) => state.userAuthenticationSlice);

  if (autoCheck) {
    return <div>Loading...</div>;
  } else if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequiredAuth;

