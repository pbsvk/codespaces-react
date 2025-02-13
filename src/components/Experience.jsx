import React from "react";
import "../App.css";

const Skills = () => {
  const experienceTimelineData = [
    {
      key: "001",
      dateText: "Sep 2024 - Dec 2024",
      title: "Stevens Institute of Technology",
      subtitle: "Graduate Course Assistant – Advanced Algorithms",
      details: [
        "Location: Hoboken, New Jersey, United States",
        "As a Graduate Course Assistant for Advanced Algorithms, I'm deeply involved in helping both students and faculty navigate the complexities of algorithm design and analysis",
        "Prepare course materials, lead office hours, and assist with grading",
        "Make challenging concepts more accessible and engaging for everyone"
      ]
    },
    {
      key: "002",
      dateText: "Sep 2024 - Dec 2024",
      title: "Stevens Institute of Technology",
      subtitle: "Graduate Course Assistant – Algorithms",
      details: [
        "As a Graduate Course Assistant for Algorithms, I'm deeply involved in helping both students and faculty navigate the complexities of algorithm design and analysis",
        "Prepare course materials, lead office hours, and assist with grading",
        "Make challenging concepts more accessible and engaging for everyone"
      ]
    },
    {
      key: "003",
      dateText: "Jun 2022 - Aug 2023",
      title: "Infinity Connects Media",
      subtitle: "Front End Web Developer",
      details: [
        "Location: Hyderabad, Telangana, India",
        "Spearheaded the redesign of the company's web-based packaging solutions portal, increasing customer engagement by 40%",
        "Applied responsive design principles to optimize website functionality across various devices",
        "Leveraged advanced technologies like HTML5, CSS3, JavaScript, and React.js",
        "Partnered with back-end developers to integrate APIs and ensure seamless functionality"
      ]
    }
  ];

  return (
    <section 
      name="experience" 
      id="experience" 
      className="education-section"
    >
      <div className="education-container">
        <h1 className="education-title">
          <span id="Vamsi">Experience</span>
        </h1>
        <div className="timeline">
          {experienceTimelineData.map((item) => (
            <div key={item.key} className="timeline-item">
              <div className="timeline-date">{item.dateText}</div>
              <div className="timeline-content">
                <h3 className="institution-name">{item.title}</h3>
                <h4 className="degree-name">{item.subtitle}</h4>
                <div className="course-list">
                  {item.details.map((detail, index) => (
                    <div key={index} className="course-item">{detail}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
