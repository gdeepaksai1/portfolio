
export const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Enhanced background animations with staggered delays */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float" />
      
      {/* Additional floating elements for depth */}
      <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Floating particles with enhanced animation */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/20 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};
