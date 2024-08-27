
import React, { useState, useEffect } from 'react';
import './HeaderImg.css';

const images = [
  'https://www.pittstate.edu/news/2019/images/tedx-logo-1680x680.jpg',
  'https://i.ibb.co/7CK09nR/Whats-App-Image-2024-08-21-at-23-50-49-9d4f2cd5.jpg',
  'https://www.whiteclouds.com/wp-content/uploads/2021/10/tedx-030-letters3-600w-1.jpeg',
  'https://i.ibb.co/DYqwXcc/Whats-App-Image-2024-08-21-at-23-51-44-c685cd62.jpg'
];

const clipPaths = [
  'translate-x-[16%] scale-[10]',
  'translate-x-[-30%] scale-[15]',
  'translate-x-[260%] scale-[16]',
  'translate-x-[-660%] translate-y-[-250%] scale-[25]'
];

const HeaderImg = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const schedule = () => {
      progress();
      setTimeout(schedule, 4000); 
    };
    const timeoutId = setTimeout(schedule, 500); 

    return () => clearTimeout(timeoutId); 
  }, []);

  const progress = () => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % images.length);
  };

  return (
    <div className="header-img-container">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          className={`slide-image ${index === current ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      {clipPaths.map((clipPath, index) => (
        <div
          key={index}
          className={`clip-path ${index === current ? clipPath : ''}`}
        />
      ))}
    </div>
  );
};

export default HeaderImg;
