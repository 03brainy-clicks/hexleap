"use client";
import React from "react";
import TicketCard from "./cards/TicketCard";
import Ticket1 from "./../public/ticket-1.png";
import Ticket2 from "./../public/ticket-2.png";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type BtnProps = {
  onClick: () => void;
};

const PrevBtn = ({ onClick }: BtnProps) => (
  <button
    className="absolute top-1/2 -left-12 md:-left-20 transform  py-2 -translate-y-1/2 bg-transparent border border-[#2c9cf0] shadow-md z-10"
    onClick={onClick}
  >
    <ChevronLeftIcon className="w-8   text-[#2c9cf0]" />
  </button>
);

const NextBtn = ({ onClick }: BtnProps) => (
  <button
    className="absolute top-1/2 -right-12 md:-right-20 transform -translate-y-1/2 border border-[#2c9cf0] shadow-md z-10 py-2"
    onClick={onClick}
  >
    <ChevronRightIcon className="w-8 text-[#2c9cf0]" />
  </button>
);

const Carousel = () => {
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
    {
      image: Ticket2,
      title: "Sacramento River Cats",
      address: "Sutter Health Park, Sacramento, California",
      button: "Orange Collection",
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-8/12 slider-container mx-auto gap-7">
      <Slider {...settings}>
        {ticketList.map((ticket, index) => (
          <TicketCard
            key={index}
            image={ticket.image}
            title={ticket.title}
            address={ticket.address}
            button={ticket.button}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
