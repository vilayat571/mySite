import { Link } from "react-router-dom";

const CTAbuttons = () => {
  return (
    <>
      <div
        className="flex flex-col sm:flex-row gap-4 animate-fadeIn"
        style={{ animationDelay: "0.8s" }}
      >
        <a
          href="/#projects"
          className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-xl transition flex items-center justify-center gap-2 group"
        >
          View My Work
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
        <Link
          to="https://wa.me/60176487917"
          target="_blank"
          className="px-8 py-4 bg-transparent border-2 border-gray-700 hover:border-yellow-500 text-white font-semibold rounded-xl transition"
        >
          Get in Touch
        </Link>
      </div>

      {/* Scroll Indicator */}
      <a href="/#about" className="mt-16 cursor-pointer animate-bounce">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </a>
    </>
  );
};

export default CTAbuttons;
