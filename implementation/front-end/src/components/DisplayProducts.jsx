// Moduel
import testImg from '../assets/white/short-white.jpg'
// ==>
const DisplayProducts = ({ product }) => {
    const addProduct = (e, product) => {
        e.preventDefault()
        console.log('=>> ', product)
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
                    onClick={(e) => addProduct(e, product)}
                    >Add to cart</button>
            </div>
        </div>
    );
}
 
export default DisplayProducts;