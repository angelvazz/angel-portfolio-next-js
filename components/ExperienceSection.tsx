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
    company: "Blue People",
    dates: "Nov 2025 - Current",
    achievements: [
      "Project 1 – Enterprise Inquiry & Document Management Platform",
      "Led frontend development across two interconnected enterprise applications using React and TypeScript, ensuring seamless integration, shared authentication flows, and consistent user experience. Designed modular UI components and implemented secure role-based workflows for document lifecycle management and inquiry processing.",
     "Contributed to backend development within a serverless AWS architecture (Lambda, API Gateway, DynamoDB, S3) by building and extending APIs, developing functional modules, and collaborating on architectural decisions. Integrated secure authentication via Amazon Cognito and Microsoft Entra ID (SSO/SAML) and supported production-ready cloud deployments following AWS best practices.",
      
      
      
      "Project 2 – Enterprise Land & Asset Management System",
      "Leading frontend development for the modernization of a complex land and asset management platform, building a new UI layer in React and TypeScript to replace legacy server-rendered views. Responsible for designing scalable frontend architecture, integrating real-time features, and ensuring seamless communication with backend services.",
      "Collaborating on the transition to a containerized AWS infrastructure (Docker + ECS), contributing architectural proposals and developing backend modules and APIs required to support frontend functionality. Working closely with infrastructure and backend teams to ensure proper API contracts, SQL integration, and system stability within a cloud-native environment.",
      
        ],
  },
  {
    title: "Full Stack Developer",
    company: "AdvisoryCloud",
    dates: "Aug 2023 - Sep 2025",
    achievements: [
      "Redesigned and optimized React and Next.js interfaces, improving load times and user experience across core business features. Implemented performance tuning techniques like dynamic imports, memoization, and lazy loading to enhance UI responsiveness.",
      "Developed a scalable Next.js SEO solution that automatically generated a static page for each user profile (10,000+), improving discoverability and driving measurable growth in subscription leads through higher organic visibility.",
      "Architected a real-time calendar integration engine with Google & Apple Calendars, enabling users to automatically sync company events to their personal calendars, ensuring instant updates on schedule changes and new events.",
      "Collaborated across product and engineering teams to implement serverless AWS solutions (Lambda, EventBridge, DynamoDB, S3), reducing infrastructure costs while scaling efficiently.",
    ],
  },
  {
    title: "Software Engineer",
    company: "ORIGYN Foundation",
    dates: "Sep 2022 - Oct 2023",
    achievements: [
      "Developed and deployed multiple Decentralized Applications (DApps) with React.js, TypeScript and Jest, integrating with Motoko-based blockchain backends to enable seamless, real-time user interaction with digital assets.",
      "Built an automated asset monitoring pipeline on AWS (Lambda, Terraform, MongoDB, GitHub Actions CI/CD) that tracked blockchain gas levels across hundreds of NFTs and DApps, sending proactive Slack alerts to prevent costly service interruptions.",
      "Reduced downtime of blockchain assets by eliminating unexpected expirations, ensuring business continuity and safeguarding user transactions.",
      "Re-engineered the monitoring solution as an on-premise microservice with Express.js and Docker, cutting ongoing cloud infrastructure costs by 100% while retaining full real-time monitoring and alerting functionality.",
      "Collaborated cross-functionally with DevOps and product teams to integrate monitoring into existing workflows, improving system reliability and stakeholder visibility.",
    ],
  },
  {
    title: "Front End Lead",
    company: "B-MORE",
    dates: "Jul 2022 - Sep 2022",
    achievements: [
      "Revitalized a failing client–supplier platform by re-architecting its React codebase with modern best practices, transforming an unstable product into a fully functional application.",
      "Partnered directly with clients and PMs to identify root causes of system failures, translate business needs into actionable technical requirements, and build a clear roadmap with milestones and deliverables.",
      "Delivered the project in 3 months—50% ahead of schedule, meeting all functional requirements while significantly improving performance, maintainability, and scalability.",
      "Mentored developers on React standards and reusable component design, ensuring long-term sustainability and reducing future technical debt.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "PideDirecto",
    dates: "Mar 2022 - Jul 2022",
    achievements: [
      "Led the end-to-end lifecycle of 15+ white-label mobile apps built with React Native, customizing features per client requests and managing successful deployments to both the Apple App Store and Google Play Store.",
      "Redesigned and modernized the UI/UX of a flagship restaurant application, improving usability and customer satisfaction, while integrating improments in serverless backend on AWS Lambda and Node.js to power critical APIs (order processing, authentication).",
      "Enhanced core platform functionality across frontend and backend, delivering faster response times, reducing bugs, and ensuring smooth adoption by new clients.",
      "Collaborated with clients to translate business needs into technical features, accelerating time-to-market for custom solutions.",
    ],
  },
  {
    title: "Full Stack Developer Jr",
    company: "Suministros Tridan",
    dates: "Dic 2020 - Nov 2021",
    achievements: [
      "Contributed to the design and development of a dual-purpose business platform, combining a customer-facing e-commerce site and an internal dashboard for inventory and analytics, built with React.js, Redux, Node.js, and PostgreSQL.",
      "Implemented and optimized key frontend features such as secure payment flows, product management interfaces, and real-time analytics dashboards, improving usability and visual clarity for both clients and staff.",
      "Refactored React components and improved state management, enhancing UI responsiveness and reducing frontend-related errors reported by users.",
      "Collaborated with designers and backend developers to deliver new features on schedule, ensuring consistent UX across both the public and internal applications.",
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
