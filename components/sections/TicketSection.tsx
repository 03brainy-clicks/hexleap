"use client";
import { motion } from "framer-motion";
import Carousel from "../Carousel";

const animationVariant = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1} },
};

const TicketSection = () => {
  return (
    <div className="space-y-12 pt-14 pb-12 bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] dark:bg-gradient-to-b dark:from-[#18282A] dark:to-[#221A2C] dark:text-white">
      <div className="sm:w-11/12 lg:w-9/12 md:w-10/12 w-full px-5 mx-auto text-center ">
        <motion.h1
          variants={animationVariant}
          initial="initial"
          whileInView={"animate"}
          viewport={{
            once: true,
          }}
          className="text-[3.125rem] font-bold poppins leading-tight mb-5 "
        >
          Collection Spotlight
        </motion.h1>
        <motion.p
          variants={animationVariant}
          initial="initial"
          whileInView={"animate"}
          viewport={{
            once: true,
          }}
          className="text-sm"
        >
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </motion.p>
      </div>
      <Carousel />
    </div>
  );
};

export default TicketSection;
