import { FaArrowAltCircleRight } from "react-icons/fa";
import { tour } from "../utils/tours";

const Offers = () => {
  const sliceCards = tour.slice(0, 4);
  console.log(sliceCards);

  return (
    <div className="my-[125px]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[32px] font-handwriting">our trending</h1>
        <h1 className="text-[75px]">Best Offers</h1>
        <p className="text-[18px] w-[70%] text-center">
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
          sem nibh id elit
        </p>
        <button className="flex items-center text-white gap-4 mt-[50px] py-2 px-10 uppercase font-sans bg-[#4ca0af] rounded-md">
          View All Tours <FaArrowAltCircleRight className="text-white" />
        </button>
      </div>
      <div className="mx-[50px] my-[85px] flex">
        {sliceCards.map((card) => (
          <div key={card.id} className="relative">
            <img src={card.image} alt="" className="w-[350px] h-[500px] object-fill rounded-sm"/>
            <div className="hover:bg-[#48a9a6] w-[350px] h-[500px] absolute top-0 opacity-60 cursor-pointer"></div>
            <div className="absolute top-0 p-10 cursor-pointer">
              <h1 className="text-[42px] font-handwriting text-gray-700 underline">{card.name}</h1>
              <h1 className="text-[28px] text-white">{card.text}</h1>
              <span className="text-[18px] text-white font-workSans underline">{card.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
