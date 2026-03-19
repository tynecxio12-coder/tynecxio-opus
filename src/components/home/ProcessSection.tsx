import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const processSteps = [
  { num: "01", title: "Discovery Call", desc: "We learn your goals, audience, and business model through a focused strategy session." },
  { num: "02", title: "Strategy & Design", desc: "Wireframes, user flows, and high-fidelity designs crafted for conversion and user delight." },
  { num: "03", title: "Build & Launch", desc: "Clean, performant code brought to life with pixel-perfect precision and deployed for the world." },
  { num: "04", title: "Grow & Scale", desc: "Ongoing optimization, marketing support, and iteration to keep growing your business." },
];

const ProcessSection = () => (
  <SectionWrapper className="py-24 md:py-32">
    <div className="max-w-7xl mx-auto section-padding">
      <div className="label-text mb-4">Our Process</div>
      <h2 className="heading-lg mb-16 max-w-2xl">
        A Proven Path From{" "}
        <span className="text-gradient-gold">Idea to Impact</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative"
          >
            <div className="text-5xl font-display font-bold text-primary mb-4">{step.num}</div>
            <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            {i < processSteps.length - 1 && (
              <div className="hidden lg:block absolute top-8 right-0 w-8 border-t border-dashed border-border" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ProcessSection;
