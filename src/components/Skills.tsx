import { Code, Users, Database, Server, GitBranch, Shield } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const technicalSkills = [
    { name: "HTML / CSS / JavaScript", level: 85, icon: Code },
    { name: "Python", level: 75, icon: Code },
    { name: "PHP", level: 70, icon: Code },
    { name: "SQL / MySQL", level: 80, icon: Database },
    { name: "Git / GitHub", level: 85, icon: GitBranch },
    { name: "Linux", level: 70, icon: Server },
    { name: "Réseau / Systèmes", level: 65, icon: Shield },
  ];

  const softSkills = [
    "Organisation",
    "Communication",
    "Travail en équipe",
    "Résolution de problèmes",
    "Adaptabilité",
    "Esprit critique",
    "Gestion du temps",
    "Apprentissage continu",
  ];

  return (
    <section id="competences" className="py-20 bg-gradient-dark relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Compétences</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div className="glass-card rounded-xl p-8 border neon-border-blue animate-fade-in-up">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Code className="h-6 w-6 text-primary" />
              Compétences techniques
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <skill.icon className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-neon rounded-full transition-all duration-1000 ease-out"
                      style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="glass-card rounded-xl p-8 border neon-border-purple animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Users className="h-6 w-6 text-secondary" />
              Compétences humaines
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 p-3 rounded-lg bg-background/30 border border-border/30 hover:border-secondary/50 transition-colors group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-2 h-2 bg-gradient-neon rounded-full group-hover:animate-glow-pulse"></div>
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
