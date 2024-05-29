import { FaArrowAltCircleRight } from "react-icons/fa";
import { tour } from "../utils/tours";

const Offers = () => {
  const sliceCards = tour.slice(0, 4);
  console.log(sliceCards);

  return (
    <div className="lg:my-[125px]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="lg:text-[32px] sm:text-[42px] max-sm:text-[42px] font-handwriting">
          our trending
        </h1>
        <h1 className="lg:text-[75px] sm:text-[55px] max-sm:text-[55px]">Best Offers</h1>
        <p className="lg:text-[18px] sm:text-[16px] max-sm:text-[14px] max-sm:w-[100%] w-[70%] text-center">
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
          sem nibh id elit
        </p>
        <button className="flex items-center text-white gap-4 mt-[50px] py-2 px-10 uppercase font-sans bg-[#4ca0af] rounded-md">
          View All Tours <FaArrowAltCircleRight className="text-white" />
        </button>
      </div>
      <div className="mx-[50px] my-[85px] lg:flex lg:flex-row sm:flex sm:flex-col sm:items-center">
        {sliceCards.map((card) => (
          <div key={card.id} className="relative lg:mb-0 sm:mb-4 max-sm:mb-4">
            <img
              src={card.image}
              alt=""
              className="w-[350px] lg:h-[500px] sm:h-[300px] object-fill lg:rounded-sm sm:rounded-lg max-sm:rounded-xl"
            />
            <div className="hover:bg-[#48a9a6] w-[350px] h-[500px] absolute top-0 opacity-60 cursor-pointer"></div>
            <div className="absolute top-0 p-10 cursor-pointer">
              <h1 className="lg:text-[42px] sm:text-[75px] max-sm:text-[35px] font-handwriting text-gray-700 underline">
                {card.name}
              </h1>
              <h1 className="lg:text-[28px] sm:text-[35px] lg:text-white">{card.text}</h1>
              <span className="text-[18px] text-white font-workSans underline">
                {card.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
