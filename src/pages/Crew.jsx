import AnoushehAnsari from "../assets/crew/image-anousheh-ansari.webp";
import DouglasHurley from "../assets/crew/image-douglas-hurley.webp";
import MarkShuttleworth from "../assets/crew/image-mark-shuttleworth.webp";
import VictorGlover from "../assets/crew/image-victor-glover.webp";
import { useState, useEffect } from "react";

const slides = [
  {
    name: "DOUGLAS HURLEY",
    image: DouglasHurley,
    position: "COMMANDER",
    details:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "MARK SHUTTLEWORTH",
    image: MarkShuttleworth,
    position: "MISSION SPECIALIST",
    details:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "VICTOR GLOVER",
    image: VictorGlover,
    position: "PILOT",
    details:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  },
  {
    name: "ANOUSHEH ANSARI",
    image: AnoushehAnsari,
    position: "FLIGHT ENGINEER",
    details:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
  },
];

export default function Crew({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleSlide(slide) {
    setCurrentSlide(slide);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="no-scrollbar h-screen w-screen overflow-y-scroll bg-mobile-background-crew bg-cover bg-center md:bg-tablet-background-crew lg:bg-desktop-background-crew">
      {children}

      <div className="flex h-[1.1875rem] justify-center gap-4 md:ml-[2.4375rem] md:mt-4 md:block md:h-6 lg:ml-[166.5px] lg:mt-[3rem] lg:h-[2.125rem]">
        <span className="font-barlowC text-base font-bold tracking-[0.1688rem] text-white/25 md:text-[1.25rem] md:tracking-[0.2112rem] lg:text-[1.75rem] lg:tracking-[0.295rem]">
          02
        </span>
        <span className="font-barlowC text-base tracking-[0.1688rem] text-white md:ml-4 md:text-[1.25rem] md:tracking-[0.2112rem] lg:ml-7 lg:text-[1.75rem] lg:tracking-[0.295rem]">
          MEET YOUR CREW
        </span>
      </div>

      <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start lg:gap-5">
        <div className="mt-4 flex items-center justify-center md:order-3 md:mt-0">
          <img
            src={slides[currentSlide].image}
            className="h-[13.875rem] w-[11.0625rem] md:h-[35.75rem] md:w-[28.5rem] lg:overflow-hidden"
          />
        </div>

        <div className="flex flex-col lg:w-[614px] lg:gap-[5rem]">
          {/* button */}
          <div className="my-8 flex justify-center gap-4 md:order-2 md:my-10 lg:mt-0 lg:self-start">
            <button
              className={`h-[0.625rem] w-[0.625rem] rounded-full ${currentSlide === 0 ? "bg-white" : "bg-white/[0.17]"} hover:bg-white/50`}
              onClick={() => handleSlide(0)}
            ></button>
            <button
              className={`h-[0.625rem] w-[0.625rem] rounded-full ${currentSlide === 1 ? "bg-white" : "bg-white/[0.17]"} hover:bg-white/50`}
              onClick={() => handleSlide(1)}
            ></button>
            <button
              className={`h-[0.625rem] w-[0.625rem] rounded-full ${currentSlide === 2 ? "bg-white" : "bg-white/[0.17]"} hover:bg-white/50`}
              onClick={() => handleSlide(2)}
            ></button>
            <button
              className={`h-[0.625rem] w-[0.625rem] rounded-full ${currentSlide === 3 ? "bg-white" : "bg-white/[0.17]"} hover:bg-white/50`}
              onClick={() => handleSlide(3)}
            ></button>
          </div>

          {/* description */}
          <div className="flex flex-col items-center justify-center md:order-1 md:mt-[3.75rem] lg:mt-[9.625rem] lg:items-start">
            <div className="mb-2 h-[1.125rem] font-bellefair text-base text-white/50 md:h-7 md:text-[1.5rem] lg:mb-[0.9375rem] lg:h-[2.3125rem] lg:text-[2rem]">
              {slides[currentSlide].position}
            </div>
            <div className="mb-4 h-7 font-bellefair text-2xl text-white md:flex md:h-[2.875rem] md:items-center md:text-[2.5rem] lg:mb-[1.6875rem] lg:h-16 lg:text-[56px]">
              {slides[currentSlide].name}
            </div>
            <div className="h-[6.25rem] w-[20.4375rem] text-center font-barlow text-[0.9375rem] leading-[1.5625rem] text-[#D0D6F9] md:h-[5.25rem] md:w-[37rem] md:text-base md:leading-[1.75rem] lg:h-[8rem] lg:text-left lg:text-[1.125rem] lg:leading-8">
              {slides[currentSlide].details}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
