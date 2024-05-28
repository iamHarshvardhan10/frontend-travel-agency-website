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
            className="w-[100%] h-[180vh]  opacity-55   object-cover "
          />
        </div>
        <div className="absolute top-0 mx-[171px] my-[100px]">
          <h1 className="text-center font-handwriting text-[32px] text-white">
            our customer love us
          </h1>
          <h1 className="text-center text-[75px] text-white">Latest Reviews</h1>

          <div className="grid grid-cols-2 mt-[80px] ">
            {sliceReview.map((review, index) => (
              <div
                key={review.id}
                className={`p-4 ${
                  index == 2 || index == 4
                    ? "bg-[#4b4b4b] opacity-70"
                    : "bg-[#489a6a] opacity-80 "
                }  px-[50px] py-[50px]`}
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
                <h1 className="text-[42px] text-white font-handwriting mt-[50px]">
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
