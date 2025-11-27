import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projets");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-dark"></div>
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--neon-blue) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--neon-blue) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px"
        }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">KARCHER</span>{" "}
            <span className="text-foreground">Tristan</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Étudiant en deuxième année de <span className="text-primary font-semibold">BTS SIO</span>
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Passionné par l'informatique et le développement, je me spécialise dans la création
            de solutions numériques innovantes. Toujours en quête d'apprentissage et d'évolution
            dans le domaine des technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground neon-border-blue group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Télécharger mon CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10 neon-border-purple"
              onClick={scrollToProjects}
            >
              Voir mes projets
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
