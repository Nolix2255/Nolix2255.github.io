import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi (GitHub Pages = statique)
    toast.success("Message envoyé avec succès !");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com", color: "primary" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "primary" },
    { icon: Mail, label: "Email", href: "mailto:tristan.karcher@example.com", color: "secondary" },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Contact</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour toute opportunité d'alternance, de stage ou simplement pour échanger !
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="glass-card rounded-xl p-8 border neon-border-blue animate-fade-in-up">
            <h3 className="text-2xl font-semibold mb-6">Envoyez-moi un message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 neon-border-blue group"
              >
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Envoyer le message
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="glass-card rounded-xl p-8 border neon-border-purple">
              <h3 className="text-2xl font-semibold mb-6">Restons connectés</h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-lg bg-background/30 border border-border/30 hover:border-${social.color}/50 transition-all group`}
                  >
                    <div className={`p-2 rounded-lg bg-${social.color}/10`}>
                      <social.icon className={`h-5 w-5 text-${social.color}`} />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {social.label}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 border neon-border-blue">
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="font-semibold text-foreground">Disponibilité :</span>
                <br />
                Je suis actuellement à la recherche d'une alternance ou d'un stage dans le domaine
                du développement web ou de l'administration système.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
