# My Portfolio — React + Firebase

A full-stack **React** portfolio website powered by **Firebase**, featuring a fully dynamic **Admin Panel (Phase 1)** that serves as a CMS, and a **Public Portfolio Website (Phase 2)** that consumes all content in real-time.

---

## 🚀 Project Overview

| Detail | Info |
|---|---|
| **Framework** | React (Create React App) |
| **Backend** | Firebase (Auth, Firestore, Storage, Hosting) |
| **Architecture** | Feature-based Clean Architecture |
| **Current Phase** | Phase 1 — Admin Panel |
| **Status** | 🔨 In Development |

---

## 📐 Architecture

```
src/
├── core/                  # Constants, theme, routing, utilities
├── shared/                # Reusable components, hooks, helpers
├── features/
│   ├── auth/              # Firebase Auth — login, route guards
│   ├── profile/           # Name, bio, image, CV, meeting link
│   ├── about/             # Description, current learning skills
│   ├── experience/        # Work history — company, role, years
│   ├── skills/            # Tech skills with icons
│   ├── education/         # Academic background
│   ├── certification/     # Certifications & credentials
│   ├── projects/          # Portfolio projects (personal + company)
│   ├── blog/              # Blog posts with rich media
│   ├── testimonial/       # Testimonials & recommendations
│   └── contact/           # Contact info & social links
├── App.js
└── index.js
```

Each feature module follows a strict layered pattern:

```
feature/
├── models/         # Data shape definitions (JSDoc / PropTypes)
├── services/       # Firebase / Firestore interaction layer
├── hooks/          # Custom React hooks (business logic)
├── pages/          # Full page components
└── components/     # Feature-specific reusable components
```

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | React (CRA) | Component-based UI |
| Routing | React Router v6 | Client-side routing & guards |
| Auth | Firebase Auth | Admin email/password login |
| Database | Cloud Firestore | NoSQL document store |
| Storage | Firebase Storage | Images, videos, CVs |
| Hosting | Firebase Hosting | Deployment (Phase 3) |
| Styling | TBD (Tailwind / MUI / CSS Modules) | UI styling |
| State | Context API / Zustand | App-level state management |

---

## ✨ Features — Admin Panel (Phase 1)

The Admin Panel is a fully-featured CMS with:

- 🔐 **Authentication** — Secure Firebase login, persistent sessions, protected routes
- 🧭 **Dashboard** — Sidebar navigation, quick stats, collapsible layout
- 👤 **Profile** — Name, bio, profile image, CV upload, meeting link
- 📝 **About** — Description, current learning technologies
- 💼 **Experience** — Full work history with sortable order
- 🧠 **Skills** — Tech stack with icon uploads
- 🎓 **Education** — Academic history
- 🏅 **Certifications** — Credentials with verification links
- 🚀 **Projects** — Portfolio projects with images, videos, demo links
- 📰 **Blog** — Posts with banners, carousels, publish toggle
- 💬 **Testimonials** — Recommendations with LinkedIn links
- 📬 **Contact** — Email, phone, location, social links

All sections support full **CRUD operations** with:
- Form validation & clear error states
- Confirmation dialogs before destructive actions
- Image preview before upload
- Toast / snackbar notifications
- Loading indicators & skeleton screens

---

## 🔥 Firestore Data Model

| Collection | Type | Key Fields |
|---|---|---|
| `profile` | Single Doc | name, bio, imageUrl, cvUrl, meetingLink |
| `about` | Single Doc | description, currentLearningSkills[] |
| `experiences` | Collection | company, role, location, startYear, endYear |
| `skills` | Collection | name, iconUrl, category, order |
| `education` | Collection | school, degree, location, startYear, endYear |
| `certifications` | Collection | name, provider, issueDate, credentialUrl |
| `projects` | Collection | title, overview, images[], videos[], isCompany |
| `blogs` | Collection | title, bannerUrl, content, isPublished |
| `testimonials` | Collection | name, role, message, linkedinUrl |
| `contact` | Single Doc | email, phone, availability, socialLinks{} |

---

## 📋 Release Roadmap

| Phase | Deliverable | Timeline |
|---|---|---|
| **Phase 1** 🔨 | Admin Panel — Full CMS | Sprints 1–7 (~7 weeks) |
| **Phase 2** | Public Portfolio Website | Sprints 8–11 (~4 weeks) |
| **Phase 3** | Firebase Hosting, CI/CD, Custom Domain | Sprint 12 (~1 week) |
| **Phase 4** | Analytics, SEO, Performance | Sprints 13–14 (~2 weeks) |

---

## ⚙️ Getting Started

### Prerequisites

- Node.js `>=18.x`
- npm `>=9.x` or yarn
- Firebase project set up ([Firebase Console](https://console.firebase.google.com))

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/my-portfolio.git
cd my-portfolio

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
# Fill in your Firebase config values in .env

# 4. Start development server
npm start
```

### Environment Variables

Create a `.env` file in the root with your Firebase project config:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

> ⚠️ Never commit `.env` to version control. It is already listed in `.gitignore`.

### Firebase Setup

1. Enable **Authentication** → Email/Password provider
2. Create **Firestore Database** in production mode
3. Set up **Firebase Storage** bucket
4. Pre-register the admin email in Firebase Auth console
5. Apply Firestore & Storage security rules (see `/firebase/rules/`)

---

## 🔐 Security

- All admin routes protected via React Router private route guards
- Firestore rules restrict read/write to authenticated admin only
- Firebase Storage rules restrict uploads to authenticated admin only
- All Firebase config read from environment variables — never hardcoded

---

## 📁 Full Project Structure

```
my-portfolio/
├── public/
├── src/
│   ├── core/
│   │   ├── constants/
│   │   ├── theme/
│   │   ├── router/
│   │   └── utils/
│   ├── shared/
│   │   ├── components/
│   │   └── hooks/
│   ├── features/
│   │   ├── auth/
│   │   ├── profile/
│   │   ├── about/
│   │   ├── experience/
│   │   ├── skills/
│   │   ├── education/
│   │   ├── certification/
│   │   ├── projects/
│   │   ├── blog/
│   │   ├── testimonial/
│   │   └── contact/
│   ├── App.js
│   └── index.js
├── firebase/
│   └── rules/
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## 🤝 Contributing

This is a personal portfolio project and is not open for public contributions. Feel free to fork it and adapt it for your own use.

---

## 📄 License

This project is for personal use. All rights reserved.

---

> Built with ❤️ using React & Firebase
