import { FaDownload, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavigationLinks = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  return (
    <div
      className={` sm:hidden md:hidden xl:flex lg:flex
              ${isMenuOpen ? "xl:hidden" : "flex"}
             items-center text-gray-300 text-lg font-medium gap-8`}
    >
      {/* LinkedIn */}
      <Link
        to="https://www.linkedin.com/in/vilayat-safarov-1a3b58249/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-white transition"
      >
        <FaLinkedin className="w-4 h-4" />
        Linkedin
      </Link>

      {/* GitHub */}
      <Link
        to="https://github.com/vilayat571"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-white transition"
      >
        <FaGithub className="w-4 h-4" />
        GitHub
      </Link>
      {/* Instagram */}
      <Link
        to="https://www.instagram.com/hamzah_vs"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-white transition"
      >
        <FaInstagram className="w-4 h-4" />
        Instagram
      </Link>

      {/* CV */}
      <Link
        to="/Vilayat-Safarov-Resume.pdf"
        target="_blank"
        className="flex items-center gap-2 hover:text-white transition"
      >
        <FaDownload className="w-4 h-4" />
        CV
      </Link>
    </div>
  );
};

export default NavigationLinks;
