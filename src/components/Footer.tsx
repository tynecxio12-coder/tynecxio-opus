import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaDribbble, FaBehance, FaFacebookF, FaYoutube, FaTiktok, FaPinterest } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import logo from "@/assets/tynecxio-logo.png";

const footerLinks = {
  Studio: [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Packages & Pricing", path: "/pricing" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ],
  Services: [
    { label: "UI/UX Design", path: "/services" },
    { label: "Web Development", path: "/services" },
    { label: "E-Commerce", path: "/services" },
    { label: "Mobile App UI", path: "/services" },
    { label: "Branding & Identity", path: "/services" },
    { label: "Digital Marketing", path: "/services" },
  ],
};

const socialLinks = [
  { icon: FaLinkedinIn, href: "https://linkedin.com/company/tynecxio", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://instagram.com/tynecxio", label: "Instagram" },
  { icon: FaDribbble, href: "https://dribbble.com/tynecxio", label: "Dribbble" },
  { icon: FaBehance, href: "https://behance.net/tynecxio", label: "Behance" },
  { icon: FaThreads, href: "https://www.threads.net/@tynecxio", label: "Threads" },
  { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=61585890573503", label: "Facebook" },
  { icon: FaYoutube, href: "https://www.youtube.com/@TynecXio", label: "YouTube" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@tynecxio", label: "TikTok" },
  { icon: FaPinterest, href: "https://www.pinterest.com/tynecxio/", label: "Pinterest" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto section-padding py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="TynecXio Logo" className="h-28 w-28 object-contain" />
              <span className="font-display text-xl font-bold tracking-tight">
                <span className="text-foreground">Tynec</span>
                <span className="text-gradient-gold">Xio</span>
              </span>
            </Link>
            <p className="text-muted-foreground body-md max-w-xs">
              A product-focused digital studio that blends design, development, and marketing to build meaningful, conversion-focused digital experiences.
            </p>
            <div className="mt-6 space-y-2">
              <a
                href="mailto:career@tynecxio.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={14} />
                career@tynecxio.com
              </a>
              <a
                href="https://wa.me/message/tynecxio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-foreground mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-foreground mb-5">
              Connect
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm inline-flex items-center gap-1"
                  >
                    {social.label}
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} TynecXio. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Design · Development · Growth — All in one place.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
