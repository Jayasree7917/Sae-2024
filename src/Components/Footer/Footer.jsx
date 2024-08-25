import React from 'react';
import './Footer.css'; // Import the CSS file
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import {Link} from "react-router-dom";
// import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="homfooter">
            <div className="homfoot-logo">
            <Link to="/">
                        <img
                            src="https://swarajjaiswal.github.io/saeevents/logo.png"
                            alt="SAE"
                        />
            </Link>
            </div>

            <div className="homsocial">
                            {/* Instagram */}
                <div className="homicons">
                <a href='https://www.instagram.com/sae.nitd' target="_blank" rel="noopener noreferrer">
                                <svg
                                    height="30px"
                                    width="30px"
                                    viewBox="0 0 256 256"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="hominstagram"
                                >
                                    <g transform="scale(8,8)">
                                        <path
                                            d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"
                                        ></path>
                                    </g>
                                </svg>
                                </a>
                            </div>

                            {/* YouTube */}
                            <div className="homicons">
                            <a href='https://www.youtube.com/@saenitdgp' target="_blank" rel="noopener noreferrer">
                                <svg
                                    height="30px"
                                    width="30px"
                                    viewBox="0 0 48 48"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="homyoutube"
                                >
                                    <path
                                        d="M43.611,15.202c0,0-0.428-3.031-1.744-4.364c-1.671-1.752-3.541-1.759-4.393-1.861C32.607,8,24,8,24,8h-0.016c0,0-8.606,0-13.471,0.975c-0.852,0.102-2.723,0.109-4.393,1.861C5.796,12.171,5.369,15.202,5.369,15.202S5,18.644,5,22.088v3.866c0,3.444,0.369,6.887,0.369,6.887s0.428,3.031,1.744,4.364c1.671,1.752,3.858,1.7,4.829,1.887C14.393,39.992,24,40,24,40s8.607-0.008,13.471-0.975c0.852-0.102,2.723-0.109,4.393-1.861c1.316-1.333,1.744-4.364,1.744-4.364S43,29.398,43,25.954v-3.866C43,18.644,43.611,15.202,43.611,15.202z"
                                    />
                                    <polygon fill="#FFFFFF" points="19.615,30.923 30.769,24.962 19.615,19.077" />
                                </svg>
                                </a>
                            </div>

                                {/* LinkedIn */}
                                <div className="homicons">
                                    <a href='https://www.linkedin.com/company/sae-india-nit-dgp-collegiate-chapter/' target="_blank" rel="noopener noreferrer">
                                    <svg
                                        height="30px"
                                        width="30px"
                                        viewBox="0 0 448 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="homlinkedin"
                                    >
                                        <path
                                            d="M100.28 448H7.4V149.5h92.78zm-46.29-344A53.69 53.69 0 0 1 .63 50.6 53.7 53.7 0 0 1 53.83 0a53.69 53.69 0 1 1 0 107.39zm394.2 296.57V448H354.59V303.44c0-34.49-13.63-58.02-44.75-58.02-24.31 0-38.79 16.41-45.17 32.23-2.33 5.69-2.91 13.61-2.91 21.6V448H170.74c.61-141.61 0-249.5 0-298.49h92.57v42.31c-6.7-10.29-32.71-24.94-72.59-24.94-52.74 0-91.64 33.81-91.64 106.52V448H67.4V149.5h92.78v42.3h.61c12.13-20.21 42.69-49.4 93.18-49.4 68.06 0 119.1 44.46 119.1 140.12V448z"
                                        />
                                    </svg>
                                    </a>
                                </div>

                            {/* Facebook */}
                            <div className="homicons" >
                            <a href='https://www.facebook.com/SAENITD/' target="_blank" rel="noopener noreferrer">
                                <svg
                                    height="30px"
                                    width="30px"
                                    viewBox="0 0 320 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="homfacebook"
                                >
                                    <path
                                        d="M279.14 288l14.22-92.66h-88.91V134.5c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.63 0 225.36 0c-73.22 0-121.1 44.38-121.1 124.72v70.62H22.89V288h81.38v224h100.2V288z"
                                    />
                                </svg>
                                </a>
                            </div>
                            <div className='homfollow-us'><h3>Follow Us</h3></div>
                        </div>
                        <div className="homfoot-cols">
                            {/* USEFUL LINKS */}
                            <div className="homfoot-col">
                                <div className="homuseful-links-header" >
                                        <i className="fa fa-anchor" aria-hidden="true" style={{ color: 'rgb(202, 52, 53)', scale: '1.3' }}></i>
                                        <h3 className="homfoot-head" >Useful Links</h3>
                                </div>
                                <ul className="homuseful-links-list">
                                        <li >
                                        <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                                        <Link to="/" className="home">Home</Link>
                                        </li>
                                        <li>
                                        <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                                        <Link to="/events">Events</Link>
                                        </li>
                                        <li>
                                        <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                                        <Link to="/teams">Teams</Link>
                                        </li>
                                        <li>
                                        <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                                        <Link to="/tedx">TedX</Link>
                                        </li>
                                        <li>
                                        <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                                        <Link to="/aarohan">Aarohan</Link>
                                        </li>
                                
                                </ul>

                            </div>

                            {/* CONTACT US */}
                            <div className="homfoot-col">
                                <div className="homcontact">
                                        <i className="fa fa-handshake-o" aria-hidden="true" style={{ color: 'rgb(202, 52, 53)', scale: '1.6' }}></i>
                                        <h3 className="homfoot-head">Contact Us</h3>
                                    </div>
                                    <ul className="homlist">
                                        <li>
                                            <i className="fa fa-map-marker-alt"></i> Mahatma Gandhi Avenue, A-zone, Durgapur, West Bengal Durgapur: 713209
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope" ></i> <a href="mailto:saeindia@nitdgp.ac.in" className='anchor'>saeindia@nitdgp.ac.in</a>
                                        </li>
                                    </ul>
                                </div>

                                                {/* PERSON'S NAME AND CONTACT */}
                                <div className="homfoot-col">
                                    <div className="homcontact-info">
                                        <div className="homcontact-item">
                                            <i className="fa fa-user-o" aria-hidden="true" ></i>
                                            <div className="homcontact-details">
                                                <h3 className="foot-head-1" >Siddharth Khandelwal</h3>
                                                <ul className="homlist-1">
                                                    <li>(President)</li>
                                                        <li>
                                                            <i className="fa fa-envelope" id="Cont" ></i>
                                                            <a href="mailto:siddharthkhandelwal78@gmail.com" className='anchor'>siddharthkhandelwal78@gmail.com</a>
                                                        </li>
                                                    <li>
                                                        <i className="fa fa-phone" ></i>
                                                        <a href="tel:+916371657152" className='anchor'>+91 6371657152</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="homcontact-item">
                                            <i className="fa fa-user-o" aria-hidden="true" ></i>
                                            <div className="homcontact-details">
                                                <h3 className="homfoot-head-2" >Prasant Sahu</h3>
                                                <ul className="homlist-2">
                                                    <li>(Head of Corporate Communication)</li>
                                                    <li>
                                                        <i className="fa fa-envelope"></i>
                                                        <a href="mailto:prasant999.sahu@gmail.com" className='anchor'>prasant999.sahu@gmail.com</a>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-phone"></i>
                                                        <a href="tel:+917908622520" className='anchor'>+91 7908622520</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </footer>
                        { <section id="fcopy-right">
       
       <div className="fcopy-right-sec">Made By SAE-Dev Team &copy;
        2024  <Link to="/">  SAE </Link>. All right reserved. 
       </div>

     </section> }
    </div>
  )
}

export default Footer
