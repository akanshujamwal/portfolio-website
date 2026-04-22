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
  description:
    "I'm a self-taught full-stack developer who loves building things for the web. With a strong foundation in React and Firebase, I focus on writing clean, maintainable code.",
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
    { icon: "🎯", title: "Clarity Over Cleverness", description: "I write code that the next developer (or future me) can understand without a manual. Simple and readable always wins." },
    { icon: "🏗️", title: "Architecture First", description: "Before writing code, I think about structure. A well-designed system is easier to build, easier to debug, and easier to scale." },
    { icon: "🚀", title: "Ship, Then Improve", description: "I believe in getting things in front of users quickly and iterating based on real feedback, rather than perfecting in isolation." },
    { icon: "📖", title: "Always Learning", description: "The tech world moves fast. I dedicate time every week to learning something new — whether it's a tool, a pattern, or a concept." },
  ],
};

export const experiencesData = [
  { id: 1, company: "TechCorp Solutions", role: "Frontend Developer", website: "https://techcorp.com", location: "Mumbai, India", startYear: "Jan 2025", endYear: null, description: "Leading frontend development for the company's SaaS dashboard product. Built reusable component libraries, improved Lighthouse scores by 40%, and mentored two junior developers.", order: 1 },
  { id: 2, company: "StartupXYZ", role: "React Developer (Freelance)", website: "https://startupxyz.com", location: "Remote", startYear: "Jun 2024", endYear: "Dec 2024", description: "Developed and shipped a customer-facing web app from scratch using React and Firebase. Worked directly with the CTO to define architecture and deliver features on a tight deadline.", order: 2 },
  { id: 3, company: "Freelance", role: "Web Developer", website: null, location: "Remote", startYear: "Jan 2023", endYear: "May 2024", description: "Worked with multiple small businesses to build and maintain websites. Delivered 8+ projects including e-commerce stores, landing pages, and portfolio websites.", order: 3 },
];

export const educationData = [
  { id: 1, school: "University of Mumbai", degree: "B.Sc. in Computer Science", location: "Mumbai, India", website: "https://mu.ac.in", startYear: "2020", endYear: "2023", description: "Focused on data structures, algorithms, and software engineering fundamentals. Built a final year project — a real-time collaborative coding platform.", order: 1 },
  { id: 2, school: "freeCodeCamp & Self Study", degree: "Web Development Curriculum", location: "Online", website: "https://freecodecamp.org", startYear: "2021", endYear: "2022", description: "Completed 300+ hours of hands-on web development training covering responsive design, JavaScript algorithms, React, and APIs.", order: 2 },
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
  { id: 1, title: "Portfolio CMS", overview: "A dynamic content management system built with React and Firebase. Allows managing portfolio data in real-time without touching code.", technologies: ["React", "Firebase", "Tailwind"], demoLink: "#", sourceLink: "#", isCompany: false },
  { id: 2, title: "E-Commerce Platform", overview: "Full-stack e-commerce solution with real-time inventory management, Stripe payment integration, and an admin dashboard.", technologies: ["React", "Node.js", "MongoDB"], demoLink: "#", sourceLink: "#", isCompany: true },
  { id: 3, title: "Task Management App", overview: "Collaborative task manager with drag-and-drop Kanban boards, team assignments, priority tags, and deadline tracking.", technologies: ["React", "Firebase", "React DnD"], demoLink: "#", sourceLink: "#", isCompany: false },
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

Then create a firebase.js config file:

\`\`\`javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  projectId: "YOUR_PROJECT_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
\`\`\`

## Reading Data

Use getDocs to fetch a collection:

\`\`\`javascript
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

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

Most React tutorials teach you to organize by file type — components/, hooks/, services/. This works fine for small apps, but falls apart fast when your codebase grows.

## The Feature-Based Approach

Instead of grouping by file type, group everything by feature:

\`\`\`
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── pages/
│   ├── projects/
│   └── blog/
\`\`\`

## Why It Works

Every file related to a feature lives together. When you work on authentication, you open the auth/ folder and everything you need is right there.

## Shared Code

For truly reusable code, use a shared/ folder:

\`\`\`
src/
├── shared/
│   ├── components/
│   └── hooks/
\`\`\`

## Conclusion

Feature-based architecture is the single biggest improvement you can make to your React project structure. Start with it from day one — retrofitting it later is painful.`,
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

## 1. Dark Theme Base

Set your base background and text on the body element using Tailwind's gray scale. gray-950 for background, gray-100 for default text.

## 2. Glass Card Effect

\`\`\`html
<div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
\`\`\`

## 3. Gradient Text

\`\`\`html
<h1 class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
\`\`\`

## 4. Responsive Grid

\`\`\`html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
\`\`\`

## 5. Hover Card Lift

\`\`\`html
<div class="hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
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