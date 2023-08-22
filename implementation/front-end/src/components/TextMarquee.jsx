// Package
import Marquee from "react-fast-marquee";
// ==>
const TextMarquee = () => {
  return (
    <Marquee className="bg-color-two my-[2em] py-1  uppercase italic text-white md:border md:border-black md:bg-transparent md:text-black">
      <p className="mx-4">Elevate Your Wardrobe: Welcome to SW&B</p>
      <p className="mx-4">Discover Your Signature Style</p>
      <p className="mx-4">Elevate Your Wardrobe: Welcome to SW&B</p>
      <p className="mx-4">Discover Your Signature Style</p>
    </Marquee>
  );
};

export default TextMarquee;
