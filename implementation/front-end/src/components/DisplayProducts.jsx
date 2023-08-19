// Moduel
import testImg from '../assets/white/short-white.jpg'
import { useCartContext } from '../hooks/useCartContext'
// ==>
const DisplayProducts = ({ product }) => {
    const { cart, addProduct } = useCartContext()
    const addToCart = (e, product) => {
        e.preventDefault()
        addProduct(product)
    }

    return (
        <div className="border border-black w-5/6 flex flex-col justify-between items-center py-4">
            {/* <div className="product-img w-4/5">
                <img src={`${product.src_image}`} alt="short-white" />
            </div> */}
            <div className="product-body  w-4/5 leading-5 py-3">
                <p>{product.name}</p>
                <p className='text-sm'>$ {product.price}</p>
            </div>
            <div className="product-btn w-4/5 flex justify-between">
                <button>Detail</button>
                <button
                    onClick={(e) => addToCart(e, product)}
                    >Add to cart</button>
            </div>
        </div>
    );
}
 
export default DisplayProducts;