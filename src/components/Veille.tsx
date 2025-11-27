import { BookOpen, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Veille = () => {
  const articles = [
    {
      title: "Intelligence Artificielle et Développement",
      description: "L'impact de l'IA sur les pratiques de développement modernes et les outils émergents pour améliorer la productivité des développeurs.",
      icon: TrendingUp,
      color: "primary",
    },
    {
      title: "Cybersécurité et Protection des Données",
      description: "Les dernières menaces en cybersécurité et les meilleures pratiques pour sécuriser les applications web et les systèmes d'information.",
      icon: Shield,
      color: "secondary",
    },
    {
      title: "Évolution des Frameworks Web",
      description: "Les tendances actuelles dans le développement web : nouveaux frameworks, architectures modernes et optimisation des performances.",
      icon: BookOpen,
      color: "primary",
    },
  ];

  return (
    <section id="veille" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Veille <span className="gradient-text">Technologique</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Dans un domaine en constante évolution, je maintiens une veille technologique active
            pour rester informé des dernières innovations et tendances du secteur informatique.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {articles.map((article, index) => (
            <div
              key={article.title}
              className={`glass-card rounded-xl p-6 border ${
                article.color === "primary" ? "neon-border-blue" : "neon-border-purple"
              } hover:scale-105 transition-all duration-300 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className={`inline-flex p-3 rounded-lg ${
                  article.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                }`}>
                  <article.icon className={`h-6 w-6 ${
                    article.color === "primary" ? "text-primary" : "text-secondary"
                  }`} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {article.description}
              </p>
              <Button
                variant="outline"
                className="w-full border-primary/50 hover:bg-primary/10"
                size="sm"
              >
                En savoir plus
              </Button>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto border neon-border-blue animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-2xl font-semibold mb-4 text-center">Mes sources de veille</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gradient-neon rounded-full"></span>
                Sites spécialisés (Dev.to, Medium, Stack Overflow)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gradient-neon rounded-full"></span>
                Documentation officielle des technologies
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gradient-neon rounded-full"></span>
                Conférences et webinaires tech
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gradient-neon rounded-full"></span>
                Newsletters techniques (JavaScript Weekly, etc.)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gradient-neon rounded-full"></span>
                Podcasts de développement
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gradient-neon rounded-full"></span>
                Communautés GitHub et Open Source
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Veille;
