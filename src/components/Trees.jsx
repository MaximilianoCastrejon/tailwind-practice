import React, { useEffect, useRef } from "react";
import treeline1 from "../assets/treeline-1.png";
import treeline2 from "../assets/treeline-2.png";
import treeline3 from "../assets/treeline-3.png";
import treeline4 from "../assets/treeline-4.png";
import treeline5 from "../assets/treeline-5.png";
import books from "../assets/books.png";
import reusableImg from "../assets/1-reusable-bags.png";
import recycleImg from "../assets/2-recycle.png";
import greenCompaniesImg from "../assets/3-green-companies.png";
import energyEfficientImg from "../assets/5-energy-efficient.png";
import supportImg from "../assets/volunteer.png";
import transportationImg from "../assets/7-transportation.png";
import vocalImg from "../assets/8-raise-your-voice.png";
import waterWasteImg from "../assets/4-water-waste.png";

import EnvAction from "./EnvAction";

function Trees() {
  const refPath = useRef();
  const refSection = useRef();
  useDrawOnScroll(refPath, refSection);
  return (
    <section>
      <div
        ref={refSection}
        // onScroll={handleScroll}
        className=" overflow__scrollbar parallax__wrapper w-full h-[100vh] overflow-x-hidden overflow-y-scroll relative"
      >
        {/* Available space (lg:h-[700px] || md:h-[500px] || h-[300px])* 5 img */}
        <div className=" text-white w-full h-[300vh] lg:h-[400vh] absolute top-4 -z-10">
          <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl">
            How can you help maintain these ecosystems?
          </h1>
          {/* TODO: Make component
          https://oceanservice.noaa.gov/ocean/earthday.html
          */}

          <EnvAction
            actions={[
              {
                image: reusableImg,
                title: "Going green doesn't have to be difficult!",
                copy: "Try simple strategies like using reusable bags and water bottles to reduce waste. Your actions can make a big difference for the environment.",
              },
              {
                image: recycleImg,
                title: "Reduce, reuse, recycle!",
                copy: "These three simple words can guide you on your journey to becoming more environmentally friendly. Start by sorting your trash and making sure to recycle as much as possible.",
              },
              {
                image: greenCompaniesImg,
                title: "Support environmentally conscious companies",
                copy: "By choosing to support these companies, you can help drive change and protect the environment.",
              },
              {
                image: waterWasteImg,
                title: "Reduce your water usage",
                copy: "Simple actions like fixing leaks and only running your dishwasher and washing machine with full loads can save a significant amount of water.",
              },
              {
                image: energyEfficientImg,
                title: "Switch to energy-efficient products",
                copy: "From lightbulbs to appliances, there are many products on the market that can help you save energy and reduce your carbon footprint.",
              },
              {
                image: transportationImg,
                title: "Consider alternative forms of transportation",
                copy: "Walking, biking, and using public transportation can greatly reduce your impact on the environment.",
              },
              {
                image: supportImg,
                title: "Support conservation efforts",
                copy: "Donate to organizations that are working to protect our natural resources and preserve wildlife habitats.",
              },
              {
                image: books,
                title: "Educate yourself and others",
                copy: "The more we know about the challenges facing the environment, the better equipped we will be to take action and make a difference.",
              },
              {
                image: vocalImg,
                title: "Be a vocal advocate for the environment",
                copy: "Speak up and let your elected officials know that protecting the environment is important to you. Together, we can create real change for the better.",
              },
            ]}
          ></EnvAction>
          <div className="flex h-[10%] my-8 md:my-16 justify-around"></div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          viewBox="0 0 400.000000 400.000000"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          className="w-full h-full sticky top-0"
        >
          <g
            transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)"
            fill="none"
            stroke="#6e8751aa"
            strokeWidth="20"
          >
            <path
              id="tiger"
              d="M0 2000 l0 -2000 2000 0 2000 0 0 2000 0 2000 -2000 0 -2000 0 0 -2000z 2z"
              ref={refPath}
            />
          </g>
        </svg>
        <img
          id="line-1"
          className="object-cover w-full md:h-[60vh] h-[40vh] md:top-[40vh] top-[60vh]  -z-[1]"
          src={treeline1}
          alt=""
        />
        <img
          id="line-2"
          className="w-full md:h-[60vh] h-[40vh] md:top-[40vh] top-[60vh]  -z-[2]"
          src={treeline2}
          alt=""
        />
        <img
          id="line-3"
          className="w-full md:h-[60vh] h-[40vh] md:top-[40vh] top-[60vh]  -z-[3]"
          src={treeline3}
          alt=""
        />
        <img
          id="line-4"
          className="w-full md:h-[60vh] h-[40vh] md:top-[40vh] top-[60vh]  -z-[4]"
          src={treeline4}
          alt=""
        />
        <img
          id="line-5"
          className="w-full md:h-[60vh] h-[40vh] md:top-[40vh] top-[60vh]  -z-[5]"
          src={treeline5}
          alt=""
        />
      </div>
    </section>
  );
}

