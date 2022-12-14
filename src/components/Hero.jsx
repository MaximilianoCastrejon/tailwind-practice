import React from "react";
import heroVid from "../assets/Waves - 71122.mp4";
import darkForest from "../assets/wallpaperflare.com_wallpaper.jpg";

function Hero() {
  return (
    <div className="w-full h-[100vh] top-24">
      <img
        className="fade__bottom object-cover h-[100vh] w-full left-0 absolute -z-20"
        src={darkForest}
        alt="Forest"
      ></img>
      <video
        className=" max-w-screen-xl fade__bottom polygon object-cover h-[100vh] w-full mx-auto left-0 right-0 absolute -z-10"
        autoPlay
        loop
        muted
      >
        <source src={heroVid} type="video/mp4" />
      </video>
      <div className="w-full h-full flex flex-col text-white justify-center items-center">
        <div className="backdrop-blur-xl shadow-2xl bg-[#94a89a66] rounded-lg p-2 text-center">
          <h1 className="text-lg lg:text-xl xl:text-3xl font-bold lg:font-extrabold">
            <span className="text-[var(--morning-blue)] text-lg lg:text-xl xl:text-3xl font-bold lg:font-extrabold underline">
              Calm waves
            </span>{" "}
            and{" "}
          </h1>
          <h1 className="text-lg lg:text-xl xl:text-3xl font-bold lg:font-extrabold">
            <span className="text-[var(--olivine)] text-lg lg:text-xl xl:text-3xl font-bold lg:font-extrabold underline">
              Cloudy days
            </span>{" "}
            all the way
          </h1>
        </div>
        <div className="w-72 h-72 lg:h-[22rem] lg:w-[22rem] xl:h-[30rem] xl:w-[30rem] relative mx-auto my-4 ">
          <div className="backdrop-blur-xl circle-shape rounded-full realtive h-full w-full bg-[#6e875166] text-white m-0 ">
            <p className="text-lg lg:text-2xl xl:text-4xl h-full text-center p-0 shadow-2xl rounded-full italic">
              "We think that{" "}
              <span className=" text-[var(--khaki-web-light)] font-extrabold">
                relaxing
              </span>{" "}
              and enjoying the comfort of the nightly climate is the best for
              your health, both{" "}
              <span className=" text-[var(--medium-carmine)] font-extrabold">
                mental
              </span>{" "}
              and{" "}
              <span className="text-[var(--medium-carmine-light)] font-extrabold">
                physical
              </span>
              "
            </p>
          </div>
        </div>
        <div className="w-full text-center max-w-screen-md flex justify-between px-6">
          <button className="sm:min-w-[180px] max-sm:w-[90px]">
            Learn about nature
          </button>
          <button className="sm:min-w-[180px] max-sm:max-w-[90px]">FAQ</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
