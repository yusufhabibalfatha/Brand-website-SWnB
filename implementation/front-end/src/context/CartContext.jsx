// Package
import { createContext, useState } from "react"
// Init
export const CartContext = createContext()
// ==>
export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const addProduct = (product) => {
        let indexProductInCart = 0
        let sameProduct = cart.filter((productInCart, index) => {
            if(productInCart.id === product.id) {
                indexProductInCart = index
                return productInCart
            }
        })
        if( sameProduct.length < 1 ) {
            product.amount = 1
            setCart(prev => [...prev, product])
        }else{
            sameProduct[0].amount += 1
            setCart(prev => {
                prev[indexProductInCart] = sameProduct[0]
                return prev
            })
        }
        totalPayment()
    }
    const removeProduct = (product) => {
        let indexProductInCart = 0
        let sameProduct = cart.filter((productInCart, index) => {
            if(productInCart.id === product.id) {
                indexProductInCart = index
                return productInCart
            }
        })
        sameProduct[0].amount -= 1
        if( sameProduct[0].amount < 1){
            let newCart = cart.filter(e => e.id !== product.id)
            setCart(newCart)
            sameProduct[0].amount = 1
        }else{
            setCart(prev => {
                prev[indexProductInCart] = sameProduct[0]
                return prev
            })
        }
        totalPayment()
    }
    const updateAmountProduct = (id, amount) => {
        let newData = cart.map(product => {
            if(product.id == id) product.amount = amount
            return product
        })
        setCart(newData)
        console.log('cart => ', cart)
        totalPayment()
    }
    const totalPayment = () => {
        let total = 0
        cart.map(product => {
            total += (product.amount * product.price)
        })
        setTotal(total)
    }

    return (
        <CartContext.Provider value={{ cart, addProduct  }}>
            { children }
        </CartContext.Provider>
    )
}