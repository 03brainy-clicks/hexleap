import React from "react";
import SportsCard from "../cards/SportsCard";
import Player1 from "../../public/player-1.png";
import Player2 from "../../public/player-2.png";
import Player3 from "../../public/player-3.png";
import Ad from "../../public/ad.png";
import AdCard from "../cards/AdCard";

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
    <div className="space-y-7">
      <div>
        <span className="text-2xl font-bold border-b-2 border-[#738FFF] pb-1 poppins  dark:text-white">
          Sports
        </span>
      </div>
      <div className="grid lg:grid-cols-5  md:grid-cols-2   grid-cols-1 gap-3">
        {playerList.map((player, i) => {
          return (
            <SportsCard
              key={i}
              image={player.image}
              sport={player.sport}
              title={player.title}
              event={player.event}
            />
          );
        })}
        <AdCard
          image={Ad}
          title="Advertisement title"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
      <div className="text-center pt-5">
        <button className="text-sm text-white font-semibold bg-[#2C9CF0] py-[10px] px-[30px] rounded-sm ">
          See More
        </button>
      </div>
    </div>
  );
};

export default SportSection;
