import React, { useEffect } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div
      name="About"
      className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto">
        <div className="pb-8 text-center">
          <h2 className="text-4xl  font-bold inline border-b-4 border-gray-500">
            What is MegaHeartz ?
          </h2>
        </div>

        <p
          data-aos="slide-up"
          data-aos-duration="500"
          className="text-xl mt-5 ease-in fade-in"
        >
          Working as the face of IIIT Bhubaneswar to showcase the college to the
          outer world via the virtual network thus increasing its brand value.
        </p>
        <p
          data-aos="slide-up"
          data-aos-duration="500"
          className="text-xl mt-5 ease-in fade-in"
        >
          Was started by Suraj Sharma Sir, in 2022 because our college didn’t
          have an official platform via which the outer world can know what’s
          happening or have happened in IIIT Bhubaneswar.
        </p>
        <p
          data-aos="slide-up"
          data-aos-duration="500"
          className="text-xl mt-5 ease-in fade-in"
        >
          Established as a society in the year: 2023.
        </p>
        <p
          data-aos="slide-up"
          data-aos-duration="500"
          className="text-xl mt-5 ease-in fade-in"
        >
          MegaHeartz has tried to cover nearly all the formal and informal
          events happening in the college and is also contributing actively and
          in a full-fledged manner for student media team of IIIT Bhubaneswar by
          covering all the events and providing the content (videos, photos,
          writeups, etc.) for each and every single post, to enhance the
          official social media handles of IIIT-Bh (Instagram, Twitter,
          Facebook, LinkedIn).
        </p>
        <div
          data-aos="zoom-in"
          data-aos-duration="500"
          className="mb-20 fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-b from-pink-600 to-purple-600 lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-10 gap-2"
        >
          <a href="https://drive.google.com/file/d/1JbKwgAOvvMhk5gusnDbwPiOzRV9D8kOL/view?usp=sharing">
            Society Report (2023-24)
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
