import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState([]);

  const openModal = (url) => {
    const embedUrl = url.replace("watch?v=", "embed/");
    setVideoUrl(embedUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl("");
  };

  const openGallery = (images, startIndex = 0) => {
    setGalleryImages(images);
    setGalleryIndex(startIndex);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setGalleryImages([]);
    setGalleryIndex(0);
  };

  const prevImage = () => {
    setGalleryIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setGalleryIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const projects = [
    {
      title: "Shop",
      description: "A simple online shop system for managing products easily",
      image: "/images/Shop_Website.png",
      video: "https://www.youtube.com/watch?v=DQt8B13D9w4",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      tags: ["Web App", "Full-stack"]
    },
    {
      title: "To‑Do List",
      description: "Manage your daily tasks with a clean interface and LocalStorage support",
      image: "/images/To-Do_Website.png",
      video: "https://www.youtube.com/watch?v=vnEmQgmjnJw",
      tech: ["React", "Node.js", "PostgreSQL", "TailwindCSS"],
      tags: ["Web App", "Full-stack"]
    },
    {
      title: "Roblox_Store",
      description: "Manage your daily tasks with a clean interface and LocalStorage support",
      image: "/images/Roblox_Store.png",
      video: "https://www.youtube.com/watch?v=gID9-Dj8VdM",
      tech: ["React", "TailwindCSS"],
      tags: ["Web App", "Frontend"]
    },
    {
      title: "ZNT_Shop",
      description: "Manage your daily tasks with a clean interface and LocalStorage support",
      image: "/images/ZNT_Shop.png",
      video: "https://www.youtube.com/watch?v=5n2OZZ0-ij4",
      tech: ["HTML", "CSS"],
      tags: ["Web App", "Frontend"]
    },
    {
      title: "Weather_Checker",
      description: "Check real-time weather with animated UI, offline autocomplete, and responsive design",
      image: "/images/Weather_App.png",
      galleryImages: ["/images/W1.png", "/images/W2.png","/images/W3.png", "/images/W4.png"],
      tech: ["Angular", "CSS"],
      tags: ["Web App", "Frontend"]
    },
    {
      title: "Honkai_FanWeb",
      description: "Fan-made Honkai-themed web app featuring Gacha simulator, character gallery, and top-up system with animated modern UI.",
      image: "/images/honkai_fanmade.png",
      video: "https://www.youtube.com/watch?v=TpA1m8MFseo",
      tech: ["Next.js", "React", "Tailwind CSS"],
      tags: ["Web App", "Gacha Simulator", "Fan Project", "Frontend"]
    },
    {
      title: "Drink Picker",
      description: "A simple app to randomly suggest drink menu ideas",
      image: "/images/Drink_Picker.png",
      video: "https://www.youtube.com/watch?v=z5FZ-AX4wy8",
      tech: ["C#", "Java"],
      tags: ["Mobile App", "Randomizer"]
    },
    {
      title: "Money Saving Rating",
      description: "A simple web application that allows users to review and rate products or services based on cost-effectiveness.",
      image: "/images/Money_Saving_Rating.png",
      video: "https://www.youtube.com/watch?v=AspXyD0qbAM",
      tech: ["React", "Firebase", "TailwindCSS"],
      tags: ["Mobile App", "Review App"]
    },
  ];

  return (
    <>
      <section id="projects" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-5xl font-black mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
              Projects
            </h2>
            <p className="text-center text-gray-300 max-w-xl mx-auto mb-6 px-4 text-lg">
              Explore a curated collection of my featured projects, showcasing practical applications and creative solutions across various domains.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div
            ref={ref}
            className={`grid lg:grid-cols-2 gap-16 transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 backdrop-blur-xl p-8 rounded-3xl border border-blue-400/20 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-700 hover:scale-105 cursor-pointer"

                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 group-hover:shadow-2xl transition-all duration-500">
                  <img
                    alt={project.title}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    src={project.image}
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white font-extrabold text-xl tracking-wide">
                      Live Preview
                    </span>
                  </div>

                  {project.video && (
                    <button
                      onClick={() => openModal(project.video)}
                      className="absolute top-4 right-4 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white hover:scale-110 transform transition duration-300 shadow-lg hover:shadow-pink-400/60"
                      aria-label="Open Video"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  )}
                  {project.galleryImages && (
                    <button
                      onClick={() => openGallery(project.galleryImages, 0)}
                      className="absolute top-4 right-4 w-14 h-14 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white hover:scale-110 transform transition duration-300 shadow-lg hover:shadow-green-400/60"
                      aria-label="Open Gallery"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <path d="M21 15l-5-5L5 21"></path>
                      </svg>
                    </button>
                  )}
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h4 className="text-3xl font-extrabold text-blue-400 mb-2 tracking-tight">
                        {project.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-4 max-w-[150px] justify-end">
                      {project.tags?.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold text-blue-400 bg-blue-400/20 px-3 py-1 rounded-full border border-blue-400/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gradient-to-r from-blue-400/30 to-purple-400/30 text-blue-300 px-3 py-1 rounded-full border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold py-4 px-8 rounded-2xl hover:shadow-lg hover:shadow-blue-600/60 transform hover:scale-105 transition duration-300 overflow-hidden"
                    >
                      🚀 ไปดูเว็บไซต์ →
                    </a>
                  )}
                  {project.video && (
                    <button
                      onClick={() => openModal(project.video)}
                      className="group/video relative inline-flex items-center justify-center px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 rounded-2xl hover:shadow-2xl hover:shadow-pink-500/60 transform hover:scale-105 transition-all duration-500 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        <span className="mr-2">🎥</span>ดูวิดีโอ
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover/video:opacity-100 transition-opacity duration-500"></div>
                    </button>
                  )}
                  {project.galleryImages && (
                    <button
                      onClick={() => openGallery(project.galleryImages)}
                      className="group/gallery relative inline-flex items-center justify-center px-6 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold py-4 rounded-2xl hover:shadow-2xl hover:shadow-green-500/60 transform hover:scale-105 transition-all duration-500 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        <span className="mr-2">🖼️</span>ดูรูปภาพ
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-green-600 opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-500"></div>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal วิดีโอ */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-purple-400 transition-colors duration-300 text-2xl z-10"
              aria-label="Close Video Modal"
            >
              ✕
            </button>
            <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={videoUrl}
                title="Demo Video"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Modal Gallery รูปภาพสไลด์ */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm px-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeGallery}
              className="absolute -top-12 right-0 text-white hover:text-green-400 transition-colors duration-300 text-3xl z-10"
              aria-label="Close Gallery Modal"
            >
              ✕
            </button>

            <img
              src={galleryImages[galleryIndex]}
              alt={`Gallery image ${galleryIndex + 1}`}
              className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl select-none"
              draggable={false}
            />

            {/* ปุ่มเลื่อนซ้าย */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-green-600/70 hover:bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl select-none"
              aria-label="Previous Image"
            >
              ‹
            </button>

            {/* ปุ่มเลื่อนขวา */}
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-green-600/70 hover:bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl select-none"
              aria-label="Next Image"
            >
              ›
            </button>

            {/* นับรูปภาพ */}
            <div className="absolute bottom-4 right-4 text-sm text-white bg-black/40 px-3 py-1 rounded-full select-none">
              {galleryIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
