
import { Navigation } from "@/components/Navigation";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { BlogSection } from "@/components/BlogSection";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                Deepak Sai
                <br />
                Guntreddi
              </h1>
              <div className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
                Senior Data Engineer
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                Data Engineer with <span className="text-blue-600 font-semibold">8+ years of experience</span> in data engineering, 
                analytics, and reporting across healthcare, public sector, and financial domains. Specialized in 
                <span className="text-purple-600 font-semibold"> cloud-native data platforms</span>, ETL/ELT pipelines, 
                and machine learning model deployment.
              </p>
            </div>
            
            <div className="animate-fade-in mb-12" style={{ animationDelay: '0.6s' }}>
              <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
                <div className="flex items-center gap-2 group">
                  <MapPin className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
                  <span>Omaha, NE</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <Phone className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
                  <span>+1 (402) 819-4838</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <Mail className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
                  <span>guntreddideepaksai@gmail.com</span>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore My Journey
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full relative">
            <div className="w-1 h-3 bg-muted-foreground rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse" />
          </div>
        </div>
      </section>

      <ExperienceSection />
      <SkillsSection />
      <BlogSection />

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-900/50 py-16 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            I'm always interested in discussing data engineering challenges, innovative solutions, 
            and opportunities to create impact through data.
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
              asChild
            >
              <a href="mailto:guntreddideepaksai@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
            </Button>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
              asChild
            >
              <a href="https://www.linkedin.com/in/deepak-sai-guntreddi-38b746369/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
              asChild
            >
              <a href="https://medium.com/@guntreddideepaksai/event-driven-machine-learning-pipelines-with-kafka-and-feature-stores-1cf94984bf76" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
                Medium
              </a>
            </Button>
          </div>
          
          <p className="text-muted-foreground">
            © 2024 Deepak Sai Guntreddi. Crafted with passion for data and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
