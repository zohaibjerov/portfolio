import FadeIn from "./FadeIn";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Isabella Chen",
    role: "Owner, The Meridian Suites",
    quote: "Zohaib transformed our online presence completely. Direct bookings increased by 45% within three months of launch. His understanding of the hospitality industry is unmatched.",
  },
  {
    name: "Marco Bellini",
    role: "GM, Villa Serene Retreat",
    quote: "Working with Zohaib felt like having a partner who truly understands boutique hospitality. The website he built doesn't just look beautiful — it converts guests like nothing we've had before.",
  },
  {
    name: "Sophie Laurent",
    role: "Director, Château Lumière",
    quote: "From the initial strategy call to ongoing support, Zohaib has been exceptional. Our website now ranks on page one for key search terms, and the booking experience is seamless.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Testimonials</p>
            <h2 className="font-heading text-3xl md:text-4xl">
              What Hotel Owners <span className="text-gradient-gold">Say</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.15}>
              <div className="p-8 bg-card border border-border rounded-sm h-full flex flex-col hover:border-primary/30 transition-all duration-300 hover:shadow-gold">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="text-foreground font-medium">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs tracking-wide">{testimonial.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
