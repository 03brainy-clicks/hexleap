import { delay, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface SportCardProps {
  image: StaticImageData;
  title: string;
  event: number;
  sport: string;
  delay: number;
}
const animationVariant = {
  initial: { x: 100, opacity: 0 },
  animate: (delay: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2 * delay,
      duration: 1,
    },
  }),
};

const SportsCard = ({ image, title, event, sport, delay }: SportCardProps) => {
  return (
    <motion.div
      variants={animationVariant}
      initial="initial"
      whileInView={"animate"}
      viewport={{
        once: true,
      }}
      custom={delay}
      className="p-3 bg-white dark:bg-[#3B3E47] flex flex-col gap-3  shadow-1 dark:text-white group"
    >
      <div className="w-full overflow-hidden">
        <Image
          src={image}
          className="w-full group-hover:scale-[1.15] animate"
          alt="Player Image"
        />
      </div>{" "}
      <h4 className="text-lg font-medium leading-5">{title}</h4>
      <div className="bg-[#F7F7F8] dark:bg-[#292B32] p-3 flex rounded-sm mt-auto">
        <div className="flex-1">
          <span className="text-xs text-[#525965] dark:text-[#DFDFDF]">
            Total Events
          </span>{" "}
          <br />
          <span className="text-sm font-medium">{event} Events</span>
        </div>{" "}
        <div className="flex-1">
          <span className="text-xs text-[#525965] dark:text-[#DFDFDF]">
            Sport
          </span>{" "}
          <br />
          <span className="text-sm font-medium">{sport}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SportsCard;
