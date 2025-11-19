export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 relative">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:gap-12">
          <div>
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold">
                About <span className="text-indigo-500">Me</span>
              </h2>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-sm border border-white/5 rounded-2xl p-4 sm:p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-16 sm:w-24 h-16 sm:h-24 bg-indigo-500/20 rounded-full blur-2xl"></div>
              <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
                I'm a third-year BE Computer Science Engineering student at{" "}
                <span className="text-white font-semibold">
                  Rajalakshmi Institute of Technology
                </span>
                . My journey involves a deep dive into modern web development
                and exploring the decentralized world of blockchain.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                Goal-driven and determined, I thrive in collaborative
                environments where I can solve complex problems. Whether it's
                building a high-performance Python framework from scratch or
                creating AI-powered applications, I'm always eager to learn and
                push the boundaries of technology.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-slate-800/40 backdrop-blur-sm border-l-4 border-indigo-500 p-4 sm:p-6 rounded-xl relative group hover:bg-white/5 transition-colors">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4 mb-2">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                  BE Computer Science Engineering
                </h3>
                <span className="text-xs font-mono py-1 px-2 rounded bg-indigo-500/20 text-indigo-400 whitespace-nowrap">
                  2023 - 2027
                </span>
              </div>
              <p className="text-indigo-400 mb-1 sm:mb-2 text-sm sm:text-base">
                Rajalakshmi Institute of Technology, Chennai
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                CGPA: 8.11 (Till Semester 3)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
