import React from "react";
import "../App.css";

const Skills = () => {
  const timelineData = [
    {
      key: "001",
      dateText: "Sep 2024 - Present",
      title: "Stevens Institute of Technology",
      subtitle: "Graduate Course Assistant – Advanced Algorithms",
      description: `
        <strong>Part-time · 6 mos</strong> <br />
        <strong>Location:</strong> Hoboken, New Jersey, United States <br /><br />
        As a Graduate Course Assistant for Advanced Algorithms, I’m deeply involved in helping both students and faculty navigate the complexities of algorithm design and analysis. I prepare course materials, lead office hours, and assist with grading, aiming to make challenging concepts more accessible and engaging for everyone.
      `,
    },
    {
      key: "002",
      dateText: "Sep 2024 - Present",
      title: "Stevens Institute of Technology",
      subtitle: "Graduate Course Assistant – University Teaching and Algorithm Analysis",
      description: `
        <strong>Hybrid · 6 mos</strong> <br /><br />
        As a Graduate Course Assistant for Algorithms, I’m deeply involved in helping both students and faculty navigate the complexities of algorithm design and analysis. I prepare course materials, lead office hours, and assist with grading, aiming to make challenging concepts more accessible and engaging for everyone.
      `,
    },
    {
      key: "003",
      dateText: "Jun 2020 - Aug 2023",
      title: "Sri Sai Viveka Technologies",
      subtitle: "Front End Developer",
      description: `
        <strong>Full-time · 3 yrs 3 mos</strong> <br />
        <strong>Location:</strong> Hyderabad, Telangana, India <br /><br />
        • Spearheaded the redesign of the company’s web-based packaging solutions portal, increasing customer engagement by 40% through enhanced interactivity and user-friendly navigation. <br />
        • Applied responsive design principles to optimize website functionality across various devices, significantly improving user experience and accessibility. <br />
        • Leveraged advanced technologies like HTML5, CSS3, JavaScript, and React.js to develop dynamic, visually appealing web applications that drove increased business performance. <br />
        • Partnered with back-end developers to integrate APIs, ensuring seamless functionality and robust data interaction between front-end and server-side applications.
      `,
    },
  ];

  return (
    <div name="experience" className="w-full min-h-screen flex">
      <div className="max-w-screen-lg p-14">
        <div>
          <h1 className="text-6xl font-bold">
            <span id="Vamsi">Experience</span>
          </h1>
          <div className="flex justify-center items-center">
            <div className="timeline">
              {timelineData.map((item) => (
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