import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const blogPosts = [
  {
    title: "Event-Driven Machine Learning Pipelines with Kafka and Feature Stores",
    excerpt: "Comprehensive guide to building event-driven ML pipelines using Kafka for real-time data streaming and feature stores for consistent feature management across training and inference.",
    date: "February 28, 2024",
    readTime: "12 min read",
    tags: ["Machine Learning", "Kafka", "Data Engineering"],
    category: "Tech",
    image: "/lovable-uploads/71a7f0a2-f035-40db-ac6f-05b74791045c.png",
    url: "https://medium.com/@guntreddideepaksai/event-driven-machine-learning-pipelines-with-kafka-and-feature-stores-1cf94984bf76"
  },
  {
    title: "Building Scalable ETL Pipelines with Apache Airflow",
    excerpt: "Deep dive into designing robust, scalable ETL pipelines using Apache Airflow. Covers best practices for error handling, monitoring, and performance optimization.",
    date: "March 15, 2024",
    readTime: "10 min read",
    tags: ["ETL", "Airflow", "Data Pipeline"],
    category: "Tech",
    image: "/lovable-uploads/c4ba69f3-5302-4e60-b7c6-206b10a97f82.png",
    url: "#"
  },
  {
    title: "MLOps Best Practices for Production Deployments with SageMaker and MLflow",
    excerpt: "Essential strategies for deploying and maintaining machine learning models in production. Includes monitoring, versioning, and CI/CD practices for ML systems.",
    date: "January 20, 2024",
    readTime: "15 min read",
    tags: ["MLOps", "DevOps", "SageMaker", "MLflow"],
    category: "Tech",
    image: "/placeholder.svg",
    url: "https://medium.com/@guntreddideepaksai/mlops-best-practices-for-production-deployments-with-sagemaker-and-mlflow-acd9e5949813"
  },
  {
    title: "Data Mesh Architecture in Practice",
    excerpt: "Real-world implementation of data mesh principles in large organizations. Discusses domain-driven design, data products, and federated governance.",
    date: "December 10, 2023",
    readTime: "18 min read",
    tags: ["Data Architecture", "Data Mesh", "Enterprise"],
    category: "Architecture",
    image: "/lovable-uploads/af312b3e-427a-45a6-abea-eab9abd9e425.png",
    url: "https://medium.com/@guntreddideepaksai/data-mesh-architecture-in-practice-bridging-strategy-and-engineering-102cc5f83778"
  },
  {
    title: "Optimizing Snowflake Performance and Cost: Best Practices for 2025",
    excerpt: "Practical techniques for reducing Snowflake compute costs while maintaining query performance. Includes clustering strategies, warehouse sizing, and query optimization.",
    date: "November 5, 2023",
    readTime: "8 min read",
    tags: ["Snowflake", "Optimization", "Cost Management"],
    category: "Tech",
    image: "/lovable-uploads/7b2f89b5-b930-47ee-ae2f-0e644399a6ab.png",
    url: "https://medium.com/@guntreddideepaksai/optimizing-snowflake-performance-and-cost-best-practices-for-2025-80a96525308a"
  },
  {
    title: "Real-time Analytics with Apache Kafka and Stream Processing",
    excerpt: "Building real-time analytics systems using Kafka Streams and Apache Flink. Covers event sourcing, windowing, and stateful stream processing patterns.",
    date: "October 18, 2023",
    readTime: "14 min read",
    tags: ["Kafka", "Stream Processing", "Real-time"],
    category: "Tech",
    image: "/lovable-uploads/965b2526-b2ee-45cd-9c52-1ffb6c9ea918.png",
    url: "#"
  }
];

export const BlogSection = () => {
  const [visiblePosts, setVisiblePosts] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const observerRef = useRef<IntersectionObserver>();

  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-post') || '0');
            setVisiblePosts(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  const postRef = (el: HTMLDivElement | null, index: number) => {
    if (el && observerRef.current) {
      el.setAttribute('data-post', index.toString());
      observerRef.current.observe(el);
    }
  };

  return (
    <section id="blog" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts and tutorials on data engineering, machine learning, and modern data architecture
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "hover:bg-purple-50 dark:hover:bg-purple-950/50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredPosts.map((post, index) => (
            <div
              key={index}
              ref={(el) => postRef(el, index)}
              className={`transition-all duration-700 transform ${
                visiblePosts.has(index)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 relative overflow-hidden">
                  {post.image !== "/placeholder.svg" ? (
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.log(`Failed to load image: ${post.image}`);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-black/20" />
                  )}
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-white/20 text-white border-white/30">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    asChild
                  >
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      Read Article
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
