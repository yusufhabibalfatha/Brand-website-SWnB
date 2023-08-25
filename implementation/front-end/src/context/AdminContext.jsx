// Package
import { createContext, useEffect, useReducer } from "react";
// Init
export const AdminContext = createContext();
export const adminReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { admin: action.payload };
    case "LOGOUT":
      localStorage.removeItem("admin");
      return { admin: false };
    default:
      return state;
  }
};
// ==>
export const AdminContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(adminReducer, {
    admin: false,
  });

  useEffect(() => {
    const admin = localStorage.getItem("admin");
    if (admin) {
      const data = JSON.parse(admin);
      dispatch({ type: "LOGIN", payload: data });
    }
  }, []);
  return (
    <AdminContext.Provider value={{ state, dispatch }}>
      {children}
    </AdminContext.Provider>
  );
};
