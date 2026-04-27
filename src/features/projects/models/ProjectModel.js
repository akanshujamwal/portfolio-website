// ProjectModel.js
// Built from real Firestore data.
//
// Real fields:
//   title, overview, description, category ("website" | etc.),
//   status ("completed" | "inProgress"), slug,
//   images [], videos [], technologies [],
//   personal (bool) ← NOT isCompany!
//   featured (bool), challenges, solution,
//   startDate (Timestamp), endDate (Timestamp), order

function tsToString(ts) {
    if (!ts) return "";
    if (ts?.toDate) return ts.toDate().toLocaleDateString("en-IN", { month: "short", year: "numeric" });
    if (ts?.seconds) return new Date(ts.seconds * 1000).toLocaleDateString("en-IN", { month: "short", year: "numeric" });
    if (typeof ts === "string" && /^\d{4}-\d{2}-\d{2}/.test(ts)) return new Date(ts).toLocaleDateString("en-IN", { month: "short", year: "numeric" });
    return "";
  }
  
  const statusLabel = {
    completed:  "Completed",
    inProgress: "In Progress",
    ongoing:    "Ongoing",
    paused:     "Paused",
  };
  
  export const ProjectModel = {
    fromFirestore(doc) {
      const data = doc.data ? doc.data() : doc;
      const status = data.status ?? "completed";
  
      return {
        id:           doc.id              ?? "",
        title:        data.title          ?? "",
        overview:     data.overview       ?? "",
        description:  data.description    ?? "",
        category:     data.category       ?? "general",
        status,
        statusLabel:  statusLabel[status] ?? status,
        slug:         data.slug           ?? "",
        images:       data.images         ?? [],
        videos:       data.videos         ?? [],
        technologies: data.technologies   ?? [],
        personal:     data.personal       ?? true,
        isCompany:    !(data.personal     ?? true),
        companyName:  data.companyName    ?? "",
        companyWebsite: data.companyWebsite ?? null,
        featured:     data.featured       ?? false,
        challenges:   data.challenges     ?? "",
        solution:     data.solution       ?? "",
        startDate:    tsToString(data.startDate),
        endDate:      tsToString(data.endDate),
        order:        data.order          ?? 0,
      };
    },
  
    empty() {
      return {
        id: "", title: "", overview: "", description: "",
        category: "general", status: "completed", statusLabel: "Completed",
        slug: "", images: [], videos: [], technologies: [],
        personal: true, isCompany: false, companyName: "", companyWebsite: null,
        featured: false, challenges: "", solution: "",
        startDate: "", endDate: "", order: 0,
      };
    },
  };