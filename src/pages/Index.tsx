
import { useEffect, useState } from "react";
import { Mail, Linkedin, Download, Phone, ExternalLink, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "experience", "projects", "education", "contact"];
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
    "Agile Tools": ["Jira", "Scrum"]
  };

  const experiences = [
    {
      company: "Staff Medical Systems",
      role: "Senior Data Engineer",
      period: "May 2021 – Present",
      achievements: [
        "Designed scalable ETL pipelines using Airflow and Python, processing over 400M records monthly",
        "Developed SCD Type 2 models in Snowflake for historical patient tracking",
        "Built document ingestion workflows with AWS Textract for unstructured medical records",
        "Created Tableau dashboards for hospital performance metrics",
        "Reduced Snowflake compute cost by 25% via warehouse optimization",
        "Led compliance efforts with HIPAA and SOC 2 controls"
      ]
    },
    {
      company: "State of Nebraska, DHHS",
      role: "Data Analyst",
      period: "Feb 2019 – Apr 2021",
      achievements: [
        "Analyzed Medicaid claims and program data using SQL and Power BI",
        "Automated recurring health reports and extracts using Python",
        "Integrated Census and CDC data for public health research",
        "Conducted time-series and geospatial analytics for epidemiology"
      ]
    },
    {
      company: "Finovia Solutions",
      role: "Data Analyst",
      period: "Jun 2016 – Dec 2018",
      achievements: [
        "Automated compliance and investor reporting using Python/MySQL",
        "Developed Tableau dashboards for portfolio analytics",
        "Performed RFM segmentation and contributed to credit risk modeling"
      ]
    },
    {
      company: "Techlynx Systems",
      role: "BI Analyst",
      period: "Jan 2016 – Jun 2016",
      achievements: [
        "Built self-service dashboards in Tableau for sales and finance",
        "Automated Excel reports with VBA and SQL",
        "Analyzed churn trends and upsell opportunities"
      ]
    },
    {
      company: "Hexaware",
      role: "Junior Data Analyst",
      period: "Jul 2014 – May 2016",
      achievements: [
        "Supported SSIS-based ETL for manufacturing and retail clients",
        "Built Excel/Power BI dashboards for supply chain KPIs",
        "Helped migrate legacy reports to secure, interactive dashboards"
      ]
    }
  ];

  const projects = [
    {
      title: "AWS Textract Pipeline for Clinical Documents",
      description: "Used Lambda and Textract to extract structured data from scanned lab reports and discharge summaries. Resulted in 60% reduction in manual entry workload.",
      technologies: ["AWS Lambda", "Textract", "Python", "S3"]
    },
    {
      title: "Production-Ready ML Features for Early Warning System",
      description: "Collaborated with ML team to build real-time features in Snowflake and dbt for patient deterioration prediction. Improved model deployment speed by 40%.",
      technologies: ["Snowflake", "dbt", "Python", "ML Pipeline"]
    },
    {
      title: "Snowflake Cost Optimization Initiative",
      description: "Tuned warehouse sizes, query performance, and scheduling logic to reduce monthly compute costs by 25%.",
      technologies: ["Snowflake", "SQL", "Performance Tuning"]
    },
    {
      title: "Public Health Dashboard (Power BI)",
      description: "Developed real-time analytics dashboard for Medicaid directors to track claims, usage trends, and program KPIs.",
      technologies: ["Power BI", "SQL", "Python", "Data Visualization"]
    }
  ];

  const navigation = [
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Experience", href: "experience" },
    { name: "Projects", href: "projects" },
    { name: "Education", href: "education" },
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
                className="bg-blue-600 hover:bg-blue-700 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
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
                      <CardDescription className="text-lg text-slate-300 font-medium">{exp.company}</CardDescription>
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400 flex items-center gap-2">
                    {project.title}
                    <ExternalLink className="h-4 w-4" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
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
