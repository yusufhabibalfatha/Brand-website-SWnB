// Packgae
import { useContext } from "react";
// Module
import { AdminContext } from "../context/AdminContext";
// ==>
export const useAdminContext = () => {
  const context = useContext(AdminContext);
  return context;
};
