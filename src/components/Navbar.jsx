import logo from "../assets/shared/logo.svg";
import hamburgerIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  let location = useLocation();
  let currentPath = location.pathname.split("/").pop();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(currentPath || "home");
  const [sideBar, setSideBar] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setSideBar(!sideBar);
  };
  const toggleActive = (button) => {
    if (button === activeButton) {
      return;
    }
    setActiveButton((prevActiveButton) =>
      button === prevActiveButton ? null : button,
    );
  };

  return (
    <>
      <div className="flex h-24 items-center lg:h-[8.5rem] lg:pl-[3.4375rem] lg:pt-10">
        {/* logo */}
        <Link to="/">
          <img src={logo} className="ml-6 md:ml-[2.4375rem] lg:ml-0" />
        </Link>

        {/* <hr className=" z-30 ml-[10.4375rem] mr-[50rem] hidden h-[0.0625rem] w-[calc(100%-62.5rem)] border-0 bg-white/25 outline-[#979797] lg:block" /> */}

        <img
          src={hamburgerIcon}
          className={`ml-auto mr-6 h-[1.3125rem] w-[1.5rem] cursor-pointer md:hidden ${sideBar ? "hidden" : "block"}`}
          onClick={toggleMenu}
        />

        {/* nav menu */}
        <div className="hidden h-24 w-[28.125rem] bg-white/[0.04] text-white md:ml-auto md:flex md:items-center md:justify-center md:gap-[2.5rem] lg:w-[51.875rem] lg:backdrop-blur-lg">
          <ul className="flex h-full items-center justify-center gap-[2.3125rem] lg:w-[33.875rem] lg:gap-12">
            <li
              className={`border-b-[3px] md:flex md:h-full md:items-center ${activeButton === "home" ? "border-white" : "border-transparent"} duration-300 hover:border-[#979797]`}
              onClick={() => toggleActive("home")}
            >
              <Link to="/" className="lg:flex">
                <span className="font-barlowC text-base tracking-[0.1688rem] md:hidden lg:mr-[0.75rem] lg:block">
                  00
                </span>
                <span className="font-barlowC text-sm tracking-[0.1688rem] lg:text-base">
                  Home
                </span>
              </Link>
            </li>
            <li
              className={`border-b-[0.1875rem] md:flex md:h-full md:items-center ${activeButton === "destination" ? "border-white" : "border-transparent"} duration-300 hover:border-[#979797] lg:mx-12`}
              onClick={() => toggleActive("destination")}
            >
              <Link to="/destination" className="lg:flex">
                <span className="font-barlowC text-base tracking-[0.1688rem] md:hidden lg:mr-[0.75rem] lg:block">
                  00
                </span>
                <span className="font-barlowC text-sm tracking-[0.1688rem] lg:text-base">
                  Destination
                </span>
              </Link>
            </li>
            <li
              className={`border-b-[0.1875rem] md:flex md:h-full md:items-center ${activeButton === "crew" ? "border-white" : "border-transparent"} duration-300 hover:border-[#979797] lg:mr-12`}
              onClick={() => toggleActive("crew")}
            >
              <Link to="/crew" className="lg:flex">
                <span className="font-barlowC text-base tracking-[0.1688rem] md:hidden lg:mr-[0.75rem] lg:block">
                  00
                </span>
                <span className="font-barlowC text-sm tracking-[0.1688rem] lg:text-base">
                  Crew
                </span>
              </Link>
            </li>
            <li
              className={`border-b-[0.1875rem] md:flex md:h-full md:items-center ${activeButton === "tech" ? "border-white" : "border-transparent"} duration-300 hover:border-[#979797]`}
              onClick={() => toggleActive("tech")}
            >
              <Link to="/technology" className="lg:flex">
                <span className="font-barlowC text-base tracking-[0.1688rem] md:hidden lg:mr-[0.75rem] lg:block">
                  00
                </span>
                <span className="font-barlowC text-sm tracking-[0.1688rem] lg:text-base">
                  Technology
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* check if Menu is clicked to open sidebar */}
      {isMenuOpen ? (
        <div className="fixed right-0 top-0 z-[1] h-screen w-[254px] translate-x-0 bg-white/[.04] opacity-100 backdrop-blur-xl duration-500">
          <div className="flex h-[6rem] items-center p-[1.5rem]">
            <img
              src={closeIcon}
              className="ml-auto h-[1.3125rem] w-[1.5rem] cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <ul className="ml-8 mt-[0.375rem] overflow-hidden">
            <li>
              <Link to="/">
                <span className="font-barlow text-base font-bold tracking-[0.1688rem] text-white">
                  00
                </span>
                <span className="ml-3 font-barlowC text-base tracking-[0.1688rem] text-white md:text-sm md:leading-[1.0625rem] md:tracking-[0.1475rem]">
                  HOME
                </span>
              </Link>
            </li>
            <li className="mt-8">
              <Link to="/destination">
                <span className="font-barlow text-base font-bold tracking-[0.1688rem] text-white">
                  01
                </span>
                <span className="ml-3 font-barlowC text-base tracking-[0.1688rem] text-white">
                  DESTINATION
                </span>
              </Link>
            </li>
            <li className="mt-8">
              <Link to="/crew">
                <span className="font-barlow text-base font-bold tracking-[0.1688rem] text-white">
                  02
                </span>
                <span className="ml-3 font-barlowC text-base tracking-[0.1688rem] text-white">
                  CREW
                </span>
              </Link>
            </li>
            <li className="mt-8">
              <Link to="/technology">
                <span className="font-barlow text-base font-bold tracking-[0.1688rem] text-white">
                  03
                </span>
                <span className="ml-3 font-barlowC text-base tracking-[0.1688rem] text-white">
                  TECHNOLOGY
                </span>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="fixed right-0 top-0 z-[1] h-screen w-[15.875rem] translate-x-full bg-white/[.04] backdrop-blur-xl duration-500"></div>
      )}
    </>
  );
}
