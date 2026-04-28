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
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  return { data, loading, error };
}

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