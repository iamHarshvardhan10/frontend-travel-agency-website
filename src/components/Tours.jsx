import tourBanner from "../assets/tour-banner-01.jpg";
import front from "../assets/asset 9.png";
import { tour } from "../utils/tours";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Tours = () => {
  return (
    <div>
      <div className="absolute top-0 -z-10">
        <img src={tourBanner} alt="lg:h-[500px]" />
      </div>
      <div>
        <img
          src={front}
          alt=""
          className="lg:w-full lg:h-[550px] sm:h-0  max-sm:h-0 max-sm:w-0   absolute opacity-35 top-0 -z-10"
        />
      </div>
      <h1 className="lg:mx-[160px] lg:my-[130px] sm:mx-[100px] sm:my-[60px] max-sm:mx-[20px] sm:text-[100px] max-sm:text-[50px] md:text-white">Tours</h1>
      <div className="lg:mx-[171px] lg:mt-[300px] sm:mx-[20px] max-sm:mx-[20px] max-sm:mt-[50px]">
        <h1 className="sm:text-[75px] max-sm:text-[50px] text-gray-700 ">Top Destination</h1>
        <div className="sm:flex sm:flex-wrap sm:justify-between sm:gap-2">
          {tour.map((tour) => (
            <div key={tour.id} className="sm:w-[46%] mt-[50px] mb-[50px]">
              <img src={tour.image} alt="" className="w-[400px] h-[300px]" />
              <h1 className="text-[32px] font-handwriting mt-[35px]">
                {tour.name}
              </h1>
              <h1 className="text-[18px] font-workSans">{tour.text}</h1>
              <span className="text-[18px] font-workSans">{tour.price}</span>
              <p className="text-[18px] font-workSans  mt-[10px]">
                {tour.desc}
              </p>
              <button className="flex items-center text-white gap-4 mt-[40px] py-2 px-10 uppercase font-sans bg-[#4ca0af] rounded-md">
                View Details <FaArrowAltCircleRight className="text-white" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tours;
