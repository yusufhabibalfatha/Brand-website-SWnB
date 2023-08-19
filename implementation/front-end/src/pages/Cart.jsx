// Package
import { Link } from "react-router-dom"
// Module
import { useEffect } from "react";
import CartItem from "../components/CartItem";
import { useCartContext } from "../hooks/useCartContext";
// ==>
const Cart = () => {
    const { cart, totalPayment, total } = useCartContext()
    useEffect(()=>{
        totalPayment()
    }, [totalPayment])

    return (
        <div className="cart h-screen flex flex-col items-center gap-4">
            <div className="cart-title">
                <h1 className="text-3xl font-bold">Your cart</h1>
            </div>
            <div className="cart-list">
                {cart && cart.map(product => <CartItem product={product} key={product.id}/>)}
            </div>
            <div className="cart-total w-1/2 flex justify-evenly h-fit">
                <p>$ {total}</p>
                <Link to="/checkout">Next</Link>
            </div>
        </div>
    )
}
 
export default Cart;