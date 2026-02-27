import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading text-lg text-foreground">Zohaib Ali</p>
            <p className="text-muted-foreground text-sm">
              Boutique Hotel Website Specialist
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="zohaibjerov873@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.linkedin.com/in/zohaib-ali-jerov-b9a152193/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a
              href="https://github.com/zohaibjerov"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} strokeWidth={1.5} />
            </a>
          </div>

          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Zohaib Ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
