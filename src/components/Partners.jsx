import partner1 from "../assets/asset 2.png";
import partner2 from "../assets/asset 3.png";
import partner3 from "../assets/asset 4.png";
import partner4 from "../assets/asset 5.png";
import partner5 from "../assets/asset 6.png";

const Partners = () => {
  return (
    <div className="lg:mx-[171px] lg:my-[80px] ">
      <h1 className="text-center text-[32px] font-handwriting">
        our travelling
      </h1>
      <h1 className="text-center text-[75px] ">Partners</h1>
      <div className="lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:mt-[40px] sm:flex sm:flex-col sm:items-center sm:gap-10 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-10 max-sm:mb-[20px] sm:mb-[20px] sm:mt-[20px]  ">
        <img src={partner1} alt="" className="lg:px-[60px] lg:py-[28px]" />
        <img src={partner2} alt="" className="lg:px-[60px] lg:py-[28px]" />
        <img src={partner3} alt="" className="px-[60px] lg:py-[28px]" />
        <img src={partner4} alt="" className="lg:px-[60px] lg:py-[28px]" />
        <img src={partner5} alt="" className="lg:px-[60px] lg:py-[28px] " />
      </div>
    </div>
  );
};

export default Partners;
