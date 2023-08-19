// Packgae
import { useContext } from "react"
// Module
import { CartContext } from "../context/CartContext"
// ==>
export const useCartContext = () => {
    const context = useContext(CartContext)
    return context
}