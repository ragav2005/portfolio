export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Work{" "}
            <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Experience
            </span>
          </h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative border-l border-gray-800 ml-4 md:ml-0 space-y-12">
          <div className="md:flex group">
            <div className="hidden md:block w-32 text-right pr-8 pt-2">
              <span className="text-indigo-500 font-mono text-sm font-bold">
                4 Months
              </span>
            </div>

            <div className="absolute -left-[5px] mt-2.5 h-3 w-3 rounded-full border border-gray-900 bg-indigo-500"></div>

            <div className="ml-8 md:ml-0 md:pl-8 flex-1">
              <div className="bg-slate-800/40 backdrop-blur-sm border border-white/5 p-6 rounded-xl transform transition-all duration-300 group-hover:translate-x-2 hover:bg-slate-800/60">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    Web Developer Intern
                  </h3>
                  <span className="md:hidden text-sm text-indigo-500 font-mono mt-1">
                    4 Months
                  </span>
                </div>
                <div className="flex items-center text-gray-400 mb-4">
                  <i className="fas fa-building mr-2"></i>
                  <span>National Informatics Center, Taramani</span>
                </div>
                <p className="text-gray-300">
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
