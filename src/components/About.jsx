import front from "../assets/asset 9.png";
import aboutBanner from "../assets/bg-07-free-img.jpg";
import aboutImage from "../assets/travel-img-01.jpg";
import { FaAward } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { MdSupportAgent } from "react-icons/md";

const About = () => {
  return (
    <div>
      <div className="absolute top-0 -z-10">
        <img src={aboutBanner} alt="" className="h-[490px]" />
      </div>
      <div>
        <img
          src={front}
          alt=""
          className="w-full h-[490px] absolute opacity-55 top-0 -z-10"
        />
      </div>
      <h1 className="mx-[160px] my-[130px] text-[100px] text-white">
        About Us
      </h1>

      <div className="mx-[171px] mt-[300px] mb-[100px]">
        <p className="text-4xl font-handwriting text-gray-600">
          a few words about
        </p>
        <h1 className="text-[75px] text-gray-600">Who We Are</h1>
        <p className="font-workSans text-[#414042] w-[70%] text-[18px]">
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
          sem nibh id elit.
        </p>

        <div className="flex items-center gap-[75px]">
          <img
            src={aboutImage}
            alt=""
            className="w-[510px] h-[684px] mt-[35px]"
          />

          <div className="flex flex-col items-center text-[#414042]">
            <p className="font-workSans text-[18px]">
              <span className="text-black text-[50px]">P</span>roin gravida nibh
              vel velit auctor aliquet. Aenean sollicitudin,
            </p>
            <p className="font-workSans text-[18px]">
              lorem quis bibendum auctor , nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
              tellus a odio tincidunt auctor a ornare odio.
            </p>
            <p className="font-workSans text-[18px] mt-[39px]">
              Sed non mauris vitae erat consequat auctor eu in elit. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Mauris erat justo. Nullam ac urna eu felis
              dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut
              imperdiet nisi. Proin condimentum fermentum nunc mauris morbi
              accumsan ipsum velit. Nam nec tellus.
            </p>
          </div>
        </div>
      </div>
      <div className="parllaxImg">
        <div className="absolute mx-[171px] -mt-[100px] px-[50px] py-[75px] bg-[#48a9a6]">
          <p className="text-[32px] font-handwriting text-white">
            we hope you share our
          </p>
          <h1 className="text-[75px] text-white">Mission & Vision</h1>
          <p className="text-[18px] font-workSans text-white mt-[25px] w-[95%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-[18px] font-workSans text-white mt-[40px] w-[95%]">
            Sed non mauris vitae erat consequat auctor eu in elit. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus
            condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet
            nisi. Proin condimentum fermentum nunc.
          </p>
          <p className="text-[18px] font-workSans text-white mt-[40px] font-semibold w-[95%]">
            Proin avida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
        </div>
      </div>
      <div className="flex items-center mx-[171px] my-[40px]">
          <div className="flex flex-col items-center p-4">
            <span>
              <FaAward className="text-4xl text-[#48a9a6]"/>
            </span>
            <h3 className="text-[20px] mt-[15px]">Affordable Travels</h3>
            <p className="text-[18px] font-workSans text-center mt-[15px]">Aliqua vivamus laoreet eveniet, laoreet.</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <span>
              <IoIosTime className="text-4xl text-[#48a9a6]"/>
            </span>
            <h3 className="text-[20px] mt-[15px]">Guided Experiences</h3>
            <p className="text-[18px] font-workSans text-center mt-[15px]">Aliqua vivamus laoreet eveniet, laoreet.</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <span>
              <CiDiscount1 className="text-4xl text-[#48a9a6]"/>
            </span>
            <h3 className="text-[20px] mt-[15px]">Group Discounts</h3>
            <p className="text-[18px] font-workSans text-center mt-[15px]">Aliqua vivamus laoreet eveniet, laoreet.</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <span>
              <MdSupportAgent className="text-4xl text-[#48a9a6]"/>
            </span>
            <h3 className="text-[20px] mt-[15px]">Guest Support</h3>
            <p className="text-[18px] font-workSans text-center mt-[15px]">Aliqua vivamus laoreet eveniet, laoreet.</p>
          </div>
        </div>
    </div>
  );
};

export default About;
