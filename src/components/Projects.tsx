import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Application de gestion de tâches",
      description:
        "Application web full-stack permettant de gérer des projets et tâches en équipe avec authentification et notifications en temps réel.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: "project1",
      github: "#",
      demo: "#",
    },
    {
      title: "Site e-commerce",
      description:
        "Plateforme e-commerce complète avec panier, paiement sécurisé, gestion des stocks et interface d'administration.",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      image: "project2",
      github: "#",
      demo: "#",
    },
    {
      title: "API REST pour mobile",
      description:
        "API RESTful documentée permettant la gestion de données pour une application mobile avec système d'authentification JWT.",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      image: "project3",
      github: "#",
      demo: "#",
    },
    {
      title: "Dashboard analytique",
      description:
        "Tableau de bord interactif avec visualisation de données en temps réel et export de rapports personnalisés.",
      technologies: ["React", "TypeScript", "Recharts", "Tailwind"],
      image: "project4",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mes <span className="text-primary">projets</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez mes réalisations et projets académiques
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden gradient-card shadow-soft hover:shadow-strong transition-smooth group animate-slide-up"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-10 transition-smooth" />
                  <span className="text-6xl font-bold text-primary/20 font-mono">
                    0{index + 1}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 gradient-primary"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
