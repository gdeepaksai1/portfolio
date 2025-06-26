
export const blogPosts = [
  {
    title: "Event-Driven Machine Learning Pipelines with Kafka and Feature Stores",
    excerpt: "Comprehensive guide to building event-driven ML pipelines using Kafka for real-time data streaming and feature stores for consistent feature management across training and inference.",
    date: "February 28, 2024",
    readTime: "12 min read",
    tags: ["Machine Learning", "Kafka", "Data Engineering"],
    category: "Tech",
    image: "/lovable-uploads/a0ac0500-8bac-4cec-a228-d3a00ff871f7.png",
    url: "https://medium.com/@guntreddideepaksai/event-driven-machine-learning-pipelines-with-kafka-and-feature-stores-1cf94984bf76"
  },
  {
    title: "Building Scalable ETL Pipelines with Apache Airflow",
    excerpt: "Deep dive into designing robust, scalable ETL pipelines using Apache Airflow. Covers best practices for error handling, monitoring, and performance optimization.",
    date: "March 15, 2024",
    readTime: "10 min read",
    tags: ["ETL", "Airflow", "Data Pipeline"],
    category: "Tech",
    image: "/lovable-uploads/4c15509d-5b26-4ed9-945c-ee3bc469b4f5.png",
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
    image: "/lovable-uploads/adf23859-c5b4-4cf6-85bc-d239dcb66ca8.png",
    url: "https://medium.com/@guntreddideepaksai/data-mesh-architecture-in-practice-bridging-strategy-and-engineering-102cc5f83778"
  },
  {
    title: "Optimizing Snowflake Performance and Cost: Best Practices for 2025",
    excerpt: "Practical techniques for reducing Snowflake compute costs while maintaining query performance. Includes clustering strategies, warehouse sizing, and query optimization.",
    date: "November 5, 2023",
    readTime: "8 min read",
    tags: ["Snowflake", "Optimization", "Cost Management"],
    category: "Tech",
    image: "/lovable-uploads/71615688-1a5b-4047-9484-85f886bdc7af.png",
    url: "https://medium.com/@guntreddideepaksai/optimizing-snowflake-performance-and-cost-best-practices-for-2025-80a96525308a"
  },
  {
    title: "Real-time Analytics with Apache Kafka and Stream Processing",
    excerpt: "Building real-time analytics systems using Kafka Streams and Apache Flink. Covers event sourcing, windowing, and stateful stream processing patterns.",
    date: "October 18, 2023",
    readTime: "14 min read",
    tags: ["Kafka", "Stream Processing", "Real-time"],
    category: "Tech",
    image: "/lovable-uploads/5dea45f8-4ebe-4aad-a0e6-b1c868462382.png",
    url: "#"
  }
];

// Log the blog posts data for debugging
console.log('Blog posts data:', blogPosts);
console.log('Image paths:', blogPosts.map(post => ({ title: post.title, image: post.image })));
