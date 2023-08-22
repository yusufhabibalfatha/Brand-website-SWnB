// Package
import { createContext, useState } from "react";
// Init
export const CartContext = createContext();
// ==>
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPayment, setTotalPayment] = useState(0);

  const addProduct = (product) => {
    let indexProductInCart = 0;
    let sameProduct = cart.filter((productInCart, index) => {
      if (productInCart.id === product.id) {
        indexProductInCart = index;
        return productInCart;
      }
    });
    if (sameProduct.length < 1) {
      //   product.amount = 1;
      product.quantity = 1;
      setCart((prev) => [...prev, product]);
    } else {
      //   sameProduct[0].amount += 1;
      sameProduct[0].quantity += 1;
      setCart((prev) => {
        prev[indexProductInCart] = sameProduct[0];
        return prev;
      });
    }
    countTotalPayment();
  };
  const removeProduct = (product) => {
    let indexProductInCart = 0;
    let sameProduct = cart.filter((productInCart, index) => {
      if (productInCart.id === product.id) {
        indexProductInCart = index;
        return productInCart;
      }
    });
    sameProduct[0].quantity -= 1;
    let quantity_zero = sameProduct[0].quantity < 1;
    if (quantity_zero) {
      let newCart = cart.filter((e) => e.id !== product.id);
      setCart(newCart);
      sameProduct[0].quantity = 1;
    } else {
      setCart((prev) => {
        prev[indexProductInCart] = sameProduct[0];
        return prev;
      });
    }
    countTotalPayment();
  };
  const updateQuantityProduct = (id, quantity) => {
    let newData = cart.map((product) => {
      if (product.id == id) product.quantity = quantity;
      return product;
    });
    setCart(newData);
    countTotalPayment();
  };
  const countTotalPayment = () => {
    let total = 0;
    cart.map((product) => {
      total += product.quantity * product.price;
    });
    setTotalPayment(total);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        updateQuantityProduct,
        countTotalPayment,
        totalPayment,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
