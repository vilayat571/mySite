
const Ahref = ({
  direction,
  toggleMenu,
  name,
}: {
  direction: string;
  toggleMenu: () => void;
  name: string;
}) => {
  return (
    <a
      href={direction}
      onClick={toggleMenu}
      className="text-white cursor-pointer font-bold hover:text-gray-400 py-2 transition"
    >
      {name}
    </a>
  );
};

export default Ahref;
