
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { ParallaxSection } from "./ParallaxSection";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-manrope overflow-x-hidden">
      {/* Enhanced animated background elements with parallax */}
      <div className="fixed inset-0 pointer-events-none">
        <ParallaxSection speed={0.2}>
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 rounded-full blur-3xl animate-pulse" />
        </ParallaxSection>
        <ParallaxSection speed={0.3}>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-violet-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </ParallaxSection>
        <ParallaxSection speed={0.1}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }} />
        </ParallaxSection>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      <Navigation />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};
