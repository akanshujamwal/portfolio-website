// CertificationModel.js
// Built from real Firestore data.
//
// Real fields:
//   name, provider, description,
//   imageUrl (certification image/badge),
//   credentialUrl, credentialId,
//   issueDate (Timestamp), expiryDate (Timestamp),
//   doesExpire (bool), skills [], order

function tsToString(ts) {
    if (!ts) return "";
    if (ts?.toDate) return ts.toDate().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
    if (ts?.seconds) return new Date(ts.seconds * 1000).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
    return "";
  }
  
  function tsToDate(ts) {
    if (!ts) return null;
    if (ts?.toDate) return ts.toDate();
    if (ts?.seconds) return new Date(ts.seconds * 1000);
    return null;
  }
  
  export const CertificationModel = {
    fromFirestore(doc) {
      const data = doc.data ? doc.data() : doc;
      const expiryDate = tsToDate(data.expiryDate);
      const isExpired  = expiryDate ? expiryDate < new Date() : false;
  
      return {
        id:            doc.id                  ?? "",
        name:          data.name               ?? "",
        provider:      data.provider           ?? "",
        description:   data.description        ?? "",
        imageUrl:      data.imageUrl           ?? null,
        credentialUrl: data.credentialUrl      ?? null,
        credentialId:  data.credentialId       ?? null,
        issueDate:     tsToString(data.issueDate),
        expiryDate:    tsToString(data.expiryDate),
        expiryDateRaw: expiryDate,
        doesExpire:    data.doesExpire         ?? false,
        isExpired,                                         // computed — useful for UI badge
        skills:        data.skills             ?? [],
        order:         data.order              ?? 0,
      };
    },
  
    empty() {
      return {
        id: "", name: "", provider: "", description: "",
        imageUrl: null, credentialUrl: null, credentialId: null,
        issueDate: "", expiryDate: "", expiryDateRaw: null,
        doesExpire: false, isExpired: false, skills: [], order: 0,
      };
    },
  };