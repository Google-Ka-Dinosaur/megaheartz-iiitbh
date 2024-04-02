import React, { useEffect } from "react";
import Rajnish from "../assets/team/Rajnish.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const ProjectsData = [
    {
      id: 1,
      src: Rajnish,
      desc: {
        name: "Rajnish Kumar Singh",
        designation: "Secretary",
        github: "https://github.com/Adityarajkishan",
        linkedin: "https://www.linkedin.com/in/aditya-raj-kishan",
        insta: "https://www.instagram.com/adityarajkishan/",
        email: "mailto:adityarajkishan@gmail.com",
      },
      style: "shadow-pink-800",
    },
  ];

  return (
    <div
      name="Team"
      className="h-auto max-h-screen-lg bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <br />
      <br />
      <br />
      <br />
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-400">
            Meet the Team
          </h2>
          <p className="py-6 text-pink-500">The Mega💜 Family </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0">
          {ProjectsData.map(({ id, src, desc }) => (
            <div
              data-aos="fade-in"
              data-aos-duration="500"
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                src={src}
                alt="Ai"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="p-2 text-justify font-extralight">
                <p>{desc.name}</p>
                <p>Designation: {desc.designation}</p> <br />
                <p>Reach me out at:</p>
                <div className="flex items-center space-x-2">
                  <a
                    href={desc.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={desc.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={desc.insta}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href={desc.email}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Projects;
