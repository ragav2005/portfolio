import { Briefcase } from "lucide-react";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 bg-slate-900/30 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4">
            Professional <span className="text-indigo-400">Journey</span>
          </h2>
          <div className="h-1 w-16 sm:w-20 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-slate-900 ring-1 ring-white/10 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-start md:items-center mb-6">
              <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                <Briefcase size={28} className="sm:size-8" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                    Web Developer Intern
                  </h3>
                  <span className="inline-flex items-center px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-indigo-400/10 text-indigo-300 border border-indigo-400/20 w-fit">
                    4 Months
                  </span>
                </div>
                <p className="text-base sm:text-lg text-indigo-400 mt-1">
                  National Informatics Center, Taramani
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 sm:pt-6">
              <h4 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 sm:mb-4">
                Key Responsibilities & Achievements
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start text-sm sm:text-base text-gray-300">
                  <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0"></span>
                  <span>
                    Architected and deployed dynamic web applications using
                    modern web technologies, focusing on responsive design and
                    user experience.
                  </span>
                </li>
                <li className="flex items-start text-sm sm:text-base text-gray-300">
                  <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0"></span>
                  <span>
                    Collaborated with senior developers to optimize frontend
                    performance, resulting in faster load times and smoother
                    interactions.
                  </span>
                </li>
                <li className="flex items-start text-sm sm:text-base text-gray-300">
                  <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0"></span>
                  <span>
                    Implemented secure backend solutions and integrated RESTful
                    APIs for seamless data handling.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
