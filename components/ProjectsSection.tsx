import React from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Motor de Sincronización en Tiempo Real",
    description:
      "Sistema event-driven para sincronizar múltiples feeds de eventos de Google y Apple a gran escala, asegurando actualizaciones automáticas para los usuarios.",
    image: "https://placehold.co/600x400/1f2937/ffffff?text=Calendarios",
    tags: ["AWS", "EventBridge", "Lambda", "Node.js"],
  },
  {
    title: "Pipeline de Monitoreo Serverless",
    description:
      "Solución en AWS para monitorear proactivamente los niveles de gas fees en cientos de contenedores blockchain, previniendo disrupciones con alertas en tiempo real.",
    image: "https://placehold.co/600x400/1f2937/ffffff?text=Blockchain",
    tags: ["AWS", "Lambda", "Terraform", "Slack"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-20">
      <h2 className="text-4xl font-bold text-white mb-12">
        Proyectos Destacados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden group"
          >
            <Image
              src={project.image}
              alt={`Imagen de ${project.title}`}
              width={600}
              height={400}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-2 text-gray-400">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-xs font-semibold px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
