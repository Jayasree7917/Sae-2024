
import React, { useState } from 'react';
import './ImageCarousel.css';


const ImageCarousel = () => {

  let data =[
    {
      id: 1,
      imgSrc: 'https://i.ibb.co/pnbMVyP/Screenshot-2024-08-22-095823.png',
    },
    {
      id: 2,
      imgSrc: 'https://i.ibb.co/ySCDbNC/Screenshot-2024-08-22-095908.png',
    },
    {
      id: 3,
      imgSrc: 'https://i.ibb.co/LPJNw6t/Screenshot-2024-08-22-100019.png',
    },
    {
      id: 4,
      imgSrc: 'https://i.ibb.co/hHhmGZx/Screenshot-2024-08-22-095724.png',
    },
    {
      id: 5,
      imgSrc: 'https://i.ibb.co/Z2sSXr6/Screenshot-2024-08-22-095218.png',
    },
    {
      id: 6,
      imgSrc: 'https://i.ibb.co/b1WQZDp/Screenshot-2024-08-22-100959.png',
    },
    {
      id: 7,
      imgSrc: 'https://live.staticflickr.com/65535/52768700661_5d6d983237_c.jpg',
    },
    {
      id: 8,
      imgSrc: 'https://i.ibb.co/R2PLhXY/Screenshot-2024-08-22-100914.png',
    },
    {
      id: 9,
      imgSrc: 'https://i.ibb.co/gSy7yxR/Screenshot-2024-08-22-095423.png',
    },
    {
      id: 10,
      imgSrc: 'https://i.ibb.co/J7BmrG2/Screenshot-2024-08-22-102225.png',
    },
    {
      id: 11,
      imgSrc: 'https://i.ibb.co/h15nqbQ/Screenshot-2024-08-22-102215.png',
    },
    {
      id: 12,
      imgSrc: 'https://i.ibb.co/JFkQGNF/Screenshot-2024-08-22-102008.png',
    },
    {
      id: 13,
      imgSrc: 'https://i.ibb.co/0r7cgnh/Screenshot-2024-08-22-102824.png',
    },
    


  ]

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc)=>
  {
     setTempImgSrc(imgSrc);
     setModel(true);
  }

  return (
    <>
    <div className={model ? "model open" : "model"}>
    <img src={tempimgSrc} alt="" />
    </div>
    <div className="gallery  mt-5 mb-16">
     
     {data.map((item, index)=>
     {
       return(
         <div className="pics" key={index}>
           <img src={item.imgSrc} alt="" style={{width:"100%"}} />
         </div>
       )
     })}
    </div>
     
    </>
  )
}

export default ImageCarousel