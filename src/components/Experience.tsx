import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Stage BTS SIO - Développement Web",
      company: "Entreprise ABC",
      location: "Paris, France",
      period: "Janvier 2024 - Mars 2024",
      description: [
        "Développement d'interfaces web responsives et modernes",
        "Participation à la conception et à l'implémentation de fonctionnalités backend",
        "Collaboration avec l'équipe pour l'optimisation des performances",
        "Rédaction de documentation technique",
      ],
    },
    {
      title: "Stage BTS SIO - Administration Système",
      company: "Tech Solutions XYZ",
      location: "Lyon, France",
      period: "Mai 2023 - Juillet 2023",
      description: [
        "Maintenance et surveillance des serveurs Linux",
        "Installation et configuration de postes de travail",
        "Support technique auprès des utilisateurs",
        "Gestion des sauvegardes et de la sécurité réseau",
      ],
    },
  ];

  return (
    <section id="experiences" className="py-20 bg-gradient-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Expériences</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-neon"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className={`relative flex flex-col md:flex-row gap-8 items-start ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-4 h-4 rounded-full bg-primary border-4 border-background animate-glow-pulse"></div>

                  {/* Content Card */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-8 ml-8 md:ml-0" : "md:pl-8 ml-8 md:ml-0"}`}>
                    <div className="glass-card rounded-xl p-6 border neon-border-blue hover:neon-border-purple transition-all duration-300">
                      <div className="flex items-start gap-3 mb-4">
                        <Briefcase className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                          <p className="text-primary font-medium mb-2">{exp.company}</p>
                          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-gradient-neon rounded-full mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
