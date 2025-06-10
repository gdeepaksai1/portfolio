import { useEffect, useState } from "react";
import { Mail, Linkedin, Download, Phone, ExternalLink, Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "experience", "projects", "education", "blog", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const skills = {
    "Languages": ["Python", "SQL"],
    "ETL & Data Workflow": ["Apache Airflow", "dbt", "PySpark", "SSIS"],
    "Data Warehousing": ["Snowflake", "Redshift", "BigQuery", "PostgreSQL", "SQL Server"],
    "Cloud Platforms": ["AWS (S3, Glue, Lambda, Textract)", "GCP (BigQuery, Dataflow, Storage)"],
    "Visualization": ["Tableau", "Power BI", "Seaborn", "Plotly", "Matplotlib"],
    "DevOps & Automation": ["Docker", "GitHub Actions", "RESTful APIs"],
    "Governance": ["Great Expectations", "PII Masking", "RBAC", "HIPAA", "SOC 2"],
    "Healthcare Standards": ["HL7", "FHIR"],
    "Modeling": ["Star Schema", "SCD Type 2", "Dimensional Modeling"],
    "Agile Tools": ["Jira", "Scrum"],
    "Certifications": ["AWS Solution Architect Associate"]
  };

  const experiences = [
    {
      company: "One Staff Medical",
      role: "Senior Data Engineer",
      period: "May 2021 – Present",
      location: "Omaha, NE",
      achievements: [
        "Designed and managed scalable ETL pipelines using Apache Airflow and Python to integrate data from ATS, HRIS, and payroll systems",
        "Modeled Snowflake data marts with SCD Type 2 logic to enable historical tracking and compliance reporting",
        "Automated credentialing workflows and implemented data validation with dbt and Great Expectations",
        "Migrated SQL Server reports to Snowflake and AWS S3, enhancing reliability and scalability",
        "Reduced Snowflake compute costs through performance tuning and warehouse optimization",
        "Mentored junior engineers and enforced HIPAA and SOC 2 compliance via secure data practices"
      ]
    },
    {
      company: "Republic Services",
      role: "Data Analyst",
      period: "Feb 2019 – Apr 2021",
      location: "Phoenix, AZ",
      achievements: [
        "Built ETL pipelines with Apache Airflow and Python to consolidate fleet and operations data from 500+ locations",
        "Developed BigQuery data marts supporting sustainability reporting and billing reconciliation",
        "Created Power BI dashboards to monitor recycling compliance and route efficiency",
        "Automated invoice processing with OCR pipelines using Google Vision API",
        "Optimized reporting performance using partitioned tables, materialized views, and dbt models"
      ]
    },
    {
      company: "Finovia Solutions",
      role: "Data Analyst",
      period: "Jun 2016 – Dec 2018",
      location: "Hyderabad, India",
      achievements: [
        "Automated investor and compliance reporting using Python and MySQL, cutting turnaround time by 90%",
        "Built Tableau dashboards for financial performance tracking and investor relations",
        "Enhanced ETL pipeline efficiency by 45% through SQL and job runtime optimization"
      ]
    },
    {
      company: "Techlynx Systems",
      role: "Business Intelligence Analyst",
      period: "Jan 2016 – Jun 2016",
      location: "Hyderabad, India",
      achievements: [
        "Developed Tableau dashboards for finance and sales teams, enabling self-service reporting",
        "Automated recurring reports using SQL, Power Query, and VBA, reducing manual effort by 50%",
        "Contributed to CRM and ticketing system data ingestion and early-stage data lake design"
      ]
    },
    {
      company: "Hexaware Digital Insights",
      role: "Junior Data Analyst",
      period: "Jul 2014 – May 2016",
      location: "Pune, India",
      achievements: [
        "Supported ETL development using SQL Server Integration Services (SSIS) for manufacturing and retail clients",
        "Created Excel and Power BI dashboards for executive reporting and performance tracking",
        "Migrated legacy reports and implemented Row-Level Security (RLS) in Power BI dashboards"
      ]
    }
  ];

  const projects = [
    {
      title: "AWS Textract Pipeline for Clinical Documents",
      problem: "Manual data entry from scanned medical documents was time-consuming and error-prone, creating bottlenecks in clinical workflows.",
      solution: "Built automated pipeline using AWS Lambda, Textract, and Python to extract structured data from lab reports and discharge summaries.",
      outcome: "Achieved 60% reduction in manual entry workload and improved data accuracy by 35%.",
      technologies: ["AWS Lambda", "Textract", "Python", "S3", "Airflow"]
    },
    {
      title: "Production-Ready ML Features for Early Warning System",
      problem: "ML team needed real-time patient deterioration features but lacked scalable feature engineering infrastructure.",
      solution: "Developed real-time feature pipeline in Snowflake and dbt with MLflow integration for patient monitoring models.",
      outcome: "Improved model deployment speed by 40% and enabled 24/7 patient risk scoring for 10,000+ patients.",
      technologies: ["Snowflake", "dbt", "Python", "MLflow", "Real-time Pipeline"]
    },
    {
      title: "Snowflake Cost Optimization Initiative",
      problem: "Monthly Snowflake compute costs were escalating due to inefficient warehouse sizing and query patterns.",
      solution: "Implemented warehouse auto-scaling, query optimization, and workload scheduling using performance monitoring and tuning.",
      outcome: "Reduced monthly compute costs by 25% while maintaining 99.9% query performance SLA.",
      technologies: ["Snowflake", "SQL Optimization", "Performance Tuning", "Cost Management"]
    },
    {
      title: "Public Health Dashboard for Policy Makers",
      problem: "Medicaid directors needed real-time visibility into claims trends and program KPIs for policy decisions.",
      solution: "Built comprehensive Power BI dashboard with automated data refresh from multiple healthcare data sources.",
      outcome: "Enabled data-driven policy decisions affecting 500K+ Medicaid beneficiaries and reduced reporting time by 80%.",
      technologies: ["Power BI", "SQL Server", "Python", "Healthcare Analytics"]
    }
  ];

  const blogPosts = [
    {
      title: "How to Productionize Machine Learning Pipelines",
      description: "Best practices for transitioning ML models from experimentation to production-ready systems in healthcare environments.",
      readTime: "8 min read",
      category: "Machine Learning"
    },
    {
      title: "ETL Best Practices for Healthcare Data",
      description: "Essential patterns and strategies for building HIPAA-compliant data pipelines that handle sensitive medical information.",
      readTime: "6 min read",
      category: "Data Engineering"
    },
    {
      title: "Data Modeling with SCD Type 2 in Snowflake",
      description: "Complete guide to implementing Slowly Changing Dimensions for historical patient tracking in cloud data warehouses.",
      readTime: "10 min read",
      category: "Data Warehousing"
    },
    {
      title: "Cost Optimization Strategies for Cloud Data Platforms",
      description: "Proven techniques to reduce cloud compute costs while maintaining performance and reliability in data workloads.",
      readTime: "7 min read",
      category: "Cloud Computing"
    }
  ];

  const navigation = [
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Experience", href: "experience" },
    { name: "Projects", href: "projects" },
    { name: "Education", href: "education" },
    { name: "Articles", href: "blog" },
    { name: "Contact", href: "contact" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Deepak Sai Guntreddi
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.href ? "text-blue-400" : "text-slate-300"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-700/50">
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left text-sm font-medium transition-colors hover:text-blue-400 ${
                      activeSection === item.href ? "text-blue-400" : "text-slate-300"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Deepak Sai Guntreddi
              </h1>
              <h2 className="text-xl md:text-2xl text-slate-300 font-medium">
                Senior Data Engineer | Cloud & Analytics Specialist
              </h2>
              <p className="text-lg text-slate-400 flex items-center justify-center gap-2">
                📍 Omaha, NE
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300"
                onClick={() => window.open('mailto:guntreddideepaksai@gmail.com')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300"
                onClick={() => window.open('https://www.linkedin.com/in/deepak-sai-guntreddi-38b746369/', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>

            <div className="text-slate-400 flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+1 402-201-7155</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="text-lg text-slate-300 leading-relaxed space-y-6">
            <p>
              I am a results-driven data engineer who builds scalable, reliable, and cost-efficient data pipelines and analytics solutions. I specialize in developing cloud-native architectures, ETL/ELT pipelines, and dimensional data models on platforms like AWS, GCP, Snowflake, and BigQuery.
            </p>
            <p>
              I collaborate closely with data science teams to productionize ML workflows and apply modern data stack tools (Airflow, dbt, Great Expectations) to improve data quality, governance, and automation. With a deep understanding of HIPAA/SOC 2 compliance, healthcare standards (HL7, FHIR), and geospatial/time-series analytics, I help organizations unlock insights while ensuring data integrity and privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-slate-700 text-slate-200 hover:bg-slate-600 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl text-blue-400">{exp.role}</CardTitle>
                      <CardDescription className="text-lg text-slate-300 font-medium">
                        {exp.company} - {exp.location}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="border-blue-500 text-blue-400 mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-slate-300 flex items-start">
                        <span className="text-blue-400 mr-3 mt-1.5">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400 flex items-center gap-2">
                    {project.title}
                    <ExternalLink className="h-4 w-4" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Problem:</h4>
                    <p className="text-slate-300 text-sm">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution:</h4>
                    <p className="text-slate-300 text-sm">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Outcome:</h4>
                    <p className="text-slate-300 text-sm font-medium">{project.outcome}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-cyan-500 text-cyan-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-blue-400">Master of Science in Computer Science</CardTitle>
                <CardDescription className="text-lg text-slate-300">University of Nebraska at Omaha (2025)</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-blue-400">Bachelor of Technology in Electronics & Communication</CardTitle>
                <CardDescription className="text-lg text-slate-300">JNTU Kakinada (2014)</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Articles & Insights Section */}
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Articles & Insights
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:shadow-xl cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <Badge variant="outline" className="border-blue-500 text-blue-400 text-xs">
                        {post.category}
                      </Badge>
                      <CardTitle className="text-lg text-blue-400 flex items-start gap-2">
                        <BookOpen className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        {post.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-300 text-sm leading-relaxed">{post.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-xs">{post.readTime}</span>
                    <ExternalLink className="h-4 w-4 text-slate-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="space-y-8">
            <p className="text-xl text-slate-300">
              Let's connect and discuss how I can help with your data engineering needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="mailto:guntreddideepaksai@gmail.com"
                className="flex items-center gap-3 text-lg text-slate-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail className="h-6 w-6" />
                guntreddideepaksai@gmail.com
              </a>
              <a 
                href="tel:+14022017155"
                className="flex items-center gap-3 text-lg text-slate-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Phone className="h-6 w-6" />
                +1 402-201-7155
              </a>
              <a 
                href="https://www.linkedin.com/in/deepak-sai-guntreddi-38b746369/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg text-slate-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Deepak Sai Guntreddi. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
