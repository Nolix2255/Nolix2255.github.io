import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            Développé avec <Heart className="h-4 w-4 text-primary animate-glow-pulse" /> par{" "}
            <span className="font-semibold gradient-text">Tristan KARCHER</span>
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            © {new Date().getFullYear()} - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
