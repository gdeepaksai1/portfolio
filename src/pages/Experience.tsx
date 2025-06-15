
import { useState, useEffect } from "react";
import { ExperienceHeader } from "@/components/experience/ExperienceHeader";
import { ExperienceStats } from "@/components/experience/ExperienceStats";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { BackgroundAnimation } from "@/components/experience/BackgroundAnimation";

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
    <div className="min-h-screen pt-24 pb-16 bg-slate-950 relative overflow-hidden">
      <BackgroundAnimation />

      <div className="container mx-auto px-6 relative">
        <ExperienceHeader />
        <ExperienceStats />
        
        <ExperienceTimeline>
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              location={exp.location}
              highlights={exp.highlights}
              index={index}
              isVisible={visibleItems.has(index)}
            />
          ))}
        </ExperienceTimeline>
      </div>
    </div>
  );
};
