import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const [emailStatus, setEmailStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3lfqswf",
        "template_3mr3b3s",
        e.target,
        "MFf_I7thOqU1nMoKU"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setEmailStatus("success");
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          setEmailStatus("error");
        }
      );

    e.target.reset();
  };

  return (
    <div
      name="Reach Us"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-screen">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Reach Us Out
          </p>
          <p className="mt-6">Get in touch with us</p>
        </div>

        <div className="flex justify-center items-center">
          <form onSubmit={sendEmail} className="flex flex-col w-full md:w-1/2">
            <input
              data-aos="slide-up"
              data-aos-duration="500"
              required
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 m-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              data-aos="slide-up"
              data-aos-duration="700"
              required
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              className="p-2 m-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              data-aos="fade-in"
              data-aos-duration="900"
              name="message"
              required
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 m-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button
              data-aos="zoom-in"
              data-aos-duration="1000"
              type="submit"
              className="text-white bg-gradient-to-b from-pink-600 to-purple-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Send e-mail
            </button>
            {emailStatus === "success" && (
              <p className="text-green-500 text-center">
                Email sent successfully!
              </p>
            )}
            {emailStatus === "error" && (
              <p className="text-red-500 text-center">
                e-mail delivery failed! Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
