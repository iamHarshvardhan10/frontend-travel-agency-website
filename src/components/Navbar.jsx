import logo from "../assets/asset 0.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>

      <nav className="flex item-center justify-between mt-[20px] mb-0 ml-[35px] mr-[35px]">
        <img src={logo} alt="logo" />
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-16">
            <li className="text-lg font-sans text-white font-medium hover:text-[#489a6a] cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="text-lg font-sans text-white font-semibold  hover:text-[#489a6a] cursor-pointer">
              <Link to="/about">About us</Link>
            </li>
            <li className="text-lg font-sans text-white font-semibold  hover:text-[#489a6a] cursor-pointer">
              <Link to="/tour">Tours</Link>
            </li>
            <li className="text-lg font-sans text-white font-semibold  hover:text-[#489a6a] cursor-pointer">
              <Link to="/review">Reviews</Link>
            </li>
            <li className="text-lg font-sans text-white font-semibold  hover:text-[#489a6a] cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <button className="text-sm font-sans text-white  bg-[#489a6a] px-4 py-2  rounded-md">
            1233-123-342
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
