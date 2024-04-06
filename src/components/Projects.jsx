import React, { useEffect } from "react";
import independence from "../assets/projects/independence.jpg";
import kalakriti from "../assets/projects/kalakriti aftermovie.webp";
import freshers from "../assets/projects/freshers.jpg";
import Gc from "../assets/projects/GC aftermovie.webp";
 import janmashtami from "../assets/projects/janmashtami.jpg";
import lazydance from "../assets/projects/lazy-dance.jpg";
import navratriaftermovie from "../assets/projects/navratri aftermovie.webp";
import nebule from "../assets/projects/nebule.jpg";
import tasveer from "../assets/projects/tasveer.jpg";
import tms from "../assets/projects/tms.jpg";
import REPUBLICDAY  from "../assets/projects/REPUBLIC.png";
import sapphire from "../assets/projects/sapphire.jpg";
import AOS from "aos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
 
  const Projects = () => [
    {
      id: 1,
      src: independence,
      video: "https://youtu.be/K0zPaPCEvag?si=VebaLcus2JaqkWvc",
    },
    {
      id: 2,
      src: kalakriti,
      video: "https://youtu.be/GBHYGlLd8Uk?si=_JVab-3eltO5S7aH",
    },
    {
      id: 3,
      src:freshers,
      video: "https://youtu.be/ADDnp6mUOZA?si=jB-c6yX3HtHiOyUU",
    },
    {
      id: 4,
      src:Gc,
      video: " https://youtu.be/m3Om6NkRj-g?si=kJAiEMFS402FyRtX",
    },
    {
      id: 5,
      src:lazydance,
      video: " https://youtu.be/m3Om6NkRj-g?si=kJAiEMFS402FyRtX",
    },
   {
      id: 6,
      src:navratriaftermovie,
      video: " https://youtu.be/5VaF2KvRPCk?si=vTkrBuEBRXecnZ8z",
    },
    {
      id: 7,
      src:nebule,
      video: "https://www.youtube.com/watch?v=YsVdg04_Yis&list=PL5YUk3UMmna6Dp4sSBraSCOz6tFh_CmUj&pp=iAQB",
    },
    {
      id: 8,
      src:tasveer,
      video: " https://www.youtube.com/watch?v=2eRIpw7FVrQ&list=PL5YUk3UMmna5Ly0gOFltFuCb2jLt0dFsi&pp=iAQB",
    },
    {
      id: 9,
      src:tms,
      video: "https://www.youtube.com/watch?v=hRVEz03rvuA&list=PL5YUk3UMmna6K_Rk_8nfN3qE2NJeDrK9X&pp=iAQB",
    },
    {
      id: 10,
      src:janmashtami,
      video: "https://youtu.be/O16c7uutn5g?si=pmPR_Ehq8xSsXRxa",
    },
    {
      id: 10,
      src:REPUBLICDAY,
      video: "https://www.youtube.com/watch?v=lDszQFF1gew&list=PL5YUk3UMmna4MbRcA6rTrEtfpPLsx92_c&pp=iAQB"
      ,
    },
    {
      id: 10,
      src:sapphire,
      video: " https://youtu.be/1zNuv73Gfcs?si=RHshAybc5c1fI4wF",
    },
    

  ];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
  
    <div
      name="Projects"
      className="h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen"
    >
      <br/>
      <br/>
      <br />
      <br />
     
   
      <div className="max-w-screen-lg py-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-400">
            Projects
          </h2>
          <p className="py-6 text-pink-500">Check out our amazing work!!</p>
        </div>
        
        <div //className="grid sm:grid-cols-2 md:grid-cols-4 mb-20 gap-8 px-12 sm:px-0"
        >
        <div className="slider-container ">
            <Slider {...settings}>
          {Projects().map(({ id, src, desc, video }) => (
            <div
              data-aos="fade-in"
              data-aos-duration="500"
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg"
            >
              
              <img
                src={src}
                alt="Ai"
                className="h-64 object-cover rounded-md duration-200 hover:scale-105"
              />
        
              <p className="p-2 text-justify font-extralight">{desc}</p>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md">
                  <a href={video} target="_blank">
                    Video
                  </a>
                </button>
              </div>
            </div>
            
          ))}
            </Slider>
                </div>
        </div>
   
      </div>

      <br />
      <br />
      <br/>
      <br/>
      <br />
      <br />
      <br/>
      <br/>
      <br />
      <br />
     </div>
  
   
  );
};

export default Projects;