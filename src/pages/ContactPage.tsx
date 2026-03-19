import { useState } from "react";
import emailjs from "@emailjs/browser";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_vtswxoj",
        "template_l3f9lo8",
        {
          name: form.name,
          email: form.email,
          service: form.service || "Not selected",
          budget: form.budget || "Not specified",
          message: form.message,
          time: new Date().toLocaleString(),
        },
        {
          publicKey: "8jFqNlKh0Ha-ywcCE",
        }
      );

      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        service: "",
        budget: "",
        message: "",
      });

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24–48 hours.",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-28">
      <SectionWrapper className="pb-20">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="label-text mb-4">Get In Touch</div>
          <h1 className="heading-xl mb-6 max-w-3xl">
            Let's Build Something{" "}
            <span className="text-gradient-gold">Meaningful Together</span>
          </h1>
          <p className="text-muted-foreground body-lg max-w-2xl">
            Whether you're launching a startup, redesigning your brand, or scaling an existing product — we help you move fast with clarity and confidence. We reply within 24–48 hours.
          </p>
        </div>
      </SectionWrapper>

      <div className="max-w-7xl mx-auto section-padding pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Fast turnaround & startup-friendly process",
            "Design focused on conversion & growth",
            "Remote collaboration, global clients",
            "Clear communication & honest pricing",
          ].map((point) => (
            <div
              key={point}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
              {point}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto section-padding pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-card border border-border rounded-2xl p-12 text-center">
                <CheckCircle2 size={48} className="text-primary mx-auto mb-6" />
                <h3 className="heading-md mb-4">Thank You!</h3>
                <p className="text-muted-foreground body-md">
                  We've received your message and will get back to you within 24–48 hours with a clear plan and next steps.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Name *
                    </label>
                    <Input
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="bg-secondary border-border h-12"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email *
                    </label>
                    <Input
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="bg-secondary border-border h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Service
                    </label>
                    <Select
                      value={form.service}
                      onValueChange={(v) => setForm({ ...form, service: v })}
                    >
                      <SelectTrigger className="bg-secondary border-border h-12">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General / Not sure</SelectItem>
                        <SelectItem value="uiux">UI & UX Design</SelectItem>
                        <SelectItem value="web">Website / Web App Development</SelectItem>
                        <SelectItem value="ecommerce">E-Commerce Store</SelectItem>
                        <SelectItem value="mobile">Mobile App UI</SelectItem>
                        <SelectItem value="branding">Brand Identity & Graphics</SelectItem>
                        <SelectItem value="growth">Digital Marketing & Growth</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Budget (optional)
                    </label>
                    <Select
                      value={form.budget}
                      onValueChange={(v) => setForm({ ...form, budget: v })}
                    >
                      <SelectTrigger className="bg-secondary border-border h-12">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="$70 – $100">$70 – $100</SelectItem>
                        <SelectItem value="$100 – $200">$100 – $200</SelectItem>
                        <SelectItem value="$200 – $300">$200 – $300</SelectItem>
                        <SelectItem value="$300 – $400">$300 – $400</SelectItem>
                        <SelectItem value="$400 – $500">$400 – $500</SelectItem>
                        <SelectItem value="Not sure yet">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Project Details *
                  </label>
                  <Textarea
                    placeholder="Tell us about your project, goals, and timeline..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="bg-secondary border-border min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full group"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <Mail size={22} className="text-primary mb-3" />
              <h4 className="font-display font-semibold text-sm mb-1">Email Us</h4>
              <a
                href="mailto:hello@tynecxio.com"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                hello@tynecxio.com
              </a>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <MessageCircle size={22} className="text-primary mb-3" />
              <h4 className="font-display font-semibold text-sm mb-1">WhatsApp</h4>
              <a
                href="https://wa.me/message/tynecxio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Chat with us on WhatsApp
              </a>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <Clock size={22} className="text-primary mb-3" />
              <h4 className="font-display font-semibold text-sm mb-1">Response Time</h4>
              <p className="text-muted-foreground text-sm">Within 24–48 hours</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <MapPin size={22} className="text-primary mb-3" />
              <h4 className="font-display font-semibold text-sm mb-1">Location</h4>
              <p className="text-muted-foreground text-sm">
                Remote-first, serving clients globally
              </p>
            </div>

            <div className="bg-card border border-primary/20 rounded-xl p-6 glow-gold">
              <h4 className="font-display font-semibold text-sm mb-2 text-primary">
                Free Strategy Call
              </h4>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Not sure where to start? Book a free discovery call and we'll help you map out the best approach for your project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;


