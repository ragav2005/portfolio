import { Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Decorative bg elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl opacity-30"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl p-8 md:p-16 text-center border border-white/10 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Let's Build Something{" "}
            <span className="bg-gradient-to- from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Amazing
            </span>
          </h2>
          <p className="text-gray-400 mb-12 text-lg">
            I'm currently looking for internship opportunities and collaborative
            projects. Whether you have a question or just want to say hi, I'll
            try my best to get back to you!
          </p>

          <a
            href="mailto:ragavvignesviswanathan.2023.cse@ritchennai.edu.in"
            className="inline-flex items-center px-10 py-4 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all"
          >
            Say Hello <Send size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};
