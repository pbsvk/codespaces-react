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
          <div class="course-list">
          <h5>Course Work</h5>
  <div class="course-item">A2MAT101: Mathematics - I</div>
<div class="course-item">A2PYI102: Applied Physics (Integrated Course)</div>
<div class="course-item">A2CII201: Programming for Problem Solving (Integrated Course)</div>
<div class="course-item">A2MED201: Computer Aided Engineering Graphics</div>
<div class="course-item">A2EHA701: Constitution of India (Audit Course - 1)</div>
<div class="course-item">A2MAT102: Mathematics-II</div>
<div class="course-item">A2CYI101: Engineering Chemistry (Integrated Course)</div>
<div class="course-item">A2EEI201: Basic Electrical Engineering (Integrated Course)</div>
<div class="course-item">A2ECW201: Electronics Workshop</div>
<div class="course-item">A2EHL001: Essential Communication in English</div>
<div class="course-item">A2CHT101: Biology for Engineers</div>
<div class="course-item">A2MAT107: Mathematics - III</div>
<div class="course-item">A2ECT201: Internet of Things</div>
<div class="course-item">A2ECT301: Network Theory</div>
<div class="course-item">A2ECT302: Switching Theory and Logic Design</div>
<div class="course-item">A2ECI201: AI Tools, Techniques and Applications (Integrated Course)</div>
<div class="course-item">A2ECI301: Electronic Devices and Circuits (Integrated Course)</div>
<div class="course-item">A2CHA701: Environmental Science (Audit Course - 2)</div>
<div class="course-item">A2EHT001: Effective Technical Communication</div>
<div class="course-item">A2MAT109: Mathematics-IV</div>
<div class="course-item">A2ECT202: Design Thinking and Product Innovation</div>
<div class="course-item">A2ECT303: Signal and Systems</div>
<div class="course-item">A2ECT304: Random Variables and Stochastic Process</div>
<div class="course-item">A2ECT305: Analog Circuits</div>
<div class="course-item">A2EC1302: Analog Communications (Integrated Course)</div>
<div class="course-item">A2EHA702: Essence of Indian Traditional Knowledge (Audit Course - 3)</div>
<div class="course-item">A2ECT306: Control Systems</div>
<div class="course-item">A2ECT403: Soft Computing Techniques</div>
<div class="course-item">A2MST501: Human Resource Development and Organizational Behavior</div>
<div class="course-item">A2CIT501: Fundamentals of Data Structures</div>
<div class="course-item">A2EC1303: Electromagnetic Waves and Transmission Lines (Integrated Course)</div>
<div class="course-item">A2ECI304: Digital Communications (Integrated Course)</div>
<div class="course-item">A2ECP601: Socially Relevant Project</div>
<div class="course-item">A2MST001: Managerial Economics and Financial Analysis</div>
<div class="course-item">A2ECT307: Antennas and Wave Propagation</div>
<div class="course-item">A2ECT406: Machine Learning</div>
<div class="course-item">A2ECT408: Computer Architecture and Computer Networks</div>
<div class="course-item">A2EC1305: Digital Signal Processing (Integrated Course)</div>
<div class="course-item">A2EC1306: Microprocessors and Microcontrollers (Integrated Course)</div>
<div class="course-item">A2ECP602: Mini Project</div>
<div class="course-item">A2EHT002: Professional Ethics and Human Values</div>
<div class="course-item">A2ECT412: Digital Image and Video Processing</div>
<div class="course-item">A2ECT414: Embedded and Real Time Operating Systems</div>
<div class="course-item">A2ECT418: Speech and Audio Processing</div>
<div class="course-item">A2ECI307: Microwave Engineering (Integrated Course)</div>
<div class="course-item">A2ECL301: Virtual Instrumentation Lab</div>
<div class="course-item">A2ECP603: Project (Phase - 1)</div>
<div class="course-item">A2ECT508: Wireless Communication Systems</div>
<div class="course-item">A2ECT511: GPS and Navigational Systems</div>
<div class="course-item">A2ECP604: Project Phase-II</div>
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