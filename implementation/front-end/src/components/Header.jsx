// Module
import bgBlack from '../assets/bg-black.jpg'
// ==>
const Header = () => {
    return (
        <header className="h-auto grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 md:w-3/4 md:mx-auto md:justify-items-start">
            <div className="header-text text-center mx-10 w-10/12 md:mx-0 md:h-full md:text-3xl md:text-left">
                <h1 className='font-bold italic text-3xl'>Black & White Essence:</h1>
                <p>Embrace Minimalist Fashion with Our Monochrome Collection</p>
            </div>
            <div 
                className="header-image w-10/12 mx-auto h-80 bg-cover bg-center rounded md:order-first md:row-span-2 md:h-full md:w-full"
                style={{ backgroundImage: `url(${bgBlack})`}}
            >
            </div>
            <div className="w-10/12 flex justify-end md:self-end">
                <button className="w-2/3 py-2 text-white bg-[#212121] rounded">Black</button>
                <button className="w-2/3 py-2 ml-4 text-white bg-[#212121] rounded">White</button>
            </div>
        </header>
    );
}
 
export default Header;