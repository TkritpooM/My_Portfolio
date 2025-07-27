import React from "react";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-32 px-4 relative text-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2
            className="text-5xl md:text-5xl font-black mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #6978FF 30%, #A3C1FF 50%, #F3C6F1 70%)",
            }}
          >
            About Me
          </h2>

          <p className="text-center text-gray-300 max-w-xl mx-auto mb-8 px-4 text-lg">
            Let me introduce myself. I'm a tech enthusiast and web developer who loves crafting beautiful, efficient, and meaningful digital experiences.
          </p>

          <div className="w-24 h-1 mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-full opacity-60 mx-auto" />
        </div>

        {/* Content */}
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-16 items-center transform transition-all duration-1000 ease-out ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Profile Image */}
          <div className="relative">
            <img
              src="/images/mypic.png"
              alt="My Profile"
              className="rounded-3xl w-full object-cover shadow-xl hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400/20 to-pink-400/10 backdrop-blur-sm hover:backdrop-blur-lg transition-all duration-500" />
          </div>

          {/* Bio Text */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4 tracking-wide">
              👋 Hi! I'm <span> [Kithiphum Thitanhopat]</span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate developer who loves building web applications and exploring new
              technologies. My journey started with a curiosity for how websites work, and I've
              since developed a wide range of skills from frontend design to backend development.
            </p>
            <p className="text-gray-400">
              My favorite tools include <span className="text-purple-400">React</span>,{" "}
              <span className="text-purple-400">Node.js</span>,{" "}
              <span className="text-purple-400">TailwindCSS</span>, and{" "}
              <span className="text-purple-400">PostgreSQL</span>. I'm always open to learning new
              things and taking on challenging projects.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/30">
                Developer
              </span>
              <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/30">
                Web Enthusiast
              </span>
              <span className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm border border-pink-500/30">
                Lifelong Learner
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
