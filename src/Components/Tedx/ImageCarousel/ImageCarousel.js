import React, { useEffect, useRef } from 'react';
import './ImageCarousel.css';

const images = [
  { id: 1, url: 'https://i.ibb.co/pnbMVyP/Screenshot-2024-08-22-095823.png' },
  { id: 2, url: 'https://i.ibb.co/ySCDbNC/Screenshot-2024-08-22-095908.png' },
  { id: 3, url: 'https://i.ibb.co/LPJNw6t/Screenshot-2024-08-22-100019.png' },
  { id: 4, url: 'https://i.ibb.co/hHhmGZx/Screenshot-2024-08-22-095724.png' },
  { id: 5, url: 'https://i.ibb.co/Z2sSXr6/Screenshot-2024-08-22-095218.png' },
  { id: 6, url: 'https://i.ibb.co/b1WQZDp/Screenshot-2024-08-22-100959.png' },
  { id: 7, url: 'https://live.staticflickr.com/65535/52768700661_5d6d983237_c.jpg' },
  { id: 8, url: 'https://i.ibb.co/R2PLhXY/Screenshot-2024-08-22-100914.png' },
  { id: 9, url: 'https://i.ibb.co/gSy7yxR/Screenshot-2024-08-22-095423.png' },
  { id: 10, url: 'https://i.ibb.co/J7BmrG2/Screenshot-2024-08-22-102225.png' },
  { id: 11, url: 'https://i.ibb.co/h15nqbQ/Screenshot-2024-08-22-102215.png' },
  { id: 12, url: 'https://i.ibb.co/JFkQGNF/Screenshot-2024-08-22-102008.png' },
  { id: 13, url: 'https://i.ibb.co/0r7cgnh/Screenshot-2024-08-22-102824.png' },
];

const ImageCarousel = () => {
  return (
    <section className="py-8 sm:py-16 overflow-x-hidden">
      <h1 className="text-5xl text-custom-red font-sans font-bold text-center mb-12">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {images.map((item) => (
          <ImageItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

const ImageItem = ({ item }) => {
    const imageRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.2 }
      );
  
      if (imageRef.current) {
        observer.observe(imageRef.current);
      }
  
      return () => {
        if (imageRef.current) {
          observer.unobserve(imageRef.current);
        }
      };
    }, []);
  

  return (
    <div
      ref={imageRef}
      className="relative flex justify-end overflow-hidden bg-cover bg-center shadow-lg transform transition-transform duration-300 cursor-pointer hover:scale-105 opacity-0 h-64 sm:h-72 lg:h-80"
      style={{ backgroundImage: `url(${item.url})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 hover:bg-opacity-0"></div>
    </div>
  );
};

export default ImageCarousel;
