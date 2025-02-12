import React from "react";
import "../App.css";

const Skills = () => {
  const educationTimelineData = [
    {
      key: "001",
      dateText: "Sept 2023 – Dec 2024",
      title: "Stevens Institute of technology",
      subtitle: "M.S., Computer Science",
      courses: [
        "CS 590: Algorithms",
        "CS 600: Advanced Algorithm Design and Implementation",
        "CS 556: Mathematical Foundations for Machine Learning",
        "CS 561: DBMS",
        "CS 550: Computer Organization and Programming",
        "CS 513: Knowledge Discovery and Data Mining",
        "CS 524: Introduction to Cloud Computing",
        "MIS 637: Data Analytics and Machine Learning",
        "CS 573: Fundamentals of Cybersecurity",
        "AA 551: Engineering Python"
      ]
    },
    {
      key: "002",
      dateText: "Aug 2019 – May 2023",
      title: "MVGR College of Engineering",
      subtitle: "B.Tech, Electronics and Communication Engineering",
      skills: [
        "MATLAB", "C", "Programming", "Algorithms", "JavaScript",
        "Discrete Mathematics", "Python", "Code Review",
        "Mathematics", "Data Structures", "Problem Solving",
        "SQL", "Computer Engineering"
      ]
    }
  ];

  return (
    <section className="education-section">
      <div className="education-container">
        <h1 className="education-title">Education</h1>
        <div className="timeline">
          {educationTimelineData.map((item) => (
            <div key={item.key} className="timeline-item">
              <div className="timeline-date">{item.dateText}</div>
              <div className="timeline-content">
                <h3 className="institution-name">{item.title}</h3>
                <h4 className="degree-name">{item.subtitle}</h4>
                {item.courses && (
                  <div className="course-list">
                    <h5>Course Work</h5>
                    {item.courses.map((course, index) => (
                      <div key={index} className="course-item">{course}</div>
                    ))}
                  </div>
                )}
                {item.skills && (
                  <div className="skills-list">
                    <h5>Skills</h5>
                    <div className="skills-grid">
                      {item.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
