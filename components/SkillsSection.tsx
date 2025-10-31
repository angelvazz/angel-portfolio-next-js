"use client";

import React, { useRef, useState, MouseEvent } from "react";
import Image from "next/image";

const skills = [
  "js",
  "ts",
  "react",
  "nextjs",
  "html",
  "css",
  "materialui",
  "bootstrap",
  "tailwind",
  "nodejs",
  "express",
  "graphql",
  "python",
  "jest",
  "dynamodb",
  "postgresql",
  "mongodb",
  "firebase",
  "postman",
  "aws",
  "terraform",
  "docker",
  "webpack",
  "vite",
  "git",
];

const SkillIcon = ({
  iconName,
  mousePosition,
}: {
  iconName: string;
  mousePosition: { x: number; y: number } | null;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = (() => {
    if (!ref.current || mousePosition === null) return Infinity;
    const rect = ref.current.getBoundingClientRect();
    const iconCenterX = rect.left + rect.width / 2;
    const iconCenterY = rect.top + rect.height / 2;

    return Math.sqrt(
      Math.pow(mousePosition.x - iconCenterX, 2) +
        Math.pow(mousePosition.y - iconCenterY, 2)
    );
  })();

  const scale = distance < 100 ? 1 + ((100 - distance) / 100) * 0.75 : 1;

  return (
    <div
      ref={ref}
      className="flex items-center justify-center transition-transform duration-150 ease-out"
      style={{ transform: `scale(${scale})` }}
    >
      <Image
        src={`https://skillicons.dev/icons?i=${iconName}`}
        alt={`${iconName} icon`}
        width={64}
        height={64}
        className="pointer-events-none"
      />
    </div>
  );
};

export const SkillsSection = () => {
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setMousePosition(null);
  };

  return (
    <section id="habilidades" className="py-20">
      <h2 className="text-5xl font-bold text-white mb-16 text-center">
        Skills & Tools
      </h2>
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex flex-wrap gap-6 justify-center items-center"
      >
        {skills.map((skill) => (
          <SkillIcon
            key={skill}
            iconName={skill}
            mousePosition={mousePosition}
          />
        ))}
      </div>
    </section>
  );
};
