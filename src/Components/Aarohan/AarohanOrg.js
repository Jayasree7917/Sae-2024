import React from "react";
import "./AarohanOrg.css";
import { organizers } from "./AarohanData.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AarohanOrg = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
    });
  });

  return (
    <div className=" w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 px-10 lg:px-32 my-10 gap-5 ">
      {organizers.map((organiser, index) => (
        <div
          key={index}
          className="arhn-org-card  justify-self-center"
          data-aos="fade-up"
        >
          <div className="background   w-full h-full">
            <img
              className="w-full h-full   arhn-org-img"
              src={organiser.url}
              alt=""
            />
          </div>
          <div className="pt-4 font-bold text-[#bec4da] text-xl md:text-2xl w-full h-full text-center">
            {organiser.name}
          </div>

          <a href={organiser.instaLink}>
            <div className="box box2">
              <span className="icon">
                <svg
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg"
                >
                  <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                </svg>
              </span>
            </div>
          </a>

          <a href={organiser.linkedinLink}>
            <div className="box box3">
              <span className="icon">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.68c-1.13 0-2.04-.92-2.04-2.04s.91-2.04 2.04-2.04c1.13 0 2.04.92 2.04 2.04s-.92 2.04-2.04 2.04zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.96v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.65-1.86 3.4-1.86 3.64 0 4.31 2.4 4.31 5.52v6.23z" />
                </svg>
              </span>
            </div>
          </a>

          <div className="box box4"></div>
        </div>
      ))}
    </div>
  );
};

export default AarohanOrg;
