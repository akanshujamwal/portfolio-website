// ContactFooter — contact CTA section + footer in one component.
// The contact CTA encourages visitors to reach out.
// The footer contains social links and copyright.

import { profileData } from "../data/mockData";

export default function ContactFooter() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* ── Contact CTA Section ───────────── */}
      <section id="contact" className="bg-gray-900 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/10 border border-indigo-500/20 rounded-2xl p-10 sm:p-16 text-center">
            <span className="inline-block text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-4 bg-indigo-400/10 px-3 py-1 rounded-full">
              Let's Work Together
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Have a project in mind?
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto mb-8 leading-relaxed">
              I'm currently {profileData.availability.toLowerCase()}. Whether it's a freelance
              project, full-time opportunity, or just a chat — feel free to reach out.
            </p>

            {/* Contact details */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-400">
              <a href={`mailto:${profileData.email}`} className="hover:text-indigo-400 transition-colors">
                ✉ {profileData.email}
              </a>
              {profileData.phone && (
                <span>📞 {profileData.phone}</span>
              )}
              {profileData.location && (
                <span>📍 {profileData.location}</span>
              )}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${profileData.email}`}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                Send an Email
              </a>
              {profileData.meetingLink && (
                <a
                  href={profileData.meetingLink}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-gray-600 hover:border-indigo-500 text-gray-300 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200"
                >
                  Book a Meeting
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────── */}
      <footer className="bg-gray-950 border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            {/* Logo */}
            <span className="text-white font-bold text-lg tracking-tight">
              <span className="text-indigo-400">&lt;</span>
              {profileData.name.split(" ")[0]}
              <span className="text-indigo-400">/&gt;</span>
            </span>

            {/* Social links */}
            <div className="flex items-center gap-6">
              {Object.entries(profileData.socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 hover:text-indigo-400 text-sm capitalize transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-gray-600 text-sm">
              © {year} {profileData.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}