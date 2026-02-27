"use client";

import React, { useState, useRef, useEffect } from "react";

interface ParticleType {
  x: number;
  y: number;
  size: number;
}

// Componente para una partícula individual
const Particle = ({ style }: { style: React.CSSProperties }) => {
  return (
    <div
      className="absolute w-1 h-1 bg-blue-300/50 rounded-full"
      style={style}
    ></div>
  );
};

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });
  const [particles, setParticles] = useState<ParticleType[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const numParticles = 50;
    const newParticles = Array.from({ length: numParticles }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    const currentSection = sectionRef.current;
    if (currentSection) {
      currentSection.addEventListener("mousemove", handleMouseMove);
      currentSection.addEventListener("mouseleave", () =>
        setMousePosition({ x: -200, y: -200 })
      );
    }

    return () => {
      if (currentSection) {
        currentSection.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-40 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
          }}
        />

        {particles.map((p, i) => {
          const distance = Math.sqrt(
            Math.pow((mousePosition.x / window.innerWidth) * 100 - p.x, 2) +
              Math.pow((mousePosition.y / window.innerHeight) * 100 - p.y, 2)
          );
          const pushFactor = Math.max(0, 100 - distance) / 100;
          const dx =
            ((mousePosition.x / window.innerWidth) * 100 - p.x) *
            pushFactor *
            -0.1;
          const dy =
            ((mousePosition.y / window.innerHeight) * 100 - p.y) *
            pushFactor *
            -0.1;

          return (
            <Particle
              key={i}
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                transform: `translate(${dx}vw, ${dy}vh)`,
                transition: "transform 0.2s ease-out",
              }}
            />
          );
        })}
      </div>

      {/* Contenido principal centrado */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
          Angel Mario Vazquez
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 mt-2">
          Full Stack Developer
        </h2>
        <p className="mt-6 text-lg max-w-2xl text-gray-400 mx-auto">
        Full Stack Engineer with 6+ years of experience building enterprise-grade cloud applications. Experienced in AWS serverless and containerized architectures (ECS), SQL-based backend systems, and scalable frontend design using React and TypeScript. Strong background in cloud-native solutions, system modernization, and high-precision financial workflows.
        </p>
        <a
          href="/angel-portfolio-next-js/#proyectos"
          className="mt-8 inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg w-fit hover:bg-blue-700 transition-colors"
        >
          Watch my Projects
        </a>
      </div>
    </section>
  );
};
