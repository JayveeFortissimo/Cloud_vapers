import { useEffect } from "react";
import { type RootState } from "@/store/store";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Toaster } from "sonner";

import Navbar from "@/components/navigation/NavBar";
import Container from "@/components/common/Container";
import { useDispatch, useSelector } from "react-redux";
import api from "@/lib/api";
import { fetchUsers, setToken, setAutoCheck } from "@/store/auth/UserAuthentication";

const Outlets = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.userAuthenticationSlice.user);
  const accessToken = useSelector((state: RootState) => state.userAuthenticationSlice.accesstoken);
  const params = useLocation();
  const notAllowedNavars = ["/login", "/register", "/searchpage", "/admin"];

  useEffect(() => {
    const initializeAuth = async () => {
      if (isAuthenticated !== null) return;

      if (accessToken) {
        await dispatch(fetchUsers() as any);
        return;
      }

      try {
        const response = await api.post("api/refresh_token");
        const newAccessToken = response?.data?.access_token;
        if (!newAccessToken) return;

        dispatch(setToken(newAccessToken));
        await dispatch(fetchUsers() as any);
      } catch (error: any) {
        console.log(error?.message);
      }finally{
        dispatch(setAutoCheck(false));
      }
    };

    initializeAuth();
  }, [isAuthenticated, accessToken, dispatch]);

  return (
    <div>
      <Container>
        {notAllowedNavars.includes(params.pathname) ? undefined : <Navbar />}
        <Outlet />
      </Container>
      <Toaster />
    </div>
  );
};

export default Outlets;
