
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Programming & Scripting",
    skills: [
      { name: "Python", level: 95, description: "Advanced data processing, ML, and automation" },
      { name: "SQL", level: 90, description: "Complex queries, optimization, and database design" },
      { name: "R", level: 70, description: "Statistical analysis and data visualization" },
      { name: "Scala", level: 65, description: "Big data processing with Spark" }
    ]
  },
  {
    category: "Data Engineering & ETL",
    skills: [
      { name: "Apache Airflow", level: 90, description: "Workflow orchestration and scheduling" },
      { name: "Apache Spark", level: 85, description: "Large-scale data processing" },
      { name: "dbt", level: 88, description: "Data transformation and modeling" },
      { name: "Kafka", level: 75, description: "Real-time data streaming" }
    ]
  },
  {
    category: "Cloud & Data Platforms",
    skills: [
      { name: "AWS", level: 85, description: "S3, Glue, Lambda, Redshift" },
      { name: "GCP", level: 82, description: "BigQuery, Dataflow, Cloud Storage" },
      { name: "Snowflake", level: 90, description: "Data warehousing and optimization" },
      { name: "Azure", level: 70, description: "Data Factory and Analytics" }
    ]
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Scikit-learn", level: 85, description: "Classical ML algorithms and modeling" },
      { name: "XGBoost", level: 80, description: "Gradient boosting and ensemble methods" },
      { name: "MLflow", level: 75, description: "ML lifecycle management" },
      { name: "SHAP/LIME", level: 78, description: "Model interpretability and explainability" }
    ]
  },
  {
    category: "Visualization & BI",
    skills: [
      { name: "Tableau", level: 88, description: "Advanced dashboards and analytics" },
      { name: "Power BI", level: 82, description: "Business intelligence and reporting" },
      { name: "Plotly", level: 75, description: "Interactive data visualizations" },
      { name: "D3.js", level: 65, description: "Custom web-based visualizations" }
    ]
  }
];

export const Skills = () => {
  const [visibleCategories, setVisibleCategories] = useState<Set<number>>(new Set());
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-category') || '0');
            setVisibleCategories(prev => new Set([...prev, index]));
            
            setTimeout(() => {
              const categorySkills = skillCategories[index].skills.map(skill => `${index}-${skill.name}`);
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

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Technical Expertise
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
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
              <Card className="h-full group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 bg-slate-900/80 border-slate-700 hover:border-cyan-500/50 backdrop-blur-sm">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl group-hover:text-cyan-400 transition-colors duration-300">
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
                            <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                              {skill.level}%
                            </Badge>
                          </div>
                          
                          <div className="relative">
                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full transition-all duration-1000 ease-out"
                                style={{
                                  width: isAnimated ? `${skill.level}%` : '0%',
                                  transitionDelay: `${skillIndex * 100}ms`
                                }}
                              />
                            </div>
                            
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 border border-slate-700 text-slate-200 text-sm rounded-lg opacity-0 group-hover/skill:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                              {skill.description}
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800" />
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
