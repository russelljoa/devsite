export const tabsData = [
    {
        id: "about.md",
        title: "about.md",
        language: "markdown",
        iconfile: "public/icons/md.png",
        content: `# Welcome to My Portfolio

Hello there! 👋 I'm a passionate developer with expertise in modern web technologies.

## About Me

I am a creative problem solver dedicated to building responsive, user-friendly applications
that solve real-world problems. My journey in software development has equipped me with
a diverse set of skills and a commitment to continuous learning.

## Find Me Online

- GitHub: [github.com/yourusername](https://github.com/yourusername)
- LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- Portfolio: [yourportfolio.com](https://yourportfolio.com)

Feel free to explore the tabs above to learn more about my education, skills, and projects!`
    },
    {
        id: "education.py",
        title: "education.py",
        language: "python",
        iconfile: "public/icons/python.png",
        content: `class Education:
    def __init__(self):
        self.degrees = [
            {
                "degree": "Bachelor of Science in Computer Science",
                "institution": "University of Technology",
                "location": "San Francisco, CA",
                "graduation_year": 2021,
                "gpa": 3.8
            },
            {
                "degree": "Full-Stack Web Development Bootcamp",
                "institution": "Coding Academy",
                "location": "Online",
                "graduation_year": 2022,
                "projects_completed": 15
            }
        ]
        
        self.certifications = [
            "AWS Certified Developer - Associate",
            "Google Cloud Professional Developer",
            "MongoDB Certified Developer",
            "Scrum Master Certified"
        ]
    
    def display_education(self):
        print("== FORMAL EDUCATION ==")
        for degree in self.degrees:
            print(f"{degree['degree']} from {degree['institution']}")
            print(f"Graduated: {degree['graduation_year']}")
            
        print("\\n== CERTIFICATIONS ==")
        for cert in self.certifications:
            print(f"- {cert}")

# Create an instance and display education information
my_education = Education()
my_education.display_education()
`
    },
    {
        id: "languages.json",
        title: "languages.json",
        language: "json",
        iconfile: "public/icons/json.png",
        content: `{
  "programmingLanguages": [
    {
      "name": "JavaScript",
      "proficiency": "Expert",
      "yearsOfExperience": 5,
      "frameworks": ["React", "Vue", "Node.js", "Express"]
    },
    {
      "name": "Python",
      "proficiency": "Advanced",
      "yearsOfExperience": 3,
      "frameworks": ["Flask", "Django", "FastAPI"]
    },
    {
      "name": "TypeScript",
      "proficiency": "Advanced",
      "yearsOfExperience": 3,
      "frameworks": ["Angular", "Next.js"]
    },
    {
      "name": "HTML/CSS",
      "proficiency": "Expert",
      "yearsOfExperience": 5,
      "cssFrameworks": ["Tailwind", "Bootstrap", "SASS"]
    },
    {
      "name": "SQL",
      "proficiency": "Advanced",
      "yearsOfExperience": 4,
      "databases": ["PostgreSQL", "MySQL", "SQLite"]
    }
  ],
  "spokenLanguages": [
    {
      "name": "English",
      "proficiency": "Native"
    },
    {
      "name": "Spanish",
      "proficiency": "Conversational"
    }
  ],
  "currentlyLearning": ["Rust", "Kotlin", "WebAssembly"]
}`
    },
    {
        id: "projects.jsx",
        title: "projects.jsx",
        language: "jsx",
        iconfile: "public/icons/React.png",
        content: `import React from 'react';

const Projects = () => {
  const projectList = [
    {
      name: "E-commerce Platform",
      description: "A full-featured online store with user authentication, product catalog, shopping cart, and payment processing.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      role: "Lead Developer",
      url: "https://github.com/yourusername/ecommerce-platform"
    },
    {
      name: "Task Management Dashboard",
      description: "A Kanban-style project management tool with drag-and-drop interface, team collaboration features, and real-time updates.",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      role: "Frontend Developer",
      url: "https://github.com/yourusername/task-dashboard"
    },
    {
      name: "Weather Forecast App",
      description: "A mobile-responsive weather application that provides current conditions and 5-day forecasts for any location.",
      tech: ["React Native", "OpenWeather API", "Geolocation API"],
      role: "Solo Developer",
      url: "https://github.com/yourusername/weather-app"
    },
    {
      name: "Personal Finance Tracker",
      description: "An application for tracking expenses, income, and budget management with visual reports and insights.",
      tech: ["Angular", "Chart.js", "Express", "PostgreSQL"],
      role: "Full Stack Developer",
      url: "https://github.com/yourusername/finance-tracker"
    }
  ];

  return (
    <div className="projects-container">
      <h2>Featured Projects</h2>
      {projectList.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="tech-stack">
            <strong>Technologies:</strong>
            <ul>
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
          <p><strong>Role:</strong> {project.role}</p>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;`
    },
    {
        id: "contact.css",
        title: "contact.css",
        language: "markdown",
        iconfile: "public/icons/css-icon.png",
        content: `.contact-info {
\temail: rjoarder@bu.edu;
\tlinkedin: https://www.linkedin.com/in/russell-joarder/;
\tgithub: https://github.com/russelljoa;
\tphone: (484) 983-2295;
}

/* 
 * Feel free to reach out any time! 
 * I am always open to discussing new projects, 
 * ideas, or opportunities to collaborate! 
 */`
    },
    {
        id: "resume.pdf",
        title: "resume.pdf",
        language: "pdf",
        iconfile: "public/icons/pdf.png",
        filePath: "public/files/RussellJoarder_Resume2025.pdf",
        content: "" // Content remains empty as we'll be displaying PDF directly
    },
];