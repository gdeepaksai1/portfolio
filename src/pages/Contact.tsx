
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(true);

  const contactMethods = [
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (402) 819-4838",
      href: "tel:+14028194838",
      description: "Available Mon-Fri, 9 AM - 6 PM CST"
    },
    {
      icon: Mail,
      label: "Email",
      value: "guntreddideepaksai@gmail.com",
      href: "mailto:guntreddideepaksai@gmail.com",
      description: "Best way to reach me"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "deepak-sai-guntreddi",
      href: "https://www.linkedin.com/in/deepak-sai-guntreddi-38b746369/",
      description: "Professional networking"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Omaha, NE",
      href: "#",
      description: "Open to remote opportunities"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Let's Connect
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ready to discuss data engineering opportunities, collaborations, or just want to chat about the latest in ML and cloud technologies?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card 
                key={index}
                className={`group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 bg-slate-900/50 border-slate-700/50 hover:border-cyan-500/50 backdrop-blur-sm animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-violet-500/20 group-hover:from-cyan-500/30 group-hover:to-violet-500/30 transition-all duration-300">
                      <method.icon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
                        {method.label}
                      </CardTitle>
                      <CardDescription className="text-slate-300">
                        {method.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {method.href !== "#" ? (
                    <Button 
                      asChild 
                      variant="ghost" 
                      className="w-full justify-start text-left p-0 h-auto text-slate-300 hover:text-cyan-400 hover:bg-transparent group-hover:text-cyan-400 transition-colors duration-300"
                    >
                      <a href={method.href} target={method.href.startsWith('http') ? '_blank' : '_self'}>
                        {method.value}
                      </a>
                    </Button>
                  ) : (
                    <span className="text-slate-300 group-hover:text-cyan-400 transition-colors duration-300">
                      {method.value}
                    </span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "800ms" }}>
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Open to New Opportunities
                </CardTitle>
                <CardDescription className="text-lg text-slate-200">
                  I'm always interested in discussing new challenges in data engineering, ML pipeline architecture, and cloud-native solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white border-0 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                  >
                    <a href="mailto:guntreddideepaksai@gmail.com">
                      Send an Email
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg" 
                    className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                  >
                    <a href="https://www.linkedin.com/in/deepak-sai-guntreddi-38b746369/" target="_blank" rel="noopener noreferrer">
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
