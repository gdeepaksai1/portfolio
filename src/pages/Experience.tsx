
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
      "Built scalable ETL pipelines using Airflow, PySpark, and dbt",
      "Modeled historical data with SCD Type 2 in Snowflake",
      "Integrated ML models using MLflow and served via REST APIs",
      "Created recruiter dashboards in Tableau with candidate scoring",
      "Optimized compute cost in Snowflake by 25%",
      "Enforced HIPAA and SOC 2 security policies"
    ]
  },
  {
    title: "Data Engineer", 
    company: "Republic Services",
    period: "April 2021 – May 2023",
    location: "Phoenix, AZ",
    highlights: [
      "Built ETL jobs using Airflow, PySpark, and BigQuery",
      "Developed ML models with XGBoost for route delay prediction",
      "Served real-time predictions using Cloud Run APIs",
      "Built dbt models for driver compliance and fuel efficiency",
      "Integrated ArcGIS APIs for geospatial enrichment",
      "Automated document parsing with Google Textract"
    ]
  },
  {
    title: "Data Engineer",
    company: "Atlantic Union Bank", 
    period: "Dec 2019 – Mar 2021",
    location: "Richmond, VA",
    highlights: [
      "Automated credit risk reports with Python and SQL",
      "Modeled customer behavior marts in SQL Server",
      "Built segmentation pipelines using Scikit-learn",
      "Developed finance dashboards in Tableau",
      "Integrated macroeconomic data using public APIs",
      "Improved query runtime by 45% through optimization"
    ]
  },
  {
    title: "Data Engineer",
    company: "Depot",
    period: "May 2018 – Nov 2019",
    location: "Boca Raton, FL",
    highlights: [
      "Created ETL workflows for CRM and ticketing data",
      "Built revenue dashboards in Power BI and Plotly",
      "Defined RLS policies for sales data access",
      "Conducted churn analysis using SQL segmentation",
      "Automated Excel reports using Power Query and Python"
    ]
  },
  {
    title: "Data Engineering Intern",
    company: "Tvisha Technologies",
    period: "Apr 2017 – May 2018",
    location: "Hyderabad, India",
    highlights: [
      "Built SSIS pipelines to consolidate ERP and CRM data",
      "Created dashboards in Power BI and Excel",
      "Implemented RLS and interactive drill-downs",
      "Cleaned and validated sales and inventory datasets"
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
