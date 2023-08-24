import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const UserLayout = () => {
  return (
    <div className="relative bg-color-one pt-[6em] font-primary">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default UserLayout;
