import { FaGraduationCap, FaCode, FaGlobe, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function About() {
  return (
    <div id='about' className="w-full flex xl:mt-28 lg:mt-28 md:mt-20 sm:mt-16 mt-12 justify-center px-4 relative">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="flex flex-col items-center xl:w-3/4 lg:w-3/4 md:w-full sm:w-full w-full relative z-10">
        {/* Main Heading with Badge */}
        <div className="mb-12 w-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
              <span className="text-yellow-500 text-sm font-semibold">ABOUT ME</span>
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
                Frontend Developer and UI/UX Designer with strong full-stack
                experience in building high-quality, scalable web applications and
                admin dashboards. Skilled in <span className="text-yellow-500 font-semibold">React</span>, <span className="text-yellow-500 font-semibold">TypeScript</span>, <span className="text-yellow-500 font-semibold">Node.js</span>, <span className="text-yellow-500 font-semibold">MongoDB</span>,
                and modern CSS frameworks such as <span className="text-yellow-500 font-semibold">Tailwind CSS</span>.
              </p>
              
              <p className="hover:text-white transition-colors duration-300">
                Experienced in translating Figma designs into performant, user-friendly interfaces
                and collaborating across cross-functional teams. Hands-on experience
                includes freelance and company projects for startups and enterprises
                such as <span className="text-white font-semibold">Raja Restaurants LLC</span>, <span className="text-white font-semibold">AzeSERT HALAL LLC</span>, <span className="text-white font-semibold">Pilgrim Education LLC</span>, and <span className="text-white font-semibold">Kodaze LLC</span>.
              </p>

              <p className="hover:text-white transition-colors duration-300">
                Proficient in server deployment and optimization using <span className="text-yellow-500 font-semibold">Nginx</span>, <span className="text-yellow-500 font-semibold">Cloudflare</span>, and <span className="text-yellow-500 font-semibold">Ubuntu Server</span>. Passionate
                about clean code, performance optimization, and delivering reliable
                digital products that solve real business problems.
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

        {/* Contact Section - Enhanced */}
        <div className="w-full mb-12">
          <div className="bg-linear-to-br from-[#0a0a0a] to-[#141414] border border-gray-800 rounded-3xl p-8 hover:border-gray-700 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-yellow-500">📬</span> Get in touch
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center group-hover:bg-yellow-500/20 transition">
                  <FaEnvelope className="text-yellow-500 w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:vilayat571@gmail.com"
                    className="text-white text-lg font-semibold hover:text-yellow-500 transition"
                  >
                    vilayat571@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center group-hover:bg-yellow-500/20 transition">
                  <FaPhone className="text-yellow-500 w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a
                    href="tel:+60176487917"
                    className="text-white text-lg font-semibold hover:text-yellow-500 transition"
                  >
                    +60 176 487 917
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info - Card Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Education Card */}
          <div className="bg-linear-to-br from-[#0a0a0a] to-[#141414] border border-gray-800 rounded-3xl p-6 hover:border-yellow-500/50 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition">
                <FaGraduationCap className="text-blue-500 w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">IT in Industry Management Diploma</p>
              <p className="text-gray-300">Computer Engineering Master's</p>
              <p className="text-yellow-500 font-semibold mt-3">Western Caspian University</p>
            </div>
          </div>

          {/* Expertise Card */}
          <div className="bg-linear-to-br from-[#0a0a0a] to-[#141414] border border-gray-800 rounded-3xl p-6 hover:border-yellow-500/50 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition">
                <FaCode className="text-green-500 w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Expertise</h3>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">React, Node.js, TypeScript</p>
              <p className="text-gray-300">MongoDB, Express.js</p>
              <p className="text-yellow-500 font-semibold mt-3">Full-stack Development & UI/UX</p>
            </div>
          </div>

          {/* Languages Card */}
          <div className="bg-linear-to-br from-[#0a0a0a] to-[#141414] border border-gray-800 rounded-3xl p-6 hover:border-yellow-500/50 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center group-hover:bg-purple-500/20 transition">
                <FaGlobe className="text-purple-500 w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Languages</h3>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">Azerbaijani • Turkish</p>
              <p className="text-gray-300">English • Malay</p>
              <p className="text-yellow-500 font-semibold mt-3">Indonesian</p>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="w-full mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: '3+', label: 'Years Experience' },
            { number: '15+', label: 'Projects Completed' },
            { number: '10+', label: 'Happy Clients' },
            { number: '100%', label: 'Success Rate' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 text-center hover:border-yellow-500/50 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}