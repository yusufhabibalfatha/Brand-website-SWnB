import { useEffect, useState } from "react";

// ==>
const Coba = () => {
    const [data, setData] = useState()
    const [srcImage, setSrcImage] = useState()
    useEffect(() => {
        const tryingFetch = async () => {
            const res = await fetch('http://localhost:4000/checkout/transaction')
            const data = await res.json()
            console.log('data .... ', data.rows[0])
            setData(data.rows[0])
            let src = 'http://localhost:4000/receipt/' + data.rows[0].receipt
            setSrcImage(src)
        }
        tryingFetch()
    }, [])

    return (
        <div>
            {data && (
                <>
                    <i>{data.ID}</i>
                    <p>Name : {data.name}</p>
                    <p>Email : {data.email}</p>
                    <p>Phone : {data.phone_number}</p>
                    <p>Adress : {data.address}</p>
                    <p>Message : <b>{data.message}</b></p>
                    {srcImage && <img src={srcImage} alt="receipt" />}
                </>
            )}
        </div>
    );
}
 
export default Coba;