import { FaArrowAltCircleRight } from "react-icons/fa";
import aboutComoment from "../assets/asset 14.jpeg";

const AboutUsComponent = () => {
  return (
    <div className="lg:flex lg:flex-row md:flex md:flex-col-reverse sm:flex sm:flex-col-reverse max-sm:flex max-sm:flex-col-reverse items-center justify-between">
      <img src={aboutComoment} alt="" className="max-sm:w-full max-sm:p-2"/>
      <div className="lg:p-20">
        <span className="lg:text-[32px] md:text-[42px] sm:text-[42px] max-sm:text-[42px] font-handwriting">
          a few words
        </span>
        <h1 className="lg:text-[75px] md:text-[100px] sm:text-[100px] max-sm:text-[75px]">
          About Us
        </h1>
        <p className="text-[18px] font-workSans">
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
          sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
          amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
          tincidunt auctor a ornare odio.
        </p>
        <button className="flex items-center text-white gap-4 lg:mt-[50px] md:mt-[30px] sm:mt-[30px] max-sm:mt-[20px] md:mb-[20px] sm:mb-[20px] max-sm:mb-[20px] py-2 px-10 uppercase font-sans bg-[#4ca0af] rounded-sm">
          View All Tours <FaArrowAltCircleRight className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default AboutUsComponent;
