import Product from "./Product";
// ==>
const Products = ({ products }) => {
  return (
    <div className="mx-auto mt-[3em] pb-32 min-h-96 w-4/5">
      <div className="my-[1em] flex justify-between">
        <p>Products</p>
        <button>See All</button>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products &&
          products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
};

export default Products;
