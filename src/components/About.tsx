const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="w-8 h-px bg-gold" />
          <h2 className="font-display text-4xl font-bold">À propos</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-body text-muted-foreground leading-relaxed mb-6 text-lg">
              Je suis <span className="text-foreground font-medium">Danklou Modeste</span>, actuellement en formation de
              <span className="text-gold"> Référent Digital</span> au Centre ADN Golf 1 à Lomé, Togo.
              Passionné par les technologies du marketing numérique et la communication digitale.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Mon parcours atypique — de la biologie animale à l'université de Lomé au digital — me confère un esprit analytique
              et une capacité à aborder les problèmes sous différents angles. Je maîtrise des outils comme WordPress, Figma, Canva
              et j'ai des bases solides en HTML/CSS et SEO.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Localisation", value: "Kpogan, Lomé — Togo" },
                { label: "Formation", value: "Référent Digital (2025)" },
                { label: "Email", value: "modestedan771@gmail.com" },
                { label: "Téléphone", value: "+228 90 65 62 81" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-surface rounded-lg p-4 border border-border">
                  <p className="text-xs text-gold uppercase tracking-widest font-body mb-1">{label}</p>
                  <p className="text-sm text-foreground font-body">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold mb-6">Expérience</h3>

            <div className="relative pl-6 border-l border-border space-y-8">
              <div className="relative">
                <div className="absolute -left-[25px] w-3 h-3 rounded-full bg-gold border-2 border-background" />
                <p className="text-gold text-sm font-body mb-1">Mars 2025 — Décembre 2025</p>
                <h4 className="font-display text-lg font-bold">Référent Digital</h4>
                <p className="text-muted-foreground text-sm font-body">Centre ADN Golf 1, Lomé</p>
                <p className="text-muted-foreground text-sm font-body mt-2">
                  Marketing digital, WordPress, Figma, Canva, SEO, HTML/CSS, gestion de projet
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[25px] w-3 h-3 rounded-full bg-surface-2 border-2 border-border" />
                <p className="text-muted-foreground text-sm font-body mb-1">2020 — Aujourd'hui</p>
                <h4 className="font-display text-lg font-bold">Commerce & Négociation</h4>
                <p className="text-muted-foreground text-sm font-body">Revendeur au port, Lomé</p>
                <p className="text-muted-foreground text-sm font-body mt-2">
                  Vente, négociation commerciale, gestion des stocks, relation clients
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[25px] w-3 h-3 rounded-full bg-surface-2 border-2 border-border" />
                <p className="text-muted-foreground text-sm font-body mb-1">2018 — Aujourd'hui</p>
                <h4 className="font-display text-lg font-bold">Licence en Biologie Animale</h4>
                <p className="text-muted-foreground text-sm font-body">Université de Lomé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
