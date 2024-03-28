import Image, { StaticImageData } from "next/image";

interface TicketCardProps {
  image: StaticImageData;
  title: string;
  address: string;
  button: string;
  state: string;
}

const TicketCard = ({
  image,
  title,
  address,
  button,
  state,
}: TicketCardProps) => {
  return (
    <div className=" bg-white dark:bg-[#3B3E47] shadow-2 group mx-4">
      <div className="p-3 ">
        <div className="w-full overflow-hidden shadow-3">
          <Image
            src={image}
            className="w-full group-hover:scale-[1.15] animate"
            alt="player image"
          />
        </div>
      </div>
      <div className="flex justify-between items-center gap-3 ">
        <div className="w-4 h-5 rounded-r-full bg-[#e9ecf1] dark:bg-[#1E1D2A]  relative"></div>
        <div className="border-b-2 flex-1 border-dashed border-[#A9ACB2]"></div>
        <div className="w-4 h-5 rounded-l-full bg-[#e9ecf1] dark:bg-[#1E1D2A] relative"></div>
      </div>
      <div className="px-3 poppins text-center space-y-2 py-2">
        <h2 className="font-medium">{title}</h2>
        <p className="text-sm poppins">OCT 15 | SUN | 4:30 PM</p>
        <p className="text-[#525965] dark:text-[#DFDFDF] text-sm">
          {address}&nbsp;
          {state}
        </p>
      </div>
      <div className="p-3">
        <button className="w-full animate bg-[#1D1D1F] hover:bg-[#262628] text-sm font-medium text-white py-3">
          {button}
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
