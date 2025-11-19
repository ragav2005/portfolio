import { GraduationCap } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-6">
                Behind the <span className="text-purple-500">Code</span>
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                <p>
                  I am a third-year Computer Science Engineering student at{" "}
                  <strong className="text-white">
                    Rajalakshmi Institute of Technology
                  </strong>
                  . My passion lies at the intersection of{" "}
                  <span className="text-indigo-400">
                    Full Stack Development
                  </span>{" "}
                  and the decentralized future of{" "}
                  <span className="text-purple-400">Blockchain</span>.
                </p>
                <p>
                  I don't just write code; I solve problems. Whether it's
                  building a high-performance Python framework from scratch or
                  creating AI-powered applications, I thrive on the challenge of
                  turning complex logic into elegant, user-friendly solutions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">
                  8.11
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Current CGPA
                </div>
              </div>
              <div className="p-3 sm:p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-indigo-400 mb-1">
                  ∞
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Lines of Code
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-linear-to-br from-indigo-600 to-purple-600 rounded-2xl transform rotate-3 opacity-20 blur-sm"></div>

            <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-6 sm:p-8 overflow-hidden">
              <div className="absolute top-0 right-0 p-3 sm:p-4 opacity-10">
                <GraduationCap
                  size={80}
                  className="sm:size-28 md:size-32 text-white"
                />
              </div>

              <div className="relative z-10">
                <h3 className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider font-semibold mb-2">
                  Academic Status
                </h3>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  B.E. Computer Science
                </h2>
                <p className="text-sm sm:text-base text-indigo-400 mb-4 sm:mb-6">
                  Rajalakshmi Institute of Technology
                </p>

                <div className="mb-6">
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>Start: 2023</span>
                    <span>Target: 2027</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-linear-to-r from-indigo-500 to-purple-500 w-[70%] rounded-full relative">
                      <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="mt-2 text-right text-xs text-indigo-300">
                    <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                    Currently in 3rd Year
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
