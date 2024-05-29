import front from "../assets/asset 9.png";
import { review } from "../utils/review";
import { FcRating } from "react-icons/fc";
const LatestReview = () => {
  const sliceReview = review.slice(0, 4);
  return (
    <div className="relative">
      <div className="parllaxImg1">
        <div>
          <img
            src={front}
            alt=""
            className="w-[100%] lg:h-[180vh] sm:h-[450vh] max-sm:h-[200vh]  opacity-55   object-cover "
          />
        </div>
        <div className="absolute top-0 lg:mx-[171px] lg:my-[100px] sm:mx-[100px] max-sm:mx-[10px]">
          <h1 className="text-center font-handwriting lg:text-[32px] sm:text-[36px] text-white">
            our customer love us
          </h1>
          <h1 className="text-center lg:text-[75px] sm:text-[42px] text-white">Latest Reviews</h1>

          <div className="lg:grid lg:grid-cols-2 lg:mt-[80px] md:flex md:flex-col ">
            {sliceReview.map((review, index) => (
              <div
                key={review.id}
                className={`p-4 ${
                  index == 2 || index == 4
                    ? "lg:bg-[#4b4b4b] opacity-70"
                    : "lg:bg-[#489a6a] opacity-80 "
                }  lg:px-[50px] lg:py-[50px] lg:border-none lg:rounded-none lg:mb-0 sm:border max-sm:border sm:px-4 max-sm:p-4 sm:mb-2 max-sm:mb-2 sm:rounded-2xl`}
              >
                <p className="text-[18px] text-white font-bold font-workSans mt-[20px]">
                  {review.review}
                </p>
                <div className="flex items-center gap-2 mt-[20px]">
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
                <h1 className="text-[42px] text-white font-handwriting lg:mt-[50px]">
                  {review.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestReview;
