
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Programming",
    skills: [
      { name: "Python", level: 95, proficiency: "Expert" },
      { name: "SQL", level: 95, proficiency: "Expert" },
      { name: "R", level: 70, proficiency: "Intermediate" },
      { name: "Scala", level: 65, proficiency: "Intermediate" }
    ]
  },
  {
    category: "ETL & Data Engineering",
    skills: [
      { name: "Apache Airflow", level: 90, proficiency: "Advanced" },
      { name: "Apache Spark", level: 85, proficiency: "Advanced" },
      { name: "dbt", level: 88, proficiency: "Advanced" },
      { name: "Kafka", level: 75, proficiency: "Intermediate" }
    ]
  },
  {
    category: "Cloud Platforms",
    skills: [
      { name: "AWS (S3, Glue, Lambda, Textract)", level: 85, proficiency: "Advanced" },
      { name: "GCP (BigQuery, Dataflow)", level: 82, proficiency: "Advanced" },
      { name: "Azure", level: 70, proficiency: "Intermediate" }
    ]
  },
  {
    category: "Data Warehousing",
    skills: [
      { name: "Snowflake", level: 90, proficiency: "Advanced" },
      { name: "Amazon Redshift", level: 85, proficiency: "Advanced" },
      { name: "Google BigQuery", level: 88, proficiency: "Advanced" }
    ]
  },
  {
    category: "Visualization & BI",
    skills: [
      { name: "Tableau", level: 88, proficiency: "Advanced" },
      { name: "Power BI", level: 82, proficiency: "Advanced" },
      { name: "Plotly", level: 75, proficiency: "Intermediate" }
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker", level: 75, proficiency: "Intermediate" },
      { name: "Git", level: 85, proficiency: "Advanced" },
      { name: "REST APIs", level: 80, proficiency: "Intermediate" }
    ]
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Scikit-learn", level: 75, proficiency: "Intermediate" },
      { name: "MLflow", level: 70, proficiency: "Intermediate" },
      { name: "XGBoost", level: 75, proficiency: "Intermediate" },
      { name: "SHAP", level: 70, proficiency: "Intermediate" }
    ]
  },
  {
    category: "Data Modeling & Compliance",
    skills: [
      { name: "Star Schema Design", level: 95, proficiency: "Expert" },
      { name: "SCD Type 2", level: 90, proficiency: "Expert" },
      { name: "RBAC", level: 88, proficiency: "Expert" },
      { name: "Great Expectations", level: 85, proficiency: "Advanced" }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Communication", level: 90, proficiency: "Advanced" },
      { name: "Mentoring", level: 85, proficiency: "Advanced" },
      { name: "Problem-solving", level: 95, proficiency: "Expert" }
    ]
  }
];

export const Skills = () => {
  const [visibleCategories, setVisibleCategories] = useState<Set<number>>(new Set());
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    console.log("Skills component mounted, categories:", skillCategories.length);
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-category') || '0');
            console.log("Making skill category visible:", index);
            setVisibleCategories(prev => new Set([...prev, index]));
            
            setTimeout(() => {
              const categorySkills = skillCategories[index]?.skills.map(skill => `${index}-${skill.name}`) || [];
              console.log("Animating skills:", categorySkills);
              setAnimatedSkills(prev => new Set([...prev, ...categorySkills]));
            }, 300);
          }
        });
      },
      { threshold: 0.3 }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  const categoryRef = (el: HTMLDivElement | null, index: number) => {
    if (el && observerRef.current) {
      el.setAttribute('data-category', index.toString());
      observerRef.current.observe(el);
    }
  };

  console.log("Rendering Skills component with", skillCategories.length, "categories");

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Technical Expertise
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive skill set spanning data engineering, cloud platforms, and machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              ref={(el) => categoryRef(el, categoryIndex)}
              className={`transition-all duration-700 transform ${
                visibleCategories.has(categoryIndex)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <Card className="h-full group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 bg-slate-900/50 border-slate-700/50 hover:border-cyan-500/50 backdrop-blur-sm">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => {
                      const skillKey = `${categoryIndex}-${skill.name}`;
                      const isAnimated = animatedSkills.has(skillKey);
                      
                      return (
                        <div key={skillIndex} className="group/skill">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-slate-200 group-hover/skill:text-cyan-400 transition-colors duration-200">
                              {skill.name}
                            </span>
                            <Badge 
                              variant="outline" 
                              className={`text-xs border-slate-600 ${
                                skill.proficiency === "Expert" ? "text-cyan-400 border-cyan-400/50 bg-cyan-500/10" :
                                skill.proficiency === "Advanced" ? "text-violet-400 border-violet-400/50 bg-violet-500/10" :
                                "text-slate-400 border-slate-400/50 bg-slate-500/10"
                              }`}
                            >
                              {skill.proficiency}
                            </Badge>
                          </div>
                          
                          <div className="relative">
                            <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full transition-all duration-1000 ease-out shadow-sm"
                                style={{
                                  width: isAnimated ? `${skill.level}%` : '0%',
                                  transitionDelay: `${skillIndex * 100}ms`
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
