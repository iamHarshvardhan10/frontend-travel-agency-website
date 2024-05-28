import logo from "../assets/asset 0.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex item-center justify-between mt-[20px] mb-0 ml-[35px] mr-[35px]">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex  items-center gap-8">
            <li className="text-[18px]  text-white  hover:text-[#489a6a] cursor-pointer">
              <Link to="/" className="font-workSans">Home</Link>
            </li>
            <li className="text-[18px]  text-white   hover:text-[#489a6a] cursor-pointer">
              <Link to="/about" className="font-workSans">About us</Link>
            </li>
            <li className="text-[18px]   text-white   hover:text-[#489a6a] cursor-pointer">
              <Link to="/tour" className="font-workSans">Tours</Link>
            </li>
            <li className="text-[18px]  text-white  hover:text-[#489a6a] cursor-pointer">
              <Link to="/review" className="font-workSans">Reviews</Link>
            </li>
            <li className="text-[18px]  text-white  hover:text-[#489a6a] cursor-pointer">
              <Link to="/contact" className="font-workSans">Contact</Link>
            </li>
          </ul>
          <button className="text-[18px] font-sans text-white  bg-[#489a6a] px-4 py-2  rounded-md">
            1233-123-342
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
