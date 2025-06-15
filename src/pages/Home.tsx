
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Cloud, BarChart3, Download, Sparkles } from "lucide-react";
import { TypingAnimation } from "@/components/TypingAnimation";

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const typingTexts = [
    "Senior Data Engineer",
    "ML Pipeline Architect", 
    "Cloud Solutions Expert",
    "Data Analytics Leader"
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Enhanced background animations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-pink-500/10 to-violet-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* Enhanced Hero Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-cyan-400 mr-3 animate-pulse" />
              <span className="text-lg text-slate-300 font-medium">Welcome to my digital space</span>
              <Sparkles className="w-8 h-8 text-violet-400 ml-3 animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
              Deepak Sai Guntreddi
            </h1>
            
            <div className="text-2xl md:text-3xl text-slate-200 mb-8 h-12 flex items-center justify-center animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
              <TypingAnimation texts={typingTexts} />
            </div>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed animate-slide-in-right" style={{ animationDelay: "0.6s" }}>
              8+ years of experience crafting scalable data engineering solutions, ML pipelines, and cloud-native architectures across healthcare, finance, and technology sectors.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              {["Python", "PySpark", "AWS", "Snowflake", "MLflow", "Airflow"].map((tech, index) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-full text-sm text-slate-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-20 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: "1.1s" }}>
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white border-0 hover:scale-105 transition-all duration-300 group px-8 py-6 text-lg shadow-lg hover:shadow-cyan-500/25 animate-glow"
            >
              <Link to="/experience">
                View Experience
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-slate-600 text-slate-200 hover:bg-slate-800/50 hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg backdrop-blur-sm group"
            >
              <Link to="/contact">
                Get In Touch
                <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </Button>

            <Button 
              variant="outline" 
              size="lg" 
              className="border-violet-600 text-violet-200 hover:bg-violet-800/20 hover:border-violet-400 hover:text-violet-400 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg backdrop-blur-sm group"
              onClick={() => {
                // Placeholder for resume download
                console.log("Resume download clicked");
              }}
            >
              <Download className="mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              Resume
            </Button>
          </div>

          {/* Enhanced Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: "Data Engineering",
                description: "Scalable ETL/ELT pipelines, data warehousing, and real-time processing with Apache Airflow, Spark, and dbt",
                delay: "1.4s",
                gradient: "from-cyan-500/20 to-blue-500/20",
                iconColor: "text-cyan-400 group-hover:text-cyan-300",
                borderColor: "hover:border-cyan-500/50"
              },
              {
                icon: Cloud,
                title: "Cloud Architecture",
                description: "AWS, GCP, and Azure cloud-native solutions with Snowflake, BigQuery, and modern data platforms",
                delay: "1.6s",
                gradient: "from-violet-500/20 to-purple-500/20",
                iconColor: "text-violet-400 group-hover:text-violet-300",
                borderColor: "hover:border-violet-500/50"
              },
              {
                icon: BarChart3,
                title: "Analytics & ML",
                description: "Machine learning pipelines, predictive modeling, and business intelligence with Tableau and Power BI",
                delay: "1.8s",
                gradient: "from-pink-500/20 to-rose-500/20",
                iconColor: "text-pink-400 group-hover:text-pink-300",
                borderColor: "hover:border-pink-500/50"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-slate-900/40 border border-slate-700/50 ${feature.borderColor} hover:bg-slate-800/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 animate-fade-in backdrop-blur-sm relative overflow-hidden`}
                style={{ animationDelay: feature.delay }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <feature.icon className={`w-12 h-12 ${feature.iconColor} mb-6 group-hover:scale-110 transition-all duration-300`} />
                  <h3 className="text-xl font-semibold text-slate-100 mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
