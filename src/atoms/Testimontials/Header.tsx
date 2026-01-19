import { FiStar } from "react-icons/fi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between mb-16 gap-8">
      {/* Left Side */}
      <div className="space-y-8">
        <div className="flex items-center gap-3 text-gray-400">
          <FiStar className="text-yellow-500 text-2xl" />
          <span className="text-xl">Client Testimonials</span>
        </div>

        <Link
          to="https://www.linkedin.com/in/vilayat-safarov-1a3b58249/"
          className="inline-flex bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-4 rounded-xl  tracking-wide font-semibold transition items-center gap-2 group"
        >
          Add Feedback to Linkedin
          <HiOutlineArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
        </Link>
      </div>

      {/* Right Side */}
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          How was working with me for clients?
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Discover what clients say about working with me. I craft intuitive and
          engaging digital solutions that put users first and elevate brands
          through technical excellence and creative design.
        </p>
      </div>
    </div>
  );
};

export default Header;
