import Carousel from "../utils/Carousel";
import RevealAnimation from "../animation/RevealAnimation";

const TicketSection = () => {
  return (
    <RevealAnimation delay={.6} classes="space-y-12 pt-14 pb-12 bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] dark:bg-gradient-to-b dark:from-[#18282A] dark:to-[#221A2C] dark:text-white">
      <div className="sm:w-11/12 lg:w-9/12 md:w-10/12 w-full px-5 mx-auto text-center ">
        <RevealAnimation
          delay={0}
          classes="text-[3.125rem] font-bold poppins leading-tight mb-5 "
        >
          Collection Spotlight
        </RevealAnimation>
        <RevealAnimation delay={0} classes="text-sm">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </RevealAnimation>
      </div>
      <Carousel />
    </RevealAnimation>
  );
};

export default TicketSection;
