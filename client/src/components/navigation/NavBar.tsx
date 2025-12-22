import { Search, CircleUserRound } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenus";

import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";
import { NavigationSheet } from "./NavigationSheet";
import { ShineBorder } from "../ui/ShineBorder";
import CartSheet from "./CartSheet";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/store/store";
import api from "@/lib/api";
import { logout } from "@/store/auth/UserAuthentication";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: RootState) => state.userAuthenticationSlice.user
  );
  const token = useSelector(
    (state: RootState) => state.userAuthenticationSlice.accesstoken
  );

  const dispatch = useDispatch();

  const logoutUser = async () => {
    try {
      await api.post(
        "api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(logout() as any);
      
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="h-16 bg-[#111820] sticky top-0 z-50 text-white">
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Logo />
          <NavMenu className="hidden md:block" />
        </div>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuItem className="hover:cursor-pointer" asChild>
                  <div onClick={() => navigate("/user")}>My Profile</div>
                </DropdownMenuItem>

                <DropdownMenuItem className="hover:cursor-pointer" asChild>
                  <div>Settings</div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="hover:cursor-pointer text-logout"
                  onClick={() => {
                    logoutUser();
                  }}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <CircleUserRound
              className="hidden md:block cursor-pointer"
              size={35}
              onClick={() => navigate("/login")}
            />
          )}

          <Search
            className="cursor-pointer"
            onClick={() => navigate("/searchpage")}
            size={35}
          />
          <CartSheet />
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
