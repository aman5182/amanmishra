
import { Card } from "@/components/ui/card";
import { Code2, ShoppingCart, Coins, Clock, Bot, LineChart, FileSearch } from "lucide-react";

const Testimonials = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with secure payments and order management",
      tech: "React, Node.js, MongoDB, Stripe",
      icon: <ShoppingCart className="w-6 h-6 text-white" />
    },
    {
      title: "Crypto Trading Platform",
      description: "Real-time cryptocurrency trading platform with market analysis",
      tech: "Next.js, TypeScript, WebSocket",
      icon: <Coins className="w-6 h-6 text-white" />
    },
    {
      title: "Queue Management System",
      description: "Advanced queue management system for distributed systems",
      tech: "Node.js, Redis, WebSocket",
      icon: <Clock className="w-6 h-6 text-white" />
    },
    {
      title: "Cron Scheduler",
      description: "Automated task scheduler with monitoring dashboard",
      tech: "Express, MongoDB, React",
      icon: <Clock className="w-6 h-6 text-white" />
    },
    {
      title: "Web Scraper",
      description: "Intelligent web scraping tool with data processing",
      tech: "Python, Node.js, MongoDB",
      icon: <Bot className="w-6 h-6 text-white" />
    },
    {
      title: "Analytics Tracker",
      description: "Real-time analytics tracking and visualization platform",
      tech: "React, Firebase, D3.js",
      icon: <LineChart className="w-6 h-6 text-white" />
    },
    {
      title: "File Converter",
      description: "Universal file format converter with cloud storage",
      tech: "Node.js, React, AWS S3",
      icon: <FileSearch className="w-6 h-6 text-white" />
    }
  ];

  return (
    <div id="projects" className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4 animate-fade-in">
          Featured Projects
        </h2>
        <p className="text-xl text-white/60 text-center mb-12 max-w-2xl mx-auto animate-fade-in">
          A selection of my recent work and personal projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 hover-lift glass-effect animate-scale-in">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                {project.icon}
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
