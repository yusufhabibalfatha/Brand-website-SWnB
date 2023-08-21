// Package
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import CobaItem from "../components/CobaItems";
// ==>
const Coba = () => {
    const [data, setData] = useState()
    useEffect(() => {
        const tryingFetch = async () => {
            const res = await fetch('http://localhost:4000/checkout/transaction')
            const data = await res.json()
            setData(data.rows)
        }
        tryingFetch()
        
    }, [])

    return (
        <div className="p-4 gap-4 flex flex-col">
            {data && data.map((data, index) => 
                <div key={index} className="border border-black p-4 flex flex-col gap-4 relative">
                    <p>Checkout - {index+1}</p>
                    <div className="text-sm">
                        <p>Name : {data.name}</p>
                        <p>Email : {data.email}</p>
                        <p>Phone : {data.phone_number}</p>
                        <p>Adress : {data.address}</p>
                        <p>Message : {data.message}</p>
                    </div>
                    <CobaItem key={index} transaction_id={data.ID}/>
                    <a href={`http://localhost:4000/checkout/receipt/${data.receipt}`} download={data.name+'.jpg'} className="underline text-sm">Download receipt</a>
                </div>
            )}
        </div>
    );
}
 
export default Coba;