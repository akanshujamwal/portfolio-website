// SkillModel.js
// Built from real Firestore data.
//
// Real fields:
//   name, iconUrl (optional), category ("frontend" | "backend" | etc.),
//   proficiency ("beginner" | "intermediate" | "advanced" | "expert"),
//   isActive, order

const proficiencyLabel = {
    beginner:     "Beginner",
    intermediate: "Intermediate",
    advanced:     "Advanced",
    expert:       "Expert",
  };
  
  const proficiencyLevel = {
    beginner:     25,
    intermediate: 50,
    advanced:     75,
    expert:       100,
  };
  
  export const SkillModel = {
    fromFirestore(doc) {
      const data = doc.data ? doc.data() : doc;
      const proficiency = data.proficiency ?? "intermediate";
      return {
        id:               doc.id              ?? "",
        name:             data.name           ?? "",
        iconUrl:          data.iconUrl        ?? null,
        category:         data.category       ?? "general",
        proficiency,
        proficiencyLabel: proficiencyLabel[proficiency] ?? "Intermediate",
        // proficiencyLevel gives a 0-100 number — useful for progress bars
        proficiencyLevel: proficiencyLevel[proficiency] ?? 50,
        isActive:         data.isActive       ?? true,
        order:            data.order          ?? 0,
      };
    },
  
    empty() {
      return {
        id: "", name: "", iconUrl: null, category: "general",
        proficiency: "intermediate", proficiencyLabel: "Intermediate",
        proficiencyLevel: 50, isActive: true, order: 0,
      };
    },
  };