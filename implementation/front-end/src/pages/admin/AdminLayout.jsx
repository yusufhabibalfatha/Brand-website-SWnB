// Package & Module
import { Outlet } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar";
import { useAdminContext } from "../../hooks/useAdminContext";
// =>
const AdminLayout = () => {
  const { state } = useAdminContext();
  return (
    <div className="relative bg-color-one pt-[6em] font-primary">
      {state.admin && <AdminNavbar />}
      <Outlet />
    </div>
  );
};

export default AdminLayout;
