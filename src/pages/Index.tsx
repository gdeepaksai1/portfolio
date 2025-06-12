
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Deepak Sai Guntreddi</h1>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" asChild className="text-slate-300 hover:text-white">
                  <a href="https://medium.com/@guntreddideepaksai/event-driven-machine-learning-pipelines-with-kafka-and-feature-stores-1cf94984bf76" target="_blank" rel="noopener noreferrer">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild className="text-slate-300 hover:text-white">
                  <a href="https://www.linkedin.com/in/deepak-sai-guntreddi-38b746369/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild className="text-slate-300 hover:text-white">
                  <a href="mailto:guntreddideepaksai@gmail.com">
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
            <h2 className="text-5xl font-bold text-white mb-6">
              Senior Data Engineer
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Data Engineer with 8+ years of experience in data engineering, analytics, and reporting across healthcare, 
              public sector, and financial domains. Specialized in cloud-native data platforms, ETL/ELT pipelines, 
              and machine learning model deployment.
            </p>
            <div className="flex items-center justify-center gap-6 text-slate-300 mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Omaha, NE</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (402) 201-7155</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>guntreddideepaksai@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="experience" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 bg-slate-800 border-slate-600">
              <TabsTrigger value="experience" className="text-slate-300 data-[state=active]:text-white">Experience</TabsTrigger>
              <TabsTrigger value="skills" className="text-slate-300 data-[state=active]:text-white">Skills</TabsTrigger>
              <TabsTrigger value="projects" className="text-slate-300 data-[state=active]:text-white">Projects</TabsTrigger>
              <TabsTrigger value="blog" className="text-slate-300 data-[state=active]:text-white">Blog</TabsTrigger>
            </TabsList>

            <TabsContent value="experience" className="mt-8">
              <div className="space-y-6">
                {/* One Staff Medical */}
                <Card className="bg-slate-800/50 border-slate-600">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white">Senior Data Engineer</CardTitle>
                        <CardDescription className="text-slate-300">One Staff Medical – Omaha, NE</CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">06/2023 – Present</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Built predictive ML models (CatBoost, logistic regression) to forecast candidate fall-offs, placement likelihood, and onboarding delays using features engineered with dbt and Snowflake.</li>
                      <li>• Deployed ML models using MLflow and Docker, with real-time inference integrated into recruiter dashboards through RESTful APIs.</li>
                      <li>• Used SHAP and LIME to generate interpretable recruiter feedback on model-based candidate prioritization scores.</li>
                      <li>• Designed scalable PySpark and Airflow ETL pipelines to ingest and transform recruiter activity, compliance data, and ATS events from Bullhorn and internal systems.</li>
                      <li>• Modeled SCD Type 2 data marts in Snowflake for tracking assignment history, licensing timelines, and onboarding milestones.</li>
                      <li>• Created Tableau dashboards to visualize fill rate trends, recruiter performance rankings, and ML-based candidate readiness scores.</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Republic Services */}
                <Card className="bg-slate-800/50 border-slate-600">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white">Data Engineer</CardTitle>
                        <CardDescription className="text-slate-300">Republic Services – Phoenix, AZ</CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">04/2021 – 05/2023</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Built ML models using XGBoost and logistic regression to predict route delays and preempt vehicle breakdowns using GPS, weather, and telemetry data.</li>
                      <li>• Deployed ML APIs using GCP Cloud Run and Docker, integrating model outputs into operational dashboards used by dispatch teams.</li>
                      <li>• Visualized feature importance using SHAP to aid route managers in understanding delay risk drivers and recommend alternate dispatching.</li>
                      <li>• Orchestrated high-volume ETL jobs using Apache Airflow and PySpark, ingesting fuel usage, load weights, and site check-ins from 500+ waste facilities.</li>
                      <li>• Designed and optimized BigQuery marts using partitioned and clustered tables to support sustainability KPIs and customer billing reconciliation.</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Atlantic Union Bank */}
                <Card className="bg-slate-800/50 border-slate-600">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white">Data Analyst</CardTitle>
                        <CardDescription className="text-slate-300">Atlantic Union Bank – Richmond, VA</CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">12/2019 – 03/2021</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Built customer segmentation models using logistic regression and K-Means in Scikit-learn to support credit scoring and personalized loan offers.</li>
                      <li>• Modeled MySQL marts to track customer behavior, product usage, and delinquency trends; used dimensional modeling for reporting layer.</li>
                      <li>• Developed Tableau dashboards for finance, risk, and investor relations, visualizing fund performance and credit risk KPIs.</li>
                      <li>• Automated monthly investor and regulatory reports using Python scripts, reducing turnaround from two days to under two hours.</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Depot */}
                <Card className="bg-slate-800/50 border-slate-600">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white">Business Intelligence Analyst</CardTitle>
                        <CardDescription className="text-slate-300">Depot – Boca Raton, FL</CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">05/2018 – 11/2019</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Designed Tableau dashboards with row-level security (RLS) to serve personalized insights to sales and finance leadership.</li>
                      <li>• Automated recurring Excel and SQL Server reports using Power Query, SQL, and VBA, reducing manual time by 50%.</li>
                      <li>• Conducted churn analysis using behavioral segmentation and created upsell opportunity reports tied to CRM and support ticket metadata.</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Tvisha Technologies */}
                <Card className="bg-slate-800/50 border-slate-600">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white">Data Analytics Intern</CardTitle>
                        <CardDescription className="text-slate-300">Tvisha Technologies – Hyderabad, India</CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">04/2017 – 05/2018</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Supported ETL development using SQL Server Integration Services (SSIS) to consolidate data from ERP and CRM systems.</li>
                      <li>• Cleaned and validated client sales, returns, and supply chain datasets to support dashboards and executive summaries.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-slate-800/50 border-slate-600">
                  <CardHeader>
                    <CardTitle className="text-white">Programming Languages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-slate-500 text-slate-300">Python</Badge>
                      <Badge variant="outline" className="border-slate-500 text-slate-300">SQL</Badge>
                      <Badge variant="outline" className="border-slate-500 text-slate-300">R</Badge>
                      <Badge variant="outline" className="border-slate-500 text-slate-300">Scala</Badge>
                      <Badge variant="outline" className="border-slate-500 text-slate-300">Java</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-600">
                  <CardHeader>
                    <CardTitle className="text-white">Cloud Platforms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-slate-500 text-slate-300">AWS</Badge>
                      <Badge variant="outline" className="border-slate-500 text-slate-300">GCP</Badge>
                      <Badge variant="outline" className="border-slate-500 text-slate-300">Azure</Badge>
                      <Badge variant="outline" className="border-slate-500 text-slate-300">Snowflake</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-600">
                  <CardHeader>
                    <CardTitle className="text-white">Big Data & ETL</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-slate-500 text-slate-300">Apache Spark</Badge>
                      <Badge variant="outline" className="border-slate-500 text-slate-300">Airflow</Badge>
                      <Badge variant="outline" className="border-slate-500 text-slate-300">Kafka</Badge>
                      <Badge variant="outline" className="border-slate-500 text-slate-300">dbt</Badge>
                      <Badge variant="outline" className="border-slate-500 text-slate-300">Databricks</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-600">
                  <CardHeader>
                    <CardTitle className="text-white">Machine Learning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-slate-500 text-slate-300">Scikit-learn</Badge>
                      <Badge variant="outline" className="border-slate-500 text-slate-300">TensorFlow</Badge>
                      <Badge variant="outline" className="border-slate-500 text-slate-300">PyTorch</Badge>
                      <Badge variant="outline" className="border-slate-500 text-slate-300">MLflow</Badge>
                      <Badge variant="outline" className="border-slate-500 text-slate-300">XGBoost</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-600">
                  <CardHeader>
                    <CardTitle className="text-white">Visualization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-slate-500 text-slate-300">Tableau</Badge>
                      <Badge variant="outline" className="border-slate-500 text-slate-300">Power BI</Badge>
                      <Badge variant="outline" className="border-slate-500 text-slate-300">Plotly</Badge>
                      <Badge variant="outline" className="border-slate-500 text-slate-300">D3.js</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-600">
                  <CardHeader>
                    <CardTitle className="text-white">Databases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-slate-500 text-slate-300">PostgreSQL</Badge>
                      <Badge variant="outline" className="border-slate-500 text-slate-300">MySQL</Badge>
                      <Badge variant="outline" className="border-slate-500 text-slate-300">MongoDB</Badge>
                      <Badge variant="outline" className="border-slate-500 text-slate-300">Redis</Badge>
                      <Badge variant="outline" className="border-slate-500 text-slate-300">BigQuery</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-slate-800/50 border-slate-600">
                  <CardHeader>
                    <CardTitle className="text-white">Real-time Analytics Platform</CardTitle>
                    <CardDescription className="text-slate-300">Streaming data pipeline for healthcare analytics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      Built a real-time analytics platform processing 10M+ events daily using Kafka, Spark Streaming, 
                      and Elasticsearch. Implemented ML models for anomaly detection in patient monitoring data.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">Kafka</Badge>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">Spark</Badge>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">Elasticsearch</Badge>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">Python</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-600">
                  <CardHeader>
                    <CardTitle className="text-white">ML-Powered Recruitment Platform</CardTitle>
                    <CardDescription className="text-slate-300">Candidate matching and prediction system</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      Developed ML models to predict candidate success rates and automate resume screening. 
                      Reduced time-to-hire by 40% and improved placement quality scores.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">XGBoost</Badge>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">NLP</Badge>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">FastAPI</Badge>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">Docker</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-600">
                  <CardHeader>
                    <CardTitle className="text-white">Waste Management Optimization</CardTitle>
                    <CardDescription className="text-slate-300">Route optimization using IoT and ML</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      Created an intelligent routing system using GPS data, weather patterns, and vehicle telemetry 
                      to optimize waste collection routes and predict maintenance needs.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">PySpark</Badge>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">BigQuery</Badge>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">GCP</Badge>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">ArcGIS</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-600">
                  <CardHeader>
                    <CardTitle className="text-white">Financial Risk Analytics</CardTitle>
                    <CardDescription className="text-slate-300">Credit scoring and risk modeling system</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      Built comprehensive credit scoring models and risk assessment tools for a regional bank. 
                      Implemented real-time fraud detection and automated regulatory reporting.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">Scikit-learn</Badge>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">Tableau</Badge>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">MySQL</Badge>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">Python</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="blog" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-slate-800/50 border-slate-600">
                  <CardHeader>
                    <CardTitle className="text-white">Event-Driven Machine Learning Pipelines with Kafka and Feature Stores</CardTitle>
                    <CardDescription className="text-slate-300">February 28, 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      Comprehensive guide to building event-driven ML pipelines using Kafka for real-time data streaming 
                      and feature stores for consistent feature management across training and inference.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-600">
                  <CardHeader>
                    <CardTitle className="text-white">Building Scalable ETL Pipelines with Apache Airflow</CardTitle>
                    <CardDescription className="text-slate-300">March 15, 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      Deep dive into designing robust, scalable ETL pipelines using Apache Airflow. 
                      Covers best practices for error handling, monitoring, and performance optimization.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-600">
                  <CardHeader>
                    <CardTitle className="text-white">MLOps Best Practices for Production Deployments</CardTitle>
                    <CardDescription className="text-slate-300">January 20, 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      Essential strategies for deploying and maintaining machine learning models in production. 
                      Includes monitoring, versioning, and CI/CD practices for ML systems.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-600">
                  <CardHeader>
                    <CardTitle className="text-white">Data Mesh Architecture in Practice</CardTitle>
                    <CardDescription className="text-slate-300">December 10, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
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
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-700">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-slate-300 mb-8">
            I'm always interested in discussing data engineering challenges and opportunities.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <a href="mailto:guntreddideepaksai@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </a>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <a href="https://www.linkedin.com/in/deepak-sai-guntreddi-38b746369/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <a href="https://medium.com/@guntreddideepaksai/event-driven-machine-learning-pipelines-with-kafka-and-feature-stores-1cf94984bf76" target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
                Medium
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
