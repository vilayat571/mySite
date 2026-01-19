import Logobar from "./Logobar";
import NavigationLinks from "./NavigationLinks";

const NavItems = ({
  toggleMenu,
  isMenuOpen,
}: {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}) => {
  return (
    <nav className="flex items-center justify-center pt-5 xl:px-5 lg:px-5 md:px-5 sm:px-2 w-full relative z-50">
      <div className="flex items-center justify-between  xl:w-3/4 lg:w-3/4 md:w-full sm:w-full">
        <Logobar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <NavigationLinks isMenuOpen={isMenuOpen} />
      </div>
    </nav>
  );
};

export default NavItems;
