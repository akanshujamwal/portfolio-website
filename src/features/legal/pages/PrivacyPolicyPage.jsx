import { Link } from "react-router-dom";

const sections = [
  {
    title: "Information We Collect",
    content: [
      {
        subtitle: "Information You Provide",
        text: "When you contact me through this website — via the contact form, email, or meeting booking — I may collect your name, email address, phone number, and any message content you voluntarily provide.",
      },
      {
        subtitle: "Automatically Collected Information",
        text: "Like most websites, this site may collect certain information automatically when you visit, including your IP address, browser type, operating system, referring URLs, and pages viewed. This data is used solely for improving the site experience and is never sold.",
      },
      {
        subtitle: "Cookies & Local Storage",
        text: "This site may use cookies or browser local storage to remember your preferences (such as theme settings) and to enable analytics. You can disable cookies in your browser settings at any time.",
      },
    ],
  },
  {
    title: "How I Use Your Information",
    content: [
      {
        subtitle: "Communication",
        text: "Contact information you provide is used exclusively to respond to your inquiries, schedule meetings, or discuss potential collaborations. I will never use your contact details for unsolicited marketing.",
      },
      {
        subtitle: "Site Improvement",
        text: "Aggregated, anonymised analytics data helps me understand which content is most useful and how visitors navigate the site. No individual is identified through this analysis.",
      },
      {
        subtitle: "Legal Compliance",
        text: "I may retain or disclose information when required by law, legal process, or to protect the rights, property, or safety of this site, its users, or the public.",
      },
    ],
  },
  {
    title: "Third-Party Services",
    content: [
      {
        subtitle: "Firebase (Google)",
        text: "This site uses Google Firebase to serve dynamic content. Firebase may collect usage data in accordance with Google's Privacy Policy. Data stored in Firebase is used only to power the website's content.",
      },
      {
        subtitle: "Analytics",
        text: "This site may use a privacy-respecting analytics provider to collect aggregated visitor statistics. No personally identifiable information is shared with analytics providers.",
      },
      {
        subtitle: "Calendly / Meeting Tools",
        text: "If you book a meeting through a scheduling link, that service's own privacy policy governs how your booking data is handled. I recommend reviewing their policy before booking.",
      },
    ],
  },
  {
    title: "Data Retention & Security",
    content: [
      {
        subtitle: "Retention",
        text: "I retain contact information only as long as necessary to respond to your inquiry or as required by applicable law. You may request deletion of your data at any time by contacting me directly.",
      },
      {
        subtitle: "Security",
        text: "I take reasonable technical measures to protect information submitted through this site. However, no internet transmission is 100% secure, and I cannot guarantee absolute security.",
      },
    ],
  },
  {
    title: "Your Rights",
    content: [
      {
        subtitle: "Access & Correction",
        text: "You have the right to request access to the personal information I hold about you and to request corrections if it is inaccurate.",
      },
      {
        subtitle: "Deletion",
        text: "You may request that I delete personal information I hold about you, subject to any legal retention obligations.",
      },
      {
        subtitle: "Opt-Out",
        text: "If you have received communication from me and wish to opt out of future contact, simply reply requesting removal or email me directly.",
      },
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      {
        subtitle: "",
        text: "I may update this Privacy Policy from time to time to reflect changes in practice or legal requirements. The 'Last updated' date at the top of this page will always reflect the most recent revision. Continued use of the site after changes are posted constitutes acceptance of the revised policy.",
      },
    ],
  },
  {
    title: "Contact",
    content: [
      {
        subtitle: "",
        text: "If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please reach out via the Contact page or email me directly. I aim to respond within 5 business days.",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      {/* Hero */}
      <div className="bg-gray-900 border-b border-gray-800 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-indigo-400 text-sm transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-indigo-400 text-xs font-semibold tracking-widest uppercase bg-indigo-400/10 px-3 py-1 rounded-full">
              Legal
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Privacy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Policy
            </span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            Your privacy matters. This policy explains what data this website
            collects, how it is used, and your rights regarding that data.
          </p>

          <p className="text-gray-600 text-sm mt-6">
            Last updated: April 29, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="space-y-12">
          {sections.map((section, i) => (
            <div key={i} className="border-b border-gray-800 pb-12 last:border-0 last:pb-0">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xs font-bold flex-shrink-0">
                  {i + 1}
                </span>
                {section.title}
              </h2>
              <div className="space-y-5 pl-10">
                {section.content.map((item, j) => (
                  <div key={j}>
                    {item.subtitle && (
                      <h3 className="text-white font-semibold mb-1">{item.subtitle}</h3>
                    )}
                    <p className="text-gray-400 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 bg-gradient-to-br from-indigo-600/10 to-purple-600/5 border border-indigo-500/20 rounded-2xl p-8 text-center">
          <p className="text-gray-400 mb-4">
            Have a question about this policy?
          </p>
          <Link
            to="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Get in Touch
          </Link>
        </div>

        {/* Legal links */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>
          <Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms of Service</Link>
          <Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link>
        </div>
      </div>
    </div>
  );
}
