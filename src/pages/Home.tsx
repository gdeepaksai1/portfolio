
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Cloud, BarChart3 } from "lucide-react";

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
              Deepak Sai Guntreddi
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-200 mb-8 animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
              Senior Data Engineer
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-in-right" style={{ animationDelay: "0.6s" }}>
              8+ years of experience crafting scalable data engineering solutions, ML pipelines, and cloud-native architectures across healthcare, finance, and technology sectors.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-20 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: "0.9s" }}>
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white border-0 hover:scale-105 transition-all duration-300 group px-8 py-6 text-lg shadow-lg hover:shadow-cyan-500/25"
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
              className="border-slate-600 text-slate-200 hover:bg-slate-800/50 hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg backdrop-blur-sm"
            >
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: "Data Engineering",
                description: "Scalable ETL/ELT pipelines, data warehousing, and real-time processing with Apache Airflow, Spark, and dbt",
                delay: "1.2s"
              },
              {
                icon: Cloud,
                title: "Cloud Architecture",
                description: "AWS, GCP, and Azure cloud-native solutions with Snowflake, BigQuery, and modern data platforms",
                delay: "1.4s"
              },
              {
                icon: BarChart3,
                title: "Analytics & ML",
                description: "Machine learning pipelines, predictive modeling, and business intelligence with Tableau and Power BI",
                delay: "1.6s"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-slate-900/40 border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 animate-fade-in backdrop-blur-sm`}
                style={{ animationDelay: feature.delay }}
              >
                <feature.icon className="w-12 h-12 text-cyan-400 mb-6 group-hover:scale-110 group-hover:text-violet-400 transition-all duration-300" />
                <h3 className="text-xl font-semibold text-slate-100 mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
