import { Github, Linkedin, Mail, Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-6 h-6 text-primary" />
                <span className="font-bold text-lg">Portfolio</span>
              </div>
              <p className="text-muted-foreground">
                Étudiant en BTS SIO passionné par le développement web et les
                nouvelles technologies.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Navigation</h3>
              <ul className="space-y-2">
                {["Accueil", "À propos", "Compétences", "Projets", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Réseaux sociaux</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-smooth"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-smooth"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-smooth"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Portfolio BTS SIO. Développé avec
              React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
