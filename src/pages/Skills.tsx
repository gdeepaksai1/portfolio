
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, Zap } from "lucide-react";

const skillCategories = [
  {
    category: "Programming",
    icon: Zap,
    skills: [
      { name: "Python", level: 95, proficiency: "Expert" },
      { name: "SQL", level: 95, proficiency: "Expert" },
      { name: "PySpark", level: 85, proficiency: "Advanced" },
      { name: "Shell/Bash", level: 75, proficiency: "Intermediate" }
    ]
  },
  {
    category: "ETL & Data Engineering",
    icon: TrendingUp,
    skills: [
      { name: "Apache Airflow", level: 90, proficiency: "Advanced" },
      { name: "Apache Spark", level: 85, proficiency: "Advanced" },
      { name: "dbt", level: 88, proficiency: "Advanced" },
      { name: "Kafka", level: 75, proficiency: "Intermediate" },
      { name: "Docker", level: 82, proficiency: "Advanced" }
    ]
  },
  {
    category: "Cloud Platforms",
    icon: Award,
    skills: [
      { name: "AWS", level: 85, proficiency: "Advanced" },
      { name: "GCP", level: 82, proficiency: "Advanced" },
      { name: "Azure", level: 70, proficiency: "Intermediate" }
    ]
  },
  {
    category: "Data Warehousing",
    icon: TrendingUp,
    skills: [
      { name: "Snowflake", level: 90, proficiency: "Advanced" },
      { name: "Amazon Redshift", level: 85, proficiency: "Advanced" },
      { name: "Google BigQuery", level: 88, proficiency: "Advanced" },
      { name: "MySQL", level: 80, proficiency: "Advanced" }
    ]
  },
  {
    category: "Visualization & BI",
    icon: Award,
    skills: [
      { name: "Tableau", level: 88, proficiency: "Advanced" },
      { name: "Power BI", level: 82, proficiency: "Advanced" },
      { name: "Plotly", level: 75, proficiency: "Intermediate" }
    ]
  },
  {
    category: "Machine Learning",
    icon: Zap,
    skills: [
      { name: "Scikit-learn", level: 75, proficiency: "Intermediate" },
      { name: "MLflow", level: 70, proficiency: "Intermediate" },
      { name: "XGBoost", level: 75, proficiency: "Intermediate" },
      { name: "CatBoost", level: 78, proficiency: "Intermediate" },
      { name: "SHAP", level: 70, proficiency: "Intermediate" },
      { name: "LIME", level: 68, proficiency: "Intermediate" },
      { name: "TensorFlow", level: 65, proficiency: "Intermediate" },
      { name: "PyTorch", level: 60, proficiency: "Beginner" }
    ]
  }
];

export const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    console.log("Skills component mounted");
    
    // Staggered animation for skills
    const timer = setTimeout(() => {
      skillCategories.forEach((category, catIndex) => {
        setTimeout(() => {
          const categorySkills = category.skills.map(skill => `${catIndex}-${skill.name}`);
          setAnimatedSkills(prev => new Set([...prev, ...categorySkills]));
        }, catIndex * 200);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-950 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-violet-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Technical Expertise
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive skill set spanning data engineering, cloud platforms, and machine learning
          </p>
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={categoryIndex}
                className={`transition-all duration-700 transform translate-y-0 opacity-100`}
                style={{ transitionDelay: `${categoryIndex * 150}ms` }}
                onMouseEnter={() => setHoveredCard(categoryIndex)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card className="h-full group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 bg-slate-900/80 border-slate-700/50 hover:border-cyan-500/50 backdrop-blur-sm relative overflow-hidden">
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <CardHeader className="pb-6 relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-5 h-5 text-cyan-400" />
                      </div>
                      <CardTitle className="text-xl text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
                        {category.category}
                      </CardTitle>
                    </div>
                    <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {category.skills.length} skills
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => {
                        const skillKey = `${categoryIndex}-${skill.name}`;
                        const isAnimated = animatedSkills.has(skillKey);
                        const isHovered = hoveredCard === categoryIndex;
                        
                        return (
                          <div key={skillIndex} className="group/skill">
                            <div className="flex justify-between items-center mb-3">
                              <span className="font-medium text-slate-200 group-hover/skill:text-cyan-400 transition-colors duration-200">
                                {skill.name}
                              </span>
                              <Badge 
                                variant="outline" 
                                className={`text-xs transition-all duration-300 ${
                                  skill.proficiency === "Expert" ? "text-cyan-400 border-cyan-400/50 bg-cyan-500/10 group-hover/skill:bg-cyan-500/20" :
                                  skill.proficiency === "Advanced" ? "text-violet-400 border-violet-400/50 bg-violet-500/10 group-hover/skill:bg-violet-500/20" :
                                  "text-slate-400 border-slate-400/50 bg-slate-500/10 group-hover/skill:bg-slate-500/20"
                                } ${isHovered ? 'scale-105' : ''}`}
                              >
                                {skill.proficiency}
                              </Badge>
                            </div>
                            
                            <div className="relative">
                              <div className="h-3 bg-slate-800/80 rounded-full overflow-hidden group-hover/skill:bg-slate-700/80 transition-colors duration-300">
                                <div
                                  className={`h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full transition-all duration-1000 ease-out shadow-sm group-hover/skill:shadow-md group-hover/skill:shadow-cyan-500/20 ${
                                    isHovered ? 'animate-pulse' : ''
                                  }`}
                                  style={{
                                    width: isAnimated ? `${skill.level}%` : '0%',
                                    transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                                  }}
                                />
                              </div>
                              <div className="text-xs text-slate-400 mt-1 text-right group-hover/skill:text-slate-300 transition-colors duration-200">
                                {skill.level}%
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
