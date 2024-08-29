

import React, { useEffect } from "react";
import "./Teams.css";
import { finalYear } from "./Assets/finalYear.js";
import { thirdYear } from "./Assets/thirdYear.js";
import { secondYear } from "./Assets/secondYear.js";

const GridLayout = ({ members }) => {
  return (
    <div className="grid-container">
      {members.map((member, index) => (
        <div key={index} className="grid-item">
          <div className="card">
            <div className="card-content">
              <img className="card-image" src={member.url} alt={member.name} />
              <div className="card-overlay">
                <h3 className="card-name">{member.name}</h3>
                <p className="card-designation">{member.position}</p>
                <div className="social-icons">
                  <a
                    href={member.instaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href={member.linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};



const Teams = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          } else {
            entry.target.classList.remove("section-visible");
          }
        });
      },
      { threshold: 0.07 } // Adjust threshold as needed
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div className="teams-page">
      <h1 className="teams-heading">Our Team</h1>

      <section className="section">
        <h2 className="sub-heading">Office Bearers</h2>
        <hr className="section-divider" />
        <GridLayout members={finalYear} />
      </section>

      <section className="section">
        <h2 className="sub-heading">Senior Coordinators</h2>
        <hr className="section-divider" />
        <GridLayout members={thirdYear} />
      </section>

      <section className="section">
        <h2 className="sub-heading">Junior Coordinators</h2>
        <hr className="section-divider" />
        <GridLayout members={secondYear} />
      </section>
    </div>
  );
};



export default Teams;
