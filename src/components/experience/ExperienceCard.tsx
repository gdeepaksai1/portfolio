
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  index: number;
  isVisible: boolean;
}

export const ExperienceCard = ({ 
  title, 
  company, 
  period, 
  location, 
  highlights, 
  index, 
  isVisible 
}: ExperienceCardProps) => {
  return (
    <div
      className={`relative transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } animate-slide-in-left`}
      style={{ transitionDelay: `${index * 200}ms`, animationDelay: `${0.6 + index * 0.2}s` }}
    >
      {/* Enhanced timeline dot with glow effect */}
      <div className="absolute left-6 w-6 h-6 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full border-4 border-slate-950 z-10 animate-glow"></div>
      
      {/* Experience card with enhanced styling */}
      <div className="ml-20">
        <Card className="group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 bg-slate-900/80 border-slate-700/50 hover:border-cyan-500/50 backdrop-blur-sm relative overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <CardHeader className="pb-4 relative z-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl text-slate-100 group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                    {title}
                  </CardTitle>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-semibold text-slate-200 group-hover:text-violet-400 transition-colors duration-300">
                      {company}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <Badge variant="outline" className="border-violet-400/50 text-violet-300 bg-violet-500/10 group-hover:bg-violet-500/20 transition-colors duration-300">
                          {period}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="group-hover:text-slate-300 transition-colors duration-300">{location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0 relative z-10">
            <ul className="space-y-3">
              {highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-violet-400 transition-colors duration-300" />
                  <span className="text-sm leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
