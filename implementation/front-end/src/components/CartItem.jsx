// Package
import { useRef } from "react"
// Module
import { useCartContext } from "../hooks/useCartContext"
// ==>
const CartItem = ({ product }) => {
    const { addProduct, removeProduct, updateAmountProduct } = useCartContext()
    const amountField = useRef()
    
    const handleClick = (e, product) => {
        e.preventDefault()
        let amount = Number(amountField.current.value)
        if( e.target.innerHTML == "+"){
            amountField.current.value = amount + 1
            addProduct(product)
        }else{
            amountField.current.value = amount - 1
            removeProduct(product)
        }
    }

    return (
        <div className="cart-item border border-black p-4 my-4">
            <div className="product-body">
                <h1>{product.name}</h1>
                <p className="text-sm">$ {product.price}</p>
            </div>
            <div className="product-navigation text-center w-1/2 bg-blue-200 flex mx-auto justify-between">
                <button
                    className="bg-black text-white w-1/2"
                    onClick={(e)=>handleClick(e, product)}
                >-</button>
                <input 
                    type="number" 
                    value={ product.amount }
                    onChange={(e)=>updateAmountProduct(product.id, Number(e.target.value))}
                    className="w-1/2 text-center"
                    ref={amountField}
                />
                <button
                    className="bg-black text-white w-1/2"
                    onClick={(e)=>handleClick(e, product)}
                >+</button>
            </div>
        </div>
    )
}
 
export default CartItem;