export const techStackConfig = {
  header: {
    title: "Technical Stack",
    description: "A comprehensive overview of the technologies, frameworks, and tools I use",
    icon: "Code"
  },
  sections: [
  {
    id: "programming-languages",
    title: "Programming Languages",
    description: "Languages I use for different types of development projects",
    icon: "Terminal",
    layout: "single",
    items: [
      "C",
      "C++", 
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "Go"
    ]
  },
  {
    id: "frameworks-tools",
    title: "Frameworks & Tools",
    description: "Frameworks and development tools I work with",
    icon: "Wrench",
    layout: "grid",
    sections: [
      {
        title: "Web Frameworks",
        description: "Frontend and backend frameworks for web development",
        items: [
          "Next.js",
          "Express.js", 
          "GoFiber",
          "Zustand",
          "TanStack"
        ]
      },
      {
        title: "Development Tools",
        description: "Tools for development, testing, and deployment",
        items: [
          "Docker",
          "Postman", 
          "RabbitMQ"
        ]
      }
    ]
  },
  {
    id: "security",
    title: "Security & Penetration Testing",
    description: "Tools for security testing and vulnerability assessment",
    icon: "Shield",
    layout: "single",
    items: [
      "Burp Suite",
      "NMAP",
      "Metasploit"
    ]
  },
  {
    id: "databases-cloud",
    title: "Databases & Cloud Services",
    description: "Data storage and cloud infrastructure",
    icon: "Database",
    layout: "grid",
    sections: [
      {
        title: "Databases",
        description: "Database systems for data storage and management",
        items: [
          "MongoDB",
          "MySQL", 
          "PostgreSQL"
        ]
      },
      {
        title: "Cloud Platforms",
        description: "Cloud services for deployment and infrastructure",
        items: [
          "Amazon Web Services (AWS)"
        ]
      }
    ]
  }
  ]
};