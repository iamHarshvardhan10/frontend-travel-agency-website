import front from "../assets/asset 9.png";
import contactBanner from "../assets/contact-img-01.jpg";
import { FaMapMarker } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  FaPhoneAlt,
  FaFacebook,
  FaGoogle,
  FaTwitch,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="absolute top-0 -z-10">
        <img src={contactBanner} alt="" />
      </div>
      <div>
        <img
          src={front}
          alt=""
          className="w-full lg:h-[550px] sm:h-[230px] max-sm:h-[140px] absolute opacity-35 top-0 -z-10"
        />
      </div>
      <h1 className="mx-[160px] lg:my-[130px] max-sm:mx-[20px]  sm:text-[100px] max-sm:text-[50px] text-white">
        Contact
      </h1>
      <div className="lg:mx-[171px] lg:mt-[300px] sm:mx-[20px] sm:mt-[100px] max-sm:mx-[15px] max-sm:mt-[50px]">
        <h1 className="lg:text-[75px] sm:text-[50px] max-sm:text-[35px] text-gray-700 ">
          Start Your Journey
        </h1>
        <div className="lg:flex items-center justify-between">
          <div>
            <h1 className="text-[32px] text-gray-600 lg:mt-[50px] max-sm:mt-[10px]">
              Contact or visit us
            </h1>
            <p className="font-workSans sm:w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex items-center gap-4 mt-[40px]">
              <span>
                <FaMapMarker className="text-[#48a9a6]" />
              </span>
              <span className="font-workSans text-[18px]">
                2 Fifth Avenue, New York, NY10160
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <MdEmail className="text-[#48a9a6]" />
              </span>
              <span className="font-workSans text-[18px]">
                contact@hello.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <FaPhoneAlt className="text-[#48a9a6]" />
              </span>
              <span className="font-workSans text-[18px]">1-090-1122-6789</span>
            </div>
            <div className="mt-[50px]">
              <h2 className="text-[42px] font-handwriting text-gray-700">
                Lets keep in touch!
              </h2>
              <div className="flex item-center gap-4 mt-[20px]">
                <span className="p-4 rounded-full   hover:bg-[#48a9a6]">
                  <FaFacebook className="text-[22px text-gray-500]" />
                </span>
                <span className="p-4 rounded-full hover:bg-[#48a9a6]">
                  <FaTwitch className="text-[22px text-gray-500]" />
                </span>
                <span className="p-4 rounded-full  hover:bg-[#48a9a6]">
                  <FaGoogle className="text-[22px text-gray-500]" />
                </span>
                <span className="p-4 rounded-full  hover:bg-[#48a9a6]">
                  <FaInstagram className="text-[22px text-gray-500]" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-[585px] max-sm:w-[350px] p-4 border border-gray-500 outline-none placeholder:font-workSans"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-[585px] max-sm:w-[350px]  p-4 border border-gray-500 outline-none placeholder:font-workSans"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-[585px] max-sm:w-[350px]  p-4 border border-gray-500 outline-none placeholder:font-workSans"
            />
            <textarea
              placeholder="Message"
              className="w-[585px] max-sm:w-[350px]  h-[120px] p-4 border border-gray-500 outline-none placeholder:font-workSans"
            ></textarea>
            <button className="w-[185px] h-[43] text-white px-4 py-2 uppercase font-sans bg-[#4ca0af]">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205265.84004139755!2d-74.15164345115979!3d40.70875509269342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1716883262251!5m2!1sen!2sin"
        className="w-full h-[350px] mt-[50px]"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Contact;
