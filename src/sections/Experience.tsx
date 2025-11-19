export const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-black/20">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4">
            Work{" "}
            <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Experience
            </span>
          </h2>
          <div className="h-1 w-16 sm:w-20 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative border-l border-gray-800 ml-3 sm:ml-4 md:ml-0 space-y-8 sm:space-y-12">
          <div className="md:flex group">
            <div className="hidden md:block w-24 sm:w-32 text-right pr-6 sm:pr-8 pt-2">
              <span className="text-indigo-500 font-mono text-xs sm:text-sm font-bold">
                4 Months
              </span>
            </div>

            <div className="absolute -left-[5px] sm:-left-[7px] mt-2.5 h-3 w-3 rounded-full border border-gray-900 bg-indigo-500"></div>

            <div className="ml-6 sm:ml-8 md:ml-0 md:pl-8 flex-1">
              <div className="bg-slate-800/40 backdrop-blur-sm border border-white/5 p-4 sm:p-6 rounded-xl transform transition-all duration-300 group-hover:translate-x-2 hover:bg-slate-800/60">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-3 sm:mb-4 gap-2">
                  <h3 className="text-lg sm:text-2xl font-bold text-white">
                    Web Developer Intern
                  </h3>
                  <span className="md:hidden text-xs sm:text-sm text-indigo-500 font-mono">
                    4 Months
                  </span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                  <i className="fas fa-building mr-2 shrink-0"></i>
                  <span>National Informatics Center, Taramani</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Gained hands-on experience in building dynamic web
                  applications using modern web technologies. Collaborated with
                  senior developers to optimize frontend performance and
                  implement secure backend solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
