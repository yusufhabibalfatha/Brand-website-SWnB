import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const UserLayout = () => {
  return (
    <div className="relative bg-color-one min-h-screen pt-[6em] font-primary">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserLayout;