export default Trees;

function useDrawOnScroll(refPath, refSection) {
  function animate_svg_on_scroll(value) {
    var pathLength = refPath.current.getTotalLength(); //Total length of SVG path
    refPath.current.style.strokeDasharray = pathLength;
    refPath.current.style.strokeDashoffset = pathLength; //Starting position of drawing
    //Because it is not cyclycal, Scroll of total page is what is needed instead of how many laps have been completed (value)
    var drawLength = pathLength * value;
    refPath.current.style.strokeDashoffset = pathLength - drawLength; //Setting offset
  }
  useEffect(() => {
    const size = refSection.current.scrollHeight,
      offset = (0 * document.documentElement.clientHeight) / 100,
      maxScroll = size - refSection.current.clientHeight;

    const handleScroll = (event) => {
      const currentScroll_px = refSection.current.scrollTop;
      const value = (currentScroll_px + offset) / maxScroll;
      animate_svg_on_scroll(value);
    };
    refSection.current.addEventListener("scroll", handleScroll);

    return () => {
      refSection.current.removeEventListener("scroll", handleScroll);
    };
  }, [animate_svg_on_scroll, refSection]);
}

// import React, { useEffect, useRef } from "react";
// import treeline1 from "../assets/treeline-1.png";
// import treeline2 from "../assets/treeline-2.png";
// import treeline3 from "../assets/treeline-3.png";
// import treeline4 from "../assets/treeline-4.png";
// import treeline5 from "../assets/treeline-5.png";
// import books from "../assets/books.png";

// function Trees() {
//   const refPath = useRef();
//   const refSection = useRef();
//   useDrawOnScroll(refPath, refSection);
//   return (
//     <section>
//       <div
//         ref={refSection}
//         // onScroll={handleScroll}
//         className="parallax__wrapper lg:h-[700px] md:h-[500px] h-[700px] overflow-x-hidden overflow-y-scroll relative"
//       >
//         {/* Available space (lg:h-[700px] || md:h-[500px] || h-[300px])* 5 img */}
//         <div className="text-white w-full h-[2800px] absolute top-4 -z-10">
//           <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl">
//             How can you help maintain these ecosystems?
//           </h1>
//           {/* TODO: Make component
//           https://oceanservice.noaa.gov/ocean/earthday.html
//           */}
//           <div className="flex h-[7%] my-8 md:my-16 justify-around">
//             <div className="w-52 flex justify-center sm:w-64 lg:w-96 h-full">
//               <img
//                 src={books}
//                 alt="protection_png"
//                 className="help-action-img__dropshadow max-h-[100%] max-w-[100%]"
//               />
//             </div>
//             <div className="w-52 sm:w-64 lg:w-96">
//               <h1 className=" text-xl sm:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-[var(--medium-carmine)] from-[var(--khaki-web)]">
//                 Shop Wisely
//               </h1>
//               <p className=" text-base sm:text-lg text-left">
//                 Buy less plastic
//               </p>
//             </div>
//           </div>
//           <div>Holaaaaaaa</div>
//           <div>Holaaaaaaa</div>
//           <div>Holaaaaaaa</div>
//           <div>Holaaaaaaa</div>
//           <div>Holaaaaaaa</div>
//           <div>Holaaaaaaa</div>
//           <div>Holaaaaaaa</div>
//           <div>Holaaaaaaa</div>
//           <div>Holaaaaaaa</div>
//           <div>Holaaaaaaa</div>
//           <div>Holaaaaaaa</div>
//           <div>Holaaaaaaa</div>
//           <div>Holaaaaaaa</div>
//           <div>Holaaaaaaa</div>
//           <div>Holaaaaaaa</div>
//           <div>Holaaaaaaa</div>
//           <div>Holaaaaaaa</div>
//           <div>Holaaaaaaa</div>
//           <div>Holaaaaaaa</div>
//           <div>Holaaaaaaa</div>
//           <div>Holaaaaaaa</div>
//         </div>

