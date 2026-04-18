# 🗂️ My Portfolio — Flutter + Firebase

A full-stack **Flutter Web** portfolio website powered by **Firebase**, featuring a fully dynamic **Admin Panel (Phase 1)** that serves as a CMS, and a **Public Portfolio Website (Phase 2)** that consumes all content in real-time.

---

## 🚀 Project Overview

| Detail | Info |
|---|---|
| **Framework** | Flutter (Web-first) |
| **Backend** | Firebase (Auth, Firestore, Storage, Hosting) |
| **Architecture** | Feature-based Clean Architecture |
| **Current Phase** | Phase 1 — Admin Panel |
| **Status** | 🔨 In Development |

---

## 📐 Architecture

```
lib/
├── core/                  # Constants, theme, routing, utilities
├── shared/                # Reusable widgets, common models
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
└── main.dart
```

Each feature module follows a strict layered pattern:

```
feature/
├── models/         # Data models (strongly typed, null-safe)
├── services/       # Firebase / API interaction layer
├── controllers/    # Business logic (Provider / Riverpod)
├── screens/        # Full page UI
└── widgets/        # Feature-specific reusable widgets
```

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | Flutter Web | Cross-platform UI |
| Auth | Firebase Auth | Admin email/password login |
| Database | Cloud Firestore | NoSQL document store |
| Storage | Firebase Storage | Images, videos, CVs |
| Hosting | Firebase Hosting | Deployment (Phase 3) |
| State | Provider / Riverpod | App-level state management |

---

## ✨ Features — Admin Panel (Phase 1)

The Admin Panel is a fully-featured CMS with:

- 🔐 **Authentication** — Secure Firebase login, persistent sessions, route guards
- 🧭 **Dashboard** — Sidebar navigation, quick stats, collapsible layout
- 👤 **Profile** — Name, bio, profile image, CV upload, meeting link
- 📝 **About** — Rich description, current learning technologies
- 💼 **Experience** — Full work history with sortable order
- 🧠 **Skills** — Tech stack with icon uploads
- 🎓 **Education** — Academic history
- 🏅 **Certifications** — Credentials with verification links
- 🚀 **Projects** — Portfolio projects with images, videos, demo links
- 📰 **Blog** — Posts with banners, carousels, publish toggle
- 💬 **Testimonials** — Recommendations with LinkedIn links
- 📬 **Contact** — Email, phone, location, social links map

All sections support full **CRUD operations** with:
- Form validation & clear error states
- Confirmation dialogs before destructive actions
- Image preview before upload
- Snackbar notifications
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
| **Phase 1** ✅ | Admin Panel — Full CMS | Sprints 1–7 (~7 weeks) |
| **Phase 2** | Public Portfolio Website | Sprints 8–11 (~4 weeks) |
| **Phase 3** | Firebase Hosting, CI/CD, Custom Domain | Sprint 12 (~1 week) |
| **Phase 4** | Analytics, SEO, Performance | Sprints 13–14 (~2 weeks) |

---

## ⚙️ Getting Started

### Prerequisites

- Flutter SDK `>=3.0.0`
- Dart `>=3.0.0`
- Firebase project set up ([Firebase Console](https://console.firebase.google.com))
- FlutterFire CLI

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/my_portfolio.git
cd my_portfolio

# 2. Install dependencies
flutter pub get

# 3. Configure Firebase
flutterfire configure

# 4. Run on web
flutter run -d chrome
```

### Firebase Setup

1. Enable **Authentication** → Email/Password provider
2. Create **Firestore Database** in production mode
3. Set up **Firebase Storage** bucket
4. Pre-register admin email in Firebase Auth console
5. Apply Firestore & Storage security rules (see `/firebase/rules/`)

---

## 🔐 Security

- All admin routes are protected by Firebase Auth route guards
- Firestore rules restrict read/write to authenticated admin only
- Firebase Storage rules restrict uploads to authenticated admin only
- No sensitive data stored in client-side storage

---

## 📁 Project Structure (Expanded)

```
my_portfolio/
├── lib/
│   ├── core/
│   │   ├── constants/
│   │   ├── theme/
│   │   ├── routing/
│   │   └── utils/
│   ├── shared/
│   │   ├── widgets/
│   │   └── models/
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
│   └── main.dart
├── firebase/
│   └── rules/
├── web/
├── pubspec.yaml
└── README.md
```

---

## 🤝 Contributing

This is a personal portfolio project and is not open for public contributions. Feel free to fork it and adapt it for your own use.

---

## 📄 License

This project is for personal use. All rights reserved.

---

> Built with ❤️ using Flutter & Firebase