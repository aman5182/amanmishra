
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass-effect rounded-full px-6 py-3 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-white">
            Portfolio
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/60 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <Button variant="secondary">
            Resume
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
