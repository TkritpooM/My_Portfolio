import React from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className={`min-h-screen flex items-center justify-center text-center px-4 relative transition-all duration-1000 ease-out 
        ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}
      `}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-gradient-to-r from-blue-500/10 via-purple-500/20 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute w-72 h-72 bg-gradient-to-l from-purple-500/15 to-blue-500/15 rounded-full blur-2xl animate-spin-very-slow"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-8">
          <div className="inline-block p-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-gradient-x">
            <div className="bg-black px-6 py-2 rounded-full">
              <span className="text-sm bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                ✨ Creative Developer &amp; Digital Artist
              </span>
            </div>
          </div>
        </div>

        <h1 className="text-7xl md:text-9xl font-black mb-8 bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x leading-tight">
          Kithiphum
          <br />
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Thitanhopat
          </span>
        </h1>

        <p className="text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed animate-fade-in-up max-w-4xl mx-auto">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
            Code the Future You Want to See
          </span>
          <br />
          <span className="text-xl text-gray-400">Innovating with code, creating with passion</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 animate-fade-in-up">
          <button
            onClick={() => scrollToSection("projects")}
            className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full text-white font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-110 transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="relative px-10 py-5 rounded-full font-bold text-lg text-white bg-black/80 border border-transparent 
              bg-gradient-to-r from-cyan-500 via-teal-500 to-green-500 
              hover:from-green-400 hover:via-teal-500 hover:to-cyan-500 
              transition-all duration-500 shadow-md hover:shadow-lg hover:scale-105"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white group-hover:from-white group-hover:to-white transition-all duration-300">
              Contact Me
            </span>
          </button>
        </div>

        <div className="mt-[50px] absolute left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-transparent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
