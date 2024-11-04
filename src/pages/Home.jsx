import { Link, useNavigate } from "react-router-dom";

export default function Home({ children }) {
  const navigate = useNavigate();

  function handleExplore() {
    navigate("/destination");
  }

  return (
    <div
      className={`no-scrollbar h-screen w-full overflow-y-scroll bg-mobile-background-home bg-cover bg-center md:bg-tablet-background-home lg:h-screen lg:bg-desktop-background-home`}
    >
      {children}
      <div className="flex items-center justify-center">
        <div className="m-[3rem] flex flex-col items-center justify-center md:mx-[9.9375rem]  md:mt-[106px] md:w-[28.125rem] lg:h-[23.875rem] lg:w-[69.375rem] lg:flex-row lg:justify-between">
          <div className="flex-col lg:w-[28.125rem]">
            <p className="text-center font-barlowC text-base leading-[1.1875rem] tracking-[0.1688rem] text-[#D0D6F9] md:text-xl md:tracking-[0.2112rem] lg:my-6 lg:text-left lg:text-[1.75rem] lg:tracking-[0.295rem]">
              SO, YOU WANT TO TRAVEL TO
            </p>
            <p className="my-4 text-center font-bellefair text-[5rem] leading-[6.25rem] text-white md:mt-6 md:text-[9.375rem] md:leading-[9.375rem] lg:text-left lg:text-[9.375rem]">
              SPACE
            </p>
            <p className="text-center font-barlow text-[0.9375rem] leading-[1.5625rem] text-[#D0D6F9] lg:text-left lg:text-[1.125rem] lg:leading-[2rem]">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <Link
            to="/destination"
            className="z-10 mt-[5.0625rem] flex h-[9.375rem] w-[9.375rem] items-center justify-center rounded-full bg-white md:h-[15.125rem] md:w-[15.125rem]"
          >
            <span
              className="font-bellefair text-[1.25rem] tracking-[0.0781rem] text-[#0B0D17] lg:text-[2rem]"
              onClick={handleExplore}
            >
              EXPLORE
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
