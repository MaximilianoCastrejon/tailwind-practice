import React, { useState, useRef } from "react";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const menuRef = useRef();

  return (
    <div>
      <nav className="w-full h-24 bg-black">
        <div
          id="nav-content"
          className="max-w-screen-xl mx-auto px-8 lg:px-3 flex justify-between items-center h-full"
        >
          <div className="lg:w-max lg:p-2 lg-max:w-[8ch] flex flex-wrap text-center">
            <h1 className="text-[var(--yellow-green-crayola-dark)] italic uppercase nav__title">
              Into the dark
            </h1>
          </div>
          <section
            className={` MOBILE-MENU flex lg:hidden ${
              isNavOpen ? "hidden" : "block"
            }`}
          >
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 animate-pulse-slow bg-white"></span>
              <span className="block h-0.5 w-8 animate-pulse-slow bg-white"></span>
              <span className="block h-0.5 w-8 animate-pulse-slow bg-white"></span>
            </div>
          </section>
          <div
            ref={menuRef}
            className={`relative lg:hidden ${
              isNavOpen ? "showMenuNav" : "hideMenuNav hidden"
            }`}
          >
            <div
              className="CROSS-ICON-CANVAS "
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              {/* X SVG with 32px canvas size*/}
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="28" y1="4" x2="4" y2="28" />
                <line x1="4" y1="4" x2="28" y2="28" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-center text-center absolute top-10 right-0 rounded-b-xl rounded-tl-3xl bg-[var(--yellow-green-crayola-light)] w-72 min-h-[250px]">
              <li className=" w-full  py-2 uppercase">Platform</li>
              <div className="border-b mb-2 border-gray-400 w-10 h-0 m-0 p-0"></div>
              <li className=" w-full  py-2 uppercase">Developers</li>
              <div className="border-b mb-2 border-gray-400 w-10 h-0 m-0 p-0"></div>
              <li className=" w-full  py-2 uppercase">Community</li>
              <div className="border-b mb-2 border-gray-400 w-10 h-0 m-0 p-0"></div>
              <li className=" w-full  py-2 uppercase">About</li>
              <div className="border-b mb-2 border-gray-400 w-10 h-0 m-0 p-0"></div>
            </ul>
          </div>
          {/* <div className="relative w-full lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
              <option>ReactJS Dropdown</option>
              <option>Laravel 9 with React</option>
              <option>React with Tailwind CSS</option>
              <option>React With Headless UI</option>
            </select>
          </div> */}

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-white">
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button className="header__btn ml-4 bg-[var(--yellow-green-crayola-dark)] hover:bg-[var(--morning-blue-dark)] text-white font-medium py-1 px-3 border-b-4 border-[var(--olivine-dark)] hover:border-[var(--morning-blue-darker)] rounded-lg">
              Lets go!
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
