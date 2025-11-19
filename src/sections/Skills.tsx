import { Code, Smartphone, Server, Layers } from "lucide-react";
import { SpotlightCard } from "../components/SpotlightCard";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      color: "blue",
      skills: ["Java", "Python", "C", "JavaScript"],
    },
    {
      title: "Frontend",
      icon: <Smartphone size={24} />,
      color: "purple",
      skills: ["React.js", "Next.js", "Vue.js", "Tailwind", "HTML/CSS"],
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      color: "green",
      skills: ["Node.js", "Spring Boot", "Django", "Express.js", "PostgreSQL"],
    },
    {
      title: "Tools & Web3",
      icon: <Layers size={24} />,
      color: "pink",
      skills: ["Docker", "Git", "Figma", "Blockchain", "MongoDB"],
    },
  ];

  const tagStyles = {
    blue: "hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]",
    purple:
      "hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-purple-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]",
    green:
      "hover:bg-green-500/20 hover:border-green-500/50 hover:text-green-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]",
    pink: "hover:bg-pink-500/20 hover:border-pink-500/50 hover:text-pink-300 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]",
  };

  const iconStyles = {
    blue: "bg-blue-500/10 text-blue-400 group-hover:text-blue-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]",
    purple:
      "bg-purple-500/10 text-purple-400 group-hover:text-purple-300 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]",
    green:
      "bg-green-500/10 text-green-400 group-hover:text-green-300 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]",
    pink: "bg-pink-500/10 text-pink-400 group-hover:text-pink-300 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]",
  };

  return (
    <section id="skills" className="py-16 sm:py-20 bg-black/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4">
            Technical <span className="text-purple-500">Arsenal</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillCategories.map((category, idx) => (
            <SpotlightCard
              key={idx}
              color={category.color}
              className="p-4 sm:p-6 h-full group"
            >
              <div
                className={`w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 group-hover:scale-110 ${
                  iconStyles[category.color as keyof typeof iconStyles]
                }`}
              >
                {category.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`
                      px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium rounded-md transition-all duration-300
                      bg-white/5 text-gray-400 border border-white/5
                      ${tagStyles[category.color as keyof typeof tagStyles]}
                      cursor-default hover:-translate-y-0.5 whitespace-nowrap
                    `}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};
