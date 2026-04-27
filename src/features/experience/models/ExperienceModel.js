// ExperienceModel.js
// Built from real Firestore data.
//
// Real fields:
//   company, role, description, location,
//   startDate (Timestamp), endDate (Timestamp),
//   currentlyWorking (bool),
//   employmentType ("fullTime" | "partTime" | "contract" | "freelance"),
//   technologies [], achievements [], order

function tsToDate(ts) {
    if (!ts) return null;
    if (ts?.toDate) return ts.toDate();
    if (ts?.seconds) return new Date(ts.seconds * 1000);
    if (typeof ts === "string" && /^\d{4}-\d{2}-\d{2}/.test(ts)) return new Date(ts);
    return null;
  }
  
  function formatDateLabel(ts) {
    const date = tsToDate(ts);
    if (!date) return "";
    return date.toLocaleDateString("en-IN", { month: "short", year: "numeric" });
  }
  
  // Maps internal employmentType to display label
  const employmentTypeLabel = {
    fullTime:  "Full-time",
    partTime:  "Part-time",
    contract:  "Contract",
    freelance: "Freelance",
    internship:"Internship",
  };
  
  export const ExperienceModel = {
    fromFirestore(doc) {
      const data = doc.data ? doc.data() : doc;
      return {
        id:                doc.id                  ?? "",
        company:           data.company             ?? "",
        role:              data.role                ?? "",
        description:       data.description         ?? "",
        location:          data.location            ?? "",
        // Timestamps converted to readable strings for display
        startDate:         formatDateLabel(data.startDate),
        endDate:           formatDateLabel(data.endDate),
        startDateRaw:      tsToDate(data.startDate),  // raw Date for sorting
        endDateRaw:        tsToDate(data.endDate),
        currentlyWorking:  data.currentlyWorking    ?? false,
        employmentType:    data.employmentType       ?? "fullTime",
        employmentLabel:   employmentTypeLabel[data.employmentType] ?? "Full-time",
        technologies:      data.technologies         ?? [],
        achievements:      data.achievements         ?? [],
        order:             data.order               ?? 0,
      };
    },
  
    empty() {
      return {
        id: "", company: "", role: "", description: "",
        location: "", startDate: "", endDate: "",
        startDateRaw: null, endDateRaw: null,
        currentlyWorking: false, employmentType: "fullTime",
        employmentLabel: "Full-time", technologies: [],
        achievements: [], order: 0,
      };
    },
  };