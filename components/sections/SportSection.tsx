"use client";
import React from "react";
import SportsCard from "../cards/SportsCard";
import Player1 from "../../public/player-1.png";
import Player2 from "../../public/player-2.png";
import Player3 from "../../public/player-3.png";
import Ad from "../../public/ad.png";
import AdCard from "../cards/AdCard";
import ThemeToggler from "../utils/ThemeToggler";
import RevealAnimation from "../animation/RevealAnimation";

const SportSection = () => {
  const playerList = [
    {
      title: "Sacramento River Cats",
      event: 48,
      sport: "Baseball",
      image: Player1,
    },
    {
      title: "Las Vegas Aviators",
      event: 28,
      sport: "Baseball",
      image: Player2,
    },
    {
      title: "New Jersey Devils",
      event: 15,
      sport: "Ice Hockey",
      image: Player3,
    },
    {
      title: "Las Vegas Aviators",
      event: 28,
      sport: "Baseball",
      image: Player2,
    },
  ];

  return (
    <div className="space-y-7 px-5 sm:p-0">
      <RevealAnimation classes="flex items-center justify-between" delay={0}>
        <div className="text-2xl font-bold border-b-2 border-[#738FFF] pb-1 poppins  dark:text-white">
          Sports
        </div>
        <ThemeToggler />
      </RevealAnimation>
      <div className="grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-3">
        {playerList.map((player, i) => {
          return (
            <SportsCard
              key={i}
              image={player.image}
              sport={player.sport}
              title={player.title}
              event={player.event}
              delay={i * 0.1}
            />
          );
        })}
        <AdCard
          image={Ad}
          title="Advertisement title"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          delay={0.4}
        />
      </div>
      <RevealAnimation delay={.7} classes="text-center">
        <button className="text-sm text-white font-semibold bg-[#2C9CF0] hover:bg-[#2c7dbc] py-[10px] px-[30px] rounded-sm animate">
          See More
        </button>
      </RevealAnimation>
    </div>
  );
};

export default SportSection;
