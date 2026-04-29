import { Link } from "react-router-dom";

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      {
        subtitle: "",
        text: "By accessing or using this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
      },
    ],
  },
  {
    title: "Use of the Website",
    content: [
      {
        subtitle: "Permitted Use",
        text: "You may use this website for lawful, personal, and non-commercial purposes — such as learning about my work, reviewing my portfolio, reading blog posts, or reaching out for professional enquiries.",
      },
      {
        subtitle: "Prohibited Conduct",
        text: "You may not use this site to transmit harmful, offensive, or unlawful content; attempt to gain unauthorised access to any portion of the site or its infrastructure; scrape, crawl, or harvest content in bulk without written permission; or engage in any activity that disrupts or interferes with the site's operation.",
      },
      {
        subtitle: "No Automated Access",
        text: "Automated bots, scrapers, or crawlers are not permitted to access this site beyond what is permitted for standard search-engine indexing.",
      },
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      {
        subtitle: "Ownership",
        text: "All content on this website — including text, graphics, code samples, project descriptions, and design — is the intellectual property of the site owner unless otherwise attributed. All rights are reserved.",
      },
      {
        subtitle: "Limited License",
        text: "You are granted a limited, non-exclusive, non-transferable licence to view and print pages of this website for your personal, non-commercial use only. This licence does not include republishing, modifying, or distributing site content without explicit written consent.",
      },
      {
        subtitle: "Attribution",
        text: "If you wish to reference, quote, or link to content from this site, appropriate attribution to the original author and a link back to the source page is required.",
      },
    ],
  },
  {
    title: "Third-Party Links & Services",
    content: [
      {
        subtitle: "External Links",
        text: "This website may contain links to third-party websites. These links are provided for convenience only. I have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.",
      },
      {
        subtitle: "Third-Party Tools",
        text: "Features such as meeting scheduling or embedded content may be powered by third-party services. Your use of those features is also subject to the relevant third-party terms and privacy policies.",
      },
    ],
  },
  {
    title: "Disclaimer of Warranties",
    content: [
      {
        subtitle: "",
        text: "This website and its content are provided on an 'as is' and 'as available' basis without any warranties of any kind, either express or implied. I do not warrant that the site will be error-free, uninterrupted, secure, or free of viruses or other harmful components. You use the site at your own risk.",
      },
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      {
        subtitle: "",
        text: "To the fullest extent permitted by law, I shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your access to, use of, or inability to use this website, even if I have been advised of the possibility of such damages.",
      },
    ],
  },
  {
    title: "Privacy",
    content: [
      {
        subtitle: "",
        text: "Your use of this website is also governed by our Privacy Policy, which is incorporated into these Terms of Service by reference. Please review the Privacy Policy to understand our practices regarding the collection and use of your information.",
      },
    ],
  },
  {
    title: "Modifications to Terms",
    content: [
      {
        subtitle: "",
        text: "I reserve the right to update or modify these Terms of Service at any time without prior notice. Changes take effect immediately upon posting. The 'Last updated' date at the top of this page reflects the most recent revision. Your continued use of the website after any changes constitutes your acceptance of the new terms.",
      },
    ],
  },
  {
    title: "Governing Law",
    content: [
      {
        subtitle: "",
        text: "These Terms of Service shall be governed by and construed in accordance with applicable laws. Any disputes arising from your use of this website shall be subject to the exclusive jurisdiction of the competent courts in the applicable jurisdiction.",
      },
    ],
  },
  {
    title: "Contact",
    content: [
      {
        subtitle: "",
        text: "If you have any questions about these Terms of Service, please reach out via the Contact page. I aim to respond to all enquiries within 5 business days.",
      },
    ],
  },
];

export default function TermsOfServicePage() {
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
            Terms of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Service
            </span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            Please read these terms carefully before using this website. They
            outline the rules and conditions that govern your use of this site.
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
            Questions about these terms?
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
          <Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link>
        </div>
      </div>
    </div>
  );
}
