// Package
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// Module
import UserLayout from "./pages/user/UserLayout";
import SWnB from "./pages/user/SW&B";
import Cart from "./pages/user/Cart";
import Checkout from "./pages/user/Checkout";
// import Coba from "./pages/Coba";
// import PostProduct from "./pages/PostProduct";
// import LoginAdmin from "./pages/LoginAdmin";
// import Admin from "./pages/admin/Admin";
// import User from "./pages/User";
// ==>
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<SWnB />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
      {/* <Route path="/admin">

      </Route>
      <Route path="/coba" element={<Coba />} />
      <Route path="/post-product" element={<PostProduct />} />
      <Route path="/login" element={<LoginAdmin />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/user/*" element={<User />} /> */}
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
