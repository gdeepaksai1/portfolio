
interface ExperienceTimelineProps {
  children: React.ReactNode;
}

export const ExperienceTimeline = ({ children }: ExperienceTimelineProps) => {
  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Enhanced vertical timeline line with pulsing animation */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-violet-500 to-cyan-500 rounded-full animate-pulse"></div>
      
      <div className="space-y-12">
        {children}
      </div>
    </div>
  );
};
