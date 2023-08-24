// Package
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Module
import Navbar from "./components/Navbar";
import SWnB from "./pages/SW&B";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Coba from "./pages/Coba";
import PostProduct from "./pages/PostProduct";
import LoginAdmin from "./pages/LoginAdmin";
import Admin from "./pages/Admin";
import User from "./pages/User";
// ==>
function App() {
  return (
    <div className="relative  bg-color-one pt-[6em] font-primary">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SWnB />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/coba" element={<Coba />} />
          <Route path="/post-product" element={<PostProduct />} />
          <Route path="/login" element={<LoginAdmin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user/*" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
