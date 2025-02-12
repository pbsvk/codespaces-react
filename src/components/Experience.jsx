// First, create a style element and add the CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = `
.experience-section {
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 4rem 1rem;
}

.container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 3rem;
}

.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 2px;
  background: #e0e0e0;
}

.timeline-item {
  position: relative;
  margin-left: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
}

.timeline-item:hover {
  transform: translateX(5px);
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -2.5rem;
  top: 2rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: #7c3aed;
  border: 2px solid white;
}

.timeline-date {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #f3f4f6;
  border-radius: 20px;
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 1rem;
}

.timeline-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.timeline-subtitle {
  font-size: 1.25rem;
  color: #7c3aed;
  margin-bottom: 1rem;
}

.timeline-details {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem;
}

.timeline-description {
  color: #4b5563;
  line-height: 1.6;
}

.timeline-description ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-top: 1rem;
}

.timeline-description li {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .timeline-item {
    margin-left: 1rem;
    padding: 1.5rem;
  }
  
  .timeline-item::before {
    left: -1.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
`;

// Add the stylesheet to the document
document.head.appendChild(styleSheet);

// Create and add the HTML structure
const experienceSection = document.createElement('section');
experienceSection.id = 'experience';
experienceSection.className = 'experience-section';
experienceSection.innerHTML = `
  <div class="container">
    <h1 class="section-title">Experience</h1>
    <div class="timeline" id="timeline"></div>
  </div>
`;
document.body.appendChild(experienceSection);

// Define the timeline data
const timelineData = [
  {
    key: "001",
    dateText: "Sep 2024 - Present",
    title: "Stevens Institute of Technology",
    subtitle: "Graduate Course Assistant – Advanced Algorithms",
    type: "academic",
    description: `
      As a Graduate Course Assistant for Advanced Algorithms, I'm deeply involved in helping both students and faculty navigate the complexities of algorithm design and analysis. I prepare course materials, lead office hours, and assist with grading, aiming to make challenging concepts more accessible and engaging for everyone.
    `,
    details: {
      type: "Part-time · 6 mos",
      location: "Hoboken, New Jersey, United States"
    }
  },
  {
    key: "002",
    dateText: "Sep 2024 - Present",
    title: "Stevens Institute of Technology",
    subtitle: "Graduate Course Assistant – University Teaching and Algorithm Analysis",
    type: "academic",
    description: `
      As a Graduate Course Assistant for Algorithms, I'm deeply involved in helping both students and faculty navigate the complexities of algorithm design and analysis. I prepare course materials, lead office hours, and assist with grading, aiming to make challenging concepts more accessible and engaging for everyone.
    `,
    details: {
      type: "Hybrid · 6 mos"
    }
  },
  {
    key: "003",
    dateText: "Jun 2020 - Aug 2023",
    title: "Sri Sai Viveka Technologies",
    subtitle: "Front End Developer",
    type: "work",
    description: [
      "Spearheaded the redesign of the company's web-based packaging solutions portal, increasing customer engagement by 40% through enhanced interactivity and user-friendly navigation.",
      "Applied responsive design principles to optimize website functionality across various devices, significantly improving user experience and accessibility.",
      "Leveraged advanced technologies like HTML5, CSS3, JavaScript, and React.js to develop dynamic, visually appealing web applications that drove increased business performance.",
      "Partnered with back-end developers to integrate APIs, ensuring seamless functionality and robust data interaction between front-end and server-side applications."
    ],
    details: {
      type: "Full-time · 3 yrs 3 mos",
      location: "Hyderabad, Telangana, India"
    }
  }
];

// Function to create timeline items
function createTimelineItem(item) {
  const timelineItem = document.createElement('div');
  timelineItem.className = 'timeline-item';
  
  const dateEl = document.createElement('div');
  dateEl.className = 'timeline-date';
  dateEl.textContent = item.dateText;
  
  const titleEl = document.createElement('h3');
  titleEl.className = 'timeline-title';
  titleEl.textContent = item.title;
  
  const subtitleEl = document.createElement('h4');
  subtitleEl.className = 'timeline-subtitle';
  subtitleEl.textContent = item.subtitle;
  
  const detailsEl = document.createElement('div');
  detailsEl.className = 'timeline-details';
  detailsEl.innerHTML = `
    ${item.details.type}<br>
    ${item.details.location ? item.details.location : ''}
  `;
  
  const descriptionEl = document.createElement('div');
  descriptionEl.className = 'timeline-description';
  
  if (Array.isArray(item.description)) {
    const ul = document.createElement('ul');
    item.description.forEach(point => {
      const li = document.createElement('li');
      li.textContent = point;
      ul.appendChild(li);
    });
    descriptionEl.appendChild(ul);
  } else {
    descriptionEl.textContent = item.description.trim();
  }
  
  timelineItem.appendChild(dateEl);
  timelineItem.appendChild(titleEl);
  timelineItem.appendChild(subtitleEl);
  timelineItem.appendChild(detailsEl);
  timelineItem.appendChild(descriptionEl);
  
  return timelineItem;
}

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  // Render timeline items
  const timelineContainer = document.getElementById('timeline');
  timelineData.forEach(item => {
    timelineContainer.appendChild(createTimelineItem(item));
  });
});