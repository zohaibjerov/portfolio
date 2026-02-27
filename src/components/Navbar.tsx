import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about", num: "01" },
  { label: "Services", href: "#services", num: "02" },
  { label: "Portfolio", href: "#portfolio", num: "03" },
  { label: "Testimonials", href: "#testimonials", num: "04" },
  { label: "Contact", href: "#contact", num: "05" },
];

// ✅ WhatsApp link added (replace with your real number)
const whatsappLink =
  "https://wa.me/923421166873?text=Hi%20Zohaib,%20I%20saw%20your%20hotel%20website%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" },
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop full-width navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl shadow-[0_1px_40px_hsl(40_55%_55%/0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-full border border-primary/40 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <span className="font-heading text-sm text-primary">Z</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-base tracking-wide text-foreground">
                  Zohaib Ali
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-0.5">
                  Hotel Specialist
                </span>
              </div>
            </a>

            {/* Center links */}
            <div className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeLink === link.href;
                const isHovered = hoveredLink === link.href;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="relative px-5 py-2.5 group"
                  >
                    {(isActive || isHovered) && (
                      <motion.span
                        layoutId="navHighlight"
                        className={`absolute inset-0 rounded-sm ${
                          isActive
                            ? "bg-primary/10 border border-primary/20"
                            : "bg-muted/50 border border-border/50"
                        }`}
                        transition={{
                          type: "spring",
                          duration: 0.4,
                          bounce: 0.1,
                        }}
                      />
                    )}

                    <span className="relative z-10 flex items-center gap-2">
                      <span
                        className={`text-[10px] font-body tabular-nums transition-colors duration-300 ${
                          isActive ? "text-primary" : "text-muted-foreground/50"
                        }`}
                      >
                        {link.num}
                      </span>
                      <span
                        className={`text-xs tracking-[0.18em] uppercase transition-colors duration-300 ${
                          isActive
                            ? "text-primary"
                            : "text-muted-foreground group-hover:text-foreground"
                        }`}
                      >
                        {link.label}
                      </span>
                    </span>

                    {isActive && (
                      <motion.span
                        layoutId="navDot"
                        className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                        transition={{ type: "spring", duration: 0.4 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* ✅ Desktop WhatsApp CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 px-6 py-2.5 overflow-hidden rounded-sm"
            >
              <span className="absolute inset-0 bg-gradient-gold transition-opacity group-hover:opacity-90" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,hsl(40_60%_70%/0.3),transparent_70%)]" />
              <span className="relative z-10 text-xs tracking-[0.18em] uppercase text-primary-foreground font-medium">
                Let's Talk
              </span>
              <ArrowUpRight
                size={14}
                strokeWidth={2.5}
                className="relative z-10 text-primary-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          </div>
        </div>

        <div
          className={`h-px w-full transition-opacity duration-500 ${
            scrolled ? "opacity-100 bg-border/60" : "opacity-0"
          }`}
        />
      </motion.nav>

      {/* Mobile navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div
          className={`flex items-center justify-between px-5 py-4 transition-all duration-500 ${
            scrolled || mobileOpen
              ? "bg-background/95 backdrop-blur-xl"
              : "bg-transparent"
          }`}
        >
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full border border-primary/40 flex items-center justify-center">
              <span className="font-heading text-sm text-primary">Z</span>
            </div>
            <span className="font-heading text-base tracking-wide text-foreground">
              Zohaib Ali
            </span>
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="relative w-10 h-10 flex items-center justify-center rounded-sm border border-border/60 text-foreground hover:border-primary/40 transition-colors"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-[67px] bg-background/98 backdrop-blur-xl"
            >
              <div className="flex flex-col justify-center h-full px-10 -mt-16 gap-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                    className={`flex items-center gap-4 group ${
                      activeLink === link.href
                        ? "text-primary"
                        : "text-foreground/60"
                    }`}
                  >
                    <span className="text-xs text-muted-foreground/40 font-body tabular-nums w-5">
                      {link.num}
                    </span>
                    <span className="font-heading text-3xl tracking-wide group-hover:text-primary transition-colors">
                      {link.label}
                    </span>
                  </motion.a>
                ))}

                {/* ✅ Mobile WhatsApp CTA */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ delay: 0.35, duration: 0.3 }}
                  className="mt-6 pl-9"
                >
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-7 py-3 text-sm tracking-[0.2em] uppercase rounded-sm hover:opacity-90 transition-opacity font-medium"
                  >
                    Let's Talk
                    <ArrowUpRight size={16} />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
