import { useState } from "react";
import Dropdown from "./Dropdown";
import NavItems from "./NavItems";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <NavItems toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <Dropdown toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
    </>
  );
};

export default Navbar;
