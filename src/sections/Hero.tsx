import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { TerminalWindow } from "../components/TerminalWindow";

export const Hero = () => {
  return (
    <section
      id="hero-section"
      className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 relative overflow-hidden"
    >
      <div className="absolute top-0 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-48 sm:w-72 h-48 sm:h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center w-full gap-8 md:gap-12 lg:gap-16">
        <div className="w-full md:w-1/2 text-center md:text-left z-10">
          <div className="inline-block px-2.5 sm:px-3 py-1 mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm font-semibold tracking-wider text-indigo-500 uppercase bg-indigo-500/10 rounded-full animate-fade-in-up">
            Open to Collaborations
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
            Hi, I'm <br className="hidden sm:block" />
            <span className="bg-linear-to-br from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Ragav Vignes.
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 md:mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed px-2 sm:px-0">
            A passionate{" "}
            <span className="text-white font-medium">Full Stack Developer</span>{" "}
            &{" "}
            <span className="text-white font-medium">
              Blockchain Enthusiast
            </span>{" "}
            building modern, scalable, and intelligent web applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-indigo-600 text-white text-sm sm:text-base font-semibold hover:bg-indigo-700 transition-all shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] w-full sm:w-auto text-center"
            >
              View Work
            </a>
            <a
              href="/resume-ragav.pdf"
              download="Ragav_Vignes_Resume.pdf"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-slate-800/50 border border-white/10 backdrop-blur-sm text-white text-sm sm:text-base font-semibold hover:bg-white/10 flex items-center justify-center gap-2 sm:gap-3 group transition-all w-full sm:w-auto"
            >
              <span className="group-hover:translate-y-1 transition-transform shrink-0">
                <Download size={16} className="sm:size-5" />
              </span>{" "}
              <span>Download Resume</span>
            </a>
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 flex items-center justify-center md:justify-start gap-4 sm:gap-6 md:gap-8">
            <a
              href="https://github.com/ragav2005"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
            >
              <Github size={20} className="sm:size-6 md:size-7" />
            </a>
            <a
              href="https://linkedin.com/in/ragavvignes"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
            >
              <Linkedin size={20} className="sm:size-6 md:size-7" />
            </a>
            <a
              href="mailto:ragavvignesviswanathan.2023.cse@ritchennai.edu.in"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
            >
              <Mail size={20} className="sm:size-6 md:size-7" />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-12 sm:mt-16 md:mt-0 relative z-0 flex justify-center items-center px-2 sm:px-0">
          <TerminalWindow />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a
          href="#skills"
          className="text-gray-500 hover:text-white transition-colors"
        >
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};
