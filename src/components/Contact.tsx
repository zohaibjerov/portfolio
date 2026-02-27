import { useState } from "react";
import FadeIn from "./FadeIn";
import { Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    hotel: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "923421166873";

    const message = `
*New Strategy Call Request*

*Name:* ${form.name}
*Email:* ${form.email}
*Hotel:* ${form.hotel || "Not provided"}

*Project Details:*
${form.message}
`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    toast.success("Redirecting to WhatsApp...");

    window.open(whatsappURL, "_blank");

    setForm({
      name: "",
      email: "",
      hotel: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
                Get in Touch
              </p>
              <h2 className="font-heading text-3xl md:text-4xl mb-4">
                Let's Increase Your{" "}
                <span className="text-gradient-gold">Direct Bookings</span>
              </h2>
              <p className="text-muted-foreground">
                Schedule a free strategy call to discuss how I can help your
                boutique hotel thrive online.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-5 py-4 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-5 py-4 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <input
                type="text"
                placeholder="Hotel Name"
                maxLength={100}
                value={form.hotel}
                onChange={(e) => setForm({ ...form, hotel: e.target.value })}
                className="w-full px-5 py-4 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />

              <textarea
                placeholder="Tell me about your project..."
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-5 py-4 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />

              <button
                type="submit"
                className="w-full bg-gradient-gold text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-medium"
              >
                <Send size={16} />
                Schedule a Strategy Call
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
