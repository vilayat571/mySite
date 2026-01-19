import Ahref from "../../elements/Ahref";

const MenuItems = ({ toggleMenu }: { toggleMenu: () => void }) => {
  const menuData = [
    { name: "About", direction: "/#about" },
    { name: "Services", direction: "/#services" },
    { name: "Projects", direction: "/#projects" },
    { name: "Experience", direction: "/#resume" },
  ];

  return (
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
  );
};

export default MenuItems;
