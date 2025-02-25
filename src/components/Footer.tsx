
import { Github, Twitter, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2 text-white/60">
              <Mail className="w-4 h-4" />
              <span>amanmishra5182@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-white/60">
              <Phone className="w-4 h-4" />
              <span>+91-7080163236</span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-white/10" onClick={() => window.open('https://github.com/aman5182', '_blank')}>
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-white/10" onClick={() => window.open('https://twitter.com', '_blank')}>
              <Twitter className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-white/10" onClick={() => window.open('https://www.linkedin.com/in/aman0351/', '_blank')}>
              <Linkedin className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-white/60">
            © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
