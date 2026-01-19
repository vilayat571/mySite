import type { IconType } from "react-icons";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const ProjectsGrid = ({filteredProjects}:{filteredProjects: ({
    id: number;
    title: string;
    description: string;
    tags: string[];
    link: string;
    type: string;
    icon: IconType;
    image?: undefined;
} | {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    type: string;
    icon: IconType;
})[]
}) => {
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#0a0a0a] border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300 cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Project Type Badge */}
                <div className="absolute top-4 right-4 z-10 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
                  <Icon className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs text-gray-300 capitalize">
                    {project.type}
                  </span>
                </div>

                {/* Project Image */}
                <div className="relative h-auto overflow-hidden bg-gray-900">
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <HiOutlineArrowUpRight className="w-6 h-6 text-black" />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-500 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
  )
}

export default ProjectsGrid
