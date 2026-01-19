import SocialMedia from "./SocialMedia";
import MenuItems from "./MenuItems";

const Dropdown = ({
  toggleMenu,
  isMenuOpen,
}: {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}) => {
  return (
    <div
      className={`fixed top-0 scroll-x-hidden border-l border-gray-800  
            right-0 h-screen w-full md:w-96 bg-[#0a0a0a] z-40 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen
                ? "translate-x-0 xl:mt-0 lg:mt-0 md:mt-5 sm:mt-5"
                : "translate-x-full"
            }`}
    >
      <div className="flex flex-col h-full xl:px-8 lg:px-8 md:px-5 sm:px-5 md:pt-24 lg:pt-16 xl:pt-20 sm:pt-28 pb-6">
        <MenuItems toggleMenu={toggleMenu} />
        <SocialMedia />
      </div>
    </div>
  );
};

export default Dropdown;
