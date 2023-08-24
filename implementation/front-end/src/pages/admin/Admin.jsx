// Package
import { useEffect } from "react";
// Module
import { useAdminContext } from "../../hooks/useAdminContext";
import { useState } from "react";
// ==>
const Admin = () => {
  const { admin } = useAdminContext();
  const [isAdmin, setIsAdmin] = useState();
  useEffect(() => {
    const checkAdmin = async () => {
      const url = "http://localhost:4000/admin/";
      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${admin.token}` },
      });
      const data = await res.json();
      setIsAdmin(data);
    };
    {
      admin && checkAdmin();
    }
  }, [admin]);
  return (
    <div>
      <div>
        <h1>This is admin page</h1>
        {isAdmin && <p>{isAdmin.msg}</p>}
      </div>
    </div>
  );
};

export default Admin;
