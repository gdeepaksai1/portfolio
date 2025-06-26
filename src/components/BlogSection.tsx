
import { useEffect, useRef, useState } from "react";
import { BlogPostCard } from "./blog/BlogPost";
import { CategoryFilter } from "./blog/CategoryFilter";
import { BlogHeader } from "./blog/BlogHeader";
import { blogPosts } from "./blog/BlogData";

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
        <BlogHeader />
        
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredPosts.map((post, index) => (
            <div
              key={index}
              ref={(el) => postRef(el, index)}
            >
              <BlogPostCard 
                post={post}
                index={index}
                isVisible={visiblePosts.has(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
