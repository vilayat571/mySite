import { useRef, useState, useEffect } from "react";

const Infointro = () => {
  const nameRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [namePosition, setNamePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Update dimensions when hovering starts
  useEffect(() => {
    if (isHovering && nameRef.current) {
      const rect = nameRef.current.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
    }
  }, [isHovering]);

  // Magnetic cursor follow effect
  useEffect(() => {
    if (!isHovering) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setNamePosition({ x: 0, y: 0 });
      return;
    }

    const animate = () => {
      setNamePosition((prev) => ({
        x: prev.x + (cursorPosition.x * 0.15 - prev.x) * 0.1,
        y: prev.y + (cursorPosition.y * 0.15 - prev.y) * 0.1,
      }));
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isHovering, cursorPosition]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!nameRef.current) return;

    const rect = nameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate relative position from center (-1 to 1)
    const relativeX = (x - centerX) / centerX;
    const relativeY = (y - centerY) / centerY;

    // Enhanced tilt with more dramatic effect
    const rotateX = relativeY * -20;
    const rotateY = relativeX * 20;
    const rotateZ = relativeX * 5; // Add subtle Z-axis rotation

    setTransform(
      `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale3d(1.08, 1.08, 1.08)`
    );

    // Track cursor position for spotlight and magnetic effect
    setCursorPosition({ x: relativeX * centerX * 0.3, y: relativeY * centerY * 0.3 });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setTransform("");
    setIsHovering(false);
    setNamePosition({ x: 0, y: 0 });
  };

  return (
    <>
      <div className="mb-8 px-6 py-2 bg-linear-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full backdrop-blur-sm animate-fadeIn">
        <span className="text-yellow-500 text-sm font-semibold tracking-wider">
          ✨ AVAILABLE FOR NEW JOBS :)
        </span>
      </div>

      {/* Name with Gradient, 3D Effect, and Magnetic Cursor Follow */}
      <div
        ref={nameRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="name xl:text-[180px] lg:text-[140px] md:text-[100px] sm:text-6xl text-5xl text-center font-bold mb-6 leading-none cursor-pointer relative overflow-hidden"
        style={{
          transform: transform,
          transition: transform ? "none" : "transform 0.5s ease-out",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glowing cursor spotlight */}
        {isHovering && (
          <div
            className="absolute pointer-events-none transition-all duration-200"
            style={{
              left: cursorPosition.x + dimensions.width / 2,
              top: cursorPosition.y + dimensions.height / 2,
              width: "400px",
              height: "400px",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.15) 25%, transparent 60%)",
              filter: "blur(50px)",
              opacity: 1,
            }}
          />
        )}

        {/* Animated gradient overlay that follows cursor */}
        {isHovering && (
          <div
            className="absolute inset-0 pointer-events-none transition-all duration-300"
            style={{
              background: `radial-gradient(circle 500px at ${
                cursorPosition.x + dimensions.width / 2
              }px ${
                cursorPosition.y + dimensions.height / 2
              }px, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.2) 40%, transparent 70%)`,
              opacity: 1,
            }}
          />
        )}

        {/* Text with magnetic follow effect */}
        <span
          className="bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-slideUp inline-block drop-shadow-2xl relative z-10"
          style={{
            transform: `translate(${namePosition.x}px, ${namePosition.y}px)`,
            transition: isHovering ? "none" : "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
            display: "inline-block",
          }}
        >
          Vilayat Safarov
        </span>

        {/* Shimmer effect on hover */}
        {isHovering && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
              transform: `translateX(${(cursorPosition.x / 100) * 50 - 100}%)`,
              transition: "transform 0.6s ease-out",
            }}
          />
        )}
      </div>

      {/* Subtitle */}
      <p
        className="text-gray-400 text-lg md:text-xl text-center mb-8 max-w-2xl animate-fadeIn"
        style={{ animationDelay: "0.3s" }}
      >
        Software Developer & UI/UX Designer: <br />
        crafting beautiful, functional digital experiences.
      </p>
    </>
  );
};

export default Infointro;