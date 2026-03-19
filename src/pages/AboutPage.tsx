import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Lightbulb, Heart, Users, Target, Zap, Shield, Layers } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  { icon: Lightbulb, title: "Design-Led Thinking", desc: "Every decision starts with the user. We blend creative intuition with data-driven strategy to create products that truly resonate." },
  { icon: Heart, title: "Craft & Quality", desc: "We sweat the details. Every pixel, interaction, and line of code is held to the highest standard of excellence." },
  { icon: Globe, title: "Global Perspective", desc: "Working with international clients gives us diverse insight into markets, cultures, and user behaviors across the world." },
  { icon: Users, title: "Partnership Mindset", desc: "We don't just build for clients — we build with them. Your success is our success, and we're invested in your growth." },
];

const whyChoose = [
  { icon: Target, title: "Design with business & conversion in mind" },
  { icon: Zap, title: "Startup-friendly process and timelines" },
  { icon: Shield, title: "Clear communication & transparent pricing" },
  { icon: Globe, title: "Remote-friendly, international-ready workflow" },
  { icon: Layers, title: "Strategy + Design + Development + Growth in one place" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background pt-28">
      <SectionWrapper className="pb-20">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="label-text mb-4">About Us</div>
          <h1 className="heading-xl mb-6 max-w-3xl">
            A Digital Studio Built for{" "}
            <span className="text-gradient-gold">Ambitious Brands</span>
          </h1>
          <p className="text-muted-foreground body-lg max-w-2xl">
            We're a product-focused digital studio that blends design, development, and marketing to build meaningful, conversion-focused digital experiences for startups and modern businesses.
          </p>
        </div>
      </SectionWrapper>

      {/* Story */}
      <SectionWrapper className="py-24 bg-gradient-surface">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-lg mb-6">
                Our <span className="text-gradient-gold">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground body-md">
                <p>
                  TynecXio was founded with a clear mission: to bridge the gap between great ideas and exceptional digital products. We saw too many startups and businesses struggling with generic solutions that didn't reflect their vision or serve their users.
                </p>
                <p>
                  Today, we work with founders, startups, and growing businesses across the globe — helping them design, build, and scale digital products that make a real impact. Our approach combines strategic thinking with world-class execution.
                </p>
                <p>
                  We believe that great design isn't just about aesthetics — it's about solving problems, driving growth, and creating experiences that people genuinely love to use.
                </p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-10 space-y-8">
              <div>
                <div className="heading-lg text-gradient-gold">10+</div>
                <div className="text-muted-foreground text-sm">Projects Delivered</div>
              </div>
              <div className="border-t border-border" />
              <div>
                <div className="heading-lg text-gradient-gold">12+</div>
                <div className="text-muted-foreground text-sm">Global Clients</div>
              </div>
              <div className="border-t border-border" />
              <div>
                <div className="heading-lg text-gradient-gold">3+</div>
                <div className="text-muted-foreground text-sm">Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose TynecXio */}
      <SectionWrapper className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="label-text mb-4">Why Work With Us</div>
          <h2 className="heading-lg mb-12 max-w-xl">
            Why Choose <span className="text-gradient-gold">TynecXio?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/20 transition-all"
              >
                <item.icon size={22} className="text-primary shrink-0" />
                <span className="font-display font-medium text-sm text-foreground">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="py-24 md:py-32 bg-gradient-surface">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="label-text mb-4">Our Values</div>
          <h2 className="heading-lg mb-16 max-w-xl">
            What Drives <span className="text-gradient-gold">Everything We Do</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-card border border-border rounded-xl p-8 hover:border-primary/20 transition-all">
                <v.icon size={28} className="text-primary mb-4" />
                <h3 className="font-display font-semibold text-lg mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-24 border-t border-border">
        <div className="max-w-3xl mx-auto section-padding text-center">
          <h2 className="heading-lg mb-6">
            Ready to Work <span className="text-gradient-gold">Together?</span>
          </h2>
          <p className="text-muted-foreground body-md mb-10">
            Let's discuss how we can help bring your vision to life with clarity and confidence.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="group">
              Start a Conversation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default AboutPage;
