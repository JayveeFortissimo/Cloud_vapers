import { useEffect } from "react";
import { type RootState } from "@/store/store";
import { Outlet } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "sonner";

import Navbar from "@/components/navigation/NavBar";
import Container from "@/components/common/Container";
import { useDispatch, useSelector } from "react-redux";
import api from "@/lib/api";
import {
  fetchUsers,
  setToken,
  setAutoCheck,
} from "@/store/auth/UserAuthentication";

const Outlets = () => {
  const dispatch = useDispatch();
  const { accesstoken, user } = useSelector(
    (state: RootState) => state.userAuthenticationSlice
  );
  const params = useLocation();
  const router = useNavigate();
  const notAllowedNavars = ["/login", "/register", "/searchpage", "/admin"];

  useEffect(() => {
    const initializeAuth = async () => {
      if (user !== null) return;

      if (accesstoken) {
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
      } finally {
        dispatch(setAutoCheck(false));
      }
    };

    initializeAuth();
  }, [user, accesstoken, dispatch]);

  useEffect(() => {
    if (user?.isAdmin) {
      return router("/admin");
    }else if (params.pathname === "/admin" && !user?.isAdmin) {
      return router("/");
    }
  }, [params.pathname, user]);

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
