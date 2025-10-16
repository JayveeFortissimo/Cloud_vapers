import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";
import { NavigationSheet } from "./NavigationSheet";
import { ShineBorder } from "../ui/ShineBorder";
import { Search, CircleUserRound } from "lucide-react";
import CartSheet from "./CartSheet";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="h-16 bg-[#111820] sticky top-0 z-50 text-white">
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Logo />
          <NavMenu className="hidden md:block" />
        </div>

        <div className="flex items-center gap-3">
          <CircleUserRound
            className="hidden md:block cursor-pointer"
            onClick={() => navigate("/login")}
          />

          <Search
            className="cursor-pointer"
            onClick={() => navigate("/searchpage")}
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
