import { ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Application Web de Gestion",
      description: "Développement d'une application web complète permettant la gestion de données avec interface utilisateur moderne et API RESTful.",
      image: project1,
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    },
    {
      title: "Application Mobile",
      description: "Création d'une application mobile responsive avec des fonctionnalités de synchronisation en temps réel et une interface intuitive.",
      image: project2,
      technologies: ["React", "TypeScript", "API REST"],
    },
    {
      title: "Système de Base de Données",
      description: "Conception et mise en œuvre d'une architecture de base de données optimisée pour gérer des volumes importants de données.",
      image: project3,
      technologies: ["SQL", "MySQL", "Python", "Linux"],
    },
  ];

  return (
    <section id="projets" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Découvrez une sélection de projets réalisés durant ma formation et mes expériences personnelles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-xl overflow-hidden border neon-border-blue hover:neon-border-purple transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full border-primary/50 hover:bg-primary/10 group"
                >
                  <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  Voir plus
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
