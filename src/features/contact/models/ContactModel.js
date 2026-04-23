// ContactModel.js
// Built from real Firestore data.
//
// Real fields:
//   email, phone, secondaryEmail, whatsapp,
//   location, timeZone, availability ("busy" | "available" | "notLooking"),
//   contactMessage, autoReplyMessage,
//   hourlyRate, minimumProjectBudget,
//   calendlyUrl, meetingLink, portfolioUrl, resumeUrl,
//   expectedResponseTimeHours,
//   availableForEmployment, availableForFreelance,
//   availableForCollaboration, allowWeekendContact,
//   allowDirectContact, enableSpamProtection,
//   socialLinks [] ← ARRAY of { platform, url, displayName, isActive, order }
//   preferences { primaryMethod, allowColdOutreach, maxResponseTime }
//   formSettings { showNameField, showEmailField, showPhoneField, ... }

const availabilityLabel = {
    available:  "Available for Work",
    busy:       "Currently Busy",
    notLooking: "Not Looking",
  };
  
  export const ContactModel = {
    fromFirestore(doc) {
      const data = doc.data ? doc.data() : doc;
  
      // socialLinks is an ARRAY — filter only active ones and sort by order
      const socialLinks = (data.socialLinks ?? [])
        .filter((s) => s.isActive !== false)
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  
      const availability = data.availability ?? "available";
  
      return {
        id:                      doc.id                          ?? "",
        email:                   data.email                      ?? "",
        phone:                   data.phone                      ?? "",
        secondaryEmail:          data.secondaryEmail             ?? "",
        whatsapp:                data.whatsapp                   ?? "",
        location:                data.location                   ?? "",
        timeZone:                data.timeZone                   ?? "",
        availability,
        availabilityLabel:       availabilityLabel[availability] ?? availability,
        contactMessage:          data.contactMessage             ?? "",
        autoReplyMessage:        data.autoReplyMessage           ?? "",
        hourlyRate:              data.hourlyRate                 ?? "",
        minimumProjectBudget:    data.minimumProjectBudget       ?? "",
        calendlyUrl:             data.calendlyUrl                ?? null,
        meetingLink:             data.meetingLink                ?? null,
        portfolioUrl:            data.portfolioUrl               ?? null,
        resumeUrl:               data.resumeUrl                  ?? null,
        expectedResponseTimeHours: data.expectedResponseTimeHours ?? 24,
        availableForEmployment:  data.availableForEmployment     ?? false,
        availableForFreelance:   data.availableForFreelance      ?? false,
        availableForCollaboration: data.availableForCollaboration ?? false,
        allowWeekendContact:     data.allowWeekendContact        ?? false,
        allowDirectContact:      data.allowDirectContact         ?? true,
        enableSpamProtection:    data.enableSpamProtection       ?? true,
        // socialLinks is normalized array
        socialLinks,
        preferences:             data.preferences                ?? {},
        formSettings:            data.formSettings               ?? {},
      };
    },
  
    empty() {
      return {
        id: "", email: "", phone: "", secondaryEmail: "",
        whatsapp: "", location: "", timeZone: "",
        availability: "available", availabilityLabel: "Available for Work",
        contactMessage: "", autoReplyMessage: "",
        hourlyRate: "", minimumProjectBudget: "",
        calendlyUrl: null, meetingLink: null,
        portfolioUrl: null, resumeUrl: null,
        expectedResponseTimeHours: 24,
        availableForEmployment: false, availableForFreelance: false,
        availableForCollaboration: false, allowWeekendContact: false,
        allowDirectContact: true, enableSpamProtection: true,
        socialLinks: [], preferences: {}, formSettings: {},
      };
    },
  };