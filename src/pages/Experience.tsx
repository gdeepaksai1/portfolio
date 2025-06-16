
import { useState, useEffect } from "react";
import { ExperienceHeader } from "@/components/experience/ExperienceHeader";
import { ExperienceStats } from "@/components/experience/ExperienceStats";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { BackgroundAnimation } from "@/components/experience/BackgroundAnimation";

const experiences = [
  {
    title: "Senior Data Engineer",
    company: "OneStaff Medical",
    period: "June 2023 – Present",
    location: "Omaha, NE"
  },
  {
    title: "Data Engineer", 
    company: "Republic Services",
    period: "April 2021 – May 2023",
    location: "Phoenix, AZ"
  },
  {
    title: "Data Engineer",
    company: "Atlantic Union Bank", 
    period: "Dec 2019 – Mar 2021",
    location: "Richmond, VA"
  },
  {
    title: "Data Engineer",
    company: "Depot",
    period: "May 2018 – Nov 2019",
    location: "Boca Raton, FL"
  },
  {
    title: "Data Engineering Intern",
    company: "Tvisha Technologies",
    period: "Apr 2017 – May 2018",
    location: "Hyderabad, India"
  }
];

export const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set([0, 1, 2, 3, 4]));

  useEffect(() => {
    console.log("Experience component mounted");
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-950 relative overflow-hidden">
      <BackgroundAnimation />

      <div className="container mx-auto px-6 relative">
        <ExperienceHeader />
        <ExperienceStats />
        
        <ExperienceTimeline>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 transform ${
                visibleItems.has(index) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } animate-slide-in-left`}
              style={{ transitionDelay: `${index * 200}ms`, animationDelay: `${0.6 + index * 0.2}s` }}
            >
              {/* Timeline dot with glow effect */}
              <div className="absolute left-6 w-6 h-6 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full border-4 border-slate-950 z-10 animate-glow"></div>
              
              {/* Simple experience entry */}
              <div className="ml-20">
                <div className="group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 bg-slate-900/80 border border-slate-700/50 hover:border-cyan-500/50 backdrop-blur-sm relative overflow-hidden rounded-lg p-6">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-semibold text-slate-200 group-hover:text-violet-400 transition-colors duration-300 mb-1">
                      {exp.company}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <span className="group-hover:text-slate-300 transition-colors duration-300">
                        {exp.period}
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className="group-hover:text-slate-300 transition-colors duration-300">
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ExperienceTimeline>
      </div>
    </div>
  );
};
