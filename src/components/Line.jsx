import React from "react";
import "./styles.css";
import { useEffect, useRef } from "react";

function Line() {
  // https://codesandbox.io/s/intelligent-kare-yv6779?file=/src/App.js

  const homepage_logo_main_content = useRef(null);
  function animate_svg_on_scroll(value) {
    console.log("value", value);
    var homepage_logo_main_content_total_length =
      homepage_logo_main_content.current.getTotalLength(); // Getting the total length of the SVG path.
    homepage_logo_main_content.current.style.strokeDasharray =
      homepage_logo_main_content_total_length; // Get the starting position of the draw.
    homepage_logo_main_content.current.style.strokeDashoffset =
      homepage_logo_main_content_total_length;
    var draw = homepage_logo_main_content_total_length * value;
    homepage_logo_main_content.current.style.strokeDashoffset =
      homepage_logo_main_content_total_length - draw;
  }
  useEffect(() => {
    const handleScroll = (event) => {
      const value = window.scrollY / 1069;
      animate_svg_on_scroll(value);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className="homepage_main_div">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          viewBox="0 0 400.000000 400.000000"
          preserveAspectRatio="xMidYMid meet"
          className="homepage_logo"
        >
          <g
            transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)"
            fill="none"
            stroke="red"
            stroke-width="20"
          >
            <path
              id="tiger"
              d="M0 2000 l0 -2000 2000 0 2000 0 0 2000 0 2000 -2000 0 -2000 0 0 -2000z 2z"
              ref={homepage_logo_main_content}
            />
            <path d="M820 2176 c-25 -7 -61 -21 -80 -31 -54 -28 -148 -124 -187 -189 -32 -55 -83 -176 -83 -197 0 -15 265 -10 348 7 190 38 282 121 282 251 0 69 -21 110 -75 143 -45 28 -140 35 -205 16z" />
            <path d="M1800 1585 c0 -161 2 -186 16 -192 9 -3 20 0 25 8 5 8 8 93 6 189 -2 173 -2 175 -24 178 l-23 3 0 -186z" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Line;
