import { useState, useEffect } from "react";

export default function Navbar() {
  const sections = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Achievements", id: "achievements" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // ตรวจสอบขนาดหน้าจอ
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // IntersectionObserver ใช้ threshold ตาม device
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: isMobile ? 0 : 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [isMobile]);

  const scrollToSectionSmooth = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setNavOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-80 backdrop-blur-lg text-white flex justify-between items-center px-8 py-4 z-50 md:hidden shadow-lg">
        <div className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-teal-500 to-green-500 bg-clip-text text-transparent select-none cursor-default">
          MyPortfolio
        </div>
        <button
          className="p-2 rounded-md hover:bg-gradient-to-r hover:from-cyan-400 hover:via-teal-500 hover:to-green-500 transition duration-300 ease-in-out transform hover:scale-110 active:scale-95"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {navOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {navOpen && (
          <div className="absolute top-full left-0 w-full bg-black bg-opacity-95 backdrop-blur-xl flex flex-col items-center space-y-2 py-4 border-t border-teal-600 shadow-xl animate-slideDown">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSectionSmooth(item.id)}
                className={`w-full text-center py-3 font-semibold rounded-md text-white transition-all duration-300 ease-in-out
                  ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-cyan-400 via-teal-500 to-green-500 shadow-lg scale-105"
                      : "hover:bg-gradient-to-r hover:from-cyan-500 hover:via-teal-600 hover:to-green-600 hover:shadow-md hover:scale-105"
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Desktop Floating Dots with ScrollSpy */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-6">
        {sections.map((item) => (
          <div key={item.id} className="group relative">
            <button
              onClick={() => scrollToSectionSmooth(item.id)}
              className={`w-4 h-4 rounded-full transition-all duration-500 relative overflow-hidden 
                ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400 scale-125 shadow-lg shadow-teal-400/50"
                    : "bg-white/20 hover:bg-white/40 hover:scale-110"
                }`}
              aria-label={item.label}
            >
              {activeSection === item.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 animate-spin-slow opacity-50 rounded-full" />
              )}
            </button>
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/80 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-teal-400/30">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease forwards;
        }
        @keyframes spinSlow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spinSlow 6s linear infinite;
        }
      `}</style>
    </>
  );
}
