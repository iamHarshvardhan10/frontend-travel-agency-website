import { FaArrowAltCircleRight } from "react-icons/fa";
import { tour } from "../utils/tours";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const PopularTours = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const sliceCards = tour.slice(5, 9);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={cardVariants}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={cardVariants}
        transition={{ duration: 0.7 }}
        className="lg:mt-[300px] md:mt-[50px] sm:mt-[120px] max-sm:mt-[70px]"
      >
        <div className="lg:w-[70%]">
          <h1 className="lg:text-[32px] md:text-[45px] sm:text-[50px] max-sm:text-[50px] font-handwriting">
            our most
          </h1>
          <h1 className="lg:text-[75px] md:text-[50px] sm:text-[75px] max-sm:text-[50px]">
            Popular Tours
          </h1>
          <button className="flex items-center text-white gap-4 lg:mt-[50px] md:mt-[20px] sm:mt-[20px] max-sm:mt-[20px] py-2 px-10 uppercase font-sans bg-[#4ca0af]">
            View All Tours <FaArrowAltCircleRight className="text-white" />
          </button>
        </div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={cardVariants}
          transition={{ duration: 0.2 }}
          className="lg:flex lg:relative  lg:my-[100px] md:my-[50px] sm:my-[50px] max-sm:my-[50px]"
        >
          {sliceCards.map((card) => (
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={cardVariants}
              transition={{ duration: 0.5 }}
              key={card.id}
              className="lg:border-none lg:p-0 md:border md:w-[500px] sm:border max-sm:border sm:w-[500px] lg:mb-0 md:mb-2 sm:mb-2 max-sm:mb-2 md:p-4 sm:p-4 max-sm:p-2 md:rounded-md sm:rounded-md"
            >
              <img
                src={card.image}
                alt=""
                className="lg:w-[300px] lg:h-[400px] md:w-[500px] md:h-[200px] sm:w-[700px] sm:h-[200px]"
              />
              <div className="lg:absolute lg:top-0 lg:p-10 md:p-4">
                <h1 className="text-[50px] font-handwriting text-gray">
                  {card.name}
                </h1>
                <h1 className="text-[22px] lg:text-white md:text-gray-400  underline">
                  {card.text}
                </h1>
                <h1 className="text-[18px] lg:text-white md:text-gray-400 font-workSans underline mt-[20px]">
                  {card.price}
                </h1>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PopularTours;
