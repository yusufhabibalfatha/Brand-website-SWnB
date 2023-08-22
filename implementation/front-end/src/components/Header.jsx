// Module
import bg_black from "../assets/bg-black.jpg";
// ==>
const Header = () => {
  return (
    <header className="grid h-auto grid-cols-1 place-items-center gap-4 md:mx-auto md:h-96 md:w-3/4 md:grid-cols-2 md:justify-items-start lg:mt-4">
      <div className="mx-10 w-10/12 text-center md:mx-0 md:h-full md:text-left md:text-3xl lg:w-2/3 lg:text-[2em]">
        <h1 className="text-3xl font-bold italic text-color-two lg:text-[1.3em]">
          Black & White Essence:
        </h1>
        <p className="mt-2 lg:w-2/3">
          Embrace Minimalist Fashion with Our Monochrome Collection
        </p>
      </div>
      <div
        className="mx-auto h-96 w-10/12 rounded bg-cover bg-center md:order-first md:row-span-2 md:h-full md:w-full"
        style={{ backgroundImage: `url(${bg_black})` }}
      ></div>
      <div className="flex w-10/12 justify-end md:self-end">
        <button className="m-1 w-2/3 rounded border border-black py-2">
          Black
        </button>
        <button className="m-1 w-2/3 rounded border border-black py-2">
          White
        </button>
      </div>
    </header>
  );
};

export default Header;
