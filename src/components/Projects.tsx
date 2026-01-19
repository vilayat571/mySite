import { useState } from 'react';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { FiStar, FiGlobe, FiGithub, FiLayout } from 'react-icons/fi';
import '../assets/styles/projects.css'
export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AzeSERT HALAL',
      description: 'Corporate website for HALAL certification services with multilingual support and certification tracking system.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      link: 'https://halalcert.az',
      type: 'website',
      icon: FiGlobe,
    },
    {
      id: 2,
      title: 'Pilgrim Education',
      description: 'Educational platform with course management, student tracking, and interactive learning modules.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
      tags: ['React', 'TypeScript', 'MongoDB', 'Express'],
      link: 'https://pilgrimedu.az',
      type: 'website',
      icon: FiGlobe,
    },
    {
      id: 3,
      title: 'AVIAN Group',
      description: 'Full-stack web application with responsive frontend and scalable MERN stack backend.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      tags: ['Next.js', 'TypeScript', 'MongoDB', 'Figma'],
      link: 'https://aviangroup.com',
      type: 'website',
      icon: FiGlobe,
    },
    {
      id: 4,
      title: 'Aqsa News',
      description: 'News portal with advanced search functionality, API throttling, and content management system.',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Figma'],
      link: 'https://github.com/vilayat571/aqsanews',
      type: 'github',
      icon: FiGithub,
    },
    {
      id: 5,
      title: 'Kodaze',
      description: 'CRM system and internal tools built with Next.js and modern web technologies.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      link: 'https://github.com/vilayat571/kodaze',
      type: 'github',
      icon: FiGithub,
    },
    {
      id: 6,
      title: 'Interviewsland',
      description: 'Startup platform connecting job seekers with employers through video interviews and skill assessments.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
      tags: ['React.js', 'Node.js', 'MongoDB', 'JavaScript'],
      link: 'https://github.com/vilayat571/interviewsland',
      type: 'github',
      icon: FiGithub,
    },
    {
      id: 7,
      title: 'Chaykoff',
      description: 'Modern tea house branding and website design with elegant UI/UX elements.',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop',
      tags: ['Figma', 'UI Design', 'Branding'],
      link: 'https://figma.com/file/chaykoff-design',
      type: 'design',
      icon: FiLayout,
    },
    {
      id: 8,
      title: 'Raja Restaurants',
      description: 'Comprehensive restaurant management platform with online ordering and admin dashboard design.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
      tags: ['Figma', 'UI/UX', 'React', 'Node.js'],
      link: 'https://figma.com/file/raja-design',
      type: 'design',
      icon: FiLayout,
    },
    {
      id: 9,
      title: 'SER Azerbaijan',
      description: 'Corporate identity and web design for construction and engineering services company.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
      tags: ['Figma', 'UI Design', 'Branding'],
      link: 'https://figma.com/file/ser-design',
      type: 'design',
      icon: FiLayout,
    },
    {
      id: 10,
      title: 'Güvən Finans',
      description: 'Financial services website design with loan calculator and modern UI components.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
      tags: ['Figma', 'UI/UX', 'Web Design'],
      link: 'https://figma.com/file/guven-design',
      type: 'design',
      icon: FiLayout,
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'website', label: 'Websites', count: projects.filter(p => p.type === 'website').length },
    { id: 'github', label: 'GitHub', count: projects.filter(p => p.type === 'github').length },
    { id: 'design', label: 'Designs', count: projects.filter(p => p.type === 'design').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.type === activeFilter);

  return (
    <div id='projects' className="min-h-screen bg-[#000000] text-white px-8 py-16 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
              * Note: I worked on design and development for these projects. Some websites 
              have since updated their UI after my involvement.
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-xl cursor-pointer font-medium transition ${
                activeFilter === filter.id
                  ? 'bg-yellow-500 text-black'
                  : 'bg-[#0a0a0a] text-gray-300 border border-gray-800 hover:border-gray-700'
              }`}
            >
              {filter.label}
              <span className="ml-2 text-sm opacity-70">({filter.count})</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
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
                  <span className="text-xs text-gray-300 capitalize">{project.type}</span>
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

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>

 
    </div>
  );
}