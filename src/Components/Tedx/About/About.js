
import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        ref={aboutRef}
        className={`info flex flex-col md:flex-row justify-around m-8 md:m-16 ${isVisible ? 'slide-in-left active' : 'slide-in-left'}`}
      >
        <div className="flex flex-col w-full md:w-1/2 p-4 order-2 md:order-1">
        <h1 class="text-[30px] md:text-[36px] text-center font-bold text-custom-red mb-6 font-sans">About Tedx</h1>
          <p className="text-paragraph mb-8">
            TEDx is the independently organized counterpart to the global TED conference. Sharing TED's commitment to spreading "ideas worth spreading," TEDx provides a credible platform for emerging talent at the local level, encouraging thoughtful discussions within communities. These events are driven by passionate individuals who seek to discover new ideas and inspire conversations in their own areas.
          </p>
        </div>
        <div className="flex justify-center w-full md:w-auto order-1 md:order-2">
          <img
            src="https://live.staticflickr.com/65535/52768165852_a5dc725ce9.jpg"
            alt="Teddy Bear"
            className="w-40 h-40 md:w-80 md:h-80 object-cover rounded-full shadow-md"
          />
        </div>
      </div>

      <div
        className={`info flex flex-col md:flex-row justify-around m-8 md:m-16 ${isVisible ? 'slide-in-right active' : 'slide-in-right'}`}
      >
        <div className="flex flex-col w-full md:w-1/2 p-4 order-1 md:order-1">
          <h1 className="text-[30px] md:text-[36px] text-center font-bold text-custom-red mb-6 font-sans">SAE in Tedx</h1>
          <p className="text-paragraph mb-8">
            SAE, in collaboration with the Literary Circle, proudly organizes TEDxNITDurgapur as part of the global TED initiative. This significant grassroots effort aims to establish a dynamic platform that unites diverse voices from various fields, fostering the exchange of innovative ideas and perspectives. By bringing together thought leaders, creators, and visionaries, TEDxNITDurgapur aspires to inspire change, spark conversations, and contribute meaningfully to the global dialogue on cutting-edge topics and transformative ideas.
          </p>
        </div>
        <div className="flex justify-center w-full md:w-auto order-2 md:order-2">
          <img
            src="https://live.staticflickr.com/65535/52768700101_42d558203a_c.jpg"
            alt="SAE in Tedx"
            className="w-40 h-40 md:w-80 md:h-80 object-cover rounded-full shadow-md"
          />
        </div>
      </div>
    </>
  );
};

export default About;
