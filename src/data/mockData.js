// ─────────────────────────────────────────────────────────────
// MOCK DATA — Temporary static data for the entire portfolio.
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
  description: "I'm a self-taught full-stack developer who loves building things for the web.",
  story: `I started my coding journey back in 2021 with a simple goal — build something people would actually use. What began as curiosity quickly turned into obsession. I spent nights learning HTML, CSS, and JavaScript from YouTube videos and documentation, slowly leveling up to React and eventually the full Firebase ecosystem.

Today, I build production-grade web applications that are fast, scalable, and maintainable. My approach is simple: understand the problem deeply before writing a single line of code. I care deeply about clean architecture, readable code, and experiences that feel effortless to the end user.

I believe the best developers are lifelong learners. The tech landscape never stops evolving, and neither do I.`,
  currentLearningSkills: ["Next.js", "TypeScript", "GraphQL"],
  funFacts: [
    { emoji: "☕", fact: "Powered by 3 cups of coffee a day" },
    { emoji: "🌙", fact: "Most productive between 10pm and 2am" },
    { emoji: "📚", fact: "Read 12 tech books last year" },
    { emoji: "🌍", fact: "Dream of working fully remote from anywhere" },
    { emoji: "🎮", fact: "Gaming helps me think through hard problems" },
    { emoji: "🔁", fact: "Refactor code more than I write new code" },
  ],
  values: [
    { icon: "🎯", title: "Clarity Over Cleverness", description: "I write code that the next developer (or future me) can understand without a manual." },
    { icon: "🏗️", title: "Architecture First", description: "Before writing code, I think about structure. A well-designed system is easier to build and scale." },
    { icon: "🚀", title: "Ship, Then Improve", description: "Get things in front of users quickly and iterate based on real feedback." },
    { icon: "📖", title: "Always Learning", description: "The tech world moves fast. I dedicate time every week to learning something new." },
  ],
};

export const experiencesData = [
  { id: 1, company: "TechCorp Solutions", role: "Frontend Developer", website: "https://techcorp.com", location: "Mumbai, India", startYear: "Jan 2025", endYear: null, description: "Leading frontend development for the company's SaaS dashboard product. Built reusable component libraries, improved Lighthouse scores by 40%, and mentored two junior developers.", order: 1 },
  { id: 2, company: "StartupXYZ", role: "React Developer (Freelance)", website: "https://startupxyz.com", location: "Remote", startYear: "Jun 2024", endYear: "Dec 2024", description: "Developed and shipped a customer-facing web app from scratch using React and Firebase. Worked directly with the CTO to define architecture and deliver features on a tight deadline.", order: 2 },
  { id: 3, company: "Freelance", role: "Web Developer", website: null, location: "Remote", startYear: "Jan 2023", endYear: "May 2024", description: "Worked with multiple small businesses to build and maintain websites. Delivered 8+ projects including e-commerce stores, landing pages, and portfolio websites.", order: 3 },
];

