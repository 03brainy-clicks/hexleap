import Carousel from "../Carousel";
import TicketCard from "../cards/TicketCard";
import Ticket1 from "../../public/ticket-1.png";
import Ticket2 from "../../public/ticket-2.png";

const TicketSection = () => {
    const ticketList = [
        {
          image: Ticket1,
          title: "Las Vegas Aviators",
          address: "Las Vegas Ballpark, Las Vegas, Nevada",
          button: "Take Flight Collection",
        },
        {
          image: Ticket2,
          title: "Sacramento River Cats",
          address: "Sutter Health Park, Sacramento, California",
          button: "Orange Collection",
        },
        {
          image: Ticket1,
          title: "Las Vegas Aviators",
          address: "Las Vegas Ballpark, Las Vegas, Nevada",
          button: "Take Flight Collection",
        },
      ];
  return (
    <div className="space-y-12 pt-14 pb-12 bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] dark:bg-gradient-to-b dark:from-[#18282A] dark:to-[#221A2C] dark:text-white">
      <div className="w-8/12 mx-auto text-center">
        <h1 className="text-[3.125rem] font-bold poppins">
          Collection Spotlight
        </h1>
        <p className="text-sm">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
      </div>
      {/* <div className="slider-container"> */}
        {/* <div className="grid grid-cols-3 w-8/12 mx-auto gap-7">
        {ticketList.map((ticket, i) => {
          return (
            <TicketCard
              image={ticket.image}
              title={ticket.title}
              address={ticket.address}
              key={i}
              button={ticket.button}
            />
          );
        })}
        </div> */}
        <Carousel/>
      {/* </div> */}
    </div>
  );
};

export default TicketSection;
