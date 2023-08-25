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
import AdminLayout from "./pages/admin/AdminLayout";
import AdminControl from "./pages/admin/AdminControl";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminCheckoutList from "./pages/admin/AdminCheckoutList";
import PostProduct from "./pages/admin/PostProduct";
// ==>
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<SWnB />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminLogin />} />
        <Route path="control" element={<AdminControl />} />
        <Route path="checkout-list" element={<AdminCheckoutList />} />
        <Route path="post-product" element={<PostProduct />} />
      </Route>
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
