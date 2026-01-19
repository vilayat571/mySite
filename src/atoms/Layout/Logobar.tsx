import { HiMenuAlt3 } from "react-icons/hi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Logobar = ({
  toggleMenu,
  isMenuOpen,
}: {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}) => {
  return (
    <div
      className={`flex items-center justify-between border border-gray-800 rounded-full
          
          ${isMenuOpen ? "xl:px-10 lg:px-10 md:px-0 sm:px-4" : "xl:px-10 lg:px-10 md:px-0 sm:px-4"}
          py-3 bg-[#0a0a0a] xl:w-2/5 lg:w-2/5 md:w-full sm:w-full`}
    >
      <Link to={'/'} className="text-white text-xl font-bold">hamzah.</Link>

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
  );
};

export default Logobar;
