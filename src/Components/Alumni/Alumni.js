
import React from 'react'
import './Alumni.css'
import Cardalumni from './CardAlumni.js'
import Wave from './Wave.js';

const Alumni = () => {
    const cardsData =[
        {
          "image": "https://live.staticflickr.com/65535/52770752569_2b8ecca0dc_n.jpg",
          "name": "Rahul Kashyap",
          "instalink": "https://instagram.com/rahulkshp64?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/meetrahulkashyap/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770839734_5e031c3c8c_n.jpg",
          "name": "Vaibhav Ojha",
          "instalink": "https://instagram.com/vaibhav___ojha?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/vaibhav-ojha-2bb06a224/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770963502_3bf0621ced_n.jpg",
          "name": "Ayushi Gupta",
          "instalink": "https://instagram.com/_ayug_?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/ayushi-gupta-8444b2202/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52769982052_1439e8a056_n.jpg",
          "name": "Sandeep Verma",
          "instalink": "https://instagram.com/vsandeep13?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/vsan13/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770777144_ceb4de8b33_n.jpg",
          "name": "Asif Khan",
          "instalink": "https://instagram.com/asif_khan1911?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/asif-khan-a1489964/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770737614_0e22c3bba8_w.jpg",
          "name": "D. Sharvani Reddy",
          "instalink": "https://instagram.com/sharvani_reddyy?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/sharvani-reddy-dommata-8444b8210/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52771752264_f93e99eaf8_w.jpg",
          "name": "Neel Kamal",
          "instalink": "https://instagram.com/_hyperconjugate_?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/neel-kamal1407/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52769989932_96e6a564c0_n.jpg",
          "name": "Asutosh Kumar Singh Rathore",
          "instalink": "https://instagram.com/simp0la?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/ashutosh-rathore-133b58177",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770762544_ca5e536294_n.jpg",
          "name": "Subham Paul",
          "instalink": "https://instagram.com/x_subham_d?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/subham-paul-900320207/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770963442_7e8504f832_n.jpg",
          "name": "Ishan Gupta",
          "instalink": "https://instagram.com/ishangupta641?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/ishan-gupta-0652611b8/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770963562_eb41760b38_w.jpg",
          "name": "Navin Kumar Pathak",
          "instalink": "https://instagram.com/kumarpathaknavin?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/navin-kumar-pathak-a421a1235/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770985890_14ec284834_n.jpg",
          "name": "Sunay Pal",
          "instalink": "https://instagram.com/palsunay?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/sunay-pal-917035201/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770958238_a1d772fb5c_w.jpg",
          "name": "Ravi Prakash",
          "instalink": "https://instagram.com/itz._ravi?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/ravi-prakash-036a13200/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770543366_761f532d74_z.jpg",
          "name": "Sabharish Sappa",
          "instalink": "https://instagram.com/sabharish_sappa?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/sabharish-sappa-ba62a3216",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52771020693_7da5f3bd3a_n.jpg",
          "name": "Faria Tariq",
          "instalink": "https://instagram.com/tariqfaria23?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/tariqfaria23",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770534016_72a7436c14_n.jpg",
          "name": "Harsh Srivastava",
          "instalink": "https://instagram.com/harshsrivastav521?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/harsh-srivastava-11652b1b7",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770962720_9e830240db_w.jpg",
          "name": "Shivanshu  Basu Mallik",
          "instalink": "https://instagram.com/shivanshu_basumallick?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/sbmallick",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/53127082214_560dc78757_n.jpg",
          "name": "Kushal Sarda",
          "instalink": "https://instagram.com/kumarpathaknavin?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/kushal-sarda-0126251aa/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52771494371_b5647c9349_n.jpg",
          "name": "Sujal Gupta",
          "instalink": "https://instagram.com/sujalgupta628?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/sujal-gupta-436752201/",
          "facebooklink": "/"
        },
        {
          "image": "https://live.staticflickr.com/65535/52770810594_44afa91a13_n.jpg",
          "name": "Shraddha Mandal",
          "instalink": "https://instagram.com/mandalshraddha?igshid=YmMyMTA2M2Y=",
          "linkedinlink": "https://www.linkedin.com/in/shraddha-mandal-75b993215",
          "facebooklink": "/"
        },
        {
            "image": "https://live.staticflickr.com/65535/53126284227_4a0c1c0c46_m.jpg",
            "name": "M. Vishnu Vardhan Reddy",
            "instalink": "https://instagram.com/vvreddy_2709?igshid=YmMyMTA2M2Y=",
            "linkedinlink": "https://www.linkedin.com/in/vishnu-vardhan-reddy-maddi-0b8615218/",
            "facebooklink": "/"
          },
          {
            "image": "https://live.staticflickr.com/65535/52771005658_7ed79be0eb_n.jpg",
            "name": "Subham Mandal",
            "instalink": "https://instagram.com/subham_mandal?igshid=YmMyMTA2M2Y=",
            "linkedinlink": "https://www.linkedin.com/in/subham-mandal-8a18961b6/",
            "facebooklink": "/"
          },
          {
            "image": "https://live.staticflickr.com/65535/52770812484_b2e8ae8b60_w.jpg",
            "name": "Shruti Sharma",
            "instalink": "https://instagram.com/shruti.sh_01?igshid=YmMyMTA2M2Y=",
            "linkedinlink": "https://www.linkedin.com/in/shruti-sharma-bb0b6820b/",
            "facebooklink": "/"
          },
          {
            "image": "https://live.staticflickr.com/65535/52771494461_96e011d3ab_w.jpg",
            "name": "Sankalp Mohanty",
            "instalink": "/",
            "linkedinlink": "/",
            "facebooklink": "/"
          },
          {
            "image": "https://live.staticflickr.com/65535/52771983018_12d616e1b2_n.jpg",
            "name": "K. Deekshita",
            "instalink": "/",
            "linkedinlink": "https://www.linkedin.com/in/deekshita-kancharla-35616a218/",
            "facebooklink": "/"
          }
      ]
      
    return (
      <>
      <Wave/>
        <div class="container-alumni mt-4">
            <h1>Meet Our <span>Alumni</span></h1>
            <div className="content-alumni mt-6">
                <p>The 2023 and 2024 alumni have significantly contributed to the club's esteemed reputation through their diligent efforts in hosting a range of successful events, including SDV, TEDx, Aarohan, Drag & Drift, F.I.S.T., webinars, and various interactive workshops.
                Their involvement in the club's Annual Magazine, Autopia, and videos on cutting-edge technology for Cryptech has been remarkable.
                Furthermore, their participation in national events such as Baja India has been noteworthy.
                Their contributions have played a crucial role in the club's exceptional achievements during their tenure, thereby ensuring the perpetuation of its legacy.</p>
            </div>
            <div className="cards-Alumni">
            {cardsData.map(card => (
                <Cardalumni  name={card.name} image={card.image} instalink={card.instalink} facebooklink={card.facebooklink} linkedinlink={card.linkedinlink}/>
            ))}
            </div>
        </div>
        </>
  );
};

export default Alumni