export const educationData = [
  { id: 1, school: "University of Mumbai", degree: "B.Sc. in Computer Science", location: "Mumbai, India", website: "https://mu.ac.in", startYear: "2020", endYear: "2023", description: "Focused on data structures, algorithms, and software engineering fundamentals.", order: 1 },
  { id: 2, school: "freeCodeCamp & Self Study", degree: "Web Development Curriculum", location: "Online", website: "https://freecodecamp.org", startYear: "2021", endYear: "2022", description: "Completed 300+ hours of hands-on web development training.", order: 2 },
];

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
    overview: "A dynamic content management system built with React and Firebase. Allows managing portfolio data in real-time without touching code. Features full CRUD for all sections, media uploads, and role-based access.",
    description: `This project was born out of the need to manage portfolio content without touching code every time something changed.

The Admin Panel is a full-featured CMS built on top of Firebase — Firestore for data, Firebase Storage for media, and Firebase Auth for secure admin-only access.

Key decisions made during development include using feature-based architecture to keep the codebase scalable, and a service layer pattern to keep Firebase logic out of UI components.

The public portfolio site consumes all Firestore data in real time, meaning any change in the admin panel reflects on the live site within seconds.`,
    technologies: ["React", "Firebase", "Tailwind CSS", "Firestore", "Firebase Auth"],
    category: "Frontend",
    demoLink: "#",
    sourceLink: "#",
    isCompany: false,
    status: "In Progress",
    year: "2026",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    overview: "Full-stack e-commerce solution with real-time inventory management, Stripe payment integration, and a comprehensive admin dashboard for order and product management.",
    description: `Built end-to-end for a retail client who needed a scalable online store with real-time inventory tracking.

The platform handles product catalog management, cart and checkout flows, Stripe payment processing, and order tracking. The admin dashboard gives the client full control over products, orders, and customer data.

Performance was a key focus — implemented lazy loading, image optimization, and server-side caching to achieve a 95+ Lighthouse score.`,
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
    category: "Backend",
    demoLink: "#",
    sourceLink: "#",
    isCompany: true,
    status: "Completed",
    year: "2025",
  },
  {
    id: 3,
    title: "Task Management App",
    overview: "Collaborative task manager with drag-and-drop Kanban boards, real-time team assignments, priority tags, and deadline tracking with email notifications.",
    description: `A productivity tool built for a remote team that needed a simple but powerful task management solution without the overhead of tools like Jira.

Features include drag-and-drop Kanban boards, real-time updates via Firebase, team member assignments, priority levels, due dates, and automated email reminders for overdue tasks.

The real-time collaboration aspect — where multiple users can update the board simultaneously and see changes instantly — was the most technically interesting challenge to solve.`,
    technologies: ["React", "Firebase", "Tailwind CSS", "React DnD"],
    category: "Frontend",
    demoLink: "#",
    sourceLink: "#",
    isCompany: false,
    status: "Completed",
    year: "2025",
  },
  {
    id: 4,
    title: "Restaurant Booking System",
    overview: "Online table reservation system with real-time availability, SMS confirmations, and a restaurant admin panel for managing bookings, tables, and time slots.",
    description: `Designed and built for a local restaurant chain that was managing bookings manually via phone calls.

The system allows customers to view real-time table availability and book instantly. Restaurant staff get an admin panel to manage reservations, mark tables as occupied, and send SMS confirmations via Twilio.

Reduced no-shows by 35% through automated reminder SMS sent 2 hours before each reservation.`,
    technologies: ["React", "Node.js", "PostgreSQL", "Twilio", "Tailwind CSS"],
    category: "Backend",
    demoLink: "#",
    sourceLink: null,
    isCompany: true,
    status: "Completed",
    year: "2024",
  },
  {
    id: 5,
    title: "Design System & UI Kit",
    overview: "A comprehensive design system built in Figma and implemented in React — includes 40+ components, dark/light themes, accessibility guidelines, and full Storybook documentation.",
    description: `Started as an internal project to standardize UI components across multiple products at a company.

The design system includes a Figma component library, a React component library published as an npm package, Storybook documentation, and accessibility guidelines following WCAG 2.1 AA standards.

Reduced UI development time by 60% across teams by providing ready-to-use, well-documented components.`,
    technologies: ["React", "Figma", "Storybook", "TypeScript", "CSS Modules"],
    category: "UI/UX",
    demoLink: "#",
    sourceLink: "#",
    isCompany: true,
    status: "Completed",
    year: "2024",
  },
  {
    id: 6,
    title: "Weather Dashboard",
    overview: "A beautiful weather dashboard with 7-day forecasts, hourly breakdowns, location search, and animated weather visualizations using D3.js.",
    description: `A personal project to explore data visualization and API integration.

Fetches real-time weather data from the OpenWeatherMap API and visualizes it with animated D3.js charts — temperature curves, precipitation bars, and wind direction indicators.

Supports geolocation for automatic local weather, city search with autocomplete, and saves favorite locations to localStorage.`,
    technologies: ["React", "D3.js", "OpenWeatherMap API", "Tailwind CSS"],
    category: "Frontend",
    demoLink: "#",
    sourceLink: "#",
    isCompany: false,
    status: "Completed",
    year: "2024",
  },
];

