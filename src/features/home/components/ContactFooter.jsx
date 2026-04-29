import { Link } from "react-router-dom";
import { useProfile, useContact } from "../../../core/firebase/useFirestore";

export default function ContactFooter() {
  const { data: profile } = useProfile();
  const { data: contact } = useContact();
  const year = new Date().getFullYear();

  const email    = profile?.email    || contact?.email    || "";
  const phone    = profile?.phone    || contact?.phone    || "";
  const location = profile?.location || contact?.location || "";
  const name     = profile?.name     || "";
  const meetingLink      = contact?.calendlyUrl || contact?.meetingLink || null;
  const availabilityText = profile?.isAvailable ? "open to new opportunities" : "currently busy";

  // socialLinks in ContactModel is an array; in ProfileModel is an object
  const socialLinksArray = Array.isArray(contact?.socialLinks)
    ? contact.socialLinks
    : Object.entries(profile?.socialLinks ?? {}).map(([platform, url]) => ({ platform, url, displayName: platform }));

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
              I'm currently {availabilityText}. Whether it's a freelance
              project, full-time opportunity, or just a chat — feel free to reach out.
            </p>

            {/* Contact details */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-400">
              {email && (
                <a href={`mailto:${email}`} className="hover:text-indigo-400 transition-colors">
                  ✉ {email}
                </a>
              )}
              {phone && <span>📞 {phone}</span>}
              {location && <span>📍 {location}</span>}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  Send an Email
                </a>
              )}
              {meetingLink && (
                <a
                  href={meetingLink}
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
              {name.split(" ")[0]}
              <span className="text-indigo-400">/&gt;</span>
            </span>

            {/* Social links */}
            {socialLinksArray.length > 0 && (
              <div className="flex items-center gap-6">
                {socialLinksArray.map((link) => (
                  <a
                    key={link.platform || link.displayName}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-indigo-400 text-sm capitalize transition-colors"
                  >
                    {link.displayName || link.platform}
                  </a>
                ))}
              </div>
            )}

            {/* Copyright + legal links */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-gray-600">
              <p>© {year} {name}. All rights reserved.</p>
              <span className="hidden sm:inline">·</span>
              <div className="flex items-center gap-4">
                <Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
