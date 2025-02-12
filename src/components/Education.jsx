import React from "react";
import "../App.css";

const Skills = () => {
  const educationTimelineData = [
    {
      key: "001",
      dateText: "Sept 2023 – Dec 2024",
      title: "Stevens Institute of technology",
      subtitle: "M.S., Computer Science",
      description: `
        <div class="course-list">
          <h5>Course Work</h5>
          <div class="course-item">CS 590: Algorithms</div>
          <div class="course-item">CS 600: Advanced Algorithm Design and Implementation</div>
          <div class="course-item">CS 556: Mathematical Foundations for Machine Learning</div>
          <div class="course-item">CS 561: DBMS</div>
          <div class="course-item">CS 550: Computer Organization and Programming</div>
          <div class="course-item">CS 513: Knowledge Discovery and Data Mining</div>
          <div class="course-item">CS 524: Introduction to Cloud Computing</div>
          <div class="course-item">MIS 637: Data Analytics and Machine Learning</div>
          <div class="course-item">CS 573: Fundamentals of Cybersecurity</div>
          <div class="course-item">AA 551: Engineering Python</div>
        </div>
      `
    },
    {
      key: "002",
      dateText: "Aug 2019 – May 2023",
      title: "MVGR College of Engineering",
      subtitle: "B.Tech, Electronics and Communication Engineering",
      description: `
        <div class="skills-list">
          <h5>Skills</h5>
          <div class="course-list">
  <div class="course-item">MATLAB</div>
  <div class="course-item">C</div>
  <div class="course-item">Programming</div>
  <div class="course-item">Algorithms</div>
  <div class="course-item">JavaScript</div>
  <div class="course-item">Discrete Mathematics</div>
  <div class="course-item">Python</div>
  <div class="course-item">Code Review</div>
  <div class="course-item">Mathematics</div>
  <div class="course-item">Data Structures</div>
  <div class="course-item">Problem Solving</div>
  <div class="course-item">SQL</div>
  <div class="course-item">Computer Engineering</div>
</div>

        </div>
      `
    }
  ];

  return (
    <div name="education" className="education-section w-full min-h-screen flex">
      <div className="education-container max-w-screen-lg p-14">
        <div>
          <h1 className="education-title">
            <span id="Vamsi">Education</span>
          </h1>
          <div className="flex justify-center items-center">
            <div className="timeline">
              {educationTimelineData.map((item) => (
                <div key={item.key} className="timeline-item">
                  <div className="timeline-date">
                    {item.dateText}
                  </div>
                  <div className="timeline-content">
                    <h3 className="institution-name">{item.title}</h3>
                    <h4 className="degree-name">{item.subtitle}</h4>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;