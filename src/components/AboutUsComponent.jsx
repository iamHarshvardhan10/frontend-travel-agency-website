import { FaArrowAltCircleRight } from "react-icons/fa";
import aboutComoment from "../assets/asset 14.jpeg";

const AboutUsComponent = () => {
  return (
    <div className="flex items-center justify-between">
      <img src={aboutComoment} alt="" />
      <div className="p-20">
        <span className="text-[32px] font-handwriting">a few words</span>
        <h1 className="text-[75px] ">About Us</h1>
        <p className="text-[18px] font-workSans">
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
          sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
          amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
          tincidunt auctor a ornare odio.
        </p>
        <button className="flex items-center text-white gap-4 mt-[50px] py-2 px-10 uppercase font-sans bg-[#4ca0af] rounded-sm">
          View All Tours <FaArrowAltCircleRight className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default AboutUsComponent;
