import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="mt-auto flex flex-col gap-4 pb-8">
      <div className="flex items-center gap-6 text-gray-400">
        <Link
              to="https://www.linkedin.com/in/vilayat-safarov-1a3b58249/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaLinkedin className="w-6 h-6" />
        </Link>
        <Link
              to="https://github.com/vilayat571"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub className="w-6 h-6" />
        </Link>
        <Link
              to="https://www.instagram.com/hamzah_vs"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaInstagram className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
