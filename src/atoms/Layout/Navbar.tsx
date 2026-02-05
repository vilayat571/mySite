import { useState } from "react";
import { Link } from "react-router-dom";
import { FaDownload, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import Ahref from "../../elements/Ahref";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuData = [
    { name: "About", direction: "/#about" },
    { name: "Services", direction: "/#services" },
    { name: "Projects", direction: "/#projects" },
    { name: "Experience", direction: "/#resume" },
  ];

  return (
    <>
      <nav className="flex items-center justify-center pt-5 xl:px-5 lg:px-5 md:px-5 sm:px-2 w-full relative z-50">
        <div className="flex items-center justify-between  xl:w-3/4 lg:w-3/4 md:w-full sm:w-full">
          <div
            className={`flex items-center justify-between border border-gray-800 rounded-full
          
          ${isMenuOpen ? "xl:px-10 lg:px-10 md:px-0 sm:px-4" : "xl:px-10 lg:px-10 md:px-0 sm:px-4"}
          py-3 bg-[#0a0a0a] xl:w-2/5 lg:w-2/5 md:w-full sm:w-full`}
          >
            <Link to={"/"} className="text-white text-xl font-bold">
              hamzah.
            </Link>

            <div className="flex items-center gap-4">
              {/* Let's Chat Button */}
              <Link
                to="https://wa.me/60176487917"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f0b100] text-black px-6 py-3 rounded-full font-medium transition flex cursor-pointer items-center gap-2 group"
              >
                Let's Chat
                <HiOutlineArrowUpRight className="w-4 h-4 cursor-pointer transform group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
              </Link>

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
          </div>{" "}
        </div>
      </nav>
      <div
        className={` fixed top-0 scroll-x-hidden border-l border-gray-800  
            right-0 h-screen w-full md:w-96 bg-[#0a0a0a] z-40 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen
                ? "translate-x-0 xl:mt-0 lg:mt-0 md:mt-5 sm:mt-5"
                : "translate-x-full"
            }`}
      >
        <div className="flex flex-col h-full xl:px-8 lg:px-8 md:px-5 sm:px-5 md:pt-24 lg:pt-16 xl:pt-20 sm:pt-28 xl:pb-6 lg:pb-6 md:16 sm:pb-16">
          <div className="flex flex-col text-xl gap-1">
            {menuData.map((item) => (
              <Ahref
                key={item.direction} // unique key
                name={item.name}
                direction={item.direction}
                toggleMenu={toggleMenu}
              />
            ))}
          </div>

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
        </div>
      </div>{" "}
    </>
  );
};

export default Navbar;
