import { useState } from "react";
import "../assets/styles/projects.css";
import { projects } from "../data/projects";
import Filterbuttons from "../atoms/Projects/Filterbuttons";
import Projectsheader from "../atoms/Projects/Projectsheader";
import ProjectsGrid from "../atoms/Projects/ProjectsGrid";
export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "website",
      label: "Websites",
      count: projects.filter((p) => p.type === "website").length,
    },
    {
      id: "github",
      label: "GitHub",
      count: projects.filter((p) => p.type === "github").length,
    },
    {
      id: "design",
      label: "Designs",
      count: projects.filter((p) => p.type === "design").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <div
      id="projects"
      className="min-h-screen bg-[#000000] text-white px-8 py-16 mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <Projectsheader />
        <Filterbuttons
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          filters={filters}
        />

        {/* Projects Grid */}
        <ProjectsGrid filteredProjects={filteredProjects} />
        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
