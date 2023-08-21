// Module
import { useRef, useState } from "react"
import { useCartContext } from "../hooks/useCartContext"
// ==>
const Checkout = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone_number, setphoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [message, setMessage] = useState('')
    const { total, cart } = useCartContext()
    const ref = useRef()

    const handleCheckout = async (e) => {
        e.preventDefault()
        // let payload = new FormData(e.target)
        
        // const items = cart.map(product => {
        //         const product_id = product.id
        //         const quantity = product.amount
        //         return { product_id, quantity }
        // })
        // payload.append('items', JSON.stringify(items))
        // payload.append('amount', total)
        // fetch('http://localhost:4000/checkout', {
        //     method: 'POST',
        //     body: payload
        // })
        //     .then(res => res.json())
        //     .then(data => console.log('response => ', data))
        //     .catch(err => console.log('EEROR => ', err))
        window.location = '/coba'
    }

    return (
        <div className="checkout h-max grid grid-cols-1 grid-rows-[min-content_min-content_max-content] gap-4 justify-items-center pb-8">
            <div className="checkout-title h-fit">
                <h1 className="text-xl font-bold">Checkout</h1>
            </div>
            <div className="checkout-product h-fit border border-black m-4 text-sm">
                {cart && cart.map((product, index) => (
                    <div key={product.id} className="p-4 border-b-[1px] border-black">
                        <h1 className="">{index+1}. {product.name}</h1>
                        <p className="">$ {product.price}</p>
                        <p className="">Amount : {product.amount}</p>
                    </div>
                ))}
                <p className="p-4"><b>Total payment :</b> ${total}</p>
            </div>
            {/* <div > */}
                <form 
                ref={ref}
                onSubmit={(e)=>handleCheckout(e)}
                className="h-max border border-black w-[90%] p-4 flex flex-col gap-4 text-sm"
                // className="flex flex-col justify-between items-center gap-4"
                >
                    <label htmlFor="message">Message : </label>
                    <textarea value={message} onChange={(e)=>setMessage(e.target.value)} name="message" id="message" cols="5" rows="2"></textarea>
                    <label htmlFor="email">Email : </label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email"/>
                    <label htmlFor="name">Name : </label>
                    <input value={name} onChange={(e=>setName(e.target.value))} type="text" name="name"/>
                    <label htmlFor="phone-number">Phone Number : </label>
                    <input value={phone_number} onChange={(e=>setphoneNumber(e.target.value))} type="text" name="phone_number"/>
                    <label htmlFor="address">Address : </label>
                    <input value={address} onChange={(e)=>setAddress(e.target.value)} type="text" name="address"/>
                    <label htmlFor="image">Receipt : </label>
                    <input type="file" name="image" accept="image/jpeg, image/png, image/jpeg"/>
                    <button>Checkout</button>
                </form>
            {/* </div> */}
        </div>
    )
}
 
export default Checkout;