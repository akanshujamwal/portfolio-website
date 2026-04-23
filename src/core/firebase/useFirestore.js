// useFirestore.js — custom React hooks for every collection.
//
// WHY CUSTOM HOOKS?
// A custom hook is just a function that starts with "use" and uses
// other React hooks inside it. It lets us reuse stateful logic.
//
// Each hook:
//   1. Creates data, loading, error state
//   2. Fetches from Firestore on mount (useEffect)
//   3. Returns { data, loading, error } for the component to use
//
// Components use them like this:
//   const { data: projects, loading, error } = useProjects();

import { useState, useEffect } from "react";
import {
  getProfile,
  getAbout,
  getContact,
  getExperiences,
  getEducation,
  getSkills,
  getCertifications,
  getProjects,
  getProjectById,
  getFeaturedProjects,
  getBlogs,
  getBlogById,
  getFeaturedBlogs,
  getTestimonials,
} from "./firestoreService";

// ─── Generic hook factory ─────────────────────────────────────
// Creates a hook that calls any async fetch function.
// deps = dependency array for useEffect (e.g. [id] for detail pages)
function useFirestoreData(fetchFn, deps = []) {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    let cancelled = false; // prevents state update if component unmounts

    async function fetch() {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchFn();
        if (!cancelled) setData(result);
      } catch (err) {
        if (!cancelled) setError(err.message || "Failed to load data");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetch();
    return () => { cancelled = true; }; // cleanup on unmount
  }, deps);

  return { data, loading, error };
}

// ─── Exported hooks ───────────────────────────────────────────

export function useProfile() {
  return useFirestoreData(getProfile, []);
}

export function useAbout() {
  return useFirestoreData(getAbout, []);
}

export function useContact() {
  return useFirestoreData(getContact, []);
}

export function useExperiences() {
  return useFirestoreData(getExperiences, []);
}

export function useEducation() {
  return useFirestoreData(getEducation, []);
}

export function useSkills() {
  return useFirestoreData(getSkills, []);
}

export function useCertifications() {
  return useFirestoreData(getCertifications, []);
}

export function useProjects() {
  return useFirestoreData(getProjects, []);
}

export function useFeaturedProjects() {
  return useFirestoreData(getFeaturedProjects, []);
}

// Detail page hooks — depend on id from URL params
export function useProjectById(id) {
  return useFirestoreData(() => getProjectById(id), [id]);
}

export function useBlogs() {
  return useFirestoreData(getBlogs, []);
}

export function useFeaturedBlogs() {
  return useFirestoreData(getFeaturedBlogs, []);
}

export function useBlogById(id) {
  return useFirestoreData(() => getBlogById(id), [id]);
}

export function useTestimonials() {
  return useFirestoreData(getTestimonials, []);
}