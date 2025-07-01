
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ExternalLink } from "lucide-react";
import { blogPosts } from "@/components/blog/BlogData";

export const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const observerRef = useRef<IntersectionObserver>();

  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  useEffect(() => {
    console.log("Blog component mounted");
    
    // Make all posts visible immediately
    setTimeout(() => {
      const allPostIndices = Array.from({ length: filteredPosts.length }, (_, i) => i);
      setVisiblePosts(new Set(allPostIndices));
    }, 100);

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
  }, [filteredPosts.length]);

  // Update visible posts when category changes
  useEffect(() => {
    setTimeout(() => {
      const allPostIndices = Array.from({ length: filteredPosts.length }, (_, i) => i);
      setVisiblePosts(new Set(allPostIndices));
    }, 100);
  }, [selectedCategory, filteredPosts.length]);

  const postRef = (el: HTMLDivElement | null, index: number) => {
    if (el && observerRef.current) {
      el.setAttribute('data-post', index.toString());
      observerRef.current.observe(el);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Latest Insights
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
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
              className={`transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white border-0 shadow-lg shadow-cyan-500/25"
                  : "border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-cyan-400 hover:text-cyan-400 backdrop-blur-sm"
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
              <Card className="h-full group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 bg-slate-900/50 border-slate-700/50 hover:border-cyan-500/50 backdrop-blur-sm overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-violet-500/20 relative overflow-hidden border-b border-slate-700/50">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                    onLoad={() => console.log(`Blog page - Image loaded: ${post.image}`)}
                    onError={(e) => {
                      console.error(`Blog page - Failed to load image: ${post.image}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-slate-900/50 text-cyan-400 border-cyan-400/50 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-slate-100 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-slate-300 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs bg-slate-800/50 text-slate-300 border-slate-600/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white border-0 hover:scale-105 transition-all duration-300 group/btn shadow-lg hover:shadow-cyan-500/25"
                    asChild
                  >
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      Read Article
                      <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
