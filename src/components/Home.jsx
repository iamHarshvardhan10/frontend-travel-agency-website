import { FaArrowAltCircleRight } from "react-icons/fa";
import front from "../assets/asset 9.png";
import back from "../assets/asset 8.jpeg";
const Home = () => {
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
      <div className="mx-[175px] my-[150px]">
        <h1 className="text-white text-[100px] leading-[140px] w-[70%]">
          Travel & Explore the World
        </h1>
        <p className="text-white text-[20px] w-[60%]  mt-4 font-serif ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          dolorem a, maiores quos sapiente odit itaque nemo magnam ex eligendi?
        </p>
        <button className="flex items-center text-white gap-4 mt-[50px] py-2 px-10 uppercase font-sans bg-[#4ca0af] rounded-md">
          Book My Tour <FaArrowAltCircleRight className="text-white" />
        </button>
      </div>
    </>
  );
};

export default Home;
