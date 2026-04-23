// EducationModel.js
// Built from real Firestore data.
//
// Real fields (only the useful ones — the rest are empty/null):
//   school, degree, fieldOfStudy, location, website,
//   startYear (string), endYear (string),
//   description, status ("completed" | "ongoing"),
//   isCurrentlyEnrolled, degreeType, level,
//   studyMode, isVerified, achievements [],
//   order

export const EducationModel = {
    fromFirestore(doc) {
      const data = doc.data ? doc.data() : doc;
      return {
        id:                 doc.id                    ?? "",
        school:             data.school               ?? "",
        degree:             data.degree               ?? "",
        fieldOfStudy:       data.fieldOfStudy          ?? "",
        location:           data.location             ?? "",
        website:            data.website              ?? null,
        startYear:          data.startYear            ?? "",
        endYear:            data.endYear              ?? null,   // null = ongoing
        description:        data.description          ?? "",
        status:             data.status               ?? "completed",
        isCurrentlyEnrolled: data.isCurrentlyEnrolled ?? false,
        degreeType:         data.degreeType            ?? "",    // "bachelor", "master", etc.
        level:              data.level                ?? "",    // "undergraduate", "postgraduate"
        studyMode:          data.studyMode            ?? "fullTime",
        isVerified:         data.isVerified           ?? false,
        achievements:       data.achievements          ?? [],
        order:              data.order                ?? 0,
      };
    },
  
    empty() {
      return {
        id: "", school: "", degree: "", fieldOfStudy: "",
        location: "", website: null, startYear: "", endYear: null,
        description: "", status: "completed", isCurrentlyEnrolled: false,
        degreeType: "", level: "", studyMode: "fullTime",
        isVerified: false, achievements: [], order: 0,
      };
    },
  };