import React from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          YouTube <FaYoutube size={25} />
        </>
      ),
      href: "https://www.youtube.com/@MegaheartzIIITBhubaneswar",
      target: "_blank",
    },
    {
      id: 2,
      child: (
        <>
          Instagram <FaInstagram size={25} />
        </>
      ),
      href: "https://www.instagram.com/megaheartz_iiitbh?igsh=YmRnZGt5engzY2x0",
      target: "_blank",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:megaheartz@iiit-bh.ac.in",
      target: "_blank",
    },
    {
      id: 4,
      child: (
        <>
          Report <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "https://drive.google.com/file/d/1JbKwgAOvvMhk5gusnDbwPiOzRV9D8kOL/view?usp=sharing",
      style: "rounded-br-md",
      download: true,
      target: "_blank",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300" +
              style
            }
          >
            <a
              href={href}
              download={download}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
