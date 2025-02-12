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
        <strong>Course Work:</strong> <br />
        CS 590 : Algorithms <br />
        CS 600 : Advanced Algorithm Design and Implementation <br />
        CS 556 : Mathematical Foundations for Machine Learning <br />
        CS 561 : DBMS <br />
        CS 550 : Computer Organization and Programming <br />
        CS 513 : Knowledge Discovery and Data Mining <br />
        CS 524 : Introduction to Cloud Computing <br />
        MIS 637 : Data Analytics and Machine Learning <br />
        CS 573 : Fundamentals of Cybersecurity <br />
        AA 551 : Engineering Python
      `,
    },
    {
      key: "002",
      dateText: "Aug 2019 – May 2023",
      title: "MVGR College of Engineering",
      subtitle: "B.Tech, Electronics and Communication Engineering",
      description: `
        <strong>Skills:</strong> <br />
        MATLAB <br />
        C (Programming Language) <br />
        Programming <br />
        Algorithms <br />
        JavaScript <br />
        Discrete Mathematics <br />
        Python (Programming Language) <br />
        Code Review <br />
        Mathematics <br />
        Data Structures <br />
        Problem Solving <br />
        SQL <br />
        Computer Engineering
      `,
    },
  ];

  return (
    <div name="education" className="w-full min-h-screen flex">
      <div className="max-w-screen-lg p-14">
        <div>
          <h1 className="text-6xl font-bold">
            <span id="Vamsi">Education</span>
          </h1>
          <div className="flex justify-center items-center">
            <div className="timeline">
              {educationTimelineData.map((item) => (
                <div key={item.key} className="timeline-item">
                  <div className="timeline-item-date">
                    {item.dateText}
                  </div>
                  <div className="timeline-item-content" >
                    <h3 className="text-purple1">{item.title}</h3>
                    <h4 className="text-purple2">{item.subtitle}</h4>
                    <p
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