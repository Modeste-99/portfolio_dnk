import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Accueil", "À propos", "Compétences", "Projets", "Contact"];

  const scrollTo = (section: string) => {
    const map: Record<string, string> = {
      "Accueil": "hero",
      "À propos": "about",
      "Compétences": "skills",
      "Projets": "projects",
      "Contact": "contact",
    };
    document.getElementById(map[section])?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-display text-xl font-bold text-gold">DM.</span>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="font-body text-sm text-muted-foreground hover:text-gold transition-colors duration-200"
            >
              {link}
            </button>
          ))}
        </div>
        <a
          href="mailto:modestedan771@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 border border-gold text-gold text-sm font-medium rounded hover:bg-gold hover:text-primary-foreground transition-all duration-200"
        >
          Me contacter
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
