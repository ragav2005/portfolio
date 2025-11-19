import { useState, useEffect } from "react";
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

const colorMap: Record<
  string,
  { bg: string; text: string; border: string; icon: string }
> = {
  rose: {
    bg: "rgba(244, 63, 94, 0.2)",
    text: "rgb(244, 63, 94)",
    border: "rgba(244, 63, 94, 0.3)",
    icon: "text-rose-400",
  },
  amber: {
    bg: "rgba(251, 146, 60, 0.2)",
    text: "rgb(251, 146, 60)",
    border: "rgba(251, 146, 60, 0.3)",
    icon: "text-amber-400",
  },
  emerald: {
    bg: "rgba(16, 185, 129, 0.2)",
    text: "rgb(16, 185, 129)",
    border: "rgba(16, 185, 129, 0.3)",
    icon: "text-emerald-400",
  },
  yellow: {
    bg: "rgba(234, 179, 8, 0.2)",
    text: "rgb(234, 179, 8)",
    border: "rgba(234, 179, 8, 0.3)",
    icon: "text-yellow-400",
  },
  cyan: {
    bg: "rgba(34, 211, 238, 0.2)",
    text: "rgb(34, 211, 238)",
    border: "rgba(34, 211, 238, 0.3)",
    icon: "text-cyan-400",
  },
  indigo: {
    bg: "rgba(99, 102, 241, 0.2)",
    text: "rgb(99, 102, 241)",
    border: "rgba(99, 102, 241, 0.3)",
    icon: "text-indigo-400",
  },
  purple: {
    bg: "rgba(168, 85, 247, 0.2)",
    text: "rgb(168, 85, 247)",
    border: "rgba(168, 85, 247, 0.3)",
    icon: "text-purple-400",
  },
  pink: {
    bg: "rgba(236, 72, 153, 0.2)",
    text: "rgb(236, 72, 153)",
    border: "rgba(236, 72, 153, 0.3)",
    icon: "text-pink-400",
  },
  green: {
    bg: "rgba(34, 197, 94, 0.2)",
    text: "rgb(34, 197, 94)",
    border: "rgba(34, 197, 94, 0.3)",
    icon: "text-green-400",
  },
  sky: {
    bg: "rgba(14, 165, 233, 0.2)",
    text: "rgb(14, 165, 233)",
    border: "rgba(14, 165, 233, 0.3)",
    icon: "text-sky-400",
  },
};

export const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const getItemsPerPage = () => {
    if (typeof window === "undefined") return 6;
    if (window.innerWidth < 640) return 3;
    if (window.innerWidth < 1024) return 4;
    return 6;
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-2 sm:px-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-2 sm:mb-3 md:mb-4">
            Featured{" "}
            <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Projects
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-400">
            A selection of my recent work
          </p>
        </div>

        <div
          className={`grid gap-3 sm:gap-4 md:gap-6 lg:gap-8 min-h-[400px] transition-opacity duration-300 ease-in-out ${
            itemsPerPage === 3
              ? "grid-cols-1"
              : itemsPerPage === 4
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {currentProjects.map((project, idx) => (
            <div
              key={`${currentPage}-${idx}`}
              className="group h-full animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="bg-slate-800/40 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-2">
                <div className="relative h-32 sm:h-40 md:h-48 bg-linear-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden group-hover:opacity-90 transition-opacity">
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
                          const color = colorMap[project.color];
                          icon.className = `fas ${project.icon} text-3xl sm:text-4xl md:text-5xl`;
                          icon.style.color = color?.text;
                          parent.appendChild(icon);
                        }
                      }}
                    />
                  ) : null}
                  {!project.thumbnail && (
                    <i
                      className={`fas ${project.icon} text-3xl sm:text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300`}
                      style={{ color: colorMap[project.color]?.text }}
                    ></i>
                  )}
                </div>
                <div className="p-3 sm:p-4 md:p-6 flex-1 flex flex-col">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1.5 sm:mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 flex-1 line-clamp-2 sm:line-clamp-3">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 mb-3 sm:mb-4">
                    {project.tech.map((t) => {
                      const color = colorMap[project.color];
                      return (
                        <span
                          key={t}
                          className="text-xs py-0.5 px-1.5 sm:py-1 sm:px-2 md:py-1 md:px-2 rounded whitespace-nowrap"
                          style={{
                            backgroundColor: color?.bg,
                            color: color?.text,
                            borderColor: color?.border,
                            borderWidth: "1px",
                            fontSize: "0.7rem",
                          }}
                        >
                          {t}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex gap-2 sm:gap-3 md:gap-4 mt-auto flex-wrap">
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
          <div className="flex justify-center items-center mt-6 sm:mt-8 md:mt-12 gap-2 sm:gap-4 md:gap-6 flex-wrap px-2 sm:px-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className={`p-1.5 sm:p-2 md:p-3 rounded-full border border-white/10 transition-all ${
                currentPage === 0
                  ? "text-gray-600 cursor-not-allowed bg-transparent"
                  : "text-white bg-white/5 hover:bg-indigo-500 hover:border-indigo-500"
              }`}
            >
              <ChevronLeft size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>

            <div className="flex gap-0.5 sm:gap-1 md:gap-2 flex-wrap justify-center order-3 sm:order-0 w-full sm:w-auto basis-full sm:basis-auto">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full transition-all ${
                    currentPage === idx
                      ? "bg-indigo-500 w-3 sm:w-4 md:w-6"
                      : "bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className={`p-1.5 sm:p-2 md:p-3 rounded-full border border-white/10 transition-all ${
                currentPage === totalPages - 1
                  ? "text-gray-600 cursor-not-allowed bg-transparent"
                  : "text-white bg-white/5 hover:bg-indigo-500 hover:border-indigo-500"
              }`}
            >
              <ChevronRight size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
