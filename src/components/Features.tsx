
import { Card } from "@/components/ui/card";
import { Code2, Layout, Server } from "lucide-react";

const Features = () => {
  const skills = [
    {
      icon: <Code2 className="w-10 h-10 text-white" />,
      title: "Frontend Development",
      description: "Expert in React, TypeScript, and modern CSS frameworks like Tailwind CSS"
    },
    {
      icon: <Server className="w-10 h-10 text-white" />,
      title: "Backend Development",
      description: "Proficient in Node.js, Express, and database management systems"
    },
    {
      icon: <Layout className="w-10 h-10 text-white" />,
      title: "UI/UX Design",
      description: "Creating intuitive and responsive user interfaces with modern design principles"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="p-6 hover-lift glass-effect">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 mx-auto">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{skill.title}</h3>
              <p className="text-white/60">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
