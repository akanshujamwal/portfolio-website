// BlogModel.js
// Built from real Firestore data.
//
// Real fields:
//   title, excerpt, tags [],
//   sections [] ← rich content blocks (NOT a plain string content field)
//   isPublished, publishedAt (Timestamp)
//
// Section types found in real data:
//   heading, text, quote, footer, bullet_list, numbered_list,
//   banner, image_left_* (image with layout)
//
// Each section has: id, type, order, and type-specific fields like:
//   text, heading, headingLevel, items[], imageUrl,
//   quoteAuthor, code, language, caption, videoUrl,
//   embedUrl, tableHeaders[], tableRows[], layoutImage, layoutText

function tsToString(ts) {
    if (!ts) return "";
    if (ts?.toDate) return ts.toDate().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
    if (ts?.seconds) return new Date(ts.seconds * 1000).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
    return "";
  }
  
  function tsToDate(ts) {
    if (!ts) return null;
    if (ts?.toDate) return ts.toDate();
    if (ts?.seconds) return new Date(ts.seconds * 1000);
    return null;
  }
  
  // Normalizes a single section — ensures all fields have defaults
  function normalizeSection(section) {
    return {
      id:            section.id            ?? "",
      type:          section.type          ?? "text",
      order:         section.order         ?? 0,
      // Text content
      text:          section.text          ?? null,
      heading:       section.heading       ?? null,
      headingLevel:  section.headingLevel  ?? 2,
      // List content
      items:         section.items         ?? [],
      // Quote
      quoteAuthor:   section.quoteAuthor   ?? null,
      // Image / banner
      imageUrl:      section.imageUrl      ?? null,
      imageUrls:     section.imageUrls     ?? [],
      caption:       section.caption       ?? null,
      // Layout (image + text side by side)
      layoutImage:   section.layoutImage   ?? null,
      layoutText:    section.layoutText    ?? null,
      layoutCaption: section.layoutCaption ?? null,
      // Code block
      code:          section.code          ?? null,
      language:      section.language      ?? null,
      // Video / embed
      videoUrl:      section.videoUrl      ?? null,
      embedUrl:      section.embedUrl      ?? null,
      // Table
      tableHeaders:  section.tableHeaders  ?? [],
      tableRows:     section.tableRows     ?? [],
      // Grid
      gridColumns:   section.gridColumns   ?? 2,
      // Callout
      calloutType:   section.calloutType   ?? "info",
      // Spacer
      spacerHeight:  section.spacerHeight  ?? 40,
    };
  }
  
  export const BlogModel = {
    fromFirestore(doc) {
      const data = doc.data ? doc.data() : doc;
      // Sort sections by order field
      const sections = (data.sections ?? [])
        .map(normalizeSection)
        .sort((a, b) => a.order - b.order);
  
      return {
        id:             doc.id                    ?? "",
        title:          data.title                ?? "",
        excerpt:        data.excerpt              ?? "",
        tags:           data.tags                 ?? [],
        sections,
        isPublished:    data.isPublished          ?? false,
        publishedAt:    tsToString(data.publishedAt),
        publishedAtRaw: tsToDate(data.publishedAt),
        readTime:       data.readTime             ?? "",
        bannerUrl:      data.bannerUrl            ?? null,
      };
    },
  
    empty() {
      return {
        id: "", title: "", excerpt: "", tags: [],
        sections: [], isPublished: false,
        publishedAt: "", publishedAtRaw: null,
        readTime: "", bannerUrl: null,
      };
    },
  };