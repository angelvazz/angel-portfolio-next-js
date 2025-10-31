import React from "react";
import Image, { StaticImageData } from "next/image";
import ChatAiImg from "@/screenshot/chat-ai.png";
import OasisAiImg from "@/screenshot/oasis-ai.png";

interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    title: "AI Chatbot Portfolio",
    description:
      "An AI-powered portfolio application built with Next.js, TypeScript, and TailwindCSS. Features a clean, modern chat interface that connects to a serverless backend, showcasing conversational AI integration and responsive UI/UX design.",
    image: ChatAiImg,
    tags: ["Next.js", "TypeScript", "TailwindCSS", "AI Integration"],
    repoUrl: "https://github.com/angelvazz/ai-chatbot-portfolio",
  },
  {
    title: "AI Generated Oasis Project",
    description:
      "A generative AI experience that transforms natural language prompts into immersive 3D desert environments. Developed with React and modern web technologies, focusing on real-time rendering and creative user interaction.",
    image: OasisAiImg,
    tags: ["React", "Three.js", "AI"],
    repoUrl: "https://github.com/angelvazz/ai-generated-oasis-project",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-20">
      <h2 className="text-4xl font-bold text-white mb-12">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-gray-800 rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-gray-700/30 transition-shadow duration-300"
          >
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              placeholder="blur"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <div className="p-6 flex flex-col h-[320px] relative">
              {/* Contenido principal */}
              <div className="flex-1 pr-4">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-400 text-sm leading-relaxed break-words">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-xs font-semibold px-2 py-1 rounded text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botón fijo abajo a la derecha */}
              {project.repoUrl && (
                <div className="absolute bottom-6 right-6">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-all duration-200 shadow-md"
                  >
                    🚀 View Project
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
