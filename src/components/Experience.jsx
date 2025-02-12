import React from "react";
import "../App.css";

const Skills = () => {
  const timelineData = [
    {
      key: "001",
      dateText: "Sep 2024 - Present",
      title: "Stevens Institute of Technology",
      subtitle: "Graduate Course Assistant – Advanced Algorithms",
      description: `Part-time · 6 mos
        Location: Hoboken, New Jersey, United States

        As a Graduate Course Assistant for Advanced Algorithms, I'm deeply involved in helping both students and faculty navigate the complexities of algorithm design and analysis. I prepare course materials, lead office hours, and assist with grading, aiming to make challenging concepts more accessible and engaging for everyone.`
    },
    {
      key: "002",
      dateText: "Sep 2024 - Present",
      title: "Stevens Institute of Technology",
      subtitle: "Graduate Course Assistant – University Teaching and Algorithm Analysis",
      description: `Hybrid · 6 mos
        
        As a Graduate Course Assistant for Algorithms, I'm deeply involved in helping both students and faculty navigate the complexities of algorithm design and analysis. I prepare course materials, lead office hours, and assist with grading, aiming to make challenging concepts more accessible and engaging for everyone.`
    },
    {
      key: "003",
      dateText: "Jun 2020 - Aug 2023",
      title: "Sri Sai Viveka Technologies",
      subtitle: "Front End Developer",
      description: `Full-time · 3 yrs 3 mos
        Location: Hyderabad, Telangana, India

        • Spearheaded the redesign of the company's web-based packaging solutions portal, increasing customer engagement by 40%
        • Applied responsive design principles to optimize website functionality across various devices
        • Leveraged advanced technologies like HTML5, CSS3, JavaScript, and React.js
        • Partnered with back-end developers to integrate APIs and ensure seamless functionality`
    }
  ];

  return (
    <div className="timeline-container">
      <h2 className="timeline-header">Professional Experience</h2>
      <div className="timeline">
        {timelineData.map((item) => (
          <div key={item.key} className="timeline-item">
            <div className="timeline-date">{item.dateText}</div>
            <div className="timeline-content">
              <h3 className="timeline-title">{item.title}</h3>
              <h4 className="timeline-subtitle">{item.subtitle}</h4>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
