import React from 'react';
import './cardalumni.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Cardalumni = (props) => {
  return (
    <div className="card-alumni">
        <img src={props.image} alt="" />
        <h2>{props.name}</h2>
        <div className="bottom-Alumni">
            <div className="items-Alumni">
              <div className="icons-Alumni">
                <a href={props.facebooklink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="delay1" icon={faFacebook} color='white' />
                </a>
                <a href={props.instalink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="delay2" icon={faInstagram} color='white'/>
                </a>
                <a href={props.linkedinlink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="delay3" icon={faLinkedin} color='white'/>
                </a>
              </div>
            </div>
            <di className="button-Alumni"><button id='alumni-button'></button></di>
        </div>
    </div>

  );
};

export default Cardalumni;