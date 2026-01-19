const AboutIntro = () => {
  return (
    <div className="mb-12 w-full">
      <div className="flex items-center gap-4 mb-6">
        <div className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
          <span className="text-yellow-500 text-sm font-semibold">
            ABOUT ME
          </span>
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Hi, there 👋
      </h1>

      <div className="relative">
        {/* Decorative Line */}
        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-yellow-500 via-yellow-500/50 to-transparent rounded-full" />

        <div className="text-lg md:text-xl text-gray-300 leading-relaxed pl-6 space-y-4">
          <p className="hover:text-white transition-colors duration-300">
            Software Developer and UI/UX Designer with strong full-stack
            experience in building high-quality, scalable web applications and
            admin dashboards. Skilled in{" "}
            <span className="text-yellow-500 font-semibold">React/Next</span>,{" "}
            <span className="text-yellow-500 font-semibold">TypeScript/Javascript</span>,{" "}
            <span className="text-yellow-500 font-semibold">Node.js</span>,{" "}
            <span className="text-yellow-500 font-semibold">MongoDB</span>, and
            modern CSS frameworks such as{" "}
            <span className="text-yellow-500 font-semibold">Tailwind CSS</span>.
          </p>

          <p className="hover:text-white transition-colors duration-300">
            Experienced in translating Figma designs into performant,
            user-friendly interfaces and collaborating across cross-functional
            teams. Hands-on experience includes freelance and company projects
            for startups and enterprises such as{" "}
            <span className="text-white font-semibold">
              Raja Restaurants LLC
            </span>
            ,{" "}
               <span className="text-white font-semibold">
              Avian Group LLC
            </span>
            ,{" "}
             <span className="text-white font-semibold">
              SER LLC
            </span>
            ,{" "}
            <span className="text-white font-semibold">AzeSERT HALAL LLC</span>,{" "}
            <span className="text-white font-semibold">
              Pilgrim Education LLC
            </span>
            , and <span className="text-white font-semibold">Kodaze LLC</span>.
          </p>

          <p className="hover:text-white transition-colors duration-300">
            Proficient in server deployment and optimization using{" "}
            <span className="text-yellow-500 font-semibold">Nginx</span>,{" "}
            <span className="text-yellow-500 font-semibold">Cloudflare</span>,
            and{" "}
            <span className="text-yellow-500 font-semibold">Ubuntu Server</span>
            . Passionate about clean code, performance optimization, and
            delivering reliable digital products that solve real business
            problems.
          </p>
        </div>
      </div>

      {/* Decorative Dots */}
      <div className="flex gap-2 mt-8 pl-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutIntro;
