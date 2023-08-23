// Package
import { createContext, useEffect, useState } from "react";
// Init
export const AdminContext = createContext();
// ==>
export const AdminContextProvider = ({ children }) => {
  const [admin, setAdmin] = useState();
  const addAdmin = (data) => {
    setAdmin(data);
  };
  useEffect(() => {
    const admin = localStorage.getItem("admin");
    if (admin) {
      const data = JSON.parse(admin);
      setAdmin(data);
    }
  }, []);
  return (
    <AdminContext.Provider value={{ admin, addAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};
