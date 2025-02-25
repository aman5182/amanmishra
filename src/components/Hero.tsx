
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <Avatar className="w-32 h-32 mx-auto border-4 border-white/10">
            <AvatarImage src="/lovable-uploads/53618af0-9c16-4d2f-9f77-48847d2bf986.png" alt="Profile" />
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Software Developer
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Passionate about creating elegant solutions to complex problems. Specializing in web development
              and modern JavaScript frameworks.
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" className="hover:bg-white/10">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-white/10">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-white/10">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
