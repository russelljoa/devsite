export const tabsData = [
    {
        id: "about.md",
        title: "about.md",
        language: "markdown",
        iconfile: "/icons/md.png",
        content: `# Russell Joarder

Hello there! 👋 I'm a Boston University student studying Computer Science with a minor in Business Administration & Management.

## About Me

I am a passionate developer with a strong foundation in various programming languages and technologies. As a creative problem solver,
I'm dedicated to building responsive, user-friendly applications that solve real-world problems. My experience ranges from developing
blockchain applications to creating efficient algorithms.

## Find Me Online

- LinkedIn: [linkedin.com/in/russell-joarder](https://linkedin.com/in/russell-joarder)
- Email: [rjoarder@bu.edu](mailto:rjoarder@bu.edu)
- Phone: (484) 983-2295

Feel free to explore the tabs above to learn more about my education, skills, and projects!`
    },
    {
        id: "education.py",
        title: "education.py",
        language: "python",
        iconfile: "/icons/python.png",
        content: `class Education:
    def __init__(self):
        self.degrees = [
            {
                "degree": "Bachelor of Arts in Computer Science",
                "institution": "Boston University",
                "location": "Boston, Massachusetts",
                "expected_graduation": 2028,
                "gpa": 4.0,
                "minor": "Business Administration & Management"
            },
            {
                "degree": "High School Diploma",
                "institution": "Westtown School",
                "location": "West Chester, Pennsylvania",
                "graduation_year": 2024
            }
        ]
    
    def display_education(self):
        print("== FORMAL EDUCATION ==")
        for degree in self.degrees:
            print(f"{degree['degree']} from {degree['institution']}")
            if "expected_graduation" in degree:
                print(f"Expected Graduation: {degree['expected_graduation']}")
            else:
                print(f"Graduated: {degree['graduation_year']}")
            if "gpa" in degree:
                print(f"GPA: {degree['gpa']}/4.0")
            if "minor" in degree:
                print(f"Minor: {degree['minor']}")

# Create an instance and display education information
my_education = Education()
my_education.display_education()
`
    },
    {
        id: "community.html",
        title: "community.html",
        language: "html",
        iconfile: "/icons/html.png",
        content: `<h1>Community Involvement</h1>
<h2>Boston University</h2>
<ul>
    <li> VP of Strategy at BU Blockchain Club (Arpil 2024 - Present) </li>
    <li> Member of BU Blockchain Club (Sep 2023 - Arpil 2024) </li>
</ul>
<h2>Westtown School</h2>
<ul>
    <li> Head and founder of South Asian Multicultural Organized Student Association (Sep 2023 - June 2024) </li>
    <li> Member of Westtown School's Student Ambassador Digital Marketing Team (Sep 2022 - June 2024) </li>
    <li> Varsity Wrestling - Three Time State Qualifier (Nov 2022 - Feb 2024) </li>
    <li> Member of Westtown School Investment Club (Sep 2022 - June 2023) </li>
</ul>
        `
    },
    {
        id: "skills.json",
        title: "skills.json",
        language: "json",
        iconfile: "/icons/json.png",
        content: `{
  "technicalSkills": {
    "programmingLanguages": [
      "Python",
      "React",
      "PHP",
      "Java",
      "JSP",
      "Flask",
      "Solidity",
      "SQL",
      "Node.js",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    "systemKnowledge": [
      "MongoDB",
      "Webflow",
      "Microsoft Excel",
      "Git",
      "VS Code",
      "Stripe",
      "PHPMyAdmin"
    ]
  },
  "otherSkills": [
    "Leadership",
    "Team Management",
    "Problem Solving",
    "Customer Support",
    "Project Management",
    "Digital Marketing"
  ],
  "interests": [
    "Blockchain Technology",
    "Web Development",
    "Data Science",
    "Investment",
    "Digital Entrepreneurship"
  ]
}`
    },
    {
        id: "projects.jsx",
        title: "projects.jsx",
        language: "jsx",
        iconfile: "/icons/react.png",
        content: `import React from 'react';

const Projects = () => {
  const projectList = [
    {
      name: "Wordle Solver",
      description: "A unique Wordle solver with a 99% success rate, featuring a sophisticated word recommendation algorithm.",
      tech: ["Python", "React", "CSS", "Flask"],
      achievements: "Designed and developed both the backend algorithm and frontend website interface",
      details: "Structured dataset into optimized hashmaps with metadata for each word for effective use in software"
    },
    {
      name: "Swap Squad",
      description: "The first decentralized peer-to-peer marketplace on the TRON blockchain with competitive fees.",
      tech: ["Solidity", "TRON", "React", "Flask"],
      achievements: "2nd Place Prize Winner at Hackathon",
      details: "Leveraged Solidity to build the smart contract on TRON network, ensuring security, transparency, and reliability"
    },
    {
      name: "Westtown School Dining Website",
      description: "A dynamic website to resolve a school-wide dining hall menu accessibility issue.",
      tech: ["PHP", "SQL", "CSS", "JavaScript"],
      achievements: "Led a team of six developers",
      details: "Conducted surveys to gather feedback, ensuring site accessibility and effectiveness"
    },
    {
      name: "Let's Cook AIO",
      description: "A subscription-based digital business providing profitable reselling information.",
      tech: ["Python", "MongoDB", "Discord API", "HTML", "Tailwind CSS", "JavaScript"],
      achievements: "Generated over $30,000 through subscription model",
      details: "Developed Python-based chatbots using MongoDB for customer support, subscription management, and onboarding"
    }
  ];

  return (
    <div className="projects-container">
      <h2>Projects & Experience</h2>
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
          <p><strong>Achievement:</strong> {project.achievements}</p>
          <p>{project.details}</p>
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
        language: "css",
        iconfile: "/icons/css-icon.png",
        content: `.contact-info {
    email: rjoarder@bu.edu;
    linkedin: https://www.linkedin.com/in/russell-joarder/;
    phone: (484) 983-2295;
    location: West Chester, PA / Boston, MA;
}

/* 
 * Feel free to reach out any time! 
 * I am always open to discussing new projects, 
 * ideas, or opportunities to collaborate! 
 */`
    },
    {
        id: "experience.java",
        title: "experience.java",
        language: "java",
        iconfile: "/icons/java.png",
        content: `public class WorkExperience {
    
    public static void main(String[] args) {
        // Initialize and display work experiences
        Experience[] experiences = new Experience[2];
        
        experiences[0] = new Experience(
            "Let's Cook AIO",
            "Digital Startup",
            "Co-Founder",
            "Sep 2022", "Dec 2024",
            new String[]{
                "Generated over $30,000 through a subscription-based digital business model, monetizing profitable reselling info",
                "Developed Python-based chatbots using MongoDB and social media platform Discord's APIs for customer support, subscription management, member onboarding, and automatic sales funnels",
                "Designed and launched company website with HTML, Tailwind CSS, and JavaScript",
                "Provided digital services and support to 800+ paid subscribers, maximizing retention and satisfaction",
                "Managed 30+ contractors to deliver premium content for subscribers"
            }
        );
        
        experiences[1] = new Experience(
            "Westtown School Summer Day Camps",
            "West Chester, Pennsylvania",
            "Camp Counselor",
            "June 2022", "Aug 2023",
            new String[]{
                "Developed and enhanced leadership, teamwork, and problem-solving skills through daily camp operations",
                "Facilitated engaging and educational activities for children ages 4-13, ensuring safety and enjoyment",
                "Managed day-to-day camp logistics, maintaining a smooth and positive camp experience for participants"
            }
        );
        
        for (Experience exp : experiences) {
            exp.displayExperience();
            System.out.println("----------------------------------");
        }
    }
}

class Experience {
    private String company;
    private String location;
    private String title;
    private String startDate;
    private String endDate;
    private String[] responsibilities;
    
    public Experience(String company, String location, String title, 
                    String startDate, String endDate, String[] responsibilities) {
        this.company = company;
        this.location = location;
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.responsibilities = responsibilities;
    }
    
    public void displayExperience() {
        System.out.println(company + " | " + location);
        System.out.println(title + " (" + startDate + " - " + endDate + ")");
        System.out.println("\nResponsibilities:");
        for (String responsibility : responsibilities) {
            System.out.println("• " + responsibility);
        }
    }
}`
    },
    {
        id: "resume.pdf",
        title: "resume.pdf",
        language: "pdf",
        iconfile: "/icons/pdf.png",
        filePath: "/files/RussellJoarder_Resume2025.pdf",
        content: "" // Content remains empty as we'll be displaying PDF directly
    },
];