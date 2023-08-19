// Package
import Marquee from "react-fast-marquee";
// ==>
const TextMarquee = () => {
    return (
        <Marquee className="my-[2em] bg-[#212121] text-white  uppercase italic py-1">
            <p className="mx-4">Elevate Your Wardrobe: Welcome to SWB</p>
            <p className="mx-4">Discover Your Signature Style</p>
            <p className="mx-4">Elevate Your Wardrobe: Welcome to SWB</p>
            <p className="mx-4">Discover Your Signature Style</p>
        </Marquee>
    );
}
 
export default TextMarquee;