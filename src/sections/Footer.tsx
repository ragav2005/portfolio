import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-black/20 pt-8 sm:pt-10 md:pt-12 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="text-center md:text-left">
            <span className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white">
              RV<span className="text-indigo-500">.</span>
            </span>
            <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">
              Building digital experiences that matter.
            </p>
          </div>
          <div className="flex gap-4 sm:gap-6">
            <a
              href="https://github.com/ragav2005"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Github size={18} className="sm:size-5 md:size-6" />
            </a>
            <a
              href="https://linkedin.com/in/ragavvignes"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Linkedin size={18} className="sm:size-5 md:size-6" />
            </a>
            <a
              href="mailto:ragavvignesviswanathan.2023.cse@ritchennai.edu.in"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Mail size={18} className="sm:size-5 md:size-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
