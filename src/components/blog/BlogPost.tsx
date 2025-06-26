
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  category: string;
  image: string;
  url: string;
}

interface BlogPostProps {
  post: BlogPost;
  index: number;
  isVisible: boolean;
}

export const BlogPostCard = ({ post, index, isVisible }: BlogPostProps) => {
  console.log(`Rendering blog post: ${post.title} with image: ${post.image}`);
  
  return (
    <div
      className={`transition-all duration-700 transform ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="h-full group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 relative overflow-hidden">
          {post.image && (
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
              loading="eager"
              onLoad={() => console.log(`Image loaded successfully: ${post.image}`)}
              onError={(e) => {
                console.error(`Failed to load image: ${post.image}`);
                console.error('Image error event:', e);
                // Don't hide the image, show a fallback instead
                const target = e.currentTarget as HTMLImageElement;
                target.src = '/placeholder.svg';
              }}
            />
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
  );
};
