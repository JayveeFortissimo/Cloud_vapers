import { Outlet } from "react-router-dom";
import Navbar from "@/components/navigation/NavBar";
import { useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Container from "./components/common/Container";

const Outlets = () => {
  const params = useLocation();

  const notAllowedNavars = ["/login", "/register", "/searchpage", "/admin"];

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
