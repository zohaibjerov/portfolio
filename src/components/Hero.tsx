import FadeIn from "./FadeIn";
import heroBg from "@/assets/hero-bg.jpg";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Luxury hotel lobby interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-3xl">
          <FadeIn delay={0.2}>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-body">
              Full Stack Developer · 5+ Years Experience
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
              Zohaib Ali
              <span className="block text-gradient-gold mt-2">
                Boutique Hotel Website Specialist
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              I help boutique hotels increase direct bookings with high-converting, mobile-first, performance-optimized websites.
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#portfolio"
                className="bg-gradient-gold text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity text-center font-medium"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-primary/30 text-primary px-8 py-4 text-sm tracking-widest uppercase rounded-sm hover:bg-primary/10 transition-colors text-center"
              >
                Book a Free Consultation
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown className="text-primary/60" size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
