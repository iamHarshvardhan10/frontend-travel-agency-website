import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/asset 0.png";

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.nav
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={cardVariants}
      transition={{ duration: 0.5 }}
      className="relative md:flex md:item-center justify-between lg:mt-[20px] md:mb-0 md:ml-[35px] md:mr-[35px] max-sm:ml-[10px] max-sm:mr-[10px] max-sm:mb-[10px] max-sm:mt-[10px] sm:ml-[10px] sm:mr-[10px] sm:mb-[10px] sm:mt-[10px]"
    >
      <div className="flex items-center justify-between">
        <Link to="/" className="">
          <img src={logo} alt="logo" />
        </Link>
        <button
          onClick={toggleMenu}
          className="text-white md:hidden max-sm:block sm:block"
        >
          {menuOpen ? (
            <FaTimes className="text-[32px] text-black" />
          ) : (
            <FaBars className="text-[32px] text-white" />
          )}
        </button>
      </div>
      <div
        className={`absolute top-full right-0  w-48  opacity-80 md:w-auto md:static bg-[#48a9a6] shadow-lg md:shadow-none rounded-lg p-4 mt-2 md:mt-0 md:flex md:bg-transparent transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="md:flex md:flex-row  md:items-center md:gap-8 max-sm:flex max-sm:items-center max-sm:flex-col max-sm:gap-4 sm:flex sm:items-center sm:flex-col sm:gap-4">
          <li className="text-[18px]  md:text-white md:font-normal max-sm:text-black max-sm:font-bold sm:text-black sm:font-bold hover:text-[#489a6a] cursor-pointer">
            <Link to="/" className="font-workSans">
              Home
            </Link>
          </li>
          <li className="text-[18px]  md:text-white md:font-normal max-sm:text-black max-sm:font-bold sm:text-black sm:font-bold hover:text-[#489a6a] cursor-pointer">
            <Link to="/about" className="font-workSans">
              About us
            </Link>
          </li>
          <li className="text-[18px]   md:text-white md:font-normal max-sm:text-black max-sm:font-bold sm:text-black sm:font-bold  hover:text-[#489a6a] cursor-pointer">
            <Link to="/tour" className="font-workSans">
              Tours
            </Link>
          </li>
          <li className="text-[18px]  md:text-white md:font-normal max-sm:text-black max-sm:font-bold sm:text-black sm:font-bold hover:text-[#489a6a] cursor-pointer">
            <Link to="/review" className="font-workSans">
              Reviews
            </Link>
          </li>
          <li className="text-[18px]  md:text-white md:font-normal max-sm:text-black max-sm:font-bold sm:text-black sm:font-bold hover:text-[#489a6a] cursor-pointer">
            <Link to="/contact" className="font-workSans">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
