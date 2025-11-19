import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";

interface Line {
  text: string;
  indent: number;
  color: string;
  highlight?: string;
  highlightColor?: string;
  display?: string;
}

export const TerminalWindow = () => {
  const [lines, setLines] = useState<Line[]>([]);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const codeLines = [
      { text: "const ragav = {", indent: 0, color: "text-pink-400" },
      {
        text: "name: 'Ragav Vignes',",
        indent: 1,
        color: "text-gray-300",
        highlight: "'Ragav Vignes'",
        highlightColor: "text-green-400",
      },
      {
        text: "stack: ['MERN', 'Next.js',  'SpringBoot' , 'Django rest'],",
        indent: 1,
        color: "text-gray-300",
        highlight: "['MERN', 'Next.js', 'SpringBoot' , 'Django']",
        highlightColor: "text-yellow-300",
      },
      {
        text: "focus: 'Scalable Architectures',",
        indent: 1,
        color: "text-gray-300",
        highlight: "'Scalable Architectures'",
        highlightColor: "text-cyan-400",
      },
      { text: "mission: async () => {", indent: 1, color: "text-blue-400" },
      {
        text: "await Innovation.compile();",
        indent: 2,
        color: "text-gray-300",
        highlight: "Innovation.compile()",
        highlightColor: "text-purple-400",
      },
      {
        text: "return 'Future Loaded';",
        indent: 2,
        color: "text-gray-300",
        highlight: "'Future Loaded'",
        highlightColor: "text-green-400",
      },
      { text: "}", indent: 1, color: "text-blue-400" },
      { text: "};", indent: 0, color: "text-pink-400" },
    ];

    let currentLineIndex = 0;
    let currentCharIndex = 0;
    let currentText = "";
    let timeout: number;

    const typeWriter = () => {
      if (currentLineIndex < codeLines.length) {
        const lineObj = codeLines[currentLineIndex];
        const fullLineText = "  ".repeat(lineObj.indent) + lineObj.text;

        if (currentCharIndex < fullLineText.length) {
          currentText += fullLineText[currentCharIndex];

          setLines((prev) => {
            const newLines = [...prev];
            if (newLines.length === 0 || newLines.length <= currentLineIndex) {
              newLines.push({
                ...lineObj,
                display: fullLineText[currentCharIndex],
              });
            } else {
              newLines[currentLineIndex].display = currentText;
            }
            return newLines;
          });

          currentCharIndex++;
          timeout = setTimeout(typeWriter, 30 + Math.random() * 20);
        } else {
          currentLineIndex++;
          currentCharIndex = 0;
          currentText = "";
          timeout = setTimeout(typeWriter, 100);
        }
      } else {
        setIsTyping(false);
      }
    };

    timeout = setTimeout(typeWriter, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto perspective-1000 group">
      <div className="relative rounded-lg sm:rounded-xl bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden transform transition-transform duration-500 group-hover:rotate-x-2 group-hover:rotate-y-2">
        <div className="flex items-center justify-between px-2 sm:px-4 py-2 sm:py-3 bg-white/5 border-b border-white/5">
          <div className="flex gap-1 sm:gap-2">
            <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-red-500/80"></div>
            <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="text-[10px] sm:text-xs font-mono text-gray-400 flex items-center gap-1 sm:gap-2">
            <Terminal size={10} className="sm:size-3" />
            <span className="hidden xs:inline">ragav.config.js</span>
          </div>
          <div className="w-6 sm:w-8"></div>
        </div>

        <div className="p-3 sm:p-6 font-mono text-[10px] sm:text-xs md:text-sm h-64 sm:h-80 overflow-hidden">
          {lines.map((line, idx) => (
            <div
              key={idx}
              className={`${line.color} leading-5 sm:leading-6 whitespace-pre`}
            >
              {line.display}
            </div>
          ))}
          {isTyping && (
            <span className="inline-block w-1.5 sm:w-2 h-3 sm:h-4 bg-indigo-500 ml-1 animate-pulse align-middle"></span>
          )}
          {!isTyping && (
            <div className="mt-3 sm:mt-4 text-green-400 animate-pulse text-[9px] sm:text-xs">
              {">"} Compilation successful... <br />
              {">"} Welcome to my portfolio.
            </div>
          )}
        </div>

        <div className="px-2 sm:px-4 py-1 sm:py-1.5 bg-indigo-500/10 border-t border-white/5 text-[8px] sm:text-[10px] font-mono text-indigo-300 flex justify-between items-center gap-1 sm:gap-2">
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="hidden xs:inline">ONLINE</span>
          </div>
          <span className="hidden sm:inline">UTF-8</span>
          <span>JS</span>
        </div>
      </div>

      <div className="absolute -inset-4 bg-gradient-to- from-indigo-500/20 to-purple-500/20 blur-xl -z-10 rounded-xl opacity-70 animate-pulse"></div>
    </div>
  );
};
