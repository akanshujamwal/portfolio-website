import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useProfile } from "../../core/firebase/useFirestore";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { data: profile } = useProfile();

  const firstName = profile?.name?.split(" ")[0] ?? "";
  const cvUrl     = profile?.cvUrl ?? null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ─────────────────────────────── */}
          <Link to="/" className="text-white font-bold text-xl tracking-tight">
            <span className="text-indigo-400">&lt;</span>
            {firstName}
            <span className="text-indigo-400">/&gt;</span>
          </Link>

          {/* ── Desktop Links ─────────────────────── */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-indigo-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {cvUrl && (
              <a
                href={cvUrl}
                className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Download CV
              </a>
            )}
          </div>

          {/* ── Mobile Hamburger ──────────────────── */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* ── Mobile Menu ───────────────────────── */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path ? "text-indigo-400" : "text-gray-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {cvUrl && (
              <a
                href={cvUrl}
                className="bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-lg w-fit"
              >
                Download CV
              </a>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}