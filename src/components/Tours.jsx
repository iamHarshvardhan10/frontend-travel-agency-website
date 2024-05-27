import tourBanner from "../assets/tour-banner-01.jpg";
import front from "../assets/asset 9.png";
import { tour } from "../utils/tours";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Tours = () => {
  return (
    <div>
      <div className="absolute top-0 -z-10">
        <img src={tourBanner} alt="" />
      </div>
      <div>
        <img
          src={front}
          alt=""
          className="w-full h-[550px] absolute opacity-35 top-0 -z-10"
        />
      </div>
      <h1 className="mx-[160px] my-[130px] text-[100px] text-white">Tours</h1>
      <div className="mx-[171px] mt-[300px]">
        <h1 className="text-[75px] text-gray-700 ">Top Destination</h1>
        <div className="flex flex-wrap justify-between">
          {tour.map((tour) => (
            <div key={tour.id} className="w-[33.33%] mt-[50px] mb-[50px]">
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
