
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Contact = () => {
  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-white">Get in Touch</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Interested in working together? Let's discuss your project or opportunities for collaboration.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="glass-effect hover:bg-white/10">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
            <Button variant="secondary">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
