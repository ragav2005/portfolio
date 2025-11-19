import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-black/20 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <span className="font-display text-2xl font-bold tracking-tight text-white">
              RV<span className="text-indigo-500">.</span>
            </span>
            <p className="text-gray-500 text-sm mt-2">
              Building digital experiences that matter.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/ragav2005"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/ragavvignes"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:ragavvignesviswanathan.2023.cse@ritchennai.edu.in"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
