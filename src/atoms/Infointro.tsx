const Infointro = () => {
  return (
    <>
      <div className="mb-8 px-6 py-2 bg-linear-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full backdrop-blur-sm animate-fadeIn">
        <span className="text-yellow-500 text-sm font-semibold tracking-wider">
          ✨ AVAILABLE FOR NEW JOBS :)
        </span>
      </div>

      {/* Name with Gradient */}
      <div className="name xl:text-[180px] lg:text-[140px] md:text-[100px] sm:text-6xl text-5xl text-center font-bold mb-6 leading-none">
        <span className="bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-slideUp">
          Vilayat Safarov
        </span>
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