//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           version="1.0"
//           viewBox="0 0 400.000000 400.000000"
//           preserveAspectRatio="none"
//           width="100%"
//           height="100%"
//           className="w-full h-full sticky top-0"
//         >
//           <g
//             transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)"
//             fill="none"
//             stroke="#6e8751aa"
//             strokeWidth="20"
//           >
//             <path
//               id="tiger"
//               d="M0 2000 l0 -2000 2000 0 2000 0 0 2000 0 2000 -2000 0 -2000 0 0 -2000z 2z"
//               ref={refPath}
//             />
//           </g>
//         </svg>
//         <img
//           id="line-1"
//           className="object-cover lg:h-[700px] md:h-[500px] h-[300px] -z-[1]"
//           src={treeline1}
//           alt=""
//         />
//         <img
//           id="line-2"
//           className="lg:h-[700px] md:h-[500px] h-[300px] -z-[2]"
//           src={treeline2}
//           alt=""
//         />
//         <img
//           id="line-3"
//           className="lg:h-[700px] md:h-[500px] h-[300px] -z-[3]"
//           src={treeline3}
//           alt=""
//         />
//         <img
//           id="line-4"
//           className="lg:h-[700px] md:h-[500px] h-[300px] -z-[4]"
//           src={treeline4}
//           alt=""
//         />
//         <img
//           id="line-5"
//           className="lg:h-[700px] md:h-[500px] h-[300px] -z-[5]"
//           src={treeline5}
//           alt=""
//         />
//       </div>
//     </section>
//   );
// }

// export default Trees;

// function useDrawOnScroll(refPath, refSection) {
//   function animate_svg_on_scroll(value) {
//     var pathLength = refPath.current.getTotalLength(); //Total length of SVG path
//     refPath.current.style.strokeDasharray = pathLength;
//     refPath.current.style.strokeDashoffset = pathLength; //Starting position of drawing
//     //Because it is not cyclycal, Scroll of total page is what is needed instead of how many laps have been completed (value)
//     var drawLength = pathLength * value;
//     refPath.current.style.strokeDashoffset = pathLength - drawLength; //Setting offset
//   }
//   useEffect(() => {
//     const size = refSection.current.scrollHeight,
//       offset = (0 * document.documentElement.clientHeight) / 100,
//       maxScroll = size - refSection.current.clientHeight;

//     const handleScroll = (event) => {
//       const currentScroll_px = refSection.current.scrollTop;
//       const value = (currentScroll_px + offset) / maxScroll;
//       animate_svg_on_scroll(value);
//     };
//     refSection.current.addEventListener("scroll", handleScroll);

//     return () => {
//       refSection.current.removeEventListener("scroll", handleScroll);
//     };
//   }, [animate_svg_on_scroll, refSection]);
// }
