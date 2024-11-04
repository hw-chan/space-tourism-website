import launchVehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import launchVehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceCapsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";
import spaceCapsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg";
import spaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg";
import { useState, useEffect } from "react";

const slides = [
  {
    imageLandscape: launchVehicleLandscape,
    imagePortrait: launchVehiclePortrait,
    name: "LAUNCH VEHICLE",
    details:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    imageLandscape: spaceportLandscape,
    imagePortrait: spaceportPortrait,
    name: "SPACEPORT",
    details:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    imageLandscape: spaceCapsuleLandscape,
    imagePortrait: spaceCapsulePortrait,
    name: "SPACE CAPSULE",
    details:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

export default function Technology({ children }) {
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
    <div className="no-scrollbar h-screen w-screen overflow-y-scroll bg-mobile-background-technology bg-cover bg-center md:bg-tablet-background-technology lg:bg-desktop-background-technology">
      {/* navbar */}
      {children}

      {/* title */}
      <div className="flex h-[1.1875rem] items-center justify-center gap-4 md:ml-[2.4375rem] md:mt-10 md:block md:h-6">
        <span className="font-barlowC text-base font-bold tracking-[0.1688rem] text-white/25 md:text-[1.25rem] md:tracking-[0.2112rem]">
          03
        </span>
        <span className="font-barlowC text-base tracking-[0.1688rem] text-white md:ml-4 md:text-[1.25rem] md:tracking-[0.2112rem]">
          SPACE LAUNCH 101
        </span>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center md:mt-[3.75rem] md:mb-[6.0625rem]">
        <picture>
          <source
            srcSet={slides[currentSlide].imagePortrait}
            media="(min-width: 1440px)"
          />
          <img src={slides[currentSlide].imageLandscape} />
        </picture>

        {/* button */}
        <div className="mt-[2.125rem] flex items-center justify-center gap-4">
          <button
            className={`h-10 w-10 rounded-full border border-[#979797] ${currentSlide === 0 ? "bg-white" : "bg-transparent"} hover:border-white`}
            onClick={() => handleSlide(0)}
          >
            <span
              className={`font-bellefair text-base ${currentSlide === 0 ? "text-black" : "text-white"}`}
            >
              1
            </span>
          </button>
          <button
            className={`h-10 w-10 rounded-full border border-[#979797] ${currentSlide === 1 ? "bg-white" : "bg-transparent"} hover:border-white`}
            onClick={() => handleSlide(1)}
          >
            <span
              className={`font-bellefair text-base ${currentSlide === 1 ? "text-black" : "text-white"}`}
            >
              2
            </span>
          </button>
          <button
            className={`h-10 w-10 rounded-full border border-[#979797] ${currentSlide === 2 ? "bg-white" : "bg-transparent"} hover:border-white`}
            onClick={() => handleSlide(2)}
          >
            <span
              className={`font-bellefair text-base ${currentSlide === 2 ? "text-black" : "text-white"}`}
            >
              3
            </span>
          </button>
        </div>

        {/* details */}
        <div className="mt-[1.625rem] flex flex-col items-center justify-center">
          <span className="font-barlowC text-[0.875rem] tracking-[0.1475rem] text-[#D0D6F9]">
            THE TERMINOLOGY...
          </span>

          <span className="mt-[0.5625rem] h-7 font-bellefair text-2xl text-white">
            {slides[currentSlide].name}
          </span>

          <span className="mt-4 w-[20.4375rem] text-center font-barlow text-[0.9375rem] leading-[1.5625rem] text-[#D0D6F9]">
            {slides[currentSlide].details}
          </span>
        </div>
      </div>
    </div>
  );
}
