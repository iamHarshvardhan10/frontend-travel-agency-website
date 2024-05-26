import logo from "../assets/asset 0.png";
import front from "../assets/asset 9.png";
import back from "../assets/asset 8.jpeg";

const Navbar = () => {
  return (
    <>
      <div className="absolute top-0 -z-10">
        <img src={back} alt="" />
      </div>
      <div>
        <img
          src={front}
          alt=""
          className="w-full h-auto absolute opacity-55 top-0 -z-10 object-contain "
        />
      </div>
      <nav className="flex item-center justify-between mt-[20px] mb-0 ml-[35px] mr-[35px]">
        <img src={logo} alt="logo" />
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-16">
            <li className="text-lg text-white font-semibold  hover:text-[#489a6a] cursor-pointer">
              Home
            </li>
            <li className="text-lg text-white font-semibold  hover:text-[#489a6a] cursor-pointer">
              About us
            </li>
            <li className="text-lg text-white font-semibold  hover:text-[#489a6a] cursor-pointer">
              Tours
            </li>
            <li className="text-lg text-white font-semibold  hover:text-[#489a6a] cursor-pointer">
              Reviews
            </li>
            <li className="text-lg text-white font-semibold  hover:text-[#489a6a] cursor-pointer">
              Contact
            </li>
          </ul>
          <button className="text-sm text-white  bg-[#489a6a] px-4 py-2  rounded-md">
            1233-123-342
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
