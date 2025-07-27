import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Achievements() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [awardImageIndexes, setAwardImageIndexes] = useState({});

  const { ref: awardsRef, inView: awardsInView } = useInView({ triggerOnce: true, threshold: 0.2, rootMargin: "200px 0px" });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true, threshold: 0.2, rootMargin: "200px 0px" });

  // เปิด modal วิดีโอ
  const openModal = (url) => {
    const embedUrl = url.replace("watch?v=", "embed/");
    setVideoUrl(embedUrl);
    setIsModalOpen(true);
  };

  // เปิด modal แกลเลอรี่ภาพสำหรับ Car Detection
  const openGallery = (images, startIndex = 0) => {
    setGalleryImages(images);
    setCurrentImageIndex(startIndex);
    setIsGalleryOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl("");
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setGalleryImages([]);
    setCurrentImageIndex(0);
  };

  const prevImage = () => {
    setCurrentImageIndex((i) => (i === 0 ? galleryImages.length - 1 : i - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((i) => (i === galleryImages.length - 1 ? 0 : i + 1));
  };

  const awards = [
    {
      title: "TOEIC English Proficiency Test",
      description: "Successfully passed the TOEIC with [595 score] exam demonstrating strong English listening and reading skills.",
      year: { date: "2022", type: "Certificate" },
      image: "/images/Toeic2022.jpg",
      delay: "0s",
    },
    {
      title: "Responsive Web Design Certificate",
      description: "Earned certification from freeCodeCamp by building responsive websites using HTML and CSS, including Flexbox and CSS Grid.",
      year: { date: "2024", type: "Certificate" },
      image: "/images/Responsive_Web_Design_Certificate.png",
      delay: "0s",
    },
    {
      title: "TOEIC English Proficiency Test",
      description: "Successfully passed the TOEIC with [540 score] exam demonstrating strong English listening and reading skills.",
      year: { date: "2025", type: "Certificate" },
      image: "/images/Toeic2025.jpg",
      delay: "0s",
    },
    {
      title: "Best Production Award – Short Film Competition",
      description: "Our short film 'Last Seat' received the Best Production award for its outstanding cinematography, editing, and overall technical execution.",
      year: { date: "2025", type: "Award" },
      image: [
        "/images/Reward1_1.jpg",
        "/images/Reward1_2.jpg"
      ],
      delay: "0.2s",
    },
  ];

  useEffect(() => {
    const intervals = awards.map((award, idx) => {
      const isArray = Array.isArray(award.image);
      if (!isArray) return null;

      return setInterval(() => {
        setAwardImageIndexes((prev) => ({
          ...prev,
          [idx]: ((prev[idx] || 0) + 1) % award.image.length,
        }));
      }, 5000);
    });

    return () => intervals.forEach((i) => i && clearInterval(i));
  }, [awards]);

  const projects = [
    {
      title: "Smart IoT Trash Bin",
      description: "An IoT-based smart trash bin that detects fill levels using ultrasonic sensors and sends real-time data to a monitoring dashboard. Designed to optimize waste management and reduce overflow incidents in public areas",
      stack: ["Arduino IDE", "C", "ESP32"],
      type: "IoT Project",
      image: "/images/IOT_Project.png",
      galleryImages: ["/images/IOT.png"],
      live: null,
      delay: "0s",
    },
    {
      title: "LINE ChatBot",
      description: "A custom LINE chatbot designed to help employees log their daily work activities directly into Google Sheets. The bot supports message-based interaction, integrates with G Suite APIs, and streamlines work tracking with ease",
      stack: ["LINE Messaging API"],
      type: "Chatbot",
      image: "/images/Line_Chatbot.png",
      galleryImages: ["/images/linebot1.png", "/images/linebot2.png"],
      live: null,
      delay: "0.2s",
    },
    {
      title: "Car Detection using Image Processing",
      description:
        "A project that applies Python and OpenCV to detect and mark moving vehicles in video footage using motion-based image processing.",
      stack: ["Python", "OpenCV", "Computer Vision"],
      type: "Research / AI Project",
      image: "/images/car.png",
      galleryImages: ["/images/car1.png"],
      delay: "0.6s",
    },
    {
      title: "Last Seat",
      description: "Short Film Project – Horror short film",
      stack: ["Scripting", "Video Editing"],
      type: "Video production",
      image: "/images/lastseat.png",
      videoUrl: "https://www.youtube.com/watch?v=lVnwW_LEBmg",
      live: null,
      delay: "0.4s",
    },
  ];

  return (
    <>
      <section id="achievements" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
                Achievements &amp; Awards
            </h2>
            <p className="text-center text-gray-300 max-w-xl mx-auto mb-6 px-4 text-lg">
                A showcase of milestones, awards, and accomplishments earned through dedication and innovation.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full opacity-60"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* 🎖 Awards Section */}
            <div className={`space-y-8 transition-opacity duration-1000 ${awardsInView ? "opacity-100" : "opacity-0 translate-y-12"}`} ref={awardsRef}>
              <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                🏆 Awards & Certificates
              </h3>
              <div className="grid gap-8">
                {awards.map((award, i) => {
                  const currentImage = Array.isArray(award.image)
                    ? award.image[awardImageIndexes[i] || 0]
                    : award.image;

                  return (
                    <div
                      key={i}
                      className="group relative bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 p-8 rounded-3xl border border-purple-400/20 backdrop-blur-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 hover:border-purple-400/50 animate-fade-in-left hover:scale-105"
                      style={{ animationDelay: award.delay }}
                    >
                      <div className="relative overflow-hidden rounded-2xl mb-6 group-hover:shadow-2xl transition-all duration-500">
                        <img
                          src={currentImage}
                          alt={award.title}
                          className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-xl font-bold text-purple-400 mb-3">{award.title}</h4>
                        <p className="text-gray-300">{award.description}</p>
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t border-purple-400/20">
                        <div className="inline-flex gap-2">
                          <span
                            className={`text-sm font-bold px-4 py-2 rounded-full border ${
                              award.year.type === "Certificate"
                                ? "text-green-400 bg-green-400/10 border-green-400/30"
                                : "text-purple-400 bg-purple-400/10 border-purple-400/30"
                            }`}
                          >
                            {award.year.date}
                          </span>
                          <span
                            className={`text-sm font-bold px-4 py-2 rounded-full border ${
                              award.year.type === "Certificate"
                                ? "text-green-400 bg-green-400/10 border-green-400/30"
                                : "text-purple-400 bg-purple-400/10 border-purple-400/30"
                            }`}
                          >
                            {award.year.type}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400 font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          Achievement Unlocked ✨
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 🌐 Projects Section */}
            <div className={`space-y-8 transition-opacity duration-1000 ${projectsInView ? "opacity-100" : "opacity-0 translate-y-12"}`} ref={projectsRef}>
              <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                🌐 Achievements
              </h3>
              <div className="grid gap-8">
                {projects.map((proj, i) => (
                  <div
                    key={i}
                    className="group relative bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 p-8 rounded-3xl border border-blue-400/20 backdrop-blur-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-700 hover:border-blue-400/50 animate-fade-in-right hover:scale-105"
                    style={{ animationDelay: proj.delay }}
                  >
                    <div className="relative overflow-hidden rounded-2xl mb-6 group-hover:shadow-2xl transition-all duration-500">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-6">
                        <span className="text-white font-bold text-lg">Live Preview</span>
                      </div>

                      {/* ปุ่มเปิด modal */}
                      {proj.galleryImages ? (
                        <button
                          onClick={() => openGallery(proj.galleryImages)}
                          className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/50 group-hover:opacity-100 opacity-0"
                        >
                          📷
                        </button>
                      ) : (
                        <button
                          onClick={() => openModal(proj.videoUrl)}
                          className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/50 group-hover:opacity-100 opacity-0"
                        >
                          ▶️
                        </button>
                      )}
                    </div>

                    <div className="mb-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold text-blue-400 mb-3">{proj.title}</h4>
                          <p className="text-gray-300">{proj.description}</p>
                        </div>
                        <span className="text-sm text-blue-400 font-bold bg-blue-400/10 px-4 py-2 rounded-full border border-blue-400/30 ml-4">
                          {proj.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {proj.stack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gradient-to-r from-blue-400/20 to-purple-400/20 text-blue-300 px-3 py-1 rounded-full border border-blue-400/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      {proj.live && (
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link relative inline-flex items-center justify-center flex-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-500 overflow-hidden"
                        >
                          <span className="relative z-10 flex items-center">
                            <span className="mr-3">🚀</span>ไปดูเว็บไซต์
                            <span className="ml-3 transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover/link:opacity-100 transition-opacity duration-500 z-0"></div>
                        </a>
                      )}
                      {!proj.galleryImages && (
                        <button
                          onClick={() => openModal(proj.videoUrl)}
                          className="group/video relative inline-flex items-center justify-center px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 rounded-2xl hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-500 overflow-hidden w-full"
                        >
                          <span className="relative z-10 flex items-center">
                            <span className="mr-2">🎥</span>ดูวิดีโอ
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover/video:opacity-100 transition-opacity duration-500"></div>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* วิดีโอ Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="w-full max-w-4xl mx-auto">
            {/* container ปุ่ม X กับ รูป */}
            <div className="flex justify-end mb-2 px-2">
              <button
                onClick={closeModal}
                className="text-white hover:text-purple-400 transition-colors duration-300 text-3xl"
                aria-label="Close Video Modal"
              >
                ✕
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
              <iframe
                src={videoUrl}
                title="Demo Video"
                className="w-full aspect-video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Demo Video</h3>
              <p className="text-gray-300">การสาธิตการใช้งานแพลตฟอร์ม</p>
            </div>
          </div>
        </div>
      )}

      {/* แกลเลอรี่ Modal (ภาพสไลด์) */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="w-full max-w-4xl">
            {/* ปุ่ม X ข้างบนขวาของรูป */}
            <div className="flex justify-end mb-2 px-2">
              <button
                onClick={closeGallery}
                className="text-white hover:text-purple-400 transition-colors duration-300 text-3xl"
                aria-label="Close Gallery Modal"
              >
                ✕
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
              <img
                src={galleryImages[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
                className="w-full max-h-[600px] object-contain"
              />
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-purple-600 bg-opacity-70 hover:bg-opacity-90 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl select-none"
                aria-label="Previous Image"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-purple-600 bg-opacity-70 hover:bg-opacity-90 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl select-none"
                aria-label="Next Image"
              >
                ›
              </button>
            </div>
            <div className="mt-4 text-white font-semibold">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
