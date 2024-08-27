
import React from 'react';
import './Wave.css';

const Wave = () => {
  return (
    <div className='main-container-alumni'>
    <div className="wave-container-alumni">
      <svg className="waves-alumni" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax-alumni">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(148, 24, 24,0.6)" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(148, 24, 24,0.5)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(148, 24, 24,0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="9" fill="rgba(148, 24, 24,0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="12" fill="rgba(148, 24, 24,0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="14" fill="rgb(21,23,26)" />
        </g>
      </svg>
    </div>
    </div>
  );
};

export default Wave;