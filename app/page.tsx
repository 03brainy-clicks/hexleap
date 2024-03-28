import SportSection from "@/components/sections/SportSection";
import TicketSection from "@/components/sections/TicketSection";

const page = () => {
  return (
    <div className="bg-[#F7F7F8] dark:bg-[#292B32]">
      <div className="2xl:w-9/12 lg:w-10/12  md:w-11/12 w-full mx-auto sm:px-5  py-7 space-y-8">
        <SportSection />
        <TicketSection />
      </div>
    </div>
  );
};

export default page;
