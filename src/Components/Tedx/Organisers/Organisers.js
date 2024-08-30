
import React from 'react';
import './Organisers.css';

const Organisers = () => {
  const organisers = [
    { name: 'Rahul Kashyap', imgSrc: 'https://live.staticflickr.com/65535/52770752569_2b8ecca0dc_n.jpg' },
    { name: 'Vaibhav Ojha', imgSrc: 'https://live.staticflickr.com/65535/52770839734_5e031c3c8c_n.jpg' },
    { name: 'Ayushi Gupta', imgSrc: 'https://live.staticflickr.com/65535/52770963502_3bf0621ced_n.jpg' },
    { name: 'Sandeep Verma', imgSrc: 'https://live.staticflickr.com/65535/52769982052_1439e8a056_n.jpg' },
    { name: 'Asif Khan', imgSrc: 'https://live.staticflickr.com/65535/52770777144_ceb4de8b33_n.jpg' },
    { name: 'D. Shravani Reddy', imgSrc: 'https://live.staticflickr.com/65535/52770737614_0e22c3bba8_w.jpg' },
    { name: 'Neel Kamal', imgSrc: 'https://live.staticflickr.com/65535/52771752264_f93e99eaf8_w.jpg' },
    { name: 'Asutosh Kumar Singh Rathore', imgSrc: 'https://live.staticflickr.com/65535/52769989932_96e6a564c0_n.jpg' },
    { name: 'Shubham Paul', imgSrc: 'https://live.staticflickr.com/65535/52770762544_ca5e536294_n.jpg' },
    { name: 'Ishan Gupta', imgSrc: 'https://live.staticflickr.com/65535/52770963442_7e8504f832_n.jpg' },
    { name: 'Navin Kumar Pathak', imgSrc: 'https://live.staticflickr.com/65535/52770963562_eb41760b38_w.jpg' },
    { name: 'Sunay Pal', imgSrc: 'https://live.staticflickr.com/65535/52770985890_14ec284834_n.jpg' },
    { name: 'Ravi Prakash', imgSrc: 'https://live.staticflickr.com/65535/52770958238_a1d772fb5c_w.jpg' },
    { name: 'Sabharish Sappa', imgSrc: 'https://live.staticflickr.com/65535/52770543366_761f532d74_z.jpg' },
    { name: 'Faria Tariq', imgSrc: 'https://live.staticflickr.com/65535/52771020693_7da5f3bd3a_n.jpg' },
    { name: 'Shivanshu Basu Mallik', imgSrc: 'https://live.staticflickr.com/65535/52770962720_9e830240db_w.jpg' },
    { name: 'Kushal Sarda', imgSrc: 'https://live.staticflickr.com/65535/53127082214_560dc78757_n.jpg' },
    { name: 'Sujal Gupta', imgSrc: 'https://live.staticflickr.com/65535/52771494371_b5647c9349_n.jpg' },
    { name: 'Shraddha Mandal', imgSrc: 'https://live.staticflickr.com/65535/52770810594_44afa91a13_n.jpg' },
    { name: 'Subham Mandal', imgSrc: 'https://live.staticflickr.com/65535/52771005658_7ed79be0eb_n.jpg' },
    { name: 'Harsh Srivastava', imgSrc: 'https://live.staticflickr.com/65535/52770534016_72a7436c14_n.jpg' },
    { name: 'M. Vishnu Vardhan Reddy', imgSrc: 'https://live.staticflickr.com/65535/53126284227_4a0c1c0c46_m.jpg' },
    { name: 'Shruti Sharma', imgSrc: 'https://live.staticflickr.com/65535/52770812484_b2e8ae8b60_w.jpg' },
    { name: 'Sankalp Mohanty', imgSrc: 'https://live.staticflickr.com/65535/52771494461_96e011d3ab_w.jpg' },
    { name: 'K. Deekshita', imgSrc: 'https://live.staticflickr.com/65535/52771983018_12d616e1b2_n.jpg' },
   
    
  ];

    return (
    <div className="ted-organisers-container ">
      {organisers.map((organiser, index) => (
        <div
          key={index}
          className={`ted-image-card font-bold text-xl justify-center  ${
            index === organisers.length - 1 ? 'last-card' : ''
          }`}
          data-name={organiser.name}
        >
          <img src={organiser.imgSrc} alt={organiser.name} />
        </div>
      ))}
    </div>
  );
};

export default Organisers;
