import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-32 px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <section id="contact" className="py-32 px-4 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
              Let's Create Something Amazing
            </h2>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in-up max-w-3xl mx-auto">
              Ready to turn your vision into a digital masterpiece?
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                Let's connect and make it happen.
              </span>
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="flex justify-center space-x-8 mb-16 animate-fade-in-up">
            <a
              href="https://github.com/TkritpooM"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full border border-purple-400/30 flex items-center justify-center hover:scale-110 transform transition-all duration-500 backdrop-blur-sm hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-400/25"
              style={{ animationDelay: "0s" }}
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                🐙
              </span>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 flex items-center justify-center hover:scale-110 transform transition-all duration-500 backdrop-blur-sm hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-400/25"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                💼
              </span>
            </a>
            <a
              href="mailto:th.kithiphum_st@tni.ac.th"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-20 h-20 bg-gradient-to-br from-pink-500/20 to-blue-500/20 rounded-full border border-purple-400/30 flex items-center justify-center hover:scale-110 transform transition-all duration-500 backdrop-blur-sm hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-400/25"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                📧
              </span>
            </a>
          </div>

          <div className="text-gray-400 animate-fade-in">
            <p className="text-lg mb-2">© 2025 Kithiphum Thitanhopat</p>
            <p className="text-sm">From concept to code, flawlessly done ✨</p>
          </div>
        </div>
      </section>
    </motion.section>
  );
}
