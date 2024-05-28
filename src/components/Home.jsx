import { FaArrowAltCircleRight } from "react-icons/fa";
import front from "../assets/asset 9.png";
import back from "../assets/asset 8.jpeg";
import AboutUsComponent from "./AboutUsComponent";
import LatestReview from "./LatestReview";
import Partners from "./Partners";
import Offers from "./Offers";
import PopularTours from "./PopularTours";
const Home = () => {
  return (
    <div>
      <div className="absolute top-0 -z-10">
        <img src={back} alt="" className="max-sm:h-[450px]"/>
      </div>
      <div className="">
        <img
          src={front}
          alt=""
          className="w-full h-auto max-sm:h-[450px] max-sm:absolute max-sm:top-0 max-sm:object-cover  absolute opacity-55 top-0 -z-10 object-contain"
        />
      </div>
      <div className="lg:mx-[175px] lg:my-[150px] md:mx-[150px] md:my-[50px] sm:mx-[50px] sm:my-[30px] max-sm:mx-[10px] max-sm:my-0 ">
        <h1 className="text-white  lg:text-[100px] md:text-[50px] sm:text-[35px] max-sm:text-[35px] lg:leading-[140px] md:leading-[70px]  lg:w-[70%] md:w-[90%]">
          Travel & Explore the World
        </h1>
        <p className="text-white lg:text-[20px] md:text-[20px] sm:text-[15px] max-sm:text-[20px] lg:w-[60%]  lg:mt-4 max-sm:mt-2 font-serif ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          dolorem a, maiores quos sapiente odit itaque nemo magnam ex eligendi?
        </p>
        <button className="flex items-center text-white gap-4  lg:mt-[50px] md:mt-[40px] sm:mt-[20px] max-sm:mt-[20px] py-2  px-10  uppercase font-sans bg-[#4ca0af] rounded-md">
          Book My Tour <FaArrowAltCircleRight className="text-white" />
        </button>
        <PopularTours />
        <AboutUsComponent />
      </div>
      <LatestReview />
      <Offers />
      <Partners />
    </div>
  );
};

export default Home;
