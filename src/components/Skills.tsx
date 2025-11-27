import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5/CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "PHP", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "Node.js", level: 70 },
        { name: "API REST", level: 75 },
      ],
    },
    {
      title: "Outils & Méthodes",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Agile/Scrum", level: 70 },
        { name: "Docker", level: 60 },
      ],
    },
  ];

  const otherSkills = [
    "WordPress",
    "Figma",
    "Bootstrap",
    "Symfony",
    "Laravel",
    "MongoDB",
    "Firebase",
    "Responsive Design",
    "SEO",
    "UX/UI",
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mes <span className="text-primary">compétences</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies et outils que je maîtrise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 gradient-card shadow-soft hover:shadow-medium transition-smooth animate-slide-up"
              >
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground font-mono text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 gradient-card shadow-soft animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Autres compétences
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {otherSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
