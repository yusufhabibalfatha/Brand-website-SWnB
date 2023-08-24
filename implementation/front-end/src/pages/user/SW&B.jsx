// Package
import { useEffect, useState } from "react";
// Module
import Header from "../../components/Header";
import TextMarquee from "../../components/TextMarquee";
import Products from "../../components/Products";
// ==>
const SWnB = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    const getAllProducts = async () => {
      let url = "http://localhost:4000/products";
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data.result);
    };
    getAllProducts();
  }, []);

  return (
    <div>
      <Header />
      <TextMarquee />
      <Products products={products} />
    </div>
  );
};

export default SWnB;
