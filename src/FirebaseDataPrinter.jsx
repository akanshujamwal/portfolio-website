// FirebaseDataPrinter.jsx — TEMPORARY, delete after use.

import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./core/firebase/firebase";

const COLLECTIONS = [
  "profile",
  "about",
  "blog",
  "certifications",
  "contact",
  "education",
  "experience",
  "projects",
  "skills",
  "testimonials",
];

export default function FirebaseDataPrinter() {
  useEffect(() => {
    async function printAll() {
      console.log("======================================");
      console.log("   FIREBASE DATA PRINTER — ALL DOCS  ");
      console.log("======================================");

      for (const col of COLLECTIONS) {
        try {
          const snapshot = await getDocs(collection(db, col));

          if (snapshot.empty) {
            console.log(`\n📂 [${col}] → EMPTY`);
            continue;
          }

          console.log(`\n📂 [${col}] → ${snapshot.docs.length} document(s)`);
          console.log("─────────────────────────────────");

          snapshot.docs.forEach((doc, i) => {
            const data = doc.data();
            console.log(`Doc ${i + 1} | id: ${doc.id}`);
            // JSON.stringify prints actual field values instead of collapsed Object
            console.log(JSON.stringify(data, null, 2));
          });

        } catch (err) {
          console.log(`\n❌ [${col}] → ERROR: ${err.message}`);
        }
      }

      console.log("\n======================================");
      console.log("              DONE                    ");
      console.log("======================================");
    }

    printAll();
  }, []);

  return (
    <div style={{
      position: "fixed", bottom: 20, right: 20, zIndex: 9999,
      background: "#4f46e5", color: "#fff", padding: "12px 20px",
      borderRadius: "10px", fontSize: "13px", fontFamily: "monospace",
      boxShadow: "0 4px 20px rgba(0,0,0,0.4)"
    }}>
      📡 Printing to console...
      <br />
      <span style={{ fontSize: "11px", opacity: 0.8 }}>F12 → Console → copy all text</span>
    </div>
  );
}