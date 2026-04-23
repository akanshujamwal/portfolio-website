// ProfileModel.js
// Built from real Firestore data.
//
// Real fields:
//   name, title, bio, email, phone, location,
//   profileImageUrl, cvUrl, isAvailable, socialLinks {}
//   createdAt, updatedAt (timestamps — ignored in UI)

function tsToString(ts) {
    if (!ts) return "";
    if (ts?.toDate) return ts.toDate().toLocaleDateString("en-IN", { month: "short", year: "numeric" });
    return "";
  }
  
  export const ProfileModel = {
    fromFirestore(doc) {
      const data = doc.data ? doc.data() : doc;
      return {
        id:              doc.id            ?? "",
        name:            data.name         ?? "",
        title:           data.title        ?? "",
        bio:             data.bio          ?? "",
        email:           data.email        ?? "",
        phone:           data.phone        ?? "",
        location:        data.location     ?? "",
        profileImageUrl: data.profileImageUrl ?? "",
        cvUrl:           data.cvUrl        ?? "",
        isAvailable:     data.isAvailable  ?? false,
        // socialLinks is an empty {} in profile — kept as object
        socialLinks:     data.socialLinks  ?? {},
      };
    },
  
    empty() {
      return {
        id: "", name: "", title: "", bio: "", email: "",
        phone: "", location: "", profileImageUrl: "",
        cvUrl: "", isAvailable: false, socialLinks: {},
      };
    },
  };