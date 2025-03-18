import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { Sun, Moon, Github, Linkedin, Mail, FileDown } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [showSocial, setShowSocial] = useState(false);
  const typedRef = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tasks = ["lead", "mentor", "turn ideas into reality", "build solutions", "resolve issues"];
  const [currentTask, setCurrentTask] = useState(0);

  useEffect(() => {
    if (typedRef.current) {
      typed.current = new Typed(typedRef.current, {
        strings: [
          '<span class="line-1">Hello,</span>^1000\n<span class="line-2">My Name is Rajnish Kumar</span>^1000\n<span class="line-3">Technical Lead - Senior Software Engineer @ Eyantra Ventures LTD.</span>'
        ],
        typeSpeed: 50,
        backSpeed: 0,
        showCursor: true,
        cursorChar: '|',
        onComplete: () => {
          setTimeout(() => {
            setShowSocial(true);
          }, 500);
        },
        contentType: 'html'
      });
    }

    return () => {
      typed.current?.destroy();
    };
  }, []);

  useEffect(() => {
    if (!showSocial) return;
    
    const interval = setInterval(() => {
      setCurrentTask((prev) => (prev + 1) % tasks.length);
    }, 500);

    return () => clearInterval(interval);
  }, [showSocial]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Update CSS variables for both angle and position
        containerRef.current.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
        containerRef.current.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleDownload = () => {
    // Replace with actual resume URL
    const resumeUrl = 'https://github.com/RRajnishR/pfolio-2025/raw/refs/heads/main/extras/Rajnish%20Kumar-Tech-Lead-Sr-Software%20Engineer-2025.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <div ref={containerRef} className={`min-h-screen animated-bg theme-${theme} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-white/60 dark:bg-black/60" />
      
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-20 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors z-10"
      >
        {theme === 'light' ? (
          <Moon className="w-6 h-6 text-gray-800" />
        ) : (
          <Sun className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Resume Download Button */}
      <button
        onClick={handleDownload}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors flex items-center z-10"
      >
        <FileDown className="w-6 h-6 text-gray-800 dark:text-white" />
      </button>

      {/* Main Content */}
      <div className="container mx-auto h-screen flex flex-col justify-between px-4 md:px-8">
        <div className="flex items-center h-full">
          <div className="max-w-2xl relative z-10">
            <div className="font-mono whitespace-pre-line text-gray-800 dark:text-white">
              <span ref={typedRef}></span>
            </div>

            {/* Task Animation */}
            {showSocial && (
              <div className="mt-8 line-4 text-gray-800 dark:text-white fade-in"
                   style={{ animationDelay: '0.50s' }}>
                I {tasks[currentTask]}
              </div>
            )}

            {/* Social Icons */}
            {showSocial && (
              <div className="mt-8 flex space-x-6 fade-in"
                   style={{ animationDelay: '1s' }}>
                <a href="https://github.com/RRajnishR" target="_blank" rel="noopener noreferrer"
                   className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <Github className="w-5 h-5 text-gray-800 dark:text-white" />
                </a>
                <a href="https://in.linkedin.com/in/k-rajnish" target="_blank" rel="noopener noreferrer"
                   className="p-2 rounded-full bg-[#0077B5]/10 hover:bg-[#0077B5]/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-[#0077B5]" />
                </a>
                <a href="mailto:ravisai.rajnish@gmail.com"
                   className="p-2 rounded-full bg-[#EA4335]/10 hover:bg-[#EA4335]/20 transition-colors">
                  <Mail className="w-5 h-5 text-[#EA4335]" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pb-4 relative z-10">
          <p className="text-sm opacity-60 text-gray-800 dark:text-white">© Copyright 2025</p>
        </div>
      </div>

      {/* Floating Profile Picture */}
      <div className="absolute bottom-8 right-8 z-10 animate-float">
        <img
          src="https://raw.githubusercontent.com/RRajnishR/pfolio-2025/287c769f13002acc5b18db13069bd12cf0e56401/extras/me.png"
          alt="Profile"
          className="w-16 h-16 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
        />
      </div>
    </div>
  );
}

export default App;