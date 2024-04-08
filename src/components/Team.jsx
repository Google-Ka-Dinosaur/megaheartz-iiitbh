import React, { useEffect } from "react";
import Rajnish from "../assets/team/Rajnish.svg";
import Suraj from "../assets/team/Suraj.svg";
import Nishchal from "../assets/team/Nishchal.svg";
import Aditya from "../assets/team/Aditya.svg";
import Kalyan from "../assets/team/Kalyan.svg";
import Adyasha from "../assets/team/Adyasha.svg";
import Arpit from "../assets/team/Arpit.svg";
import Akshita from "../assets/team/Akshita.svg";
import Amit from "../assets/team/Amit.svg";
import Anwesha from "../assets/team/Anwesha.svg";
import Arunanshu from "../assets/team/Arunanshu.svg";
import Aurojyoti from "../assets/team/Aurojyoti.svg";
import Ayuska from "../assets/team/Ayuska.svg";
import Biswajit from "../assets/team/Biswajit.svg";
import Eklavya from "../assets/team/Eklavya.svg";
import Krishna from "../assets/team/Krishna.svg";
import Mrutunjaya from "../assets/team/Mrutunjaya.svg";
import Naina from "../assets/team/Naina.svg";
import Nandan from "../assets/team/Nandan.svg";
import Nilakshee from "../assets/team/Nilakshee.svg";
import Prince from "../assets/team/Prince.svg";
import Priyanshu from "../assets/team/Priyanshu.svg";
import Prriya from "../assets/team/Prriya.svg";
import Ravi from "../assets/team/Ravi.svg";
import Reshma from "../assets/team/Reshma.svg";
import Rohnit from "../assets/team/Rohnit.svg";
import Ronak from "../assets/team/Ronak.svg";
import Rudransh from "../assets/team/Rudransh.svg";
import Sadhana from "../assets/team/Sadhana.svg";
import Saumyajeet from "../assets/team/Saumyajeet.svg";
import Shantanu from "../assets/team/Shantanu.svg";
import Soham from "../assets/team/Soham.svg";
import Swayam from "../assets/team/Swayam.svg";
import Ankita from "../assets/team/Ankita.svg";
import Shwettam from "../assets/team/Shwettam.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaBehanceSquare,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const ProjectsData = [
    {
      id: 1,
      src: Suraj,
      desc: {
        name: "Dr. Suraj Sharma",
        designation: "Founder",
        insta: "",
        linkedin: "https://www.linkedin.com/in/drsurajsharma/",
        github: "https://github.com/kalyansrinivas001",
        email: "",
      },
    },
    {
      id: 2,
      src: Kalyan,
      desc: {
        name: "Kalyan Srinivas",
        designation: "Founder",
        insta: "https://www.instagram.com/kalyan.klikbox/",
        linkedin: "https://www.linkedin.com/in/kalyan-srinivas-6b0796111/",
        github: "https://github.com/kalyansrinivas001",
        email: "a120001@iiit-bh.ac.in",
      },
      style: "shadow-pink-800",
    },
    {
      id: 3,
      src: Aditya,
      desc: {
        name: "Aditya Raj Kishan",
        designation: "Advisor",
        github: "https://github.com/Adityarajkishan",
        linkedin: "https://www.linkedin.com/in/aditya-raj-kishan",
        insta: "https://www.instagram.com/adityarajkishan/",
        email: "adityarajkishan@gmail.com",
      },
      style: "shadow-pink-800",
    },
    {
      id: 4,
      src: Rajnish,
      desc: {
        name: "Rajnish Kumar Singh",
        designation: "Secretary(2023-24)",

        github: "https://github.com/Adityarajkishan",
        linkedin: "https://www.linkedin.com/in/aditya-raj-kishan",
        insta:
          "https://www.instagram.com/v.ilen?igsh=MXh0ZGxpMDh5Y290cw%3D%3D&utm_source=qr",
        email: "soveshhere@gmail.com",
      },
      style: "shadow-pink-800",
    },
    {
      id: 5,
      src: Ravi,
      desc: {
        name: "Ravi Sovesh",
        designation: "joint-Secretary",

        github: "https://github.com/Adityarajkishan",
        linkedin: "https://www.linkedin.com/in/aditya-raj-kishan",
        insta: "https://www.instagram.com/adityarajkishan/",
        email: "adityarajkishan@gmail.com",
      },
      style: "shadow-pink-800",
    },
    {
      id: 6,
      src: Rudransh,
      desc: {
        name: "Rudransh Agarwal",
        designation: "Joint-Secretary",
        github: "https://github.com/Adityarajkishan",
        linkedin: "https://www.linkedin.com/in/rudransh-agrawal-6a6645172",
        insta: "https://www.instagram.com/tech__freak?igsh=ZmFuOXRzajRnMm5j",
        email: "rudransh.agrawal980@gmail.com",
      },
      style: "shadow-pink-800",
    },
    {
      id: 7,
      src: Shantanu,
      desc: {
        name: "A Shantanu",
        designation: "Editing Lead",
        github: "https://github.com/shaan4712",
        linkedin: "https://www.linkedin.com/in/shantanu4712/",
        insta: "https://www.instagram.com/shaan_4712/",
        email: "shaan2k3@gmail.com",
      },
      style: "shadow-pink-800",
    },

    {
      id: 8,
      src: Prince,
      desc: {
        name: "Prince Kumar Singh",
        designation: "Core Team",
        github: "https://github.com/Prince-Ku-S",
        linkedin: "www.linkedin.com/in/prince-kumar-singh-00804025b",
        insta:
          "https://www.instagram.com/prince_k2608?igsh=MTAzM3dpaHlpemdqZw==",
        email: "princesinghv35@gmail.com",
      },
      style: "shadow-pink-800",
    },
    {
      id: 9,
      src: Ronak,
      desc: {
        name: "Ronak Agrawal",
        designation: "Core Team",
        github: "https://github.com/biswajit522016",
        linkedin: "https://www.linkedin.com/in/biswajit-bhoi-2537b5257/",
        insta: "https://www.instagram.com/biswajit.bhoi.125/",
        email: "b522016@iiit-bh.ac.in",
      },
      style: "shadow-pink-800",
    },
    {
      id: 10,
      src: Biswajit,
      desc: {
        name: "Biswajit Bhoi",
        designation: "Core Team",
        github: "https://github.com/biswajit522016",
        linkedin: "https://www.linkedin.com/in/biswajit-bhoi-2537b5257/",
        insta: "https://www.instagram.com/biswajit.bhoi.125/",
        email: "b522016@iiit-bh.ac.in",
      },
      style: "shadow-pink-800",
    },
    {
      id: 11,
      src: Saumyajeet,
      desc: {
        name: "Saumyajeet Varma",
        designation: "Graphics Lead",
        github: "https://github.com/Saumyajeet-Varma",
        linkedin:
          "https://www.linkedin.com/in/saumyajeet-varma-91bb4025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        insta: "https://www.instagram.com/_saumyajeet_/",
        email: "b522053@iiit-bh.ac.in",
      },
      style: "shadow-pink-800",
    },
    {
      id: 12,
      src: Prriya,
      desc: {
        name: "Prriya Dash",
        designation: "Content Lead",
        github: "https://github.com/PrriyaBandita-2002",
        linkedin: "https://www.linkedin.com/in/prriya-dash-33234a263",
        insta: "https://instagram.com/_blue.shades?igsh=ZDdkNTZiNTM=",
        email: "b222039@iiit-bh.ac.in",
      },
      style: "shadow-pink-800",
    },

    {
      id: 13,
      src: Nandan,
      desc: {
        name: "Nandan Roy",
        designation: "Editing Lead",
        github: "",
        linkedin:
          "https://www.linkedin.com/in/nandan-roy-771b4225a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        insta: "https://www.instagram.com/roy._68?igsh=ZWVldXQ0NXFocHFl",
        email: "b522038@iiit-bh.ac.in",
      },
      style: "shadow-pink-800",
    },
    {
      id: 14,
      src: Sadhana,
      desc: {
        name: "Sadhana Panigrahy",
        designation: "Event Management Lead",
        github: "https://github.com/biswajit522016",
        linkedin: "https://www.linkedin.com/in/biswajit-bhoi-2537b5257/",
        insta: "https://www.instagram.com/biswajit.bhoi.125/",
        email: "b522016@iiit-bh.ac.in",
      },
      style: "shadow-pink-800",
    },

    {
      id: 15,
      src: Adyasha,
      desc: {
        name: "Adyasha Mohanty",
        designation: "Podcast Lead",
        github: "https://github.com/biswajit522016",
        linkedin: "https://www.linkedin.com/in/biswajit-bhoi-2537b5257/",
        insta: "https://www.instagram.com/biswajit.bhoi.125/",
        email: "b522016@iiit-bh.ac.in",
      },
      style: "shadow-pink-800",
    },

    {
      id: 16,
      src: Mrutunjaya,
      desc: {
        name: "Mrutyunjaya Panda",
        designation: "Squad",
        github: "",
        linkedin: "",
        insta: "https://www.instagram.com/mrutyunjaya_panda/",
        email: "mrutyunjayapanda9@gmail.com",
      },
      style: "shadow-pink-800",
    },
    {
      id: 17,
      src: Krishna,
      desc: {
        name: "Krishna Kausik Barik",
        designation: "Squad",
        instagram: "https://www.instagram.com/krishnakausikbarik/",
        mail: "krishnakaushik642@gmail.com",
        linkedin: "https://www.linkedin.com/in/krishna-kausik-barik-33306b293/",
        youtube: "https://www.youtube.com/@krishnakausikbarik",
        facebook: "https://www.facebook.com/krishnakausikbarik",
      },
      style: "shadow-pink-800",
    },
    {
      id: 18,
      src: Arunanshu,
      desc: {
        name: "Arunanshu Arya",
        designation: "Squad",
        github: "https://github.com/Arunanshu-Arya",
        insta: "https://www.instagram.com/arunanshuarya?igsh=dDd3YXVuZW1zN2J5",
        mail: "b523013@iiit-bh.ac.in",
        linkedin: "https://www.linkedin.com/in/arunanshu-arya-347911298",
        x: "https://x.com/arunanshu_arya?t=GIRCyoD5qwZ30ANnhMGKhQ&s=09",
      },
      style: "shadow-pink-800",
    },
    {
      id: 19,
      src: Swayam,
      desc: {
        name: "Swayam Aryaman",
        designation: "Squad",
        insta:
          "https://www.instagram.com/aryamanswayam?igsh=MTY5bWdqajRiZTM3Zw==",
        mail: "b423069@iiit-bh.ac.in",
      },
      style: "shadow-pink-800",
    },
    {
      id: 20,
      src: Nishchal,
      desc: {
        name: "Nishchal Verma",
        designation: "Squad",
        insta: "https://www.instagram.com/.nixchal.?igsh=MWM4Z3ZwemNqOG9oOA==",
        behance: "https://www.behance.net/gfxnishchalverma",
        linkedin:
          "https://www.linkedin.com/in/nishchal-verma-497129245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/Nixchal2004",
        mail: "b423042@iiitbh.ac.in",
      },
      style: "shadow-pink-800",
    },
    {
      id: 21,
      src: Akshita,
      desc: {
        name: "Akshita Nayak",
        designation: "Squad",
        insta:
          "https://www.instagram.com/akxshitaaa.?igsh=MWMxaWQ4MmxjcHkxZg==",
        mail: "b423006@iiit-bh.ac.in",
      },
      style: "shadow-pink-800",
    },
    {
      id: 22,
      src: Shwettam,
      desc: {
        name: "Shwettam Sahu",
        designation: "Squad",
        github: "https://github.com/Shwettam",
        insta: "https://www.instagram.com/s_sahu20?igsh=eWFrZ2RucWpyMXlv",
        mail: "shwettamsahu8076@gmail.com",
        linkedin:
          "https://www.linkedin.com/in/shwettam-sahu-959a13214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      style: "shadow-pink-800",
    },
    {
      id: 23,
      src: Naina,
      desc: {
        name: "Naina Purohit",
        designation: "Squad",
        github: "https://github.com/nainapurohit",
        insta:
          "https://www.instagram.com/nainapurohit12?igsh=MTV2dmNlZnRqbzV3aA==",
        linkedin:
          "https://www.linkedin.com/in/naina-purohit-64bb38283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "b423039@iiit-bh.ac.in",
      },
      style: "shadow-pink-800",
    },
    {
      id: 24,
      src: Priyanshu,
      desc: {
        name: "Priyanshu Shekhar",
        designation: "Squad",
        email: "b323027@iiit-bh.ac.in",
      },
      style: "shadow-pink-800",
    },
    {
      id: 25,
      src: Soham,
      desc: {
        name: "Soham Mishra",
        designation: "Squad",
        email: "b423063@iiit-bh.ac.in",
        insta: "https://www.instagram.com/soham_mishra2004",
        linkedin: "www.linkedin.com/in/soham-mishra-ind",
        github: "https://github.com/Soham-India",
      },
      style: "shadow-pink-800",
    },
    {
      id: 26,
      src: Amit,
      desc: {
        name: "Amit Kumar Hota",
        designation: "Squad",
        insta: "https://www.instagram.com/ameexx._?igsh=cW1qN2xxNnJqbGxv",
        email: "amit.kumarhota123987@gmail.com",
        linkedin: "https://www.linkedin.com/in/amit-kumar-hota-68070a2b3",
      },
      style: "shadow-pink-800",
    },
    {
      id: 27,
      src: Ankita,
      desc: {
        name: "Ankita Priyadarshini",
        designation: "Squad",
        mail: "b523006@iiit-bh.ac.in",
        insta: "https://www.instagram.com/ankita.mp4?igsh=MWhoajgyMnZocWNscQ==",
      },
      style: "shadow-pink-800",
    },
    {
      id: 28,
      src: Reshma,
      desc: {
        name: "Taluri Reshma",
        designation: "Squad",
        mail: "b523006@iiit-bh.ac.in",
        insta: "https://www.instagram.com/ankita.mp4?igsh=MWhoajgyMnZocWNscQ==",
      },
      style: "shadow-pink-800",
    },
    {
      id: 29,
      src: Anwesha,
      desc: {
        name: "Anwesha Priyadarshini",
        designation: "Squad",
        mail: "b523006@iiit-bh.ac.in",
        insta: "https://www.instagram.com/ankita.mp4?igsh=MWhoajgyMnZocWNscQ==",
      },
      style: "shadow-pink-800",
    },
    {
      id: 30,
      src: Arpit,
      desc: {
        name: "Arpit Raj",
        designation: "Squad",
        mail: "b523006@iiit-bh.ac.in",
        insta: "https://www.instagram.com/ankita.mp4?igsh=MWhoajgyMnZocWNscQ==",
      },
      style: "shadow-pink-800",
    },
    {
      id: 31,
      src: Aurojyoti,
      desc: {
        name: "Aurojyoti",
        designation: "Squad",
        mail: "b523006@iiit-bh.ac.in",
        insta: "https://www.instagram.com/ankita.mp4?igsh=MWhoajgyMnZocWNscQ==",
      },
      style: "shadow-pink-800",
    },
    {
      id: 32,
      src: Ayuska,
      desc: {
        name: "Ayuska Choudhary",
        designation: "Squad",
        mail: "b523006@iiit-bh.ac.in",
        insta: "https://www.instagram.com/ankita.mp4?igsh=MWhoajgyMnZocWNscQ==",
      },
      style: "shadow-pink-800",
    },
    {
      id: 33,
      src: Nilakshee,
      desc: {
        name: "Nilakshee Sahu",
        designation: "Squad",
        mail: "b523006@iiit-bh.ac.in",
        insta: "https://www.instagram.com/ankita.mp4?igsh=MWhoajgyMnZocWNscQ==",
      },
      style: "shadow-pink-800",
    },
    {
      id: 34,
      src: Eklavya,
      desc: {
        name: "Eklavya Kumar",
        designation: "Squad",
        mail: "b523006@iiit-bh.ac.in",
        insta: "https://www.instagram.com/ankita.mp4?igsh=MWhoajgyMnZocWNscQ==",
      },
      style: "shadow-pink-800",
    },
    {
      id: 35,
      src: Rohnit,
      desc: {
        name: "Rohnit Guru",
        designation: "Squad",
        mail: "b523006@iiit-bh.ac.in",
        insta: "https://www.instagram.com/ankita.mp4?igsh=MWhoajgyMnZocWNscQ==",
      },
      style: "shadow-pink-800",
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
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 0,
          slidesToScroll: 0,
        },
      },
    ],
  };

  return (
    <div
      name="Team"
      className="h-auto max-h-screen-lg bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <br />
      <br />
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-400">
            Meet the Team
          </h2>
          <p className="py-6 text-pink-500">The Mega💜 Family </p>
        </div>

        <div className="slider-container">
          <div className="px-4">
            <Slider {...settings}>
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
                  <div className="p-1 text-justify font-extralight">
                    <p>{desc.name}</p>
                    <p> {desc.designation}</p> <br />
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
                      {desc.name === "Nishchal Verma" && (
                        <a
                          href={desc.behance}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaBehanceSquare />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Slider>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Projects;
