// AboutModel.js
// Built from real Firestore data.
//
// Real fields:
//   bio, personalPhoto, personalQuote, location,
//   yearsOfExperience, availability,
//   currentLearningSkills [], personalInterests [],
//   funFacts [], careerHighlights [],
//   languages [{ name, proficiency }]

export const AboutModel = {
    fromFirestore(doc) {
      const data = doc.data ? doc.data() : doc;
      return {
        id:                    doc.id                        ?? "",
        bio:                   data.bio                      ?? "",
        personalPhoto:         data.personalPhoto             ?? "",
        personalQuote:         data.personalQuote             ?? "",
        location:              data.location                  ?? "",
        yearsOfExperience:     data.yearsOfExperience         ?? 0,
        availability:          data.availability              ?? "",
        currentLearningSkills: data.currentLearningSkills     ?? [],
        personalInterests:     data.personalInterests          ?? [],
        funFacts:              data.funFacts                  ?? [],
        careerHighlights:      data.careerHighlights           ?? [],
        // languages = [{ name: "English", proficiency: "fluent" }]
        languages:             data.languages                 ?? [],
      };
    },
  
    empty() {
      return {
        id: "", bio: "", personalPhoto: "", personalQuote: "",
        location: "", yearsOfExperience: 0, availability: "",
        currentLearningSkills: [], personalInterests: [],
        funFacts: [], careerHighlights: [], languages: [],
      };
    },
  };