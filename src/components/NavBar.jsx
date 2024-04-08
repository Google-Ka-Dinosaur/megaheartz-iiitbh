import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/mega-logo.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const link = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "About",
    },
   
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Domains",
    },
    {
      id: 6,
      link: "Team",
    },
    {
      id: 5,
      link: "Reach Us",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-b from-gray-800 to-black">
      <div className="flex flex-row gap-1">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      <ul className="hidden md:flex">
        {link.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 duration-200 transition-all"
          >
            <Link
              to={link}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              className="hover:text-pink-500"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="md:hidden cursor-pointer pr-4 z-60"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex z-50 flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-200">
          <Link
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            className="absolute m-6 top-0 right-0 cursor-pointer"
            onClick={() => setNav(!nav)}
            to="home"
          >
            <FaTimes size={30} />
          </Link>
          {link.map(({ id, link }) => (
            <li className="px-4 cursor-pointer capitalize py-6 text-4xl ">
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                className="hover:text-pink-500"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
