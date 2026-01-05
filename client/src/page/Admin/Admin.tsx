import { useState, type JSX } from "react";
import {
  LayoutDashboard,
  PackageSearch,
  User,
  ClipboardPlus,
  Mail,
  Calendar,
  Settings,
  ShoppingBag,
} from "lucide-react";

import Dashboard from "./tabs/Dashboard";
import Orders from "./tabs/Orders";
import Products from "./tabs/Products";
import Setting from "./tabs/Settings";
import Users from "./tabs/Users";
import Reports from "./tabs/Reports";
import Message from "./tabs/Message";
import Calendars from "./tabs/Calendar";
import api from "@/lib/api";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/auth/UserAuthentication";
import { useNavigate } from "react-router-dom";
import type { RootState } from "@/store/store";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.userAuthenticationSlice.accesstoken);

  const asideContent: { name: string; icon: JSX.Element }[] = [
    { name: "Dashboard", icon: <LayoutDashboard /> },
    { name: "Products", icon: <PackageSearch /> },
    { name: "Users", icon: <User /> },
    { name: "Orders", icon: <ShoppingBag /> },
    { name: "Reports", icon: <ClipboardPlus /> },
    { name: "Message", icon: <Mail /> },
    { name: "Calendar", icon: <Calendar /> },
    { name: "Settings", icon: <Settings /> },
  ];

  const [activeItem, setActiveItem] = useState<string>("Dashboard");

  const allTabs: Record<string, JSX.Element> = {
    Dashboard: <Dashboard />,
    Products: <Products />,
    Users: <Users />,
    Orders: <Orders />,
    Settings: <Setting />,
    Reports: <Reports />,
    Message: <Message />,
    Calendar: <Calendars />,
  };

  const logoutUser = async () => {
    try {
      await api.post("api/logout", {}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(logout() as any);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-[auto_1fr]">
      <aside className="bg-white p-4 w-70 hidden md:flex flex-col justify-between">
        <nav className="min-h-[6rem] bordertext-center flex items-center justify-center font-bold text-3xl mb-4 font-oleo">
          CloudVapers
        </nav>

        <section className="flex-1 flex flex-col gap-3">
          {asideContent.map((item, index) => (
            <div
              key={index}
              className={`p-3 mb-2 rounded hover:bg-gray-300 cursor-pointer flex items-center gap-2 ${activeItem === item.name ? "bg-gray-300" : ""}`}
              onClick={() => setActiveItem(item.name)}
            >
              {item.icon} <span className="ml-2">{item.name}</span>
            </div>
          ))}
        </section>

        <footer
          className="p-3 mb-2 bg-white rounded hover:bg-gray-300 cursor-pointer"
          onClick={logoutUser}
        >
          Logout
        </footer>
      </aside>

      <div className="bg-gray-200">{allTabs[activeItem]}</div>
    </section>
  );
};

export default Admin;
