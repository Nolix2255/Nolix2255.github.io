import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
const Hero = () => {
  return <section id="hero" className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-mono text-sm">
              &lt;Étudiant en BTS SIO /&gt;
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Développeur Web
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              Full Stack
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto">
            Étudiant passionné en 2ème année de BTS SIO, spécialisé dans le
            développement d'applications web modernes et performantes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button size="lg" className="gradient-primary shadow-medium hover:shadow-strong transition-smooth" onClick={() => document.querySelector("#projects")?.scrollIntoView({
            behavior: "smooth"
          })}>
              Voir mes projets
            </Button>
            <Button size="lg" variant="secondary">
              <Download className="w-4 h-4 mr-2" />
              Télécharger CV
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-smooth">
              <Github className="w-5 h-5 text-primary-foreground" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-smooth">
              <Linkedin className="w-5 h-5 text-primary-foreground" />
            </a>
            <a href="mailto:contact@example.com" className="p-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-smooth">
              <Mail className="w-5 h-5 text-primary-foreground" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>;
};
export default Hero;