// Moduel
import testImg from "../assets/white/short-white.jpg";
import { useCartContext } from "../hooks/useCartContext";
// ==>
const Product = ({ product }) => {
  const { cart, addProduct } = useCartContext();
  const addToCart = (e, product) => {
    e.preventDefault();
    addProduct(product);
  };

  return (
    <div className="flex w-5/6 flex-col items-center justify-between border border-black py-4">
      <div className="px-4 py-2">
        <img
          className="rounded"
          src={`http://localhost:4000/image/${product.src_image}`}
          alt="product-image"
        />
      </div>
      <div className="w-4/5 py-3 leading-5">
        <p>{product.name}</p>
        <p className="text-sm">Rp. {product.price}</p>
      </div>
      <div className="flex w-4/5 justify-between">
        <button>Detail</button>
        <button onClick={(e) => addToCart(e, product)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
