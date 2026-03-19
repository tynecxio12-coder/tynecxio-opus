import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const testimonials = [
  { name: "Dr. Tonni", role: "Founder, SaaS Startup", text: "TynecXio transformed our vision into a product that our investors couldn't stop talking about. Premium quality, fast delivery." },
  { name: "Mr. Shahabuddin", role: "CEO, E-Commerce Brand", text: "The design quality is world-class. Our conversion rate increased by 40% after the redesign. Absolutely worth every penny." },
  { name: "Mr. Andruino Fonex", role: "CTO, Fintech", text: "Working with TynecXio felt like having a senior design team embedded in our company. Clear communication, exceptional results." },
];

const TestimonialsSection = () => (
  <SectionWrapper className="py-24 md:py-32 bg-gradient-surface">
    <div className="max-w-7xl mx-auto section-padding">
      <div className="label-text mb-4">Client Stories</div>
      <h2 className="heading-lg mb-16 max-w-xl">
        Trusted by <span className="text-gradient-gold">Founders & Teams</span> Worldwide
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <div key={j} className="w-4 h-4 rounded-full bg-primary/80" />
              ))}
            </div>
            <p className="text-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <div className="font-display font-semibold text-sm">{t.name}</div>
              <div className="text-muted-foreground text-xs">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default TestimonialsSection;
