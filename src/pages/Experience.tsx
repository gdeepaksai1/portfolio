
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

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

export const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set([0, 1, 2, 3, 4]));

  useEffect(() => {
    console.log("Experience component mounted");
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Professional Journey
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            8+ years of data engineering excellence across diverse industries
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-cyan-500"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 transform translate-y-0 opacity-100`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full border-4 border-slate-950 z-10"></div>
                
                {/* Experience card */}
                <div className="ml-16">
                  <Card className="group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 bg-slate-900/80 border-slate-700/50 hover:border-cyan-500/50 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-lg">
                            <Briefcase className="w-6 h-6 text-cyan-400" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-2xl text-slate-100 group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                              {exp.title}
                            </CardTitle>
                            <div className="flex flex-col gap-2">
                              <p className="text-lg font-semibold text-slate-200">
                                {exp.company}
                              </p>
                              <div className="flex items-center gap-4 text-sm text-slate-400">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  <Badge variant="outline" className="border-violet-400/50 text-violet-300 bg-violet-500/10">
                                    {exp.period}
                                  </Badge>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  <span>{exp.location}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-300">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
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
