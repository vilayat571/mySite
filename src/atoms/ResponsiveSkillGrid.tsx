
const ResponsiveSkillGrid = () => {
  return (
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
  )
}

export default ResponsiveSkillGrid