export const blogsData = [
  {
    id: 1,
    title: "Getting Started with Firebase Firestore in React",
    excerpt: "Learn how to connect Firestore to your React app and perform real-time CRUD operations with clean, reusable service functions.",
    content: `## Introduction

Firebase Firestore is a NoSQL cloud database that makes it incredibly easy to store and sync data in real time. In this post, I'll show you exactly how to connect Firestore to a React app from scratch.

## Setting Up Firebase

First, create a project in the Firebase console. Once that's done, install the Firebase SDK:

\`\`\`bash
npm install firebase
\`\`\`

Then create a firebase.js config file and initialize the app with your project config.

## Reading Data

Use getDocs to fetch a collection:

\`\`\`javascript
const querySnapshot = await getDocs(collection(db, "projects"));
const projects = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
\`\`\`

## Writing Data

Use addDoc to add a new document:

\`\`\`javascript
await addDoc(collection(db, "projects"), {
  title: "My New Project",
  createdAt: new Date(),
});
\`\`\`

## Conclusion

Firestore is one of the easiest databases to get started with. The real-time sync, offline support, and generous free tier make it a great choice for portfolio projects and small apps alike.`,
    tags: ["React", "Firebase", "Tutorial"],
    publishedAt: "March 10, 2026",
    readTime: "5 min read",
    isPublished: true,
  },
  {
    id: 2,
    title: "Feature-Based Architecture in React — The Right Way",
    excerpt: "A deep dive into organizing your React app by feature instead of file type — and why it makes your codebase scale without pain.",
    content: `## The Problem with Traditional Structure

Most React tutorials teach you to organize by file type. This works fine for small apps, but falls apart fast when your codebase grows.

## The Feature-Based Approach

Instead of grouping by file type, group everything by feature. Every file related to a feature lives together.

## Why It Works

When you work on authentication, you open the auth/ folder and everything you need is right there. No more jumping between components/, hooks/, and services/ folders.

## Conclusion

Feature-based architecture is the single biggest improvement you can make to your React project structure. Start with it from day one.`,
    tags: ["React", "Architecture", "Best Practices"],
    publishedAt: "February 22, 2026",
    readTime: "7 min read",
    isPublished: true,
  },
  {
    id: 3,
    title: "10 Tailwind CSS Patterns for Production UIs",
    excerpt: "Practical Tailwind patterns that level up your UI — from dark themes and glass cards to responsive layouts that actually work.",
    content: `## Why Tailwind in Production?

Tailwind CSS has become the go-to utility framework for production UIs. Here are 10 patterns I use in every project.

## 1. Glass Card Effect

\`\`\`html
<div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
\`\`\`

## 2. Gradient Text

\`\`\`html
<h1 class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
\`\`\`

## 3. Responsive Grid

\`\`\`html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
\`\`\`

## Conclusion

These patterns cover 90% of production UI needs. Master them and your Tailwind UIs will look polished every time.`,
    tags: ["Tailwind", "CSS", "UI/UX"],
    publishedAt: "January 15, 2026",
    readTime: "4 min read",
    isPublished: true,
  },
];

export const testimonialsData = [
  { id: 1, name: "Sarah Johnson", role: "Product Manager · TechCorp", message: "Exceptional developer who delivers clean, scalable code on time. His attention to detail and communication throughout the project was outstanding.", linkedinUrl: "#", avatar: "SJ" },
  { id: 2, name: "Rahul Mehta", role: "CTO · StartupXYZ", message: "He understood our requirements immediately and built a solution that exceeded expectations. Would absolutely hire again for future projects.", linkedinUrl: "#", avatar: "RM" },
  { id: 3, name: "Emily Davis", role: "Senior Engineer · BigCo", message: "Brings creative solutions to complex problems and is a pleasure to collaborate with. His code is clean, well-documented, and easy to maintain.", linkedinUrl: "#", avatar: "ED" },
];

export const certificationsData = [
  { id: 1, name: "Google Associate Cloud Engineer", provider: "Google Cloud", issueDate: "Jan 2026", credentialUrl: "#" },
  { id: 2, name: "Meta Front-End Developer", provider: "Meta / Coursera", issueDate: "Nov 2025", credentialUrl: "#" },
  { id: 3, name: "Firebase Developer Certification", provider: "Google Firebase", issueDate: "Sep 2025", credentialUrl: "#" },
  { id: 4, name: "React Developer Certificate", provider: "freeCodeCamp", issueDate: "Jul 2025", credentialUrl: "#" },
];