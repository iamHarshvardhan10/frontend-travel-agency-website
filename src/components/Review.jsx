import { review } from "../utils/review";
import front from "../assets/asset 9.png";
import reviewBanner from "../assets/review-banner-03.jpg";
import { FcRating } from "react-icons/fc";

const Review = () => {
  return (
    <div>
      <div className="absolute top-0 -z-10">
        <img src={reviewBanner} alt=""  />
      </div>
      <div>
        <img
          src={front}
          alt=""
          className="w-full lg:h-[550px] sm:h-[230px] max-sm:h-[140px] absolute opacity-55 top-0 -z-10"
        />
      </div>
      <h1 className="sm:mx-[160px] lg:my-[130px]  sm:text-[100px] max-sm:text-[50px] text-white">Reviews</h1>
      <div className="lg:mx-[171px] lg:mt-[300px] sm:mx-[20px] sm:mt-[100px] max-sm:mx-[20px]">
        <h1 className="sm:text-[57px] max-sm:text-[70px] text-[#414042] ">What Our Client Say</h1>
        <div className="sm:flex sm:flex-wrap sm:items-center  justify-between">
          {review.map((rev) => (
            <div key={rev.id} className="sm:w-[50%] mt-[50px] mb-[50px]">
              <p className="text-[18px] font-workSans text-[#414042] font-bold mt-[10px]">
                {rev.review}
              </p>
              <div className="flex mt-[25px]">
                <span>
                  <FcRating />
                </span>
                <span>
                  <FcRating />
                </span>
                <span>
                  <FcRating />
                </span>
                <span>
                  <FcRating />
                </span>
                <span>
                  <FcRating />
                </span>
              </div>
              <h1 className="text-[32px] font-handwriting mt-[35px]">
                {rev.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
