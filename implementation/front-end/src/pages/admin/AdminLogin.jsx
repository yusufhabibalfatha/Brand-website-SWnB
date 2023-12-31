// Package & Module
import { useEffect } from "react";
import { useAdminContext } from "../../hooks/useAdminContext";
import { Navigate } from "react-router-dom";
// ==>
const AdminLogin = () => {
  const { dispatch } = useAdminContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const admin = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const url = "http://localhost:4000/admin/login";
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(admin),
    });
    const data = await res.json();
    if (!res.ok) {
      alert(`${data.msg}`);
    } else {
      localStorage.setItem("admin", JSON.stringify(data.admin));
      dispatch({ type: "LOGIN", payload: data.admin });
      alert("Login success.");
      window.location = "/admin/control";
    }
  };
  return (
    <div className="m-4 border border-black p-4 md:mx-auto md:w-1/3 lg:w-1/4">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Login Admin</h1>
        <p className="text-xs">
          Sign-up for account admin directly in database!
        </p>
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        autoComplete="off"
        className="mx-auto my-4 flex flex-col p-4"
      >
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          name="email"
          className="border-b-[1px] border-black bg-transparent"
        />
        <label className="mt-8" htmlFor="password">
          Password :{" "}
        </label>
        <input
          type="password"
          className="border-b-[1px] border-black bg-transparent"
          name="password"
        />
        <button className="mt-16 w-1/2 self-center rounded bg-color-two py-2 text-white">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
