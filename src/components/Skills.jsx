import React from "react";
import { useInView } from "react-intersection-observer";

const skillGroups = [
  {
    emoji: "💻",
    title: "Languages",
    skills: ["Dart", "Python", "Java", "C", "C++", "C#"],
    gradientStyle: { background: "linear-gradient(135deg, #0a3d62 0%, #60a3bc 100%)" },
    titleColor: "text-cyan-300",
    bulletColor: "marker:text-cyan-300",
  },
  {
    emoji: "🎨",
    title: "Frontend",
    skills: ["HTML", "CSS", "React", "NextJS", "ViteJS", "TailwindCSS", "JavaScript", "TypeScript", "Bootstrap"],
    gradientStyle: { background: "linear-gradient(135deg, #001F3F 0%, #127a3d 100%)" },
    titleColor: "text-blue-300",
    bulletColor: "marker:text-blue-300",
  },
  {
    emoji: "🛠️",
    title: "Backend",
    skills: ["Node.js", "MySQL", "PHP", "Firebase", "PostgreSQL"],
    gradientStyle: { background: "linear-gradient(135deg, #1a001f 0%, #b42c6b 100%)" },
    titleColor: "text-purple-300",
    bulletColor: "marker:text-purple-300",
  },
  {
    emoji: "⚙️",
    title: "Tools & Platform",
    skills: [
      "Linux CLI",
      "Package managers",
      "Git & Github",
      "VSCode",
      "Figma",
      "Adobe Premiere Pro",
      "Photoshop",
      "Capcut",
      "Basic Cybersecurity",
    ],
    gradientStyle: { background: "linear-gradient(135deg, #4d3a00 0%, #ca4400 100%)" },
    titleColor: "text-yellow-300",
    bulletColor: "marker:text-yellow-300",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen text-white py-16 px-6 flex flex-col items-center"
    >
      <h2
        className="text-5xl font-extrabold mb-8 text-center tracking-wider bg-clip-text text-transparent bg-gradient-to-r"
        style={{
          backgroundImage: "linear-gradient(90deg, #6978FF 0%, #A3C1FF 50%, #F3C6F1 100%)",
        }}
      >
        Skills & Expertise
      </h2>

      {/* Description */}
      <p className="text-center text-gray-300 max-w-xl mb-8 px-4 text-lg">
        Here is a summary of my skills and expertise, showcasing my proficiency across various
        technologies and tools.
      </p>

      {/* เส้นขีดใต้ Description */}
      <div className="w-24 h-1 mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-full opacity-60" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {skillGroups.map(({ emoji, title, skills, gradientStyle, titleColor, bulletColor }, idx) => {
          // ใช้ useInView สำหรับแต่ละกลุ่ม
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          // กำหนดสีขอบตาม index
          const borderColors = [
            "border-cyan-400",
            "border-blue-400",
            "border-purple-400",
            "border-yellow-400",
          ];

          return (
            <div
              key={idx}
              ref={ref}
              className={`relative rounded-xl p-8 cursor-pointer shadow-lg transform transition-transform duration-700
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center overflow-hidden border ${borderColors[idx]}
              `}
              style={{ transitionProperty: "opacity, transform" }}
            >
              {/* Background Gradient แบบ custom */}
              <div className="absolute inset-0 rounded-xl" style={gradientStyle} />

              {/* Black overlay ครึ่งโปร่ง */}
              <div className="absolute inset-0 bg-black opacity-60 rounded-xl pointer-events-none" />

              {/* เนื้อหา */}
              <div className="relative z-10 w-full">
                <div className="text-4xl mb-4">{emoji}</div>

                <h3 className={`text-3xl font-bold mb-6 ${titleColor} tracking-wide`}>{title}</h3>

                <ul
                  className={`list-disc list-inside space-y-3 font-medium text-white ${bulletColor} self-start ml-4 text-left`}
                >
                  {skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
