import { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";

 const Totop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const firstViewportPassed = window.scrollY > window.innerHeight;
    setVisible(firstViewportPassed);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="bg-[#0a0a0a] text-xl border flex items-center border-gray-600"
      style={{
        position: "fixed",
        bottom: "50px",
        right: "50px",
        padding: "12px 16px",
        borderRadius: "8px",
        cursor: "pointer",
        zIndex: 1000,
      }}
      aria-label="Scroll to top"
    >
      <BiArrowFromBottom/> top
    </button>
  );
};

export default Totop;
