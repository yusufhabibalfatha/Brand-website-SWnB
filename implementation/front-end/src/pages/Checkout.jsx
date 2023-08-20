// Module
import { useState } from "react"
import { useCartContext } from "../hooks/useCartContext"
// ==>
const Checkout = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const { cart } = useCartContext()
    const handleCheckout = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(name)
        console.log(phoneNumber)
        console.log(address)
    }

    return (
        <div className="checkout h-max grid grid-cols-1 grid-rows-[min-content_min-content_max-content] gap-4 justify-items-center pb-8">
            <div className="checkout-title h-fit">
                <h1 className="text-xl font-bold">Checkout</h1>
            </div>
            <div className="checkout-product h-fit">
                {cart && cart.map(product => (
                    <div key={product.id} className="bg-slate-700 rounded-lg text-white p-4 m-4">
                        <h1 className="text-lg">{product.name}</h1>
                        <p className="text-sm">$ {product.price}</p>
                        <p className="text-sm">Amount : {product.amount}</p>
                    </div>
                ))}
            </div>
            <div className="checkout-formh-max border border-black p-4 rounded">
                <form 
                onSubmit={(e)=>handleCheckout(e)}
                className="flex flex-col justify-between items-center gap-4"
                >
                    <label htmlFor="email">Email : </label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email"/>
                    <label htmlFor="name">Name : </label>
                    <input value={name} onChange={(e=>setName(e.target.value))} type="text" name="name"/>
                    <label htmlFor="phone-number">Phone Number : </label>
                    <input value={phoneNumber} onChange={(e=>setphoneNumber(e.target.value))} type="text" name="phone_number"/>
                    <label htmlFor="address">Address : </label>
                    <input value={address} onChange={(e)=>setAddress(e.target.value)} type="text" name="address"/>
                    <button>Checkout</button>
                </form>
            </div>
        </div>
    )
}
 
export default Checkout;