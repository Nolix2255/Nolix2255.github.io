import { GraduationCap, Award, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Formation",
      description: "BTS SIO option SLAM - 2ème année",
    },
    {
      icon: Award,
      title: "Spécialisation",
      description: "Développement web et applications",
    },
    {
      icon: Target,
      title: "Objectif",
      description: "Devenir développeur Full Stack",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              À propos de <span className="text-primary">moi</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez mon parcours et mes motivations dans le développement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <p className="text-lg leading-relaxed">
                Actuellement en deuxième année de BTS SIO (Services
                Informatiques aux Organisations), je me spécialise dans le
                développement d'applications web modernes et performantes.
              </p>
              <p className="text-lg leading-relaxed">
                Passionné par les nouvelles technologies, je maîtrise plusieurs
                langages et frameworks. Mon objectif est de créer des solutions
                innovantes qui répondent aux besoins des utilisateurs tout en
                respectant les meilleures pratiques du développement.
              </p>
              <p className="text-lg leading-relaxed">
                Au-delà du code, j'apprécie le travail en équipe et la veille
                technologique. Je suis toujours à la recherche de nouveaux
                défis pour perfectionner mes compétences.
              </p>
            </div>

            <div className="grid gap-4 animate-slide-up">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 gradient-card shadow-soft hover:shadow-medium transition-smooth cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:shadow-medium transition-smooth">
                      <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-smooth" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
