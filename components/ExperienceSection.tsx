"use client";

import React, { useState, useRef, useEffect } from "react";

interface Experience {
  title: string;
  company: string;
  dates: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "AdvisoryCloud",
    dates: "Aug 2023 - Apr 2025",
    achievements: [
      "Drove the full-stack implementation of new features and core platform enhancements, delivering robust serverless solutions on AWS to improve functionality and user experience.",
      "Engineered a scalable, public-facing Next.js solution designed for over 10,000 users by implementing an on-demand page generation system in AWS.",
      "Architected a real-time, event-driven calendar synchronization engine, enabling users to subscribe to multiple event feeds and receive automated updates from Google & Apple calendars at scale.",
    ],
  },
  {
    title: "Software Engineer",
    company: "ORIGYN Foundation",
    dates: "Sep 2022 - Oct 2023",
    achievements: [
      "Developed end-to-end Decentralized Applications (DApps) using React.js and TypeScript for the frontend and Motoko for the backend.",
      "Engineered a serverless monitoring pipeline on AWS using Lambda and Terraform to proactively prevent DApp service disruptions.",
      "Successfully migrated the entire monitoring solution from its serverless AWS architecture to a monolithic on-premise Express.js application.",
    ],
  },
  {
    title: "Front End Lead",
    company: "B-MORE",
    dates: "Jul 2022 - Sep 2022",
    achievements: [
      "Spearheaded the project's strategic planning by conducting a deep architectural analysis and collaborating directly with clients and PMs.",
      "Led the hands-on re-engineering of the application with modern React, delivering the full project in just 3 months—50% ahead of schedule.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "PideDirecto",
    dates: "Mar 2022 - Jul 2022",
    achievements: [
      "Owned the entire mobile product lifecycle for a portfolio of 15+ white-label applications for both iOS and Android.",
      "Spearheaded the complete, full-stack redesign of a key client's application, re-engineering the UI in React Native and the serverless backend on AWS Lambda.",
    ],
  },
  {
    title: "Full Stack Developer Jr",
    company: "Suministros Tridan",
    dates: "Dic 2020 - Nov 2021",
    achievements: [
      "Co-developed a dual-function business platform from the ground up, featuring a public e-commerce site (React.js) and an integrated back-office system (Node.js/Express.js).",
      "Implemented critical full-stack features such as secure payment gateway integrations and product management systems.",
    ],
  },
];

export const ExperienceSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        scrollContainerRef.current;
      const scrollableHeight = scrollHeight - clientHeight;

      let scrollPercentage = 0;
      if (scrollableHeight > 0) {
        scrollPercentage = (scrollTop / scrollableHeight) * 100;
      }

      const clampedPercentage = Math.min(100, Math.max(0, scrollPercentage));

      setScrollTop(clampedPercentage);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE y Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
      <section id="experiencia" className="py-20">
        <h2 className="text-4xl font-bold text-white mb-12">
          Professional Experience
        </h2>
        <div className="flex">
          <div className="relative w-8 flex-shrink-0">
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-700 -translate-x-1/2"></div>
            <div
              className="absolute left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800 -translate-x-1/2 transition-all duration-100 ease-linear"
              style={{ top: `calc(${scrollTop}% - 0.5rem)` }}
            ></div>
          </div>

          <div
            ref={scrollContainerRef}
            className="w-full max-h-[70vh] overflow-y-auto pl-8 pr-4 hide-scrollbar"
          >
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12">
                <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                <p className="text-lg font-semibold text-blue-400">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-500 mb-4">{exp.dates}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  {exp.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
