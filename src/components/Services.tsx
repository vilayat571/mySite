/* eslint-disable react-hooks/purity */
import { useState, useRef, useEffect } from "react";
import "../assets/styles/services.css";
import ServicesHeader from "../atoms/Services/ServicesHeader";
import ServiceGrid from "../atoms/Services/ServiceGrid";

export default function Services() {
  type Service = {
    id: number;
    title: string;
  };

  const [expandedService, setExpandedService] = useState<Service["id"] | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggleService = (id: Service["id"]) => {
    setExpandedService(expandedService === id ? null : id);
  };

  // Scroll progress animation
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      const scrolled = Math.max(
        0,
        Math.min(1, (windowHeight - rect.top) / (windowHeight + sectionHeight))
      );

      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="services"
      ref={sectionRef}
      className="w-full flex items-center px-8 justify-between mt-16 relative overflow-hidden bg-black"
    >
      {/* Simple Background Effects - Gold Theme */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Single Gold Orb */}
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{
            background: "radial-gradient(circle, rgba(240, 177, 0, 0.15) 0%, transparent 70%)",
            transform: `scale(${1 + scrollProgress * 0.2})`,
            transition: "transform 0.5s ease-out",
          }}
        />

        {/* Simple Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(240, 177, 0, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(240, 177, 0, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Few Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#f0b100]/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content with Fade-in Animation */}
      <div className="xl:w-3/4 lg:w-3/4 md:w-full sm:w-full mx-auto relative z-10">
        {/* Header with Slide Animation */}
        <div
          style={{
            transform: `translateY(${(1 - scrollProgress * 2) * 30}px)`,
            opacity: Math.min(1, scrollProgress * 2),
            transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
          }}
        >
          <ServicesHeader />
        </div>

        {/* Service Grid with Fade Animation */}
        <div
          style={{
            transform: `translateY(${(1 - scrollProgress * 1.5) * 40}px)`,
            opacity: Math.min(1, scrollProgress * 1.5),
            transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
          }}
        >
          <ServiceGrid
            toggleService={toggleService}
            expandedService={expandedService}
          />
        </div>
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-black/80 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black/80 to-transparent pointer-events-none" />

      {/* Simple Animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}