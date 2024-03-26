import React from "react";
import TicketCard from "./cards/TicketCard";
import Ticket1 from "./../public/ticket-1.png";
import Ticket2 from "./../public/ticket-2.png";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

type BtnProps = {
  onClick: () => void;
};

const PrevBtn = ({ onClick }: BtnProps) => (
  <button
    className="absolute top-1/2 -left-12 md:-left-24  lg:-left-28 transform  py-2 -translate-y-1/2 bg-transparent border border-[#2c9cf0] shadow-md z-10"
    onClick={onClick}
  >
    <ChevronLeftIcon className="w-8   text-[#2c9cf0]" />
  </button>
);

const NextBtn = ({ onClick }: BtnProps) => (
  <button
    className="absolute top-1/2 -right-12 md:-right-24 lg:-right-28 transform -translate-y-1/2 border border-[#2c9cf0] shadow-md z-10 py-2"
    onClick={onClick}
  >
    <ChevronRightIcon className="w-8 text-[#2c9cf0]" />
  </button>
);

const animationVariant = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1, delay: 1 } },
};

const Carousel = () => {
  const ticketList = [
    {
      image: Ticket1,
      title: "Las Vegas Aviators",
      address: "Las Vegas Ballpark, Las Vegas,",
      button: "Take Flight Collection",
      state: "Nevada",
    },
    {
      image: Ticket2,
      title: "Sacramento River Cats",
      address: "Sutter Health Park, Sacramento,",
      state: "California",
      button: "Orange Collection",
    },
    {
      image: Ticket1,
      title: "Las Vegas Aviators",
      address: "Las Vegas Ballpark, Las Vegas,",
      button: "Take Flight Collection",
      state: "Nevada",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: (
      <PrevBtn
        onClick={function (): {} {
          throw new Error("Function not implemented.");
        }}
      />
    ),
    nextArrow: (
      <NextBtn
        onClick={function (): {} {
          throw new Error("Function not implemented.");
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      variants={animationVariant}
      initial="initial"
      whileInView={"animate"}
      viewport={{
        once: true,
      }}
      className="relative w-8/12 slider-container mx-auto gap-7"
    >
      <Slider {...settings}>
        {ticketList.map((ticket, index) => (
          <TicketCard
            key={index}
            state={ticket.state}
            image={ticket.image}
            title={ticket.title}
            address={ticket.address}
            button={ticket.button}
          />
        ))}
      </Slider>
    </motion.div>
  );
};

export default Carousel;
