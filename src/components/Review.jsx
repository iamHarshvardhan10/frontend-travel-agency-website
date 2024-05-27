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
          className="w-full h-[550px] absolute opacity-55 top-0 -z-10"
        />
      </div>
      <h1 className="mx-[160px] my-[130px] text-[100px] text-white">Reviews</h1>
      <div className="mx-[171px] mt-[300px]">
        <h1 className="text-[75px] text-[#414042] ">What Our Client Say</h1>
        <div className="flex flex-wrap justify-between">
          {review.map((rev) => (
            <div key={rev.id} className="w-[50%] mt-[50px] mb-[50px]">
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
