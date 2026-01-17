import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaFileAlt, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

/*     className="group relative bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 animate-fadeInUp cursor-pointer"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }} */

  return (
    <>
      <nav className="flex items-center justify-center bg- px-5 w-full relative z-50">
        <div className="flex items-center justify-between  xl:w-3/4 lg:w-3/4 md:w-full sm:w-full">
          {/* Logo */}
          <div className={`flex items-center justify-between border border-gray-800 rounded-full
          
          ${isMenuOpen ? 'xl:px-10 lg:px-10 md:px-0 sm:px-0' : 'px-10'}
          py-3 bg-[#0a0a0a] xl:w-2/5 lg:w-2/5 md:w-full sm:w-full`}>
            <div className="text-white text-xl font-bold">hamzah.</div>

            <div className="flex items-center gap-4">
              {/* Let's Chat Button */}
              <a
                href="https://wa.me/60176487917"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f0b100] text-black px-6 py-3 rounded-full font-medium transition flex cursor-pointer items-center gap-2 group"
              >
                Let's Chat
                <HiOutlineArrowUpRight className="w-4 h-4 cursor-pointer transform group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
              </a>

              {/* Menu Button */}
              <button 
                onClick={toggleMenu}
                className="text-white hover:text-gray-300 transition cursor-pointer"
              >
                {isMenuOpen ? (
                  <IoClose className="w-6 h-6" />
                ) : (
                  <HiMenuAlt3 className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Center Navigation Links */}
          <div className={` sm:hidden md:hidden xl:flex lg:flex
              ${isMenuOpen ? 'xl:hidden' : 'flex'}
             items-center text-gray-300 text-lg font-medium gap-8`}>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <FaLinkedin className="w-4 h-4" />
              Linkedin
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <FaInstagram className="w-4 h-4" />
              Instagram
            </a>

            {/* CV */}
            <a
              href="/cv.pdf"
              target="_blank"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <FaFileAlt className="w-4 h-4" />
              CV
            </a>
          </div>
        </div>
      </nav>

      {/* Dropdown Menu */}
      <div
        className={`fixed top-0 scroll-x-hidden right-0 h-screen w-full md:w-96 bg-[#1e1e1e] z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-5 py-24">
          {/* Menu Items */}
          <div className="flex flex-col text-xl gap-6">
            <Link
              to="/about"
              onClick={toggleMenu}
              className="text-white  font-bold hover:text-gray-400 transition"
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={toggleMenu}
              className="text-white  font-bold hover:text-gray-400 transition"
            >
              Services
            </Link>
            <Link
              to="/projects"
              onClick={toggleMenu}
              className="text-white  font-bold hover:text-gray-400 transition"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="text-white  font-bold hover:text-gray-400 transition"
            >
              Contact
            </Link>
          </div>

          {/* Social Links in Menu */}
          <div className="mt-auto flex flex-col gap-4 pb-8">
            <div className="flex items-center gap-6 text-gray-400">
              <a
                href="https://www.linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

     {/* 
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
        />
      )} */}
    </>
  );
};

export default Navbar;