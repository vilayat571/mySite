import { useRef, useState } from "react";
import BgGradient from "../atoms/About/BgGradient";
import AboutIntro from "../atoms/About/AboutIntro";
import EducationBar from "../atoms/About/EducationBar";
import StatsBar from "../atoms/About/StatsBar";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setTransform(
      `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    );
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  return (
    <div
      id="about"
      className="w-full flex xl:mt-28 lg:mt-28 md:mt-20 sm:mt-16 mt-12 justify-center px-4 relative"
    >
      <BgGradient />
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex flex-col items-center xl:w-3/4 lg:w-3/4 md:w-full sm:w-full w-full relative z-10"
        style={{
          transform: transform,
          transition: transform ? "none" : "transform 0.6s ease-out",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          style={{
            transform: "translateZ(40px)",
            transformStyle: "preserve-3d",
          }}
        >
          <AboutIntro />
        </div>
        
        <div
          style={{
            transform: "translateZ(30px)",
            transformStyle: "preserve-3d",
          }}
        >
          <EducationBar />
        </div>
        
        <div
          style={{
            transform: "translateZ(20px)",
            transformStyle: "preserve-3d",
          }}
        >
          <StatsBar />
        </div>
      </div>
    </div>
  );
}