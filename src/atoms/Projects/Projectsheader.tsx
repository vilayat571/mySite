import { FiStar } from 'react-icons/fi'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'

const Projectsheader = () => {
  return (
  <div className="flex flex-col lg:flex-row items-start justify-between mb-12 gap-8">
            {/* Left Side */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-gray-400">
                <FiStar className="text-yellow-500 text-2xl" />
                <span className="text-xl">Featured Work</span>
              </div>
  
              <a
                href="#all-projects"
                className="inline-flex bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl font-semibold transition items-center gap-2 group"
              >
                Explore all Projects
                <HiOutlineArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
              </a>
            </div>
  
            {/* Right Side */}
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Showcasing My Work for Your Inspiration
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                Discover a showcase of digital creativity by Vilayat Safarov —
                innovative UI/UX design and web projects crafted to inspire your
                next big idea.
              </p>
              <p className="text-gray-500 text-sm italic">
                * Note: I worked on design and development for these projects.
                Some websites have since updated their UI after my involvement.
              </p>
            </div>
          </div>
  )
}

export default Projectsheader
