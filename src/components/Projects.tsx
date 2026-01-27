import { useState, useRef, useEffect } from "react";
import "../assets/styles/projects.css";
import { projects } from "../data/projects";
import Filterbuttons from "../atoms/Projects/Filterbuttons";
import Projectsheader from "../atoms/Projects/Projectsheader";
import ProjectsGrid from "../atoms/Projects/ProjectsGrid";

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const filters = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "website",
      label: "Websites",
      count: projects.filter((p) => p.type === "website").length,
    },
    {
      id: "github",
      label: "GitHub",
      count: projects.filter((p) => p.type === "github").length,
    },
    {
      id: "design",
      label: "Designs",
      count: projects.filter((p) => p.type === "design").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  // Track scroll progress for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Calculate how much of the section is visible
      const scrolled = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (windowHeight + sectionHeight)
      ));
      
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track mouse position for spotlight effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      id="projects"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="min-h-screen bg-[#000000] text-white px-8 py-16 mt-20 relative overflow-hidden"
    >
      {/* Animated gradient background that follows cursor */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.08), transparent 50%)`,
          opacity: isHovering ? 1 : 0,
        }}
      />

      {/* Animated grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          transform: `translateY(${scrollProgress * 20}px)`,
        }}
      />

      {/* Floating orbs with parallax */}
      <div
        className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        style={{
          transform: `translate(${scrollProgress * -30}px, ${scrollProgress * 50}px) scale(${1 + scrollProgress * 0.2})`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="absolute bottom-40 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        style={{
          transform: `translate(${scrollProgress * 40}px, ${scrollProgress * -60}px) scale(${1 + scrollProgress * 0.3})`,
          transition: "transform 0.3s ease-out",
        }}
      />

      {/* Spotlight effect following cursor */}
      {isHovering && (
        <div
          className="absolute pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            width: "600px",
            height: "600px",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.1) 30%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />
      )}

      <div 
        className="max-w-7xl mx-auto relative z-10"
        style={{
          transform: `translateY(${scrollProgress * -20}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* Header with slide-in animation */}
        <div
          style={{
            transform: `translateX(${(1 - scrollProgress * 2) * -50}px)`,
            opacity: Math.min(1, scrollProgress * 2),
          }}
        >
          <Projectsheader />
        </div>

        {/* Filter buttons with stagger animation */}
        <div
          style={{
            transform: `translateY(${(1 - scrollProgress * 2) * 30}px)`,
            opacity: Math.min(1, scrollProgress * 2),
          }}
        >
          <Filterbuttons
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            filters={filters}
          />
        </div>

        {/* Projects Grid with fade-in */}
        <div
          style={{
            transform: `translateY(${(1 - scrollProgress * 1.5) * 50}px)`,
            opacity: Math.min(1, scrollProgress * 1.5),
          }}
        >
          <ProjectsGrid filteredProjects={filteredProjects} />
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 blur-xl opacity-20" />
              <p className="text-gray-500 text-lg relative z-10">
                No projects found in this category.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
}