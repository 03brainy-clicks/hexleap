import Image, { StaticImageData } from "next/image";
import SideAnimation from "../animation/SideAnimation";

interface AdCardProps {
  image: StaticImageData;
  title: string;
  content: string;
  delay: number;
}

const AdCard = ({ image, title, content, delay }: AdCardProps) => {
  return (
    <SideAnimation
      delay={delay}
      classes="p-3 bg-white shadow-1 space-y-3 dark:text-[white] dark:bg-[#3B3E47]"
    >
      <div className="border border-[#006555] h-full flex flex-col">
        <div className="relative">
          <Image src={image} className="w-full" alt="ad" />
          <span className="absolute text-sm top-0 right-0 text-white bg-black py-1 px-3">
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
    </SideAnimation>
  );
};

export default AdCard;
