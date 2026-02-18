const skills = [
  {
    category: "Techniques",
    items: [
      { name: "WordPress", level: 75 },
      { name: "HTML / CSS", level: 65 },
      { name: "Figma", level: 80 },
      { name: "Canva", level: 90 },
      { name: "SEO", level: 70 },
      { name: "Gestion de projet digital", level: 72 },
    ],
  },
  {
    category: "Marketing & Communication",
    items: [
      { name: "Stratégie digitale", level: 72 },
      { name: "Création de contenu", level: 85 },
      { name: "Réseaux sociaux", level: 80 },
    ],
  },
];

const languages = [
  { name: "Français", level: "Courant", percent: 95 },
  { name: "Anglais", level: "Intermédiaire", percent: 50 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="w-8 h-px bg-gold" />
          <h2 className="font-display text-4xl font-bold">Compétences</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="font-display text-xl font-bold text-gold mb-6">{group.category}</h3>
              <div className="space-y-5">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body text-sm text-foreground">{skill.name}</span>
                      <span className="font-body text-xs text-gold">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-surface-2 rounded-full overflow-hidden">
                      <div
                        className="h-full gradient-gold rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="font-display text-xl font-bold text-gold mb-6">Langues</h3>
          <div className="grid sm:grid-cols-2 gap-6 max-w-lg">
            {languages.map((lang) => (
              <div key={lang.name} className="bg-background rounded-lg p-5 border border-border">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-body font-medium">{lang.name}</span>
                  <span className="font-body text-xs text-gold">{lang.level}</span>
                </div>
                <div className="h-1.5 bg-surface-2 rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-gold rounded-full"
                    style={{ width: `${lang.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools badges */}
        <div className="mt-12">
          <h3 className="font-display text-xl font-bold mb-6">Outils maîtrisés</h3>
          <div className="flex flex-wrap gap-3">
            {["WordPress", "Figma", "Canva", "HTML", "CSS", "SEO", "Google Analytics", "Réseaux sociaux"].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 border border-gold/30 text-gold text-sm font-body rounded hover:border-gold hover:bg-gold/5 transition-all cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
