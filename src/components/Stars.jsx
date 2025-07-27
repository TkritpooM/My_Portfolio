import React, { useEffect, useState } from "react";

const STAR_COUNT = 30;

// ชุดสีไล่โทนหลายแบบให้สุ่ม
const gradients = [
  "from-purple-400 to-pink-400",
  "from-pink-400 to-yellow-400",
  "from-green-400 to-blue-400",
  "from-indigo-400 to-purple-500",
  "from-red-400 to-pink-500",
];

function generateStars() {
  const stars = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      id: i,
      top: Math.random() * 100, // % vh
      left: Math.random() * 100, // % vw
      delay: Math.random() * 5, // s
      size: Math.random() * 6 + 4, // ขนาด 4px - 10px
      gradient: gradients[Math.floor(Math.random() * gradients.length)],
    });
  }
  return stars;
}

export default function Stars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(generateStars());
  }, []);

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .star {
          animation: twinkle 3s infinite ease-in-out;
        }
      `}</style>

      {stars.map(({ id, top, left, delay, size, gradient }) => (
        <div
          key={id}
          className={`star fixed pointer-events-none rounded bg-gradient-to-r ${gradient}`}
          style={{
            top: `${top}vh`,
            left: `${left}vw`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${delay}s`,
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
        />
      ))}
    </>
  );
}
