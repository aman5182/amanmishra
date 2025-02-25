
import { Card } from "@/components/ui/card";
import { Code } from "lucide-react";

const Testimonials = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js",
      tech: "React, Node.js, MongoDB"
    },
    {
      title: "Task Management App",
      description: "Real-time task management application with collaborative features",
      tech: "TypeScript, Socket.io, Express"
    },
    {
      title: "Portfolio Generator",
      description: "Dynamic portfolio generator for developers with customizable themes",
      tech: "Next.js, Tailwind CSS, Supabase"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Featured Projects
        </h2>
        <p className="text-xl text-white/60 text-center mb-12 max-w-2xl mx-auto">
          A selection of my recent work and personal projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 hover-lift glass-effect">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-white/80 mb-4">{project.description}</p>
              <div className="text-white/60 text-sm">{project.tech}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
