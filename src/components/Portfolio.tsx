import FadeIn from "./FadeIn";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    image: project1,
    name: "The Meridian Suites",
    challenge: "Low direct bookings with 80% revenue going through OTAs.",
    solution: "Custom booking engine with real-time availability, mobile-first design, and targeted landing pages.",
    results: ["+45% direct bookings", "92 mobile performance score", "3.2s → 0.8s load time"],
  },
  {
    image: project2,
    name: "Villa Serene Retreat",
    challenge: "Outdated website failing to capture the property's luxury experience.",
    solution: "Complete redesign with immersive visual storytelling, virtual tours, and streamlined booking flow.",
    results: ["+35% conversion rate", "60% less bounce rate", "4x organic traffic"],
  },
  {
    image: project3,
    name: "Château Lumière",
    challenge: "No online presence beyond OTA listings, missing direct guest relationships.",
    solution: "Full-stack build with integrated CMS, multi-language support, and SEO-optimized content strategy.",
    results: ["+200% direct bookings", "90+ Lighthouse score", "Page 1 Google rankings"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Portfolio</p>
            <h2 className="font-heading text-3xl md:text-4xl">
              Selected <span className="text-gradient-gold">Projects</span>
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <FadeIn key={project.name} delay={0.1}>
              <div className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? "md:direction-rtl" : ""}`}>
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="overflow-hidden rounded-sm group">
                    <img
                      src={project.image}
                      alt={`${project.name} - boutique hotel website project`}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h3 className="font-heading text-2xl md:text-3xl mb-4 text-foreground">
                    {project.name}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-primary text-xs tracking-widest uppercase mb-1">The Challenge</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <p className="text-primary text-xs tracking-widest uppercase mb-1">The Solution</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.results.map((result) => (
                      <span
                        key={result}
                        className="px-4 py-2 text-sm bg-primary/10 text-primary border border-primary/20 rounded-sm"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
