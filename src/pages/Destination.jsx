import { useState } from "react";
import MoonImage from "../assets/destination/image-moon.webp";
import MarsImage from "../assets/destination/image-mars.webp";
import EuropaImage from "../assets/destination/image-europa.webp";
import TitanImage from "../assets/destination/image-titan.webp";

export default function Destination({ children }) {
  const destinations = [
    {
      name: "MOON",
      image: MoonImage,
      details:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      averageDistance: "384,400 KM",
      estTravelTime: "3 DAYS",
    },
    {
      name: "MARS",
      image: MarsImage,
      details:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      averageDistance: "225 MIL. KM",
      estTravelTime: "9 MONTHS",
    },
    {
      name: "EUROPA",
      image: EuropaImage,
      details:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      averageDistance: "628 MIL. KM",
      estTravelTime: "3 YEARS",
    },
    {
      name: "TITAN",
      image: TitanImage,
      details:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      averageDistance: "1.6 BIL. KM",
      estTravelTime: "7 YEARS",
    },
  ];

  const [selectedDestination, setSelectedDestination] = useState(
    destinations.find((destination) => destination.name === "MOON"),
  );

  function handleDestination(choseDestination) {
    setSelectedDestination(
      destinations.find((destination) => destination.name === choseDestination),
    );
  }

  return (
    <div
      className={`no-scrollbar h-dvh desktop:overflow-hidden  w-screen overflow-y-scroll bg-mobile-background-destination bg-cover bg-center md:bg-tablet-background-destination lg:bg-desktop-background-destination`}
    >
      {children}
      <div className="mx-auto flex h-[1.1875rem] w-[13.8125rem] items-center justify-between md:mx-0 md:ml-[2.4375rem] md:mt-10 md:w-[17rem] lg:ml-[10.4063rem] lg:mt-[4.75rem] lg:w-[23.875rem]">
        <span className="font-barlowC text-base font-bold tracking-[0.1688rem] text-white/25 md:text-[1.25rem] md:tracking-[0.2112rem] lg:text-[1.75rem] lg:tracking-[0.295rem]">
          01
        </span>
        <span className="font-barlowC text-base tracking-[0.1688rem] text-white md:text-[1.25rem] md:tracking-[0.2112rem] lg:text-[1.75rem] lg:tracking-[0.295rem]">
          PICK YOUR DESTINATION
        </span>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center md:mt-[3.75rem] lg:mt-12 lg:h-[29.5rem] lg:flex-row lg:gap-[9.8125rem]">
        <img
          src={selectedDestination.image}
          className="mb-[1.625rem] h-[10.625rem] w-[10.625rem] md:mb-[3.3125rem] md:h-[18.75rem] md:w-[18.75rem] lg:mb-0 lg:h-[27.8125rem] lg:w-[27.8125rem] lg:self-end"
        />

        {/* selection and description */}
        <div className="flex flex-col items-center justify-center lg:h-[29.5rem] lg:w-[27.8125rem] lg:items-start">
          <ul className="flex h-7 w-[14.8125rem] justify-between font-barlowC text-sm tracking-[0.1475rem] text-[#D0D6F9] md:h-[2.125rem] md:text-base md:tracking-[0.1688rem] lg:w-[17.8438rem]">
            <li
              className={`border-b-[0.1875rem] ${selectedDestination.name === "MOON" ? "border-white" : "border-transparent"} cursor-pointer duration-300 hover:border-[#979797]`}
              onClick={() => handleDestination("MOON")}
            >
              MOON
            </li>
            <li
              className={`border-b-[0.1875rem] ${selectedDestination.name === "MARS" ? "border-white" : "border-transparent"} cursor-pointer duration-300 hover:border-[#979797]`}
              onClick={() => handleDestination("MARS")}
            >
              MARS
            </li>
            <li
              className={`border-b-[0.1875rem] ${selectedDestination.name === "EUROPA" ? "border-white" : "border-transparent"} cursor-pointer duration-300 hover:border-[#979797]`}
              onClick={() => handleDestination("EUROPA")}
            >
              EUROPA
            </li>
            <li
              className={`border-b-[0.1875rem] ${selectedDestination.name === "TITAN" ? "border-white" : "border-transparent"} cursor-pointer duration-300 hover:border-[#979797]`}
              onClick={() => handleDestination("TITAN")}
            >
              TITAN
            </li>
          </ul>

          {/* name */}
          <div className="mt-5 text-center font-bellefair text-[3.5rem] text-white md:mt-8 md:text-[5rem] lg:h-[7.1875rem] lg:text-[6.25rem]">
            {selectedDestination.name}
          </div>

          {/* details */}
          <div className="w-[20.4375rem] text-center font-barlow text-[0.9375rem] leading-[1.5625rem] text-[#D0D6F9] md:mt-2 md:w-[35.8125rem] md:text-base md:leading-7 lg:w-[27.75rem] lg:text-left lg:leading-8">
            {selectedDestination.details}
          </div>

          <hr className="mt-8 h-[0.0625rem] w-[20.4375rem] border-0 bg-[#383B4B] md:mt-[3.0625rem] md:w-[35.8125rem]" />

          <div className="mt-[1.8125rem] md:mb-[3.875rem] md:flex md:w-[35.8125rem] md:items-center md:justify-evenly lg:mb-0 lg:justify-start lg:gap-[4.9375rem]">
            <div className="my-8 flex h-[3.8125rem] flex-col items-center md:my-0 lg:items-start">
              <span className="font-barlowC text-[0.875rem] tracking-[0.1475rem] text-[#D0D6F9]">
                AVG. DISTANCE
              </span>
              <span className="mt-3 font-bellefair text-[1.75rem] text-white">
                {selectedDestination.averageDistance}
              </span>
            </div>

            <div className="mb-14 flex h-[3.8125rem] flex-col items-center md:mb-0 lg:items-start">
              <span className="font-barlowC text-[0.875rem] tracking-[0.1475rem] text-[#D0D6F9]">
                EST. TRAVEL TIME
              </span>
              <span className="mt-3 font-bellefair text-[1.75rem] text-white">
                {selectedDestination.estTravelTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
