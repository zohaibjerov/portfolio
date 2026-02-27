import FadeIn from "./FadeIn";
import portrait from "@/assets/portfolio.png";

const techStack = [
  "React",
  "Svelte",
  "Vue",
  "Next.js",
  "Node.js",
  "NestJS",
  "MongoDB",
  "PostgreSQL",
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-sm">
                <img
                  src={portrait}
                  alt="Zohaib Ali - Boutique Hotel Website Specialist"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 rounded-sm -z-10" />
            </div>
          </FadeIn>

          {/* Content */}
          <div>
            <FadeIn>
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
                About Me
              </p>
              <h2 className="font-heading text-3xl md:text-4xl mb-6">
                Crafting Digital Experiences for
                <span className="text-gradient-gold"> Luxury Hospitality</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  With over 5 years of experience as a Full Stack Developer, I
                  specialize exclusively in building premium websites for
                  boutique hotels and luxury hospitality brands.
                </p>
                <p>
                  My mission is simple: help boutique hotels increase direct
                  bookings and reduce dependency on OTAs through
                  high-converting, beautifully designed, performance-optimized
                  websites.
                </p>
                <p>
                  I bring a deep understanding of hospitality branding, custom
                  booking integrations, SEO optimization, and scalable backend
                  systems to every project.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-sm text-primary tracking-widest uppercase mb-4">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm border border-border rounded-sm text-secondary-foreground bg-secondary/50 hover:border-primary/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
