
import React from 'react';
import './Footer.css';
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';  // Import Link for routing

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-row">
            {/* Logo and Follow Us */}
            <div className="footer-col">
              <img src="https://swarajjaiswal.github.io/saeevents/logo.png" alt="Logo" className="footer-logo" />
              <h5 className="footer-head">Follow us</h5>
              <div className="footer-social">
                <Link target='blank' to="https://www.facebook.com/SAENITD?mibextid=ZbWKwL" className="footer-social-link"><FaFacebook /></Link>
                <Link target='blank' to="https://www.linkedin.com/company/sae-india-nit-dgp-collegiate-chapter/mycompany/" className="footer-social-link"><FaLinkedin /></Link>
                <Link target='blank' to="https://www.youtube.com/@saenitdgp" className="footer-social-link"><FaYoutube /></Link>
                <Link target='blank' to="https://www.instagram.com/sae.nitd?igsh=MTd6a3l6cnZtNnY3cA==" className="footer-social-link"><FaInstagram /></Link>
              </div>
            </div>

            {/* Contact Us */}
            <div className="footer-col">
              <h5 className="footer-head">Contact Us</h5>
              <p className="footer-contact">Mahatma Gandhi Avenue, A-zone</p>
              <p className="footer-contact">Durgapur, West Bengal, 713209</p>
              <div className="footer-contact flex-item">
                <FaEnvelope />
                <Link className="text-md anchor" to="saeindia@nitdgp.ac.in">saeindia@nitdgp.ac.in</Link>
              </div>
            </div>

            {/* Contact Info: President */}
            <div className="footer-col">
              <h5 className="footer-head">Siddharth Khandelwal</h5>
              <p className="footer-contact">President</p>
              <div className="footer-contact flex-item">
                <FaEnvelope />
                <Link className='text-md anchor' to="president.saeindia@nitdgp.ac.in">president.saeindia@nitdgp.ac.in</Link>

              </div>
              <div className="footer-contact flex-item">
                <FaPhoneAlt />
                <Link to="tel:+916371657152" className='text-md anchor'>+91 6371657152</Link>
              </div>
            </div>

            {/* Contact Info: Vice President */}
            <div className="footer-col">
              <h5 className="footer-head">Prasant Sahu</h5>
              <p className="footer-contact">Head of Corporate Communication</p>
              <div className="footer-contact flex-item">
                <FaEnvelope />
                <Link to="prasant999.sahu@gmail.com" className="text-md anchor">prasant999.sahu@gmail.com</Link>
              </div>
              <div className="footer-contact flex-item">
                <FaPhoneAlt />
                <Link to="tel:+917908622520" className='text-md anchor'>+91 7908622520</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <section className="footer-copy">
        <div className="footer-copy-container font-medium">
          Made By SAE-Dev Team @ 2024
          <Link to="/" className="footer-copy-link"> SAE </Link>. All rights reserved.
        </div>
      </section>
    </div>
  );
}

export default Footer;
