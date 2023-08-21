// Package
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// Module
import menuIcon from '../assets/icon/menu.png'
import shoppingCartIcon from '../assets/icon/shopping-cart.png'
import close from '../assets/icon/close.png'
// ==>
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const menuVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { 
            opacity: 1,
            y: 0,
            transition : {
                duration : 0.5,
                staggerChildren: 0.2
            }
        },
        exit: { 
            opacity: 0, 
            y: 50,
            transition : {
                duration : 0.2,
                staggerChildren: 0.2,
                staggerDirection: -1
            }
        }
    }

    return (
        <nav className='bg-[#F5F5F5] flex justify-between items-center border-b-2 h-[12%] px-5 md:px-10 border-black fixed top-0 w-full z-10'>
            <div className="nav-title w-full md:flex md:flex-col md:justify-evenly md:items-center md:h-full">
                <Link to="/"><h1 className='text-sm'>Samuel <br className='md:hidden'></br>Black & White</h1></Link>
                <div className="nav-link max-[767px]:hidden w-1/2 flex justify-between">
                    <Link>Cloth</Link>
                    <Link>Black</Link>
                    <Link>White</Link>
                    <Link>About us</Link>
                    <Link>Contact us</Link>
                </div>
            </div>
            <div className="nav-icon flex justify-around md:justify-end md:w-fit items-end w-1/3">
                <Link to="/cart"><img src={shoppingCartIcon} alt="shopping-cart-icon" className='w-7 h-7' /></Link>
                <img 
                    onClick={() => setShowMenu(!showMenu)}
                    src={menuIcon} 
                    alt="burger-menu-icon" 
                    className='w-7 h-7 md:hidden' 
                />
            </div>
            <AnimatePresence mode='popLayout'>
                {showMenu &&
                <motion.div
                    variants={menuVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="nav-link bg-[#F5F5F5] fixed bottom-0 top-0 left-0 right-0 flex flex-col justify-center items-center"
                >
                    <Link className='navigation-link'><motion.p variants={menuVariants}>Cloth</motion.p></Link>
                    <Link className='navigation-link'><motion.p variants={menuVariants}>Black</motion.p></Link>
                    <Link className='navigation-link'><motion.p variants={menuVariants}>White</motion.p></Link>
                    <Link className='navigation-link'><motion.p variants={menuVariants}>About us</motion.p></Link>
                    <Link className='navigation-link'><motion.p variants={menuVariants}>Contact us</motion.p></Link>
                    <img
                        onClick={() => setShowMenu(!showMenu)}
                        className='absolute top-5 right-5 w-8 h-8'
                        src={close} 
                        alt="close-navbar-icon" 
                    />
                </motion.div>}
            </AnimatePresence>
        </nav>
    );
}
 
export default Navbar;
