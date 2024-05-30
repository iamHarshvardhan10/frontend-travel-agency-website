const Footer = () => {
  return (
    <div className="bg-[#414042]">
      <div className="lg:flex lg:items-center lg:flex-row lg:justify-around mx-[35px] px-[35px] py-[41px] max-sm:mx-[20px] sm:flex sm:flex-col sm:items-center sm:gap-6 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-6">
        <h1 className="text-[18px] text-white font-workSans">Copyright © 2024 Travel Agency</h1>
        <ul className="lg:flex lg:item-center lg:gap-8 sm:flex sm:items-center sm:gap-10 max-sm:flex max-sm:flex-col max-sm:gap-4">
          <li className="text-white font-workSans">Home</li>
          <li className="text-white font-workSans">About Us</li>
          <li className="text-white font-workSans">Tours</li>
          <li className="text-white font-workSans">Reviews</li>
          <li className="text-white font-workSans">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
