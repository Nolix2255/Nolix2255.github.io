import { User, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="apropos" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            À <span className="gradient-text">propos</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-xl p-8 md:p-12 mb-8 animate-fade-in-up border neon-border-blue">
            <div className="flex items-center gap-3 mb-6">
              <User className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Mon parcours</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Actuellement en deuxième année de BTS Services Informatiques aux Organisations (SIO),
              je me forme aux métiers de l'informatique avec une approche pratique et professionnelle.
              Mon parcours m'a permis de développer des compétences techniques solides tout en
              cultivant une passion pour l'innovation et les nouvelles technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              À travers mes projets académiques et personnels, j'ai pu explorer différents domaines
              du développement et des systèmes informatiques, me permettant d'acquérir une vision
              globale du secteur.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-xl p-6 animate-fade-in-up border neon-border-purple" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-secondary" />
                <h3 className="text-xl font-semibold">Objectifs professionnels</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Trouver une alternance ou un emploi dans le domaine du développement ou de
                l'administration système. Je souhaite mettre en pratique mes compétences au sein
                d'une équipe dynamique et contribuer à des projets innovants.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6 animate-fade-in-up border neon-border-blue" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Soft Skills</h3>
              </div>
              <ul className="space-y-2">
                {["Autonomie et initiative", "Esprit d'analyse et résolution de problèmes", "Curiosité technique", "Travail en équipe"].map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-gradient-neon rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
