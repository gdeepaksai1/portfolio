import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-800">Deepak Sai Guntreddi</h1>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://medium.com/@guntreddideepaksai/event-driven-machine-learning-pipelines-with-kafka-and-feature-stores-1cf94984bf76" target="_blank" rel="noopener noreferrer">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="mailto:deepak.guntreddi@email.com">
                    <Mail className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Senior Data Engineer
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Specializing in cloud analytics, ETL pipelines, machine learning deployment, and data warehousing solutions. 
              Experienced in building scalable data infrastructure and ML models that drive business insights.
            </p>
            <div className="flex items-center justify-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Omaha, NE</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>deepak.guntreddi@email.com</span>
              </div>
            </div>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View My Work
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="experience" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="blog">Blog</TabsTrigger>
            </TabsList>

            <TabsContent value="experience" className="mt-8">
              <div className="space-y-6">
                {/* One Staff Medical */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Senior Data Engineer</CardTitle>
                        <CardDescription>One Staff Medical – Omaha, NE</CardDescription>
                      </div>
                      <Badge variant="secondary">06/2023 – Present</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Built predictive ML models (CatBoost, logistic regression) to forecast candidate fall-offs, placement likelihood, and onboarding delays using features engineered with dbt and Snowflake.</li>
                      <li>• Deployed ML models using MLflow and Docker, with real-time inference integrated into recruiter dashboards through RESTful APIs.</li>
                      <li>• Used SHAP and LIME to generate interpretable recruiter feedback on model-based candidate prioritization scores.</li>
                      <li>• Designed scalable PySpark and Airflow ETL pipelines to ingest and transform recruiter activity, compliance data, and ATS events from Bullhorn and internal systems.</li>
                      <li>• Modeled SCD Type 2 data marts in Snowflake for tracking assignment history, licensing timelines, and onboarding milestones.</li>
                      <li>• Created Tableau dashboards to visualize fill rate trends, recruiter performance rankings, and ML-based candidate readiness scores.</li>
                      <li>• Built dbt models to compute candidate funnel metrics, recruiter velocity, and SLA adherence; integrated with Great Expectations for quality checks.</li>
                      <li>• Standardized compliance dashboards across 30+ U.S. states using DoH and state board datasets, with automated alerts for policy violations.</li>
                      <li>• Implemented HIPAA- and SOC 2-compliant RBAC across all data layers, using PII masking, access auditing, and column-level security in Snowflake.</li>
                      <li>• Optimized Snowflake compute spend by 25% through clustering, warehouse auto-suspend tuning, and query refactoring using EXPLAIN plans.</li>
                      <li>• Migrated legacy SSRS and SQL Server ETLs to modern AWS Glue, S3, and Airflow pipelines, enabling scalable reporting.</li>
                      <li>• Mentored junior engineers on CI/CD practices with GitHub Actions, feature store design, and modular pipeline development in Airflow.</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Republic Services */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Data Engineer</CardTitle>
                        <CardDescription>Republic Services – Phoenix, AZ</CardDescription>
                      </div>
                      <Badge variant="secondary">04/2021 – 05/2023</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Built ML models using XGBoost and logistic regression to predict route delays and preempt vehicle breakdowns using GPS, weather, and telemetry data.</li>
                      <li>• Deployed ML APIs using GCP Cloud Run and Docker, integrating model outputs into operational dashboards used by dispatch teams.</li>
                      <li>• Visualized feature importance using SHAP to aid route managers in understanding delay risk drivers and recommend alternate dispatching.</li>
                      <li>• Orchestrated high-volume ETL jobs using Apache Airflow and PySpark, ingesting fuel usage, load weights, and site check-ins from 500+ waste facilities.</li>
                      <li>• Designed and optimized BigQuery marts using partitioned and clustered tables to support sustainability KPIs and customer billing reconciliation.</li>
                      <li>• Created dbt transformation layers to calculate driver compliance scores, fuel efficiency ratings, and maintenance alerts.</li>
                      <li>• Built Power BI dashboards tracking recycling rates, disposal trends, and SLA breaches with drill-downs by region and vehicle type.</li>
                      <li>• Automated invoice and manifest data extraction using Google Textract and OCR pipelines, reducing manual processing by 60%.</li>
                      <li>• Integrated ArcGIS APIs to enrich GPS records with geofences and custom routing zones for optimized pickups.</li>
                      <li>• Ensured SOC 2 audit readiness by embedding data lineage tracking, access logging, and field-level security controls into all BigQuery datasets.</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Atlantic Union Bank */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Data Analyst</CardTitle>
                        <CardDescription>Atlantic Union Bank – Richmond, VA</CardDescription>
                      </div>
                      <Badge variant="secondary">12/2019 – 03/2021</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Built customer segmentation models using logistic regression and K-Means in Scikit-learn to support credit scoring and personalized loan offers.</li>
                      <li>• Modeled MySQL marts to track customer behavior, product usage, and delinquency trends; used dimensional modeling for reporting layer.</li>
                      <li>• Developed Tableau dashboards for finance, risk, and investor relations, visualizing fund performance and credit risk KPIs.</li>
                      <li>• Automated monthly investor and regulatory reports using Python scripts, reducing turnaround from two days to under two hours.</li>
                      <li>• Collaborated with engineering to optimize ETL refresh schedules and streamline joins, improving SQL job runtimes by 45%.</li>
                      <li>• Integrated RBI exchange rate APIs and macroeconomic data feeds to support market exposure reporting.</li>
                      <li>• Designed standardized KPI templates using Seaborn and Matplotlib for internal and board-facing reports.</li>
                      <li>• Built data dictionaries and documented SQL logic and assumptions in version-controlled repos for audit traceability.</li>
                      <li>• Participated in quarterly audit prep by validating reporting logic and ensuring alignment with compliance thresholds.</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Depot */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Business Intelligence Analyst</CardTitle>
                        <CardDescription>Depot – Boca Raton, FL</CardDescription>
                      </div>
                      <Badge variant="secondary">05/2018 – 11/2019</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Designed Tableau dashboards with row-level security (RLS) to serve personalized insights to sales and finance leadership.</li>
                      <li>• Automated recurring Excel and SQL Server reports using Power Query, SQL, and VBA, reducing manual time by 50%.</li>
                      <li>• Conducted churn analysis using behavioral segmentation and created upsell opportunity reports tied to CRM and support ticket metadata.</li>
                      <li>• Partnered with engineers to define early-stage data lake ingestion strategy for CRM, ticketing, and web engagement datasets.</li>
                      <li>• Created visualizations in Power BI and Plotly to track revenue trends, seasonal patterns, and sales targets across teams.</li>
                      <li>• Contributed weekly to business reviews by delivering actionable insights on customer behavior and product performance.</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Tvisha Technologies */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Data Analytics Intern</CardTitle>
                        <CardDescription>Tvisha Technologies – Hyderabad, India</CardDescription>
                      </div>
                      <Badge variant="secondary">04/2017 – 05/2018</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Supported ETL development using SQL Server Integration Services (SSIS) to consolidate data from ERP and CRM systems.</li>
                      <li>• Cleaned and validated client sales, returns, and supply chain datasets to support dashboards and executive summaries.</li>
                      <li>• Built Excel-based dashboards using Power Pivot and SQL connectors, enabling slice-and-dice reporting for business users.</li>
                      <li>• Assisted senior analysts in migrating static reports to Power BI, implementing RLS and basic drill-through functionality.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Programming Languages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">SQL</Badge>
                      <Badge variant="outline">R</Badge>
                      <Badge variant="outline">Scala</Badge>
                      <Badge variant="outline">Java</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Cloud Platforms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">AWS</Badge>
                      <Badge variant="outline">GCP</Badge>
                      <Badge variant="outline">Azure</Badge>
                      <Badge variant="outline">Snowflake</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Big Data & ETL</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Apache Spark</Badge>
                      <Badge variant="outline">Airflow</Badge>
                      <Badge variant="outline">Kafka</Badge>
                      <Badge variant="outline">dbt</Badge>
                      <Badge variant="outline">Databricks</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Machine Learning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Scikit-learn</Badge>
                      <Badge variant="outline">TensorFlow</Badge>
                      <Badge variant="outline">PyTorch</Badge>
                      <Badge variant="outline">MLflow</Badge>
                      <Badge variant="outline">XGBoost</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Visualization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Tableau</Badge>
                      <Badge variant="outline">Power BI</Badge>
                      <Badge variant="outline">Plotly</Badge>
                      <Badge variant="outline">D3.js</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Databases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">PostgreSQL</Badge>
                      <Badge variant="outline">MySQL</Badge>
                      <Badge variant="outline">MongoDB</Badge>
                      <Badge variant="outline">Redis</Badge>
                      <Badge variant="outline">BigQuery</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Real-time Analytics Platform</CardTitle>
                    <CardDescription>Streaming data pipeline for healthcare analytics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-4">
                      Built a real-time analytics platform processing 10M+ events daily using Kafka, Spark Streaming, 
                      and Elasticsearch. Implemented ML models for anomaly detection in patient monitoring data.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Kafka</Badge>
                      <Badge variant="secondary">Spark</Badge>
                      <Badge variant="secondary">Elasticsearch</Badge>
                      <Badge variant="secondary">Python</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>ML-Powered Recruitment Platform</CardTitle>
                    <CardDescription>Candidate matching and prediction system</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-4">
                      Developed ML models to predict candidate success rates and automate resume screening. 
                      Reduced time-to-hire by 40% and improved placement quality scores.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">XGBoost</Badge>
                      <Badge variant="secondary">NLP</Badge>
                      <Badge variant="secondary">FastAPI</Badge>
                      <Badge variant="secondary">Docker</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Waste Management Optimization</CardTitle>
                    <CardDescription>Route optimization using IoT and ML</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-4">
                      Created an intelligent routing system using GPS data, weather patterns, and vehicle telemetry 
                      to optimize waste collection routes and predict maintenance needs.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">PySpark</Badge>
                      <Badge variant="secondary">BigQuery</Badge>
                      <Badge variant="secondary">GCP</Badge>
                      <Badge variant="secondary">ArcGIS</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Financial Risk Analytics</CardTitle>
                    <CardDescription>Credit scoring and risk modeling system</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-4">
                      Built comprehensive credit scoring models and risk assessment tools for a regional bank. 
                      Implemented real-time fraud detection and automated regulatory reporting.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Scikit-learn</Badge>
                      <Badge variant="secondary">Tableau</Badge>
                      <Badge variant="secondary">MySQL</Badge>
                      <Badge variant="secondary">Python</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="blog" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Event-Driven Machine Learning Pipelines with Kafka and Feature Stores</CardTitle>
                    <CardDescription>February 28, 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-4">
                      Comprehensive guide to building event-driven ML pipelines using Kafka for real-time data streaming 
                      and feature stores for consistent feature management across training and inference.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Building Scalable ETL Pipelines with Apache Airflow</CardTitle>
                    <CardDescription>March 15, 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-4">
                      Deep dive into designing robust, scalable ETL pipelines using Apache Airflow. 
                      Covers best practices for error handling, monitoring, and performance optimization.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>MLOps Best Practices for Production Deployments</CardTitle>
                    <CardDescription>January 20, 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-4">
                      Essential strategies for deploying and maintaining machine learning models in production. 
                      Includes monitoring, versioning, and CI/CD practices for ML systems.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Data Mesh Architecture in Practice</CardTitle>
                    <CardDescription>December 10, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-4">
                      Real-world implementation of data mesh principles in large organizations. 
                      Discusses domain-driven design, data products, and federated governance.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-slate-300 mb-8">
            I'm always interested in discussing data engineering challenges and opportunities.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="secondary" asChild>
              <a href="mailto:deepak.guntreddi@email.com">
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
          <p className="text-slate-400">
            © 2024 Deepak Sai Guntreddi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
