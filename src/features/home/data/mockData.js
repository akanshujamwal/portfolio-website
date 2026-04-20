// ─────────────────────────────────────────────────────────────
// MOCK DATA — Temporary static data for the Home page.
// Later, every export here will be replaced by a Firebase fetch.
// ─────────────────────────────────────────────────────────────

export const profileData = {
    name: "Your Name",
    title: "Full Stack Developer",
    bio: "I build clean, scalable web applications that solve real problems. Passionate about React, Firebase, and writing code that actually makes sense.",
    email: "you@example.com",
    phone: "+91 99999 99999",
    location: "Mumbai, India",
    availability: "Open to Work",
    meetingLink: "https://calendly.com",
    cvUrl: "#",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  };
  
  export const aboutData = {
    description:
      "I'm a self-taught full-stack developer who loves building things for the web. With a strong foundation in React and Firebase, I focus on writing clean, maintainable code. When I'm not coding, I'm writing about tech or exploring new tools.",
    currentLearningSkills: ["Next.js", "TypeScript", "GraphQL"],
  };
  
  export const skillsData = [
    { id: 1, name: "React", icon: "⚛️", category: "Frontend" },
    { id: 2, name: "JavaScript", icon: "🟨", category: "Frontend" },
    { id: 3, name: "Tailwind CSS", icon: "🎨", category: "Frontend" },
    { id: 4, name: "HTML & CSS", icon: "🌐", category: "Frontend" },
    { id: 5, name: "Firebase", icon: "🔥", category: "Backend" },
    { id: 6, name: "Node.js", icon: "🟢", category: "Backend" },
    { id: 7, name: "Firestore", icon: "🗄️", category: "Backend" },
    { id: 8, name: "Git & GitHub", icon: "📦", category: "Tools" },
    { id: 9, name: "Figma", icon: "🎭", category: "Tools" },
    { id: 10, name: "VS Code", icon: "💻", category: "Tools" },
    { id: 11, name: "Flutter", icon: "💙", category: "Mobile" },
    { id: 12, name: "Dart", icon: "🎯", category: "Mobile" },
  ];
  
  export const projectsData = [
    {
      id: 1,
      title: "Portfolio CMS",
      overview:
        "A dynamic content management system built with React and Firebase. Allows managing portfolio data in real-time without touching code.",
      technologies: ["React", "Firebase", "Tailwind"],
      demoLink: "#",
      sourceLink: "#",
      isCompany: false,
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      overview:
        "Full-stack e-commerce solution with real-time inventory management, Stripe payment integration, and an admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB"],
      demoLink: "#",
      sourceLink: "#",
      isCompany: true,
    },
    {
      id: 3,
      title: "Task Management App",
      overview:
        "Collaborative task manager with drag-and-drop Kanban boards, team assignments, priority tags, and deadline tracking.",
      technologies: ["React", "Firebase", "React DnD"],
      demoLink: "#",
      sourceLink: "#",
      isCompany: false,
    },
  ];
  
  export const blogsData = [
    {
      id: 1,
      title: "Getting Started with Firebase Firestore in React",
      excerpt:
        "Learn how to connect Firestore to your React app and perform real-time CRUD operations with clean, reusable service functions.",
      tags: ["React", "Firebase", "Tutorial"],
      publishedAt: "March 10, 2026",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Feature-Based Architecture in React — The Right Way",
      excerpt:
        "A deep dive into organizing your React app by feature instead of file type — and why it makes your codebase scale without pain.",
      tags: ["React", "Architecture", "Best Practices"],
      publishedAt: "February 22, 2026",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "10 Tailwind CSS Patterns for Production UIs",
      excerpt:
        "Practical Tailwind patterns that level up your UI — from dark themes and glass cards to responsive layouts that actually work.",
      tags: ["Tailwind", "CSS", "UI/UX"],
      publishedAt: "January 15, 2026",
      readTime: "4 min read",
    },
  ];
  
  export const testimonialsData = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager · TechCorp",
      message:
        "Exceptional developer who delivers clean, scalable code on time. His attention to detail and communication throughout the project was outstanding.",
      linkedinUrl: "#",
      avatar: "SJ",
    },
    {
      id: 2,
      name: "Rahul Mehta",
      role: "CTO · StartupXYZ",
      message:
        "He understood our requirements immediately and built a solution that exceeded expectations. Would absolutely hire again for future projects.",
      linkedinUrl: "#",
      avatar: "RM",
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Senior Engineer · BigCo",
      message:
        "Brings creative solutions to complex problems and is a pleasure to collaborate with. His code is clean, well-documented, and easy to maintain.",
      linkedinUrl: "#",
      avatar: "ED",
    },
  ];
  
  export const certificationsData = [
    {
      id: 1,
      name: "Google Associate Cloud Engineer",
      provider: "Google Cloud",
      issueDate: "Jan 2026",
      credentialUrl: "#",
    },
    {
      id: 2,
      name: "Meta Front-End Developer",
      provider: "Meta / Coursera",
      issueDate: "Nov 2025",
      credentialUrl: "#",
    },
    {
      id: 3,
      name: "Firebase Developer Certification",
      provider: "Google Firebase",
      issueDate: "Sep 2025",
      credentialUrl: "#",
    },
    {
      id: 4,
      name: "React Developer Certificate",
      provider: "freeCodeCamp",
      issueDate: "Jul 2025",
      credentialUrl: "#",
    },
  ];