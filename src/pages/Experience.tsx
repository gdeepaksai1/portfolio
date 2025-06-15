
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Data Engineer",
    company: "OneStaff Medical",
    period: "June 2023 – Present"
  },
  {
    title: "Data Engineer", 
    company: "Republic Services",
    period: "April 2021 – May 2023"
  },
  {
    title: "Data Analyst",
    company: "Atlantic Union Bank", 
    period: "Dec 2019 – March 2021"
  },
  {
    title: "Business Intelligence Analyst",
    company: "Depot",
    period: "May 2018 – Nov 2019"
  },
  {
    title: "Data Analytics Intern",
    company: "Tvisha Technologies",
    period: "April 2017 – May 2018"
  }
];

export const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    console.log("Experience component mounted, experiences:", experiences);
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            console.log("Making item visible:", index);
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  const cardRef = (el: HTMLDivElement | null, index: number) => {
    if (el && observerRef.current) {
      el.setAttribute('data-index', index.toString());
      observerRef.current.observe(el);
    }
  };

  console.log("Rendering Experience component with", experiences.length, "experiences");

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            8+ years of data engineering excellence across diverse industries
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform md:-translate-x-0.5" />
          
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => cardRef(el, index)}
              className={`relative mb-12 transition-all duration-700 transform ${
                visibleItems.has(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform md:-translate-x-2 z-10 shadow-lg" />
              
              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2 md:mr-8' : 'md:pl-1/2 md:ml-8'}`}>
                <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-start gap-3">
                        <Briefcase className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <div className="flex-1">
                          <CardTitle className="text-xl text-slate-900 dark:text-slate-100 group-hover:text-blue-500 transition-colors duration-300">
                            {exp.title}
                          </CardTitle>
                          <p className="text-lg font-medium text-slate-700 dark:text-slate-200 mt-1">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-purple-500" />
                        <Badge variant="outline" className="border-purple-400 text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50">
                          {exp.period}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
