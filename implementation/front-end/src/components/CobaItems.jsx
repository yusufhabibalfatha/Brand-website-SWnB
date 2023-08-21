import { useEffect, useState } from "react";

// ==>
const CobaItem = ({ transaction_id }) => {
    const [orderItem, setOrderItem] = useState()
    useEffect(()=>{
        const fetchOrderItem = async (transaction_id) => {
            const res = await fetch('http://localhost:4000/checkout/transaction/'+transaction_id)
            const data = await res.json()
            setOrderItem(data.rows)
        }
        fetchOrderItem(transaction_id)
    },[])

    return (
        <div className="border border-black text-center text-sm p-4">
            <h1 className="font-bold text-left mb-4">Order Items : </h1>
            {orderItem && orderItem.map((product, index) => (
                <div className="flex justify-between">
                  <h1>{index+1}. {product.name}</h1>  
                  <p>x{product.quantity}</p>
                </div>
            ))}
        </div>
    );
}
 
export default CobaItem;