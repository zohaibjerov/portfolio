import FadeIn from "./FadeIn";
import { Sparkles, Smartphone, Zap, TrendingUp, Search, RefreshCw } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Custom Boutique Hotel Website Development",
    description: "Bespoke websites that capture your hotel's unique character and convert visitors into direct bookings.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Optimization",
    description: "Over 70% of hotel searches happen on mobile. I ensure your site delivers a flawless experience on every device.",
  },
  {
    icon: Zap,
    title: "Speed & Performance Optimization",
    description: "Sub-second load times that keep guests engaged and boost your search engine rankings.",
  },
  {
    icon: TrendingUp,
    title: "Direct Booking Conversion Optimization",
    description: "Strategic UX design and booking flows that reduce OTA dependency and increase your revenue margins.",
  },
  {
    icon: Search,
    title: "SEO for Boutique Hotels",
    description: "Targeted SEO strategies that put your hotel in front of travelers actively searching for unique stays.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign & Modernization",
    description: "Transform outdated websites into modern, high-performing digital experiences that reflect your brand.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Services</p>
            <h2 className="font-heading text-3xl md:text-4xl">
              How I Help Boutique Hotels <span className="text-gradient-gold">Grow</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <div className="group p-8 bg-card border border-border rounded-sm hover:border-primary/30 transition-all duration-500 h-full hover:shadow-gold">
                <service.icon className="text-primary mb-5" size={28} strokeWidth={1.5} />
                <h3 className="font-heading text-lg mb-3 text-card-foreground group-hover:text-gradient-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
