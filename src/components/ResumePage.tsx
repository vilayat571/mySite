import { useRef, useState } from "react";
import AchievementSection from "../atoms/Resume/AchievementSection";
import SkillSection from "../atoms/Resume/SkillSection";
import ResumeHeader from "../atoms/Resume/ResumeHeader";
import WorkHistory from "../atoms/Resume/WorkHistory";

export default function ResumePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate relative position from center
    const relativeX = (x - centerX) / centerX;
    const relativeY = (y - centerY) / centerY;

    // Subtle tilt for the resume section
    const rotateX = relativeY * -8;
    const rotateY = relativeX * 8;

    setTransform(
      `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    );
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  return (
    <div
      id="resume"
      className="w-full flex items-center px-8 justify-between xl:mt-16 lg:mt-16 md:mt-16 sm:mt-16"
    >
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="xl:w-3/4 lg:w-3/4 md:w-full sm:w-full mx-auto"
        style={{
          transform: transform,
          transition: transform ? "none" : "transform 0.6s ease-out",
          transformStyle: "preserve-3d",
        }}
      >
        <ResumeHeader />
        <SkillSection />
        <AchievementSection />
        <WorkHistory />
      </div>
    </div>
  );
}