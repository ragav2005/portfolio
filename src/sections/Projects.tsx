import { useState } from "react";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import data from "../data/data";
interface Project {
  title: string;
  desc: string;
  tech: string[];
  color: string;
  icon: string;
  link: string;
  github?: string;
  thumbnail?: string;
}

export const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const projects: Project[] = data;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const currentProjects = projects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to- from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Projects
            </span>
          </h2>
          <p className="text-gray-400">A selection of my recent work</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 min-h-[400px] transition-opacity duration-300 ease-in-out">
          {currentProjects.map((project, idx) => (
            <div
              key={`${currentPage}-${idx}`}
              className="group h-full animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="bg-slate-800/40 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-2">
                <div className="relative h-48 bg-linear-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden group-hover:opacity-90 transition-opacity">
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          const icon = document.createElement("i");
                          icon.className = `fas ${project.icon} text-5xl text-${project.color}-400`;
                          parent.appendChild(icon);
                        }
                      }}
                    />
                  ) : null}
                  {!project.thumbnail && (
                    <i
                      className={`fas ${project.icon} text-5xl text-${project.color}-400 group-hover:scale-110 transition-transform duration-300`}
                    ></i>
                  )}
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-4 flex-1 line-clamp-3">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`text-xs py-1 px-2 rounded bg-${project.color}-500/20 text-${project.color}-300 border border-${project.color}-500/20 whitespace-nowrap`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.link !== "#" ? project.link : undefined}
                      target={project.link !== "#" ? "_blank" : undefined}
                      rel="noreferrer"
                      className={`text-sm flex items-center gap-1 transition-colors ${
                        project.link !== "#"
                          ? "text-gray-300 hover:text-white"
                          : "text-gray-600 cursor-not-allowed"
                      }`}
                    >
                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                        >
                          <Github size={14} /> Code
                        </a>
                      )}
                    </a>
                    {project.link !== "#" &&
                      !project.link.includes("github") && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                        >
                          <ExternalLink size={14} /> Live
                        </a>
                      )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8 sm:mt-12 gap-4 sm:gap-6 flex-wrap px-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className={`p-2 sm:p-3 rounded-full border border-white/10 transition-all ${
                currentPage === 0
                  ? "text-gray-600 cursor-not-allowed bg-transparent"
                  : "text-white bg-white/5 hover:bg-indigo-500 hover:border-indigo-500"
              }`}
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>

            <div className="flex gap-1 sm:gap-2 flex-wrap justify-center order-3 sm:order-0 w-full sm:w-auto basis-full sm:basis-auto">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                    currentPage === idx
                      ? "bg-indigo-500 w-4 sm:w-6"
                      : "bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className={`p-2 sm:p-3 rounded-full border border-white/10 transition-all ${
                currentPage === totalPages - 1
                  ? "text-gray-600 cursor-not-allowed bg-transparent"
                  : "text-white bg-white/5 hover:bg-indigo-500 hover:border-indigo-500"
              }`}
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
