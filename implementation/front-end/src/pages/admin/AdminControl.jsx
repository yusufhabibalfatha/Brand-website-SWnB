// Package
import { useEffect } from "react";
// Module
import { useAdminContext } from "../../hooks/useAdminContext";
// ==>
const AdminControl = () => {
  const { state, dispatch } = useAdminContext();
  const seeCheckout = async () => {
    try {
      const token = state.admin.token;
      const url = "http://localhost:4000/admin/";
      const res = await fetch(url, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        alert("you are not admin!");
        dispatch({ type: "LOGOUT", payload: false });
        window.location = "/admin";
      }
      window.location = "/admin/checkout-list";
    } catch (err) {
      alert(`error = ${err}`);
    }
  };
  return (
    <div>
      <div className="text-center">
        <h1>This is admin page</h1>
        <button
          onClick={(e) => {
            {
              state.admin && seeCheckout();
            }
            {
              !state.admin &&
                alert("Cannot see checkout list! You are not admin");
            }
          }}
          className="mt-2 border border-black px-4 py-2"
        >
          See checkout customer
        </button>
      </div>
    </div>
  );
};

export default AdminControl;
