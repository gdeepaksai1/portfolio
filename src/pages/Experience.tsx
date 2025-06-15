
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const experiences = [
  {
    title: "Senior Data Engineer",
    company: "OneStaff Medical",
    period: "June 2023 – Present",
    location: "Omaha, NE",
    highlights: [
      "Built predictive ML models to forecast candidate fall-offs and placement likelihood",
      "Deployed ML models using MLflow and Docker with real-time inference",
      "Designed scalable PySpark and Airflow ETL pipelines",
      "Created Tableau dashboards for recruiter performance analytics"
    ]
  },
  {
    title: "Data Engineer", 
    company: "Republic Services",
    period: "April 2021 – May 2023",
    location: "Phoenix, AZ",
    highlights: [
      "Built ML models using XGBoost to predict route delays and vehicle breakdowns",
      "Deployed ML APIs using GCP Cloud Run and Docker",
      "Orchestrated high-volume ETL jobs using Apache Airflow and PySpark",
      "Designed and optimized BigQuery marts for sustainability KPIs"
    ]
  },
  {
    title: "Data Analyst",
    company: "Atlantic Union Bank", 
    period: "Dec 2019 – March 2021",
    location: "Richmond, VA",
    highlights: [
      "Built customer segmentation models using logistic regression and K-Means",
      "Modeled MySQL marts to track customer behavior and delinquency trends",
      "Developed Tableau dashboards for finance, risk, and investor relations",
      "Automated monthly investor reports reducing turnaround by 90%"
    ]
  },
  {
    title: "Business Intelligence Analyst",
    company: "Depot",
    period: "May 2018 – Nov 2019",
    location: "Boca Raton, FL",
    highlights: [
      "Designed Tableau dashboards with row-level security",
      "Automated recurring reports using Power Query and SQL",
      "Conducted churn analysis using behavioral segmentation",
      "Created upsell opportunity reports tied to CRM metadata"
    ]
  },
  {
    title: "Data Analytics Intern",
    company: "Tvisha Technologies",
    period: "April 2017 – May 2018",
    location: "Hyderabad, India",
    highlights: [
      "Supported ETL development using SQL Server Integration Services",
      "Cleaned and validated client sales and supply chain datasets",
      "Created executive summaries and dashboard reports",
      "Consolidated data from ERP and CRM systems"
    ]
  }
];

const stats = [
  { label: "Years of Experience", value: 8, suffix: "+" },
  { label: "Projects Completed", value: 50, suffix: "+" },
  { label: "ML Models Deployed", value: 15, suffix: "+" },
  { label: "Data Pipelines Built", value: 100, suffix: "+" },
];

export const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set([0, 1, 2, 3, 4]));

  useEffect(() => {
    console.log("Experience component mounted");
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-950 relative overflow-hidden">
      {/* Enhanced background animations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent animate-fade-in">
            Professional Journey
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            8+ years of data engineering excellence across diverse industries
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16 animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <Card className="bg-slate-900/80 border-slate-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <TrendingUp className="w-5 h-5 text-cyan-400 mr-2" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-2">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-sm text-slate-300">{stat.label}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Enhanced vertical timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-violet-500 to-cyan-500 rounded-full"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 transform translate-y-0 opacity-100 animate-slide-in-left`}
                style={{ transitionDelay: `${index * 200}ms`, animationDelay: `${0.6 + index * 0.2}s` }}
              >
                {/* Enhanced timeline dot with glow effect */}
                <div className="absolute left-6 w-6 h-6 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full border-4 border-slate-950 z-10 animate-glow"></div>
                
                {/* Experience card with enhanced styling */}
                <div className="ml-20">
                  <Card className="group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 bg-slate-900/80 border-slate-700/50 hover:border-cyan-500/50 backdrop-blur-sm relative overflow-hidden">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <CardHeader className="pb-4 relative z-10">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                            <Briefcase className="w-6 h-6 text-cyan-400" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-2xl text-slate-100 group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                              {exp.title}
                            </CardTitle>
                            <div className="flex flex-col gap-2">
                              <p className="text-lg font-semibold text-slate-200 group-hover:text-violet-400 transition-colors duration-300">
                                {exp.company}
                              </p>
                              <div className="flex items-center gap-4 text-sm text-slate-400">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  <Badge variant="outline" className="border-violet-400/50 text-violet-300 bg-violet-500/10 group-hover:bg-violet-500/20 transition-colors duration-300">
                                    {exp.period}
                                  </Badge>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  <span className="group-hover:text-slate-300 transition-colors duration-300">{exp.location}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 relative z-10">
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-violet-400 transition-colors duration-300" />
                            <span className="text-sm leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
