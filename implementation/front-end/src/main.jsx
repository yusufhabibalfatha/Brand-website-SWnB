import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartContextProvider } from "./context/CartContext.jsx";
import { AdminContextProvider } from "./context/AdminContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContextProvider>
      <AdminContextProvider>
        <App />
      </AdminContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
);
