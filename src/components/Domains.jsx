import React, { useEffect } from "react";
import audio from "../assets/experience/audio-editor.png";
import content from "../assets/experience/content-writing.png";
import graphic from "../assets/experience/graphic-designer.png";
import orator from "../assets/experience/orator.png";
import social from "../assets/experience/social-media.png";
import photographer from "../assets/experience/photographer.png";
import videography from "../assets/experience/videography.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const techs = () => [
    {
      id: 1,
      scr: photographer,
      title: "Photography",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      scr: videography,
      title: "Videography",
      style: "shadow-violet-500",
    },
    {
      id: 3,
      scr: graphic,
      title: "Graphic Designing",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      scr: content,
      title: "Content Writing",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      scr: audio,
      title: "Audio Editing",
      style: "shadow-purple-500",
    },
    {
      id: 6,
      scr: social,
      title: "Social Media Management",
      style: "shadow-green-500",
    },
    {
      id: 7,
      scr: orator,
      title: "Oration",
      style: "shadow-pink-800",
      center: true,
    },
  ];

  return (
    <div
      name="Domains"
      className="bg-gradient-to-b from-gray-800 to-black text-white
     w-full h-full"
    >
      <div className="max-w-screen-lg max-h-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400 ">
            <br />
            <br />
            <br />
            <br />
            
            Our Domains
          </p>
          <p className="py-6 text-pink-500">
            Checkout the variety of domains we offer
          </p>
        </div>

        <div className="w-full h-full grid grid-cols-2 text-center sm:grid-cols-4 gap-8 px-12 sm:px-0">
          {techs().map(({ id, scr, title, style, center }) => (
            <div
              data-aos="zoom-in"
              data-aos-duration="500"
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}
              }`}
            >
              <img src={scr} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;