// NotFoundPage — shown when a user visits a URL that doesn't exist.
// useNavigate is a React Router hook that lets us redirect programmatically.

import { Link, useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none" />

      <div className="relative text-center max-w-lg">
        {/* 404 number */}
        <p className="text-[10rem] sm:text-[14rem] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-indigo-400/40 to-transparent select-none">
          404
        </p>

        {/* Text */}
        <div className="-mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Page Not Found
          </h1>
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            Looks like this page doesn't exist or was moved. Let's get you back on track.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Go Home
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="border border-gray-700 hover:border-indigo-500 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}