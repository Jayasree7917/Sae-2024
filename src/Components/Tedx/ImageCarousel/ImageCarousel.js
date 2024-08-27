
import React, { useState } from 'react';
import './ImageCarousel.css'; // Ensure this line imports your CSS file

const ImageCarousel = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    'https://i.ibb.co/b1WQZDp/Screenshot-2024-08-22-100959.png',
    'https://i.ibb.co/pnbMVyP/Screenshot-2024-08-22-095823.png',
    'https://i.ibb.co/J7BmrG2/Screenshot-2024-08-22-102225.png',
    'https://i.ibb.co/hHhmGZx/Screenshot-2024-08-22-095724.png',
    'https://i.ibb.co/R3HC7LF/Screenshot-2024-08-26-225939.png',
    'https://i.ibb.co/LPJNw6t/Screenshot-2024-08-22-100019.png',
    'https://i.ibb.co/Z2sSXr6/Screenshot-2024-08-22-095218.png',
    'https://i.ibb.co/0r7cgnh/Screenshot-2024-08-22-102824.png',
    'https://i.ibb.co/ySCDbNC/Screenshot-2024-08-22-095908.png',
    'https://i.ibb.co/R2PLhXY/Screenshot-2024-08-22-100914.png',
    'https://i.ibb.co/gSy7yxR/Screenshot-2024-08-22-095423.png',
    'https://i.ibb.co/JFkQGNF/Screenshot-2024-08-22-102008.png',
  ];

  const handleClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="px-5 grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, colIndex) => (
          <div className="grid gap-4" key={colIndex}>
            {images.slice(colIndex * 4, colIndex * 4 + 4).map((imgSrc, imgIndex) => (
              <div key={imgIndex}>
                <img
                  className="ted-image h-auto w-full rounded-lg cursor-pointer"
                  src={imgSrc}
                  alt=""
                  onClick={() => handleClick(imgSrc)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <button
              className="ted-close-button"
              onClick={handleClose}
            >
              &times;
            </button>
            <img
              className="max-w-full max-h-screen"
              src={selectedImage}
              alt="Zoomed In"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;



// import React, { useState } from 'react';
// import './ImageCarousel.css';

// const ImageCarousel = () => {
//   const data = [
//     { id: 1, imgSrc: 'https://i.ibb.co/pnbMVyP/Screenshot-2024-08-22-095823.png' },
//     { id: 2, imgSrc: 'https://i.ibb.co/Z2sSXr6/Screenshot-2024-08-22-095218.png' },
//     { id: 3, imgSrc: 'https://i.ibb.co/ySCDbNC/Screenshot-2024-08-22-095908.png' },
//     { id: 4, imgSrc: 'https://i.ibb.co/hHhmGZx/Screenshot-2024-08-22-095724.png' },
//     { id: 5, imgSrc: 'https://i.ibb.co/R3HC7LF/Screenshot-2024-08-26-225939.png' },
//     // https://i.ibb.co/LPJNw6t/Screenshot-2024-08-22-100019.png
//     { id: 6, imgSrc: 'https://i.ibb.co/b1WQZDp/Screenshot-2024-08-22-100959.png' },
//     { id: 7, imgSrc: 'https://live.staticflickr.com/65535/52768700661_5d6d983237_c.jpg' },
//     { id: 8, imgSrc: 'https://i.ibb.co/R2PLhXY/Screenshot-2024-08-22-100914.png' },
//     { id: 9, imgSrc: 'https://i.ibb.co/gSy7yxR/Screenshot-2024-08-22-095423.png' },
//     { id: 10, imgSrc: 'https://i.ibb.co/J7BmrG2/Screenshot-2024-08-22-102225.png' },
//     { id: 11, imgSrc: 'https://i.ibb.co/h15nqbQ/Screenshot-2024-08-22-102215.png' },
//     { id: 12, imgSrc: 'https://i.ibb.co/JFkQGNF/Screenshot-2024-08-22-102008.png' },
//     { id: 13, imgSrc: 'https://i.ibb.co/0r7cgnh/Screenshot-2024-08-22-102824.png' },
//   ];

//   const [model, setModel] = useState(false);
//   const [tempImgSrc, setTempImgSrc] = useState('');

//   const getImg = (imgSrc) => {
//     setTempImgSrc(imgSrc);
//     setModel(true);
//   };

//   const closeModel = () => {
//     setModel(false);
//   };

//   return (
//     <>
//       <div className={model ? 'ted-model ted-open' : 'ted-model'}>
//         <img src={tempImgSrc} alt="" />
//         <button className="ted-close-btn" onClick={closeModel}>X</button>
//       </div>
//       <div className="ted-gallery mt-5 mb-16">
//         {data.map((item, index) => (
//           <div className="ted-pics" key={index} onClick={() => getImg(item.imgSrc)}>
//             <img src={item.imgSrc} alt="" style={{ width: '100%' }} />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

//export default ImageCarousel;

// import React, { useState } from 'react';
// import './ImageCarousel.css';


// const ImageCarousel = () => {

//   let data =[
//     {
//       id: 1,
//       imgSrc: 'https://i.ibb.co/pnbMVyP/Screenshot-2024-08-22-095823.png',
//     },
//     {
//       id: 2,
//       imgSrc: 'https://i.ibb.co/ySCDbNC/Screenshot-2024-08-22-095908.png',
//     },
//     {
//       id: 3,
//       imgSrc: 'https://i.ibb.co/LPJNw6t/Screenshot-2024-08-22-100019.png',
//     },
//     {
//       id: 4,
//       imgSrc: 'https://i.ibb.co/hHhmGZx/Screenshot-2024-08-22-095724.png',
//     },
//     {
//       id: 5,
//       imgSrc: 'https://i.ibb.co/Z2sSXr6/Screenshot-2024-08-22-095218.png',
//     },
//     {
//       id: 6,
//       imgSrc: 'https://i.ibb.co/b1WQZDp/Screenshot-2024-08-22-100959.png',
//     },
//     {
//       id: 7,
//       imgSrc: 'https://live.staticflickr.com/65535/52768700661_5d6d983237_c.jpg',
//     },
//     {
//       id: 8,
//       imgSrc: 'https://i.ibb.co/R2PLhXY/Screenshot-2024-08-22-100914.png',
//     },
//     {
//       id: 9,
//       imgSrc: 'https://i.ibb.co/gSy7yxR/Screenshot-2024-08-22-095423.png',
//     },
//     {
//       id: 10,
//       imgSrc: 'https://i.ibb.co/J7BmrG2/Screenshot-2024-08-22-102225.png',
//     },
//     {
//       id: 11,
//       imgSrc: 'https://i.ibb.co/h15nqbQ/Screenshot-2024-08-22-102215.png',
//     },
//     {
//       id: 12,
//       imgSrc: 'https://i.ibb.co/JFkQGNF/Screenshot-2024-08-22-102008.png',
//     },
//     {
//       id: 13,
//       imgSrc: 'https://i.ibb.co/0r7cgnh/Screenshot-2024-08-22-102824.png',
//     },
    


//   ]

//   const [model, setModel] = useState(false);
//   const [tempimgSrc, setTempImgSrc] = useState('');

//   const getImg = (imgSrc)=>
//   {
//      setTempImgSrc(imgSrc);
//      setModel(true);
//   }

//   return (
//     <>
//     <div className={model ? "model open" : "model"}>
//     <img src={tempimgSrc} alt="" />
//     </div>
//     <div className="gallery  mt-5 mb-16">
     
//      {data.map((item, index)=>
//      {
//        return(
//          <div className="pics" key={index}>
//            <img src={item.imgSrc} alt="" style={{width:"100%"}} />
//          </div>
//        )
//      })}
//     </div>
     
//     </>
//   )
// }

// export default ImageCarousel
