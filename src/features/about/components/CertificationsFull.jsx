// CertificationsFull — full certifications list on the about page.
// Shows more detail than the home page preview version.

import { certificationsData } from "../../../data/mockData";
import SectionHeader from "../../../shared/components/SectionHeader";

export default function CertificationsFull() {
  return (
    <section className="bg-gray-950 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          label="Credentials"
          title="Certifications"
          subtitle="Verified credentials from recognized platforms and organizations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certificationsData.map((cert) => (
            <a
              key={cert.id}
              href={cert.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-gray-900 border border-gray-800 hover:border-indigo-500/50 rounded-xl p-6 flex flex-col gap-4 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/5 group"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center text-2xl">
                  🏅
                </div>
                <span className="text-indigo-400 text-xs font-semibold group-hover:translate-x-0.5 transition-transform">
                  Verify ↗
                </span>
              </div>

              <div className="flex-1">
                <h3 className="text-white text-sm font-semibold leading-snug mb-1 group-hover:text-indigo-400 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-gray-400 text-xs">{cert.provider}</p>
              </div>

              <p className="text-gray-600 text-xs border-t border-gray-800 pt-3">
                Issued {cert.issueDate}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}