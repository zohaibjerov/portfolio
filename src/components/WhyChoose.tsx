import FadeIn from "./FadeIn";
import { Target, Palette, Gauge, Handshake, Building2 } from "lucide-react";

const reasons = [
  { icon: Building2, text: "Industry-focused expertise in boutique hospitality" },
  { icon: Target, text: "Conversion-driven design approach" },
  { icon: Palette, text: "Luxury hospitality brand understanding" },
  { icon: Gauge, text: "Performance-first development" },
  { icon: Handshake, text: "Long-term technical partnership" },
];

const WhyChoose = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Why Me</p>
            <h2 className="font-heading text-3xl md:text-4xl mb-6">
              Why Boutique Hotels Choose{" "}
              <span className="text-gradient-gold">Zohaib</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I don't just build websites — I build revenue-generating digital experiences tailored to the boutique hospitality industry.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-5">
              {reasons.map((reason) => (
                <div
                  key={reason.text}
                  className="flex items-start gap-4 p-5 bg-card border border-border rounded-sm hover:border-primary/30 transition-all duration-300"
                >
                  <reason.icon className="text-primary mt-0.5 flex-shrink-0" size={22} strokeWidth={1.5} />
                  <p className="text-foreground">{reason.text}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
