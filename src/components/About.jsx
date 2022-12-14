import React, { useRef, useEffect } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

function About() {
  const refPath = useRef(null);
  const refSection = useRef(null);
  // https://codesandbox.io/s/intelligent-kare-yv6779?file=/src/App.js

  useDrawOnScroll(refPath, refSection);

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("../assets", false, /\.(png|jpe?g)$/)
  );
  console.log(images["card-image-1.jpg"]);
  return (
    <section ref={refSection}>
      <div className="text-white relative text-left max-w-screen-xl mx-auto fade__top px-4 py-12 ">
        <div className="absolute left-0 m-0 text-center overflow-hidden h-full w-full">
          <svg
            className="h-full inline-block"
            viewBox="25 0 381 554.3"
            preserveAspectRatio="xMidYMax"
          >
            <path
              ref={refPath}
              d="m190.5 0.13229s83.911 15.743 133.05 75.463c49.137 59.72-60.476 52.917-82.399 39.31-21.923-13.607-111.12-71.815-143.63 12.095-32.506 83.911 63.5 71.06 86.179 57.452s121.71-26.458 152.7-11.339c30.994 15.119 39.31 40.821 25.702 86.179-13.607 45.357-164.04 27.214-128.51-19.655 35.53-46.869 74.083-27.97 89.958-2.2678 15.875 25.702 30.238 37.798 22.679 102.05-7.5595 64.256-46.869 3.7798-156.48 2.2679-109.61-1.5119-92.982 99.786-81.643 103.57 11.339 3.7798 113.39 46.869 85.423 110.37"
              fill="none"
              className="neon blur-[1px]"
              stroke="#6e8751"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <div className="flex my-16 justify-between">
          <h1 className="relative w-48 sm:w-72 lg:w-96 mx-4 text-4xl sm:text-5xl lg:text-6xl ">
            What{" "}
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold lg:font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-[var(--medium-carmine)] from-[var(--khaki-web)]">
              relaxes
            </span>{" "}
            the{" "}
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold lg:font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-[var(--olivine)] from-[var(--morning-blue-dark)]">
              mind
            </span>
            ?
            <div className="absolute bottom-0 left-0 border w-full rounded-full bg-slate-300 border-slate-300"></div>
          </h1>
          <p className="w-52 sm:w-64 lg:w-96 text-base sm:text-lg mx-4 text-left">
            We know peace comes from within, but cannot negate the fact that it
            is easier for use to find it while we are in one of these types of
            locations
          </p>
        </div>
        <div className="about__cards justify-items-center grid-cols-1 lg:grid-cols-4 sm:grid-cols-2  grid gap-4 m-4">
          <div className="">
            <img
              className="about-card__image"
              src={images["card-image-1.jpg"]}
              alt="forest"
            ></img>
            <h2>Dark Forest</h2>
            <p>
              It's a place of peace and solitude, where the sounds of nature
              could be heard and the stress of the outside world melted away.
            </p>
          </div>
          <div className="">
            <img
              className="about-card__image"
              src={images["card-image-2.jpg"]}
              alt="forest"
            ></img>
            <h2>Plesant Beaches</h2>
            <p>
              These offer calm and relaxation, with the sound of the waves and
              the warmth of the sun providing a sense of peace.
            </p>
          </div>
          <div className="">
            <img
              className="about-card__image"
              src={images["card-image-3.jpg"]}
              alt="forest"
            ></img>
            <h2>Snowy Forest</h2>
            <p>
              Provide a sense of serenity, with the crisp, white snow covering
              the ground and the tall trees creating a peaceful atmosphere.
            </p>
          </div>
          <div className="">
            <img
              className="about-card__image"
              src={images["card-image-4.jpg"]}
              alt="forest"
            ></img>
            <h2>Mellow Desserts</h2>
            <p>
              Mellow deserts provide a sense of tranquility, with the vast
              expanse of sand and the warm sun creating a peaceful atmosphere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

function useDrawOnScroll(refPath, refSection) {
  function animate_svg_on_scroll(value) {
    // console.log("value", value);
    var pathLength = refPath.current.getTotalLength(); //Total length of SVG path
    refPath.current.style.strokeDasharray = pathLength;
    refPath.current.style.strokeDashoffset = pathLength; //Starting position of drawing
    //Because it is not cyclycal, Scroll of total page is what is needed instead of how many laps have been completed (value)
    var drawLength = pathLength * value;
    refPath.current.style.strokeDashoffset = pathLength - drawLength; //Setting offset
  }
  useEffect(() => {
    const size = refSection.current.offsetHeight,
      offset = (40 * document.documentElement.clientHeight) / 100;

    const handleScroll = (event) => {
      const relativeScrollPosition =
        refSection.current.getBoundingClientRect().top;

      const { animationStart, animationStop } = getAnimation(
        relativeScrollPosition,
        offset,
        size
      );

      if (animationStart <= 0 && -relativeScrollPosition <= animationStop) {
        const value = (-relativeScrollPosition + offset) / size;
        animate_svg_on_scroll(value);
      }
      // const value =
      //   window.scrollY / (DOCUMENT_TOTAL_HEIGHT + VIEW_HEIGHT_UNITS); //Start counting from:
    };
    window.addEventListener("scroll", handleScroll);

    const getAnimation = (relativeScrollPosition, offset, size) => {
      const animationStart = relativeScrollPosition - offset;
      const animationStop = size + offset;
      return { animationStart, animationStop };
    };

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animate_svg_on_scroll, refSection]);
}

// console.log(0);

// const [pathHeight, setPathHeight] = useState(0);
// const [svgStrokeDashoffset, setStrokeDashoffset] = useState(pathHeight);

// window.addEventListener("scroll", () => {
//   var scrollPercentage =
//     document.documentElement.scrollTop +
//     document.body.scrollTop /
//       (document.documentElement.scrollHeight -
//         document.documentElement.clientHeight);
//   var drawLength = pathHeight * scrollPercentage;
//   console.log(drawLength);
//   setStrokeDashoffset(pathHeight - drawLength);
// });

// useEffect(() => {
//   // Set the page height when the component mounts
//   refPath.current.style.strokeDasharray = pathHeight + "" + pathHeight;
//   // refPath.current.style.strokeDashoffset = ;
//   // refPath.current.style.strokeDashoffset = svgStrokeDashoffset;

//   console.log(document.documentElement.clientHeight);

//   const height = refPath.current.getTotalLength();
//   setPathHeight(height);
// }, [svgStrokeDashoffset]);
