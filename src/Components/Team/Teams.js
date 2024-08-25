import React, { useEffect } from "react";
import "./Teams.css";
import { finalYear } from "./Assets/finalYear.js";
import { thirdYear } from "./Assets/thirdYear.js";
import { secondYear } from "./Assets/secondYear.js";

const GridLayout = ({ members }) => {
  return (
    <div className="teams-grid-container">
      {members.map((member, index) => (
        <div key={index} className="grid-item animate-teams-card">
          <div className="teams-card">
            <div className="teams-card-content">
              <img className="teams-card-image" src={member.url} alt={member.name} />
              <div className="teams-card-overlay">
                <h3 className="teams-card-name">{member.name}</h3>
                <br/>
                <p
                  className="teams-card-designation"
                  style={{ color: "rgb(202, 52, 53)" }}
                >
                  {member.position}
                </p>
                <div className="social-icons">
                  <br/>
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
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("left-to-right")) {
            entry.target.classList.add("animate-left");
          } else if (entry.target.classList.contains("right-to-left")) {
            entry.target.classList.add("animate-right");
          }
          observer.unobserve(entry.target);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className="teams-page animate-loading">
      <h1 className="teams-heading text-7xl">Our Team</h1>

      <section className="section left-to-right">
        <h2 className="sub-heading text-4xl font-bold">Office Bearers</h2>
        <hr className="section-divider" />
        <GridLayout members={finalYear} />
        <br/>
      </section>

      <section className="section right-to-left">
        <h2 className="sub-heading text-4xl font-bold">Senior Coordinators</h2>
        <hr className="section-divider" />
        <GridLayout members={thirdYear} />
        <br/>
      </section>

      <section className="section left-to-right">
        <h2 className="sub-heading text-4xl font-bold">Junior Coordinators</h2>
        <hr className="section-divider" />
        <GridLayout members={secondYear} />
        <br/>
      </section>
    </div>
  );
};

export default Teams;