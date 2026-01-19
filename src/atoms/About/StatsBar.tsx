
const StatsBar = () => {
  return (
        <div className="w-full mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "3+", label: "Years Experience" },
            { number: "15+", label: "Projects Completed" },
            { number: "10+", label: "Happy Clients" },
            { number: "100%", label: "Success Rate" },
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
  )
}

export default StatsBar
