// Module
import Header from "../components/Header"
import TextMarquee from "../components/TextMarquee";
import Products from "../components/Products";
// ==>
const Home = () => {

    return (
        <div className="home">
            <Header />
            <TextMarquee />
            <Products />
        </div>
    );
}
 
export default Home;