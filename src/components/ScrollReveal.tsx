// src/components/ScrollReveal.tsx
import { useRef, useEffect, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      // Calculate scroll progress (0 to 1)
      const scrolled = Math.max(
        0,
        Math.min(1, (windowHeight - rect.top) / (windowHeight + sectionHeight))
      );

      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate transform values based on scroll progress
  const opacity = Math.min(1, scrollProgress * 1.5);
  const translateY = (1 - scrollProgress * 1.2) * 100;
  const scale = 0.85 + scrollProgress * 0.15;

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-500 ease-out ${className}`}
      style={{
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity: opacity,
      }}
    >
      {children}
    </div>
  );
}