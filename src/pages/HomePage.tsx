import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import {
  Palette, Globe, ShoppingCart, Smartphone, PenTool, TrendingUp,
  CheckCircle2, ArrowUpRight, Users, Zap, Shield, Target,
  ChevronDown
} from "lucide-react";
import ServicesSection from "@/components/home/ServicesSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import FocusAreasSection from "@/components/home/FocusAreasSection";

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "12+", label: "Global Clients" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "4.9", label: "Avg. Rating" },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial-gold" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        
        <div className="relative max-w-7xl mx-auto section-padding pt-32 pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <div className="label-text mb-6 flex items-center gap-2">
              <Sparkles size={14} className="text-primary" />
              Design · Development · Growth
            </div>
            
            <h1 className="heading-xl mb-6">
              We Design & Build{" "}
              <span className="text-gradient-gold">Digital Experiences</span>{" "}
              That Help Brands Succeed
            </h1>
            
            <p className="text-muted-foreground body-lg max-w-2xl mb-10">
              We're a product-focused digital studio that blends design, development, and marketing to build meaningful, conversion-focused digital experiences for startups and modern businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Get a Free Strategy Call
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="hero-outline" size="xl">
                  View Our Services
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl"
          >
            {["UI/UX for web & mobile", "Modern websites & web apps", "E-commerce development", "Branding & identity", "Mobile app design", "Growth strategy"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 size={14} className="text-primary shrink-0" />
                {item}
              </div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <ChevronDown size={24} className="text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <SectionWrapper className="py-20 border-y border-border">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="heading-lg text-gradient-gold mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <FocusAreasSection />
      <TestimonialsSection />
      <FaqSection />

      {/* CTA */}
      <SectionWrapper className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto section-padding text-center">
          <div className="bg-card border border-border rounded-2xl p-12 md:p-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial-gold" />
            <div className="relative">
              <div className="label-text mb-4">Ready to Start?</div>
              <h2 className="heading-lg mb-6">
                Let's Build Something{" "}
                <span className="text-gradient-gold">Great Together</span>
              </h2>
              <p className="text-muted-foreground body-md mb-10 max-w-lg mx-auto">
                Tell us about your idea — we'll come back with a clear plan and proposal within 48 hours.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Get a Free Strategy Call
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default HomePage;
