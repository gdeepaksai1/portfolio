
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Data Engineer",
    company: "One Staff Medical",
    location: "Omaha, NE",
    period: "06/2023 – Present",
    highlights: [
      "Built predictive ML models (CatBoost, logistic regression) to forecast candidate fall-offs, placement likelihood, and onboarding delays using features engineered with dbt and Snowflake.",
      "Deployed ML models using MLflow and Docker, with real-time inference integrated into recruiter dashboards through RESTful APIs.",
      "Used SHAP and LIME to generate interpretable recruiter feedback on model-based candidate prioritization scores.",
      "Designed scalable PySpark and Airflow ETL pipelines to ingest and transform recruiter activity, compliance data, and ATS events from Bullhorn and internal systems.",
      "Modeled SCD Type 2 data marts in Snowflake for tracking assignment history, licensing timelines, and onboarding milestones.",
      "Created Tableau dashboards to visualize fill rate trends, recruiter performance rankings, and ML-based candidate readiness scores."
    ]
  },
  {
    title: "Data Engineer",
    company: "Republic Services",
    location: "Phoenix, AZ",
    period: "04/2021 – 05/2023",
    highlights: [
      "Built ML models using XGBoost and logistic regression to predict route delays and preempt vehicle breakdowns using GPS, weather, and telemetry data.",
      "Deployed ML APIs using GCP Cloud Run and Docker, integrating model outputs into operational dashboards used by dispatch teams.",
      "Visualized feature importance using SHAP to aid route managers in understanding delay risk drivers and recommend alternate dispatching.",
      "Orchestrated high-volume ETL jobs using Apache Airflow and PySpark, ingesting fuel usage, load weights, and site check-ins from 500+ waste facilities.",
      "Designed and optimized BigQuery marts using partitioned and clustered tables to support sustainability KPIs and customer billing reconciliation."
    ]
  },
  {
    title: "Data Analyst",
    company: "Atlantic Union Bank",
    location: "Richmond, VA",
    period: "12/2019 – 03/2021",
    highlights: [
      "Built customer segmentation models using logistic regression and K-Means in Scikit-learn to support credit scoring and personalized loan offers.",
      "Modeled MySQL marts to track customer behavior, product usage, and delinquency trends; used dimensional modeling for reporting layer.",
      "Developed Tableau dashboards for finance, risk, and investor relations, visualizing fund performance and credit risk KPIs.",
      "Automated monthly investor and regulatory reports using Python scripts, reducing turnaround from two days to under two hours."
    ]
  },
  {
    title: "Business Intelligence Analyst",
    company: "Depot",
    location: "Boca Raton, FL",
    period: "05/2018 – 11/2019",
    highlights: [
      "Designed Tableau dashboards with row-level security (RLS) to serve personalized insights to sales and finance leadership.",
      "Automated recurring Excel and SQL Server reports using Power Query, SQL, and VBA, reducing manual time by 50%.",
      "Conducted churn analysis using behavioral segmentation and created upsell opportunity reports tied to CRM and support ticket metadata."
    ]
  },
  {
    title: "Data Analytics Intern",
    company: "Tvisha Technologies",
    location: "Hyderabad, India",
    period: "04/2017 – 05/2018",
    highlights: [
      "Supported ETL development using SQL Server Integration Services (SSIS) to consolidate data from ERP and CRM systems.",
      "Cleaned and validated client sales, returns, and supply chain datasets to support dashboards and executive summaries."
    ]
  }
];

export const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  const cardRef = (el: HTMLDivElement | null, index: number) => {
    if (el && observerRef.current) {
      el.setAttribute('data-index', index.toString());
      observerRef.current.observe(el);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Professional Experience
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            8+ years of data engineering excellence across healthcare, finance, and technology sectors
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-violet-500 transform md:-translate-x-0.5" />
          
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
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full transform md:-translate-x-2 z-10 animate-pulse" />
              
              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2 md:mr-8' : 'md:pl-1/2 md:ml-8'}`}>
                <Card className="group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 bg-slate-900/80 border-slate-700 hover:border-cyan-500/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-start gap-3">
                        <Briefcase className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <CardTitle className="text-xl group-hover:text-cyan-400 transition-colors duration-300">
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-lg font-medium text-slate-300 mt-1">
                            {exp.company}
                          </CardDescription>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-violet-400" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-violet-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
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
  );
};
