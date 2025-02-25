
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, MessageSquare, Phone } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Passionate Full Stack Developer specializing in MERN Stack, Next.js, and modern web technologies. Building scalable solutions with TypeScript, MongoDB, Firebase, and more.";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="about" className="min-h-screen flex items-center justify-center py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left space-y-8 animate-fade-in order-2 md:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                MERN Stack Developer
              </h1>
              <p className="text-xl text-white/60">
                {text}
              </p>
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/10" onClick={() => window.open('https://github.com/aman5182', '_blank')}>
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10" onClick={() => window.open('https://www.linkedin.com/in/aman0351/', '_blank')}>
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10" onClick={() => window.open('mailto:amanmishra5182@gmail.com')}>
                <Mail className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10" onClick={() => window.open('https://wa.me/917080163236', '_blank')}>
                <MessageSquare className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10" onClick={() => window.open('tel:+917080163236')}>
                <Phone className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center order-1 md:order-2">
            <Avatar className="w-64 h-64 animate-float border-4 border-white/10">
              <AvatarImage src="/lovable-uploads/53618af0-9c16-4d2f-9f77-48847d2bf986.png" alt="Profile" />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
