
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const stats = [
  { label: "Years of Experience", value: 8, suffix: "+" },
  { label: "Projects Completed", value: 50, suffix: "+" },
  { label: "ML Models Deployed", value: 15, suffix: "+" },
  { label: "Data Pipelines Built", value: 100, suffix: "+" },
];

export const ExperienceStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16 animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
      {stats.map((stat, index) => (
        <div key={index} className="group">
          <Card className="bg-slate-900/80 border-slate-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-5 h-5 text-cyan-400 mr-2 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300">{stat.label}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};
