// Package
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
// Module
import menuIcon from "../assets/icon/menu.png";
import shoppingCartIcon from "../assets/icon/shopping-cart.png";
import close from "../assets/icon/close.png";
// ==>
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuPhoneVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.2,
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };

  return (
    <nav className="fixed top-0 z-10 flex h-[12%] w-full items-center justify-between border-b-[1px] border-black bg-color-one px-5 md:px-10">
      <div className="w-full md:flex md:h-full md:flex-col md:items-center md:justify-evenly">
        <Link to="/">
          <h1>SW&B</h1>
        </Link>
        <div className="flex w-1/2 justify-between text-xs max-[767px]:hidden">
          <Link>Black</Link>
          <Link>White</Link>
          <Link>About us</Link>
          <Link>Contact us</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </div>
      <div className="nav-icon flex w-1/3 -translate-y-1 items-end justify-around md:w-fit md:justify-end">
        <Link to="/cart">
          <img
            src={shoppingCartIcon}
            alt="shopping-cart-icon"
            className="h-7 w-7"
          />
        </Link>
        <img
          onClick={() => setShowMenu(!showMenu)}
          src={menuIcon}
          alt="burger-menu-icon"
          className="h-7 w-7 translate-y-[2px] md:hidden"
        />
      </div>
      <AnimatePresence mode="popLayout">
        {showMenu && (
          <motion.div
            variants={menuPhoneVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="nav-link fixed bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center bg-[#F5F5F5]"
          >
            <Link className="navigation-link">
              <motion.p variants={menuPhoneVariants}>Cloth</motion.p>
            </Link>
            <Link className="navigation-link">
              <motion.p variants={menuPhoneVariants}>Black</motion.p>
            </Link>
            <Link className="navigation-link">
              <motion.p variants={menuPhoneVariants}>White</motion.p>
            </Link>
            <Link className="navigation-link">
              <motion.p variants={menuPhoneVariants}>About us</motion.p>
            </Link>
            <Link className="navigation-link">
              <motion.p variants={menuPhoneVariants}>Contact us</motion.p>
            </Link>
            <img
              onClick={() => setShowMenu(!showMenu)}
              className="absolute right-5 top-5 h-8 w-8"
              src={close}
              alt="close-navbar-icon"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
