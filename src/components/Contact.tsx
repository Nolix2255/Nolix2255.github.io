import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé avec succès !");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@example.com",
      link: "mailto:contact@example.com",
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+33 6 12 34 56 78",
      link: "tel:+33612345678",
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Paris, France",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Me <span className="text-primary">contacter</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une question ? Un projet ? N'hésitez pas à me contacter
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 animate-slide-up">
              <Card className="p-6 gradient-card shadow-soft">
                <h3 className="text-2xl font-bold mb-6">
                  Informations de contact
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-smooth group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:shadow-medium transition-smooth">
                        <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-smooth" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-muted-foreground">
                          {item.title}
                        </p>
                        <p className="font-semibold">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-6 gradient-card shadow-soft">
                <h3 className="text-xl font-bold mb-4">Disponibilité</h3>
                <p className="text-muted-foreground mb-4">
                  Actuellement ouvert aux opportunités de stage et d'alternance
                  pour septembre 2025.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">
                    Disponible pour des projets
                  </span>
                </div>
              </Card>
            </div>

            <Card className="p-6 gradient-card shadow-soft animate-slide-up">
              <h3 className="text-2xl font-bold mb-6">Envoyez un message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Nom
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="votre.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Votre message..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full gradient-primary">
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer le message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
