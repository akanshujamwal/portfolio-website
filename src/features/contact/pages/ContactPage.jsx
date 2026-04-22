// ContactPage — full contact page with EmailJS form + info cards + social links.
//
// HOW EMAILJS WORKS:
// 1. You sign up at emailjs.com (free)
// 2. Create an Email Service (Gmail, Outlook, etc.)
// 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{message}}
// 4. Get your Service ID, Template ID, and Public Key
// 5. Paste them in the config below — done. No backend needed.
//
// useState  → stores form field values and tracks loading/success/error states
// useRef    → gives us a reference to the <form> element so EmailJS can read it
// emailjs.sendForm() → reads all input name="" attributes and maps to template variables

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { profileData } from "../../../data/mockData";

// ─── EmailJS Config ───────────────────────────────────────────
// Replace these with your actual values from emailjs.com dashboard


const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// ──────────────────────────────────────────────────────────────

const contactInfo = [
    {
        icon: "✉️",
        label: "Email",
        value: profileData.email,
        href: `mailto:${profileData.email}`,
    },
    {
        icon: "📞",
        label: "Phone",
        value: profileData.phone,
        href: `tel:${profileData.phone}`,
    },
    {
        icon: "📍",
        label: "Location",
        value: profileData.location,
        href: null,
    },
    {
        icon: "🟢",
        label: "Availability",
        value: profileData.availability,
        href: null,
    },
];

export default function ContactPage() {
    // formRef lets emailjs.sendForm() read input values directly from the DOM
    const formRef = useRef();

    // Track each field value for controlled inputs
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

    // UI states
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    // Called on every keystroke — updates the matching field in form state
    // e.target.name matches the name="" on the input (e.g. "email")
    // [e.target.name] is computed property syntax — dynamic key
    function handleChange(e) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    // async function handleSubmit(e) {
    //     e.preventDefault(); // stop page from refreshing on form submit
    //     setLoading(true);
    //     setError("");
    //     setSuccess(false);

    //     try {
    //         await emailjs.sendForm(
    //             EMAILJS_SERVICE_ID,
    //             EMAILJS_TEMPLATE_ID,
    //             formRef.current,   // reads all name="" attributes from the form
    //             EMAILJS_PUBLIC_KEY
    //         );
    //         setSuccess(true);
    //         setForm({ name: "", email: "", subject: "", message: "" });
    //     } catch (err) {
    //         setError("Something went wrong. Please try again or email me directly.");
    //     } finally {
    //         setLoading(false);
    //     }
    // }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);
      
        try {
          await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
              from_name: form.name,
              from_email: form.email,
              subject: form.subject,
              message: form.message,
            },
            EMAILJS_PUBLIC_KEY
          );
          setSuccess(true);
          setForm({ name: "", email: "", subject: "", message: "" });
        } catch (err) {
          console.log("EmailJS error:", err);
          setError("Something went wrong. Please try again or email me directly.");
        } finally {
          setLoading(false);
        }
      }
    return (
        <main className="min-h-screen bg-gray-950">

            {/* ── Page Header ───────────────────────────── */}
            <section className="bg-gray-950 pt-32 pb-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-4 bg-indigo-400/10 px-3 py-1 rounded-full">
                        Get In Touch
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Let's Work Together
                    </h1>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
                        Have a project in mind, a question, or just want to say hi? Fill out the form — I reply within 24 hours.
                    </p>
                </div>
            </section>

            {/* ── Main Content ──────────────────────────── */}
            <section className="py-12 pb-28">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

                        {/* ── Left: Info + Socials (2 cols) ─── */}
                        <div className="lg:col-span-2 flex flex-col gap-6">

                            {/* Contact info cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                                {contactInfo.map((item) => (
                                    <div
                                        key={item.label}
                                        className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex items-start gap-4"
                                    >
                                        <span className="text-2xl flex-shrink-0">{item.icon}</span>
                                        <div>
                                            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-0.5">
                                                {item.label}
                                            </p>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="text-white text-sm font-medium hover:text-indigo-400 transition-colors"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-white text-sm font-medium">{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social links */}
                            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-4">
                                    Find me on
                                </p>
                                <div className="flex flex-col gap-3">
                                    {Object.entries(profileData.socialLinks).map(([platform, url]) => (
                                        <a
                                            key={platform}
                                            href={url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center justify-between bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-indigo-500/40 rounded-lg px-4 py-3 transition-all duration-200 group"
                                        >
                                            <span className="text-gray-300 group-hover:text-white text-sm font-medium capitalize transition-colors">
                                                {platform}
                                            </span>
                                            <span className="text-gray-600 group-hover:text-indigo-400 text-xs transition-colors">
                                                ↗
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Book a meeting */}
                            {profileData.meetingLink && (
                                <a
                                    href={profileData.meetingLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-indigo-600/10 border border-indigo-500/20 hover:border-indigo-500/50 rounded-xl p-6 text-center transition-all duration-200 group"
                                >
                                    <span className="text-3xl block mb-3">📅</span>
                                    <p className="text-white font-semibold text-sm mb-1 group-hover:text-indigo-400 transition-colors">
                                        Prefer a call?
                                    </p>
                                    <p className="text-gray-500 text-xs">
                                        Book a free 30-min meeting →
                                    </p>
                                </a>
                            )}
                        </div>

                        {/* ── Right: Contact Form (3 cols) ──── */}
                        <div className="lg:col-span-3">
                            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                                <h2 className="text-white text-xl font-bold mb-6">Send a Message</h2>

                                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">

                                    {/* Name + Email row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                                                Your Name <span className="text-indigo-400">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="from_name"
                                                value={form.name}
                                                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                                                required
                                                placeholder="John Doe"
                                                className="bg-gray-950 border border-gray-700 focus:border-indigo-500 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors duration-200 w-full"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                                                Email Address <span className="text-indigo-400">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="from_email"
                                                value={form.email}
                                                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                                                required
                                                placeholder="john@example.com"
                                                className="bg-gray-950 border border-gray-700 focus:border-indigo-500 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors duration-200 w-full"
                                            />
                                        </div>
                                    </div>

                                    {/* Subject */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                                            Subject <span className="text-indigo-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={form.subject}
                                            onChange={(e) => setForm((prev) => ({ ...prev, subject: e.target.value }))}
                                            required
                                            placeholder="Project inquiry, collaboration, etc."
                                            className="bg-gray-950 border border-gray-700 focus:border-indigo-500 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors duration-200 w-full"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                                            Message <span className="text-indigo-400">*</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                                            required
                                            rows={6}
                                            placeholder="Tell me about your project, idea, or just say hi..."
                                            className="bg-gray-950 border border-gray-700 focus:border-indigo-500 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors duration-200 resize-none w-full"
                                        />
                                    </div>

                                    {/* Success message */}
                                    {success && (
                                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-3 flex items-center gap-3">
                                            <span className="text-green-400 text-lg">✓</span>
                                            <p className="text-green-400 text-sm font-medium">
                                                Message sent! I'll get back to you within 24 hours.
                                            </p>
                                        </div>
                                    )}

                                    {/* Error message */}
                                    {error && (
                                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3 flex items-center gap-3">
                                            <span className="text-red-400 text-lg">✕</span>
                                            <p className="text-red-400 text-sm">{error}</p>
                                        </div>
                                    )}

                                    {/* Submit button */}
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/50 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-2"
                                    >
                                        {loading ? (
                                            <>
                                                {/* Spinner */}
                                                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            "Send Message →"
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}