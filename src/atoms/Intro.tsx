import '../assets/styles/intro.css'
const Intro = () => {
  return (
    <div className="w-full flex justify-center items-center xl:mt-28 lg:mt-32 md:mt-24 sm:mt-16 mt-12 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="flex flex-col items-center xl:w-4/5 lg:w-4/5 md:w-full sm:w-full w-full relative z-10">
        {/* Animated Badge */}
        <div className="mb-8 px-6 py-2 bg-linear-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full backdrop-blur-sm animate-fadeIn">
          <span className="text-yellow-500 text-sm font-semibold tracking-wider">
            ✨ AVAILABLE FOR NEW JOBS :)
          </span>
        </div>

        {/* Name with Gradient */}
        <div className="name xl:text-[180px] lg:text-[140px] md:text-[100px] sm:text-6xl text-5xl text-center font-bold mb-8 leading-none">
          <span className="bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-slideUp">
            Vilayat Safarov
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl text-center mb-12 max-w-2xl animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          Software Developer & UI/UX Designer crafting beautiful, functional digital experiences
        </p>

        {/* Tags - Responsive Grid */}
        <div className="w-full max-w-5xl grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 mb-12">
          {[
            { tag: '#DEVELOPMENT', color: 'from-blue-500 to-cyan-500', icon: '💻' },
            { tag: '#WEB DESIGN', color: 'from-purple-500 to-pink-500', icon: '🎨' },
            { tag: '#UI/UX DESIGN', color: 'from-green-500 to-emerald-500', icon: '✨' },
            { tag: '#SEO & PERFORMANCE', color: 'from-orange-500 to-yellow-500', icon: '⚡' },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 animate-fadeInUp cursor-pointer"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-linear-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`} />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <span className="text-3xl mb-3">{item.icon}</span>
                <span className="text-gray-300 font-semibold text-sm tracking-wider group-hover:text-white transition">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
          <a
            href="#projects"
            className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-xl transition flex items-center justify-center gap-2 group"
          >
            View My Work
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-gray-700 hover:border-yellow-500 text-white font-semibold rounded-xl transition"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

  
    </div>
  );
};

export default Intro;