// TestimonialModel.js
// Built from real Firestore data.
//
// Real fields:
//   name, role, company, message,
//   linkedinUrl, avatarUrl,
//   isApproved (bool), order

export const TestimonialModel = {
    fromFirestore(doc) {
      const data = doc.data ? doc.data() : doc;
      return {
        id:          doc.id              ?? "",
        name:        data.name           ?? "",
        role:        data.role           ?? "",
        company:     data.company        ?? "",
        // roleWithCompany = "Flutter Dev · Google" for display
        roleWithCompany: [data.role, data.company].filter(Boolean).join(" · "),
        message:     data.message        ?? "",
        linkedinUrl: data.linkedinUrl    ?? null,
        avatarUrl:   data.avatarUrl      ?? null,
        // Auto-generate initials from name as avatar fallback
        initials:    data.name
          ? data.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()
          : "?",
        isApproved:  data.isApproved     ?? false,
        order:       data.order          ?? 0,
      };
    },
  
    empty() {
      return {
        id: "", name: "", role: "", company: "",
        roleWithCompany: "", message: "",
        linkedinUrl: null, avatarUrl: null,
        initials: "?", isApproved: false, order: 0,
      };
    },
  };