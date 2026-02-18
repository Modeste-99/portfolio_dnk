const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="w-8 h-px bg-gold" />
          <h2 className="font-display text-4xl font-bold">Contact</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-10">
              Vous avez un projet en tête ? Une collaboration à proposer ? N'hésitez pas à me contacter, je serai ravi d'échanger avec vous.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "modestedan771@gmail.com",
                  href: "mailto:modestedan771@gmail.com",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Téléphone",
                  value: "+228 90 65 62 81",
                  href: "tel:+22890656281",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Localisation",
                  value: "Kpogan, Lomé — Togo",
                  href: null,
                },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-gold uppercase tracking-widest font-body">{label}</p>
                    {href ? (
                      <a href={href} className="text-foreground font-body hover:text-gold transition-colors">{value}</a>
                    ) : (
                      <p className="text-foreground font-body">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); alert("Message envoyé ! (Fonctionnalité à connecter)"); }}
            className="space-y-5"
          >
            <div>
              <label className="block text-xs text-gold uppercase tracking-widest font-body mb-2">Nom complet</label>
              <input
                type="text"
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm font-body focus:outline-none focus:border-gold transition-colors"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block text-xs text-gold uppercase tracking-widest font-body mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm font-body focus:outline-none focus:border-gold transition-colors"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label className="block text-xs text-gold uppercase tracking-widest font-body mb-2">Message</label>
              <textarea
                required
                rows={5}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm font-body focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="Votre message..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 gradient-gold text-primary-foreground font-medium font-body rounded-lg hover:opacity-90 transition-opacity"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
