
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Send, Linkedin, MessageSquare, User, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "guntreddideepaksai@gmail.com",
      href: "mailto:guntreddideepaksai@gmail.com",
      description: "Primary contact method",
      gradient: "from-cyan-500/20 to-blue-500/20",
      iconColor: "text-cyan-400 group-hover:text-cyan-300",
      borderColor: "hover:border-cyan-500/50"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (402) 819-4838",
      href: "tel:+14028194838",
      description: "Available Mon-Fri, 9 AM - 6 PM CST",
      gradient: "from-violet-500/20 to-purple-500/20",
      iconColor: "text-violet-400 group-hover:text-violet-300",
      borderColor: "hover:border-violet-500/50"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/deepak-sai-guntreddi-5a37951ab",
      href: "https://www.linkedin.com/in/deepak-sai-guntreddi-5a37951ab/",
      description: "Professional networking",
      gradient: "from-blue-500/20 to-indigo-500/20",
      iconColor: "text-blue-400 group-hover:text-blue-300",
      borderColor: "hover:border-blue-500/50"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-950 relative overflow-hidden">
      {/* Enhanced background animations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-violet-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-slate-900/50 border border-slate-700/50 rounded-full backdrop-blur-sm">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-slate-300 text-sm">Available for new opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent animate-fade-in">
            Let's Connect
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to discuss your next data engineering project? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-900/80 border-slate-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 group">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-100 flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  Send a Message
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Fill out the form below and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2 group">
                      <Label htmlFor="name" className="text-slate-200 flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField("")}
                        required
                        className={`bg-slate-800/50 border-slate-600 text-slate-100 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300 ${
                          focusedField === "name" ? "scale-105 shadow-lg shadow-cyan-500/10" : ""
                        }`}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2 group">
                      <Label htmlFor="email" className="text-slate-200 flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField("")}
                        required
                        className={`bg-slate-800/50 border-slate-600 text-slate-100 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300 ${
                          focusedField === "email" ? "scale-105 shadow-lg shadow-cyan-500/10" : ""
                        }`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2 group">
                    <Label htmlFor="subject" className="text-slate-200 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField("")}
                      required
                      className={`bg-slate-800/50 border-slate-600 text-slate-100 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300 ${
                        focusedField === "subject" ? "scale-105 shadow-lg shadow-cyan-500/10" : ""
                      }`}
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div className="space-y-2 group">
                    <Label htmlFor="message" className="text-slate-200 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField("")}
                      required
                      rows={6}
                      className={`bg-slate-800/50 border-slate-600 text-slate-100 focus:border-cyan-400 focus:ring-cyan-400/20 resize-none transition-all duration-300 ${
                        focusedField === "message" ? "scale-105 shadow-lg shadow-cyan-500/10" : ""
                      }`}
                      placeholder="Tell me about your project or question..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white border-0 hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25 py-6 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <Card className="bg-slate-900/80 border-slate-700/50 backdrop-blur-sm hover:border-violet-500/50 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-xl text-slate-100">Contact Information</CardTitle>
                <CardDescription className="text-slate-400">
                  Multiple ways to reach me
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className={`group cursor-pointer hover:bg-slate-800/30 p-4 rounded-xl transition-all duration-300 border border-transparent ${item.borderColor} relative overflow-hidden`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="p-2 bg-slate-800/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-400 mb-1">{item.label}</p>
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-slate-200 hover:text-cyan-400 transition-colors duration-300 font-medium block"
                        >
                          {item.value}
                        </a>
                        <p className="text-xs text-slate-500 mt-1">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
