
import { Mail, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-slate-950/80 border-t border-slate-800/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-2">
              Deepak Sai Guntreddi
            </h3>
            <p className="text-slate-400">Senior Data Engineer</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              asChild 
              className="hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 hover:scale-110 group"
            >
              <a href="tel:+14028194838">
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              asChild 
              className="hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 hover:scale-110 group"
            >
              <a href="mailto:guntreddideepaksai@gmail.com">
                <Mail className="w-5 h-5 group-hover:animate-pulse" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              asChild 
              className="hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 hover:scale-110 group"
            >
              <a href="https://www.linkedin.com/in/deepak-sai-guntreddi-5a37951ab/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 group-hover:animate-pulse" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              asChild 
              className="hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 hover:scale-110 group"
            >
              <a href="https://medium.com/@guntreddideepaksai/event-driven-machine-learning-pipelines-with-kafka-and-feature-stores-1cf94984bf76" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 group-hover:animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800/50 text-center">
          <p className="text-slate-400">
            © 2024 Deepak Sai Guntreddi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
