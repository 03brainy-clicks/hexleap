import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface SportCardProps {
  image: StaticImageData;
  title: string;
  content: string;
}

const animationVariant = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 1,
    },
  },
};

const AdCard = ({ image, title, content }: SportCardProps) => {
  return (
    <motion.div
    variants={animationVariant}
      initial="initial"
      whileInView={"animate"}
      viewport={{
        once: true,
      }}
      className="p-3 bg-white shadow-1 space-y-3 dark:text-[white] dark:bg-[#3B3E47]"
    >
      <div className="border border-[#006555] h-full flex flex-col">
        <div className="relative">
          <Image src={image} className="w-full" alt="ad" />
          <span className="absolute text-sm z-1 top-0 right-0 text-white bg-black py-1 px-3">
            Ad
          </span>
        </div>
        <div className="p-3 flex items-center flex-1">
          <div className="">
            <h4 className="text-lg font-medium leading-5 mb-3">{title}</h4>
            <p className="text-[#525965] dark:text-[#DFDFDF] text-xs">
              {content}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdCard;
