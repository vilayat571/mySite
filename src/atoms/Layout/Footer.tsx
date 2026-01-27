/* eslint-disable react-hooks/purity */
import { useState, useEffect, useRef } from "react";

export default function Footer() {
  const [showByeScreen, setShowByeScreen] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(0);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;

      const rect = footerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if footer is in view
      const isFooterVisible = rect.top < windowHeight && rect.bottom > 0;

      if (isFooterVisible) {
        // Calculate how much of footer is visible
        const visibleAmount = Math.max(0, windowHeight - rect.top);
        const scrollProgress = Math.min(1, visibleAmount / 500); // 500px to fully trigger

        setScrollAmount(visibleAmount);
        setOpacity(scrollProgress);

        // Show BYE screen after scrolling 500px into footer
        if (visibleAmount > 500) {
          setShowByeScreen(true);
        } else {
          setShowByeScreen(false);
        }
      } else {
        setShowByeScreen(false);
        setOpacity(0);
        setScrollAmount(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate scale and position based on scroll
  const scale = 0.7 + (scrollAmount / 1000) * 0.3;
  const translateY = (1 - scrollAmount / 1000) * 100;

  return (
    <>
      <footer ref={footerRef} className="text-white py-20 px-8 relative bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Centered Content */}
          <div className="text-center">
            {/* Bye Text with Lines */}
            <div className="flex items-center justify-center gap-6 mb-3">
              <div className="h-px flex-1 max-w-xs bg-linear-to-r from-transparent via-gray-700 to-gray-700" />
              <h2 className="text-3xl md:text-4xl font-normal text-gray-300 tracking-wide">
                Bye
              </h2>
              <div className="h-px flex-1 max-w-xs bg-linear-to-l from-transparent via-gray-700 to-gray-700" />
            </div>

            {/* Subtitle */}
            <p className="text-gray-500 text-base tracking-wide">Do Visit Again</p>
          </div>
        </div>

        {/* Extra space to allow scrolling */}
        <div className="h-screen" />
      </footer>

      {/* BYE Full Screen Overlay */}
      {showByeScreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 pointer-events-none"
          style={{ opacity }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Gradient Orbs - Gold */}
            <div
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
              style={{
                background: "radial-gradient(circle, rgba(240, 177, 0, 0.3) 0%, transparent 70%)",
                transform: `scale(${scale})`,
                transition: "transform 0.1s ease-out",
              }}
            />
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000"
              style={{
                background: "radial-gradient(circle, rgba(240, 177, 0, 0.3) 0%, transparent 70%)",
                transform: `scale(${scale})`,
                transition: "transform 0.1s ease-out",
              }}
            />

            {/* Animated Grid */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(rgba(240, 177, 0, 0.3) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(240, 177, 0, 0.3) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
                animation: "gridMoveReverse 20s linear infinite",
                transform: `translateY(${-translateY}px)`,
              }}
            />
          </div>

          {/* Content */}
          <div
            className="relative z-10 text-center px-4"
            style={{
              transform: `translateY(${-translateY}px) scale(${scale})`,
              transition: "transform 0.1s ease-out",
            }}
          >
            {/* Giant BYE Text */}
            <h1 className="text-[120px] md:text-[200px] lg:text-[280px] xl:text-[320px] font-black mb-8 leading-none animate-fadeInDown tracking-tighter">
              <span className="bg-linear-to-r from-white via-[#f0b100] to-[#d99a00] bg-clip-text text-transparent block">
                BYE
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-3xl text-gray-400 mb-12 animate-fadeInDown animation-delay-300 font-light">
              Thanks for visiting my portfolio
            </p>

            {/* Progress Bar */}
            <div className="w-64 h-1 bg-gray-800 rounded-full mx-auto mb-8 overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-[#f0b100] to-[#d99a00] transition-all duration-100"
                style={{ width: `${(scrollAmount / 1000) * 100}%` }}
              />
            </div>

            {/* Message */}
            <div className="animate-fadeInDown animation-delay-600">
              <p className="text-gray-500 text-sm">
                {scrollAmount < 700 ? "Keep scrolling..." : "See you next time! 👋"}
              </p>
            </div>
          </div>

          {/* Particles Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: "rgba(240, 177, 0, 0.6)",
                  boxShadow: "0 0 10px rgba(240, 177, 0, 0.8)",
                  animation: `floatUp ${5 + Math.random() * 10}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: Math.random() * 0.5,
                  transform: `translateY(${-translateY * 0.5}px)`,
                }}
              />
            ))}
          </div>

          {/* Floating Letters Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
            {["B", "Y", "E"].map((letter, i) => (
              <div
                key={i}
                className="absolute text-9xl font-black text-white"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${30 + (i % 2) * 40}%`,
                  animation: `floatLetterDown ${8 + i * 2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                  transform: `rotate(${-i * 15}deg)`,
                }}
              >
                {letter}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatUp {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(20px) translateX(-10px);
          }
        }

        @keyframes floatLetterDown {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(50px) rotate(-10deg);
          }
        }

        @keyframes gridMoveReverse {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50px);
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 1s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </>
  );
}