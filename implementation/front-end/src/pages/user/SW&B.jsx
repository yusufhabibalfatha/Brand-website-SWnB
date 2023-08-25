// Package
import { useEffect, useState } from "react";
// Module
import Header from "../../components/Header";
import TextMarquee from "../../components/TextMarquee";
import Products from "../../components/Products";
// ==>
const SWnB = () => {
  const [products, setProducts] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const fetchAllProducts = async () => {
      const url = "http://localhost:4000/products";
      const res = await fetch(url);
      const data = await res.json();
      if (!res.ok) setError(data.error);
      setProducts(data.result);
    };
    fetchAllProducts();
  }, []);

  return (
    <div>
      <Header />
      <TextMarquee />
      <Products products={products} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default SWnB;
