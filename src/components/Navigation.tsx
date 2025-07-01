
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Mail, Linkedin, Phone, Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/experience", label: "Experience" },
    { path: "/skills", label: "Skills" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            Deepak Sai Guntreddi
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  isActive(item.path)
                    ? "text-cyan-400"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                {item.label}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full transition-all duration-300 ${
                  isActive(item.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </Link>
            ))}
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              asChild 
              className="hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 hover:scale-110 text-slate-300"
            >
              <a href="tel:+14028194838">
                <Phone className="w-4 h-4" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              asChild 
              className="hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 hover:scale-110 text-slate-300"
            >
              <a href="mailto:guntreddideepaksai@gmail.com">
                <Mail className="w-4 h-4" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              asChild 
              className="hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 hover:scale-110 text-slate-300"
            >
              <a href="https://www.linkedin.com/in/deepak-sai-guntreddi-5a37951ab/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              asChild 
              className="hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 hover:scale-110 text-slate-300"
            >
              <a href="https://medium.com/@guntreddideepaksai" target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 text-slate-300"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-800/50 pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-cyan-400 bg-cyan-500/20 rounded-lg"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
