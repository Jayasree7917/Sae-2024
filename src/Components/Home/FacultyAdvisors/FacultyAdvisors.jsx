import React from 'react';
import './FacultyAdvisors.css';

const FacultyAdvisors = () => {
  const advisors = [
    {
      name: "Prof. Niloptal Banerjee",
      department: "Department of Mechanical Engineering",
      imageClass: "homhi-photo-niloptal",
      aos: "fade-right",
    },
    {
      name: "Prof. Apurba Layek",
      department: "Department of Mechanical Engineering",
      imageClass: "homhi-photo-apurba",
      aos: "fade-up",
    },
    {
      name: "Prof. Tapas Kumar Saha",
      department: "Department of Electrical Engineering",
      imageClass: "homhi-photo-tapas",
      aos: "fade-left",
    },
  ];

  return (
    <section className="homprops">
      <div id="testimonial-box" className="homcontainer1">
        <div className="homprops-heading">
          <h1 className="p-3 font-bold">Our Faculty Advisors</h1>
        </div>
        <div className="homhi-container">
          {advisors.map((advisor, index) => (
            <div className={`homhi`} data-aos={advisor.aos} key={index}>
              <div className={advisor.imageClass}></div>
              <div className="homhi-title">
                {advisor.name}
                <br />
                <span>{advisor.department}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyAdvisors;
