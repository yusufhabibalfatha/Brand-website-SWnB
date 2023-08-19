import DisplayProducts from "./DisplayProducts";

// ==>
const Products = ({ products }) => {
    console.log('==> ', products)

    return (
        <div className="products mt-[3em] w-4/5 mx-auto h-96">
            <div className="title my-[1em] flex justify-between">
                <p>Products</p>
                <button>See All</button>
            </div>
            <div className="display-products grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-4">
                {products && products.map(product => <DisplayProducts product={product} key={product.id}/>) }
            </div>
        </div>
    );
}
 
export default Products;