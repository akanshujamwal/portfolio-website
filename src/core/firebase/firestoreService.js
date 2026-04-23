// firestoreService.js
// All Firestore reads — every doc passed through its model's fromFirestore().
//
// IMPORTANT notes from real data:
//   - blog: isPublished field may not exist yet — using getDocs without where() filter
//           to avoid index errors. Filter in JS instead.
//   - skills: filter isActive === true in JS
//   - testimonials: filter isApproved === true in JS
//   - experience: ordered by "order" field
//   - projects: no demoLink field — uses slug for routing

import {
  collection, doc, getDocs, getDoc, orderBy, query,
} from "firebase/firestore";
import { db } from "./firebase";

import { ProfileModel }       from "../../features/profile/models/ProfileModel";
import { AboutModel }         from "../../features/about/models/AboutModel";
import { ContactModel }       from "../../features/contact/models/ContactModel";
import { ExperienceModel }    from "../../features/experience/models/ExperienceModel";
import { EducationModel }     from "../../features/education/models/EducationModel";
import { SkillModel }         from "../../features/skills/models/SkillModel";
import { CertificationModel } from "../../features/certification/models/CertificationModel";
import { ProjectModel }       from "../../features/projects/models/ProjectModel";
import { BlogModel }          from "../../features/blog/models/BlogModel";
import { TestimonialModel }   from "../../features/testimonial/models/TestimonialModel";

// ─── Profile ──────────────────────────────────────────────────
export async function getProfile() {
  const snapshot = await getDocs(collection(db, "profile"));
  if (snapshot.empty) return ProfileModel.empty();
  return ProfileModel.fromFirestore(snapshot.docs[0]);
}

// ─── About ────────────────────────────────────────────────────
export async function getAbout() {
  const snapshot = await getDocs(collection(db, "about"));
  if (snapshot.empty) return AboutModel.empty();
  return AboutModel.fromFirestore(snapshot.docs[0]);
}

// ─── Contact ──────────────────────────────────────────────────
export async function getContact() {
  const snapshot = await getDocs(collection(db, "contact"));
  if (snapshot.empty) return ContactModel.empty();
  return ContactModel.fromFirestore(snapshot.docs[0]);
}

// ─── Experience ───────────────────────────────────────────────
export async function getExperiences() {
  const q        = query(collection(db, "experience"), orderBy("order", "asc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(ExperienceModel.fromFirestore);
}

// ─── Education ────────────────────────────────────────────────
export async function getEducation() {
  const q        = query(collection(db, "education"), orderBy("order", "asc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(EducationModel.fromFirestore);
}

// ─── Skills — only active ones ────────────────────────────────
export async function getSkills() {
  const q        = query(collection(db, "skills"), orderBy("order", "asc"));
  const snapshot = await getDocs(q);
  return snapshot.docs
    .map(SkillModel.fromFirestore)
    .filter((s) => s.isActive);
}

// ─── Certifications ───────────────────────────────────────────
export async function getCertifications() {
  const q        = query(collection(db, "certifications"), orderBy("order", "asc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(CertificationModel.fromFirestore);
}

// ─── Projects ─────────────────────────────────────────────────
export async function getProjects() {
  const q        = query(collection(db, "projects"), orderBy("order", "asc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(ProjectModel.fromFirestore);
}

export async function getFeaturedProjects() {
  const all = await getProjects();
  // featured flag or just take first 3
  const featured = all.filter((p) => p.featured);
  return featured.length > 0 ? featured.slice(0, 3) : all.slice(0, 3);
}

export async function getProjectById(id) {
  const docRef  = doc(db, "projects", id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return null;
  return ProjectModel.fromFirestore(docSnap);
}

// ─── Blog — filter isPublished in JS to avoid index errors ────
export async function getBlogs() {
  const snapshot = await getDocs(collection(db, "blog"));
  return snapshot.docs
    .map(BlogModel.fromFirestore)
    .filter((b) => b.isPublished)
    .sort((a, b) => {
      if (!a.publishedAtRaw || !b.publishedAtRaw) return 0;
      return b.publishedAtRaw - a.publishedAtRaw; // newest first
    });
}

export async function getFeaturedBlogs() {
  const all = await getBlogs();
  return all.slice(0, 3);
}

export async function getBlogById(id) {
  const docRef  = doc(db, "blog", id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return null;
  return BlogModel.fromFirestore(docSnap);
}

// ─── Testimonials — only approved ones ────────────────────────
export async function getTestimonials() {
  const q        = query(collection(db, "testimonials"), orderBy("order", "asc"));
  const snapshot = await getDocs(q);
  return snapshot.docs
    .map(TestimonialModel.fromFirestore)
    .filter((t) => t.isApproved);
}