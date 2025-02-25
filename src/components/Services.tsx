
import { Code2, Server, Database, Bug, Rocket } from "lucide-react";
import { Card } from "./ui/card";

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-10 h-10 text-white" />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using React, Next.js, and modern CSS frameworks."
    },
    {
      icon: <Server className="w-10 h-10 text-white" />,
      title: "Backend Development",
      description: "Creating robust server-side applications with Node.js, Express, and RESTful APIs."
    },
    {
      icon: <Database className="w-10 h-10 text-white" />,
      title: "Database Management",
      description: "Designing and implementing efficient database solutions using MongoDB, MySQL, and more."
    },
    {
      icon: <Bug className="w-10 h-10 text-white" />,
      title: "Bug Fixing",
      description: "Identifying and resolving software issues to ensure smooth application performance."
    },
    {
      icon: <Rocket className="w-10 h-10 text-white" />,
      title: "Complete Solutions",
      description: "Building full-stack applications from scratch with modern animations and features."
    }
  ];

  return (
    <div id="services" className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">My Services</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto animate-fade-in">
            Comprehensive web development solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover-lift glass-effect animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-white/60">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
