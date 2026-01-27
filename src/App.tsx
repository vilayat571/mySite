/* eslint-disable react-hooks/purity */
import { useState, useEffect } from "react";
import Footer from "./atoms/Layout/Footer";
import Intro from "./atoms/Intro/Intro";
import Navbar from "./atoms/Layout/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import ResumePage from "./components/ResumePage";
import Services from "./components/Services";
import Testimonials from "./components/Testimontials";
import Totop from "./atoms/Layout/Totop";

const App = () => {
  const [showIntroScreen, setShowIntroScreen] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [hasSeenIntro, setHasSeenIntro] = useState(false);

  useEffect(() => {
    // Prevent scrolling when intro screen is visible
    if (showIntroScreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Track wheel scrolling to dismiss intro
    const handleWheel = (e: WheelEvent) => {
      if (!showIntroScreen) return;

      if (e.deltaY > 0) {
        // User is scrolling down
        setScrollAmount((prev) => {
          const newAmount = prev + Math.abs(e.deltaY);
          
          // Calculate opacity based on scroll (needs 1000px of scroll)
          const newOpacity = Math.max(0, 1 - newAmount / 1000);
          setOpacity(newOpacity);

          // Hide completely after 1000px of scroll
          if (newAmount >= 1000) {
            setShowIntroScreen(false);
            setHasSeenIntro(true);
            return 0;
          }

          return newAmount;
        });
      } else if (e.deltaY < 0 && scrollAmount > 0) {
        // Allow scrolling back up to restore opacity
        setScrollAmount((prev) => {
          const newAmount = Math.max(0, prev - Math.abs(e.deltaY));
          const newOpacity = Math.max(0, 1 - newAmount / 1000);
          setOpacity(newOpacity);
          return newAmount;
        });
      }
    };

    // Check scroll position to show intro again when at top
    const handleScroll = () => {
      if (hasSeenIntro && window.scrollY === 0 && !showIntroScreen) {
        setShowIntroScreen(true);
        setOpacity(1);
        setScrollAmount(0);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("scroll", handleScroll);

    // Auto-hide after 8 seconds (optional)
    const timer = setTimeout(() => {
      setShowIntroScreen(false);
      setHasSeenIntro(true);
    }, 8000);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [showIntroScreen, scrollAmount, hasSeenIntro]);

  // Calculate scale and position based on scroll
  const scale = 1 + (scrollAmount / 1000) * 0.5;
  const translateY = -(scrollAmount / 10);

  return (
    <div className="relative">
      {/* Intro Splash Screen */}
      {showIntroScreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-300"
          style={{ opacity }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Gold Gradient Orbs */}
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
            
            {/* Gold Animated Grid */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(rgba(240, 177, 0, 0.3) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(240, 177, 0, 0.3) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
                animation: "gridMove 20s linear infinite",
                transform: `translateY(${translateY}px)`,
              }}
            />
          </div>

          {/* Content */}
          <div 
            className="relative z-10 text-center px-4"
            style={{
              transform: `translateY(${translateY}px) scale(${scale})`,
              transition: "transform 0.1s ease-out",
            }}
          >
            {/* Giant Hi! Text with Gold Gradient */}
            <h1 className="text-[120px] md:text-[200px] lg:text-[280px] xl:text-[320px] font-black mb-8 leading-none animate-fadeInUp tracking-tighter">
              <span className="bg-linear-to-r from-white via-[#f0b100] to-[#d99a00] bg-clip-text text-transparent block">
                Hi!
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-3xl text-white mb-8 animate-fadeInUp animation-delay-300 font-light">
              welcome to my portfolio
            </p>

            {/* Nice Message with Box */}
            <div className="animate-fadeInUp animation-delay-400 mb-12">
              <div className="inline-block px-8 py-4 rounded-2xl bg-linear-to-r from-[#f0b100]/10 to-[#d99a00]/10 border border-[#f0b100]/30 backdrop-blur-sm">
                <p className="text-[#f0b100] text-base md:text-lg font-medium flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  Let's explore together
                  <span className="text-2xl">🚀</span>
                </p>
              </div>
            </div>

            {/* Gold Scroll Progress Bar */}
            <div className="w-64 h-1 bg-gray-800 rounded-full mx-auto mb-8 overflow-hidden">
              <div 
                className="h-full bg-linear-to-r from-[#f0b100] to-[#d99a00] transition-all duration-100"
                style={{ width: `${(scrollAmount / 1000) * 100}%` }}
              />
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce animation-delay-600">
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto relative">
                <div className="w-1.5 h-3 bg-gray-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-scrollDown" />
              </div>
              <p className="text-gray-500 text-sm mt-4">
                {scrollAmount < 500 ? "Keep scrolling to enter" : "Almost there..."}
              </p>
            </div>
          </div>

          {/* Gold Particles Effect */}
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
                  animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: Math.random() * 0.5,
                  transform: `translateY(${translateY * 0.5}px)`,
                }}
              />
            ))}
          </div>

          {/* Floating Letters Effect - Gold */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
            {['H', 'I', '!'].map((letter, i) => (
              <div
                key={i}
                className="absolute text-9xl font-black"
                style={{
                  left: `${25 + i * 25}%`,
                  top: `${30 + (i % 2) * 30}%`,
                  color: "rgba(240, 177, 0, 0.3)",
                  animation: `floatLetter ${10 + i * 2}s ease-in-out infinite`,
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

      {/* Main Content */}
      <div style={{ opacity: showIntroScreen ? 0 : 1, transition: "opacity 0.5s" }}>
        <Totop />
        <Navbar />
        <Intro />
        <About />
        <Testimonials />
        <ResumePage />
        <Projects />
        <Services />
        <Footer />
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scrollDown {
          0%, 100% {
            transform: translate(-50%, 0);
          }
          50% {
            transform: translate(-50%, 10px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes floatLetter {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-50px) rotate(10deg);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animate-scrollDown {
          animation: scrollDown 1.5s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default App;