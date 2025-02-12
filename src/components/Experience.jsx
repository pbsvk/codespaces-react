import React from "react";
import "../App.css";

const Skills = () => {
  const experienceTimelineData = [
    {
      key: "001",
      dateText: "Sep 2024 - Present",
      title: "Stevens Institute of Technology",
      subtitle: "Graduate Course Assistant – Advanced Algorithms",
      details: [
        "Part-time · 6 mos",
        "Location: Hoboken, New Jersey, United States",
        "As a Graduate Course Assistant for Advanced Algorithms, I'm deeply involved in helping both students and faculty navigate the complexities of algorithm design and analysis",
        "Prepare course materials, lead office hours, and assist with grading",
        "Make challenging concepts more accessible and engaging for everyone"
      ]
    },
    {
      key: "002",
      dateText: "Sep 2024 - Present",
      title: "Stevens Institute of Technology",
      subtitle: "Graduate Course Assistant – University Teaching and Algorithm Analysis",
      details: [
        "Hybrid · 6 mos",
        "As a Graduate Course Assistant for Algorithms, I'm deeply involved in helping both students and faculty navigate the complexities of algorithm design and analysis",
        "Prepare course materials, lead office hours, and assist with grading",
        "Make challenging concepts more accessible and engaging for everyone"
      ]
    },
    {
      key: "003",
      dateText: "Jun 2020 - Aug 2023",
      title: "Sri Sai Viveka Technologies",
      subtitle: "Front End Developer",
      details: [
        "Full-time · 3 yrs 3 mos",
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
