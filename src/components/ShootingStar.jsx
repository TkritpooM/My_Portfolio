import React, { useEffect, useState } from "react";

function generateShootingStars(count = 3) {
  const shootingStars = [];
  for (let i = 0; i < count; i++) {
    const angle = 20 + Math.random() * 50;
    shootingStars.push({
      id: i,
      delay: Math.random() * 15,
      duration: 2 + Math.random() * 6,
      length: 80 + Math.random() * 40,
      thickness: 2 + Math.random() * 1.5,
      top: Math.random() * 20,        // ดาวตกเริ่มจากบน (0-20 vh)
      leftStart: -20 - Math.random() * 20,
      angle,
    });
  }
  return shootingStars;
}

export default function ShootingStar() {
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    setShootingStars(generateShootingStars(6)); // กำหนดจำนวนดาวตกได้ตามต้องการ
  }, []);

  return (
    <>
      {shootingStars.map(({ id, delay, duration, length, thickness, top, leftStart, angle }) => {
        const rad = (angle * Math.PI) / 180;
        const translateX = Math.cos(rad) * 130;
        const translateY = Math.sin(rad) * 60;

        return (
          <style key={"style-shooting-" + id}>{`
            @keyframes shooting-${id} {
              0% {
                transform: translate(0, 0) rotate(${angle + 180}deg);
                opacity: 1;
              }
              80% {
                opacity: 0.8;
              }
              100% {
                transform: translate(${translateX}vw, ${translateY}vh) rotate(${angle + 180}deg);
                opacity: 0;
              }
            }
          `}</style>
        );
      })}

      {shootingStars.map(({ id, delay, duration, length, thickness, top, leftStart, angle }) => (
        <div
          key={"shooting-" + id}
          className="shooting-star"
          style={{
            top: `${top}vh`,
            left: `${leftStart}vw`,
            width: `${length}px`,
            height: `${thickness}px`,
            transformOrigin: "left center",
            animation: `shooting-${id} ${duration}s linear infinite`,
            animationDelay: `${delay}s`,
            background: `linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4), rgba(255,255,255,0))`,
            borderRadius: "9999px",
            filter: "drop-shadow(0 0 6px rgba(255,255,255,0.9))",
            position: "fixed",
            pointerEvents: "none",
            opacity: 0,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </>
  );
}
