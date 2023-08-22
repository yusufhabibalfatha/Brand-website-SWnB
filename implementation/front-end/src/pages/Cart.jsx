// Package
import { Link } from "react-router-dom";
// Module
import { useEffect } from "react";
import CartProduct from "../components/CartProduct";
import { useCartContext } from "../hooks/useCartContext";
// ==>
const Cart = () => {
  const { cart, countTotalPayment, totalPayment } = useCartContext();
  useEffect(() => {
    countTotalPayment();
  }, [countTotalPayment]);

  return (
    <div className="flex h-full flex-col items-center gap-4">
      <div>
        <h1 className="text-3xl font-bold">Your cart</h1>
      </div>
      <div>
        {cart &&
          cart.map((product, index) => (
            <CartProduct product={product} index={index} key={product.id} />
          ))}
      </div>
      <div className="flex h-24 w-4/5 items-center justify-evenly text-center">
        <p className="font-bold">Rp. {totalPayment}.000</p>
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  );
};

export default Cart;
