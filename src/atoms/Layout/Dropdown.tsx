import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import Ahref from "../../elements/Ahref";
import { Link } from "react-router-dom";

const Dropdown = ({
  toggleMenu,
  isMenuOpen,
}: {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}) => {
  const menuData = [
    { name: "About", direction: "/#about" },
    { name: "Services", direction: "/#services" },
    { name: "Projects", direction: "/#projects" },
    { name: "Experience", direction: "/#resume" },
  ];
  return (
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
    </div>
  );
};

export default Dropdown;
