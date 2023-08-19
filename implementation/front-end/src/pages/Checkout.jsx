// Module
import { useCartContext } from "../hooks/useCartContext"
// ==>
const Checkout = () => {
    const { cart } = useCartContext()
    console.log('==> ', cart)

    return (
        <div className="checkout h-screen bg-red-200 grid grid-rows-2">
            <div className="checkout-title col-span-2">
                <h1 className="text-xl font-bold">Checkout</h1>
            </div>
            <div className="checkout-product bg-slate-200 w-1/3">
                {cart && cart.map(product => (
                    <div className="border border-black p-4">
                        <h1>{product.name}</h1>
                        <p>$ {product.price}</p>
                        <p>Amount : {product.amount}</p>
                    </div>
                ))}
            </div>
            <div className="checkout-form bg-blue-200">
                <form>
                    <div className="form-email">
                        <label htmlFor="email">Email : </label>
                        <input type="email" />
                    </div>
                    <div className="form-name">
                        <label htmlFor="name">Name : </label>
                        <input type="text" />
                    </div>
                    <div className="form-phone-number">
                        <label htmlFor="phone-number">Phone Number : </label>
                        <input type="text" />
                    </div>
                    <div className="form-address">
                        <label htmlFor="adress">Address : </label>
                        <input type="text" />
                    </div>
                </form>
            </div>
        </div>
    )
}
 
export default Checkout;