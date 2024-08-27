
import React from 'react';
import './Speakers.css';

const speakers = [
  {
    name: 'Prachi Tehlan',
    role: 'Actress, Style icon and Ngo Founder',
    imgSrc: "https://pbs.twimg.com/profile_images/1194550946161774592/NubSAY2v_400x400.jpg"
  },
  {
    name: 'Ashutosh Pratihast',
    role: ' Founder and CEO',
    imgSrc: 'https://i.scdn.co/image/ab6761610000e5eb69ba8288e3eced2ff14b1060'
  },
  {
    name: 'Sinjini Sengupta',
    role: 'Actuary, Author, Columnist and Professional Speaker',
    imgSrc: 'https://pbs.twimg.com/profile_images/1679449056601583616/YcJrRpwC_400x400.jpg'
  },
  {
    name: 'Dr. Yogendra Singh Rathore',
    role: 'NLP expert, Mental health coach',
    imgSrc: 'https://images.mid-day.com/images/images/2022/sep/NLP1_e.jpg'
  },
  {
    name: 'Aanchal Thakur',
    role: 'Alpine Skier',
    imgSrc: 'https://i.postimg.cc/VvrMRpWQ/Screenshot-2024-08-22-021218.png'
  },
  {
    name: 'Tapan Misra',
    role: 'Indian Scientist',
    imgSrc: 'https://i.postimg.cc/fWG8VQsh/Screenshot-2024-08-22-021637.png'
  },
  {
    name: 'Kanthi Dutt',
    role: 'Entrepreneur',
    imgSrc: 'https://i.postimg.cc/htPTj2XB/Screenshot-2024-08-22-021844.png'
  },
  {
    name: 'Pratik Gauri',
    role: 'Social Entrepreneur',
    imgSrc: 'https://i.postimg.cc/vHG6q0LV/Screenshot-2024-08-22-022121.png'
  },
  {
    name: 'Kenidra Woods',
    role: 'Mental Health and Social Justice Activist',
    imgSrc: 'https://i.postimg.cc/DwMJznVr/Screenshot-2024-08-22-022326.png'
  },
];

const Speakers = () => {
  return (
    <div className="speakers-container mt-5">
      <div className="organisers-container">
        {speakers.map((speaker, index) => (
          <div key={index} className="ted-card">
            <div className="ted-imgBx">
              <img src={speaker.imgSrc} alt={speaker.name} />
            </div>
            <div className="ted-details ">
              <h2 className='font-bold text-xl'>{speaker.name}<br /><span className='font-semibold text-lg'>{speaker.role}</span></h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
