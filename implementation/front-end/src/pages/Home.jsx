// Package
import { useEffect, useState } from "react"
// Module
import Header from "../components/Header"
import TextMarquee from "../components/TextMarquee";
import Products from "../components/Products";
// ==>
const Home = () => {
    const [products, setProducts] = useState()
    useEffect(() => {
        const fetchAllProducts = async () => {
            const res = await fetch('http://localhost:4000/products')
            const data = await res.json()
            setProducts(data.result)
        }
        fetchAllProducts()
    }, [])

    return (
        <div className="home">
            <Header />
            <TextMarquee />
            <Products products={products} />
        </div>
    );
}
 
export default Home;