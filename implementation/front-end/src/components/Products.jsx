import { useEffect } from "react";

// ==>
const Products = () => {
    useEffect(() => {
        const fetchAllProducts = async () => {
            const res = await fetch('http://localhost:4000/products')
            const data = await res.json()
            console.log(data.result)
        }
        fetchAllProducts()
    }, [])

    return (
        <div className="products mt-[6em] w-4/5 mx-auto h-96">
            <div className="title bg-red-200 flex justify-between">
                <p>Products</p>
                <button>See All</button>
            </div>
        </div>
    );
}
 
export default Products;