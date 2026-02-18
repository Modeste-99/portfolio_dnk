import SocialLinks from "@/components/SocialLinks";

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl font-bold text-gold">DM.</span>
        <p className="font-body text-sm text-muted-foreground text-center">
          © 2025 Danklou Modeste — Référent Digital · Lomé, Togo
        </p>
        <div className="flex items-center gap-6">
          <SocialLinks size="small" />
          <div className="flex gap-4">
            <a
              href="mailto:modestedan771@gmail.com"
              className="text-muted-foreground hover:text-gold transition-colors"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href="tel:+22890656281"
              className="text-muted-foreground hover:text-gold transition-colors"
              aria-label="Téléphone"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
