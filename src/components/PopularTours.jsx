import { FaArrowAltCircleRight } from "react-icons/fa";
import { tour } from "../utils/tours";
const PopularTours = () => {
  const sliceCards = tour.slice(5, 9);
  return (
    <div>
      <div className="mt-[300px]">
        <div className="w-[70%]">
          <h1 className="text-[32px] font-handwriting">our most</h1>
          <h1 className="text-[75px]">Popular Tours</h1>
          <button className="flex items-center text-white gap-4 mt-[50px] py-2 px-10 uppercase font-sans bg-[#4ca0af]">
            View All Tours <FaArrowAltCircleRight className="text-white" />
          </button>
        </div>
        <div className="flex relative my-[100px]">
          {sliceCards.map((card) => (
            <div key={card.id}>
              <img src={card.image} alt="" className="w-[300px] h-[400px]" />
              <div className="absolute top-0 p-10">
                <h1 className="text-[50px] font-handwriting text-gray">{card.name}</h1>
                <h1 className="text-[22px] text-white underline">{card.text}</h1>
                <h1 className="text-[18px] text-white font-workSans underline mt-[20px]">{card.price}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularTours;
