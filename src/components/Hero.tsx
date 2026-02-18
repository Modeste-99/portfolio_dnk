import heroBg from "@/assets/hero-bg.jpg";
import ppmomo from "/ppmomo1.png";
import SocialLinks from "@/components/SocialLinks";

const Hero = () => {

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 py-24 pt-24">
        {/* Photo */}
        <div className="flex-shrink-0">
          <div
            className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden"
          >
            <img src={ppmomo} alt="Danklou Modeste" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <p className="text-gold font-body text-sm tracking-widest uppercase mb-3">Référent Digital</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-4">
            DANKLOU<br />
            <span className="gradient-text">Modeste</span>
          </h1>
          <p className="font-body text-muted-foreground text-lg max-w-md mb-8 leading-relaxed">
            Passionné par le marketing numérique, le design et la communication digitale. Basé à Lomé, Togo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 gradient-gold text-primary-foreground font-medium rounded font-body hover:opacity-90 transition-opacity"
            >
              Voir mes projets
            </button>
            <a
              href="/CV_DANKLOU MODESTE.pdf"
              download="CV_DANKLOU MODESTE.pdf"
              className="px-8 py-3 border border-gold text-gold font-medium rounded font-body hover:bg-gold/10 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Télécharger CV
            </a>
            <a
              href="mailto:modestedan771@gmail.com"
              className="px-8 py-3 border border-gold text-gold font-medium rounded font-body hover:bg-gold/10 transition-colors"
            >
              Me contacter
            </a>
          </div>
          
          <div className="mt-8">
            <SocialLinks size="default" className="justify-center md:justify-start" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs font-body tracking-widest uppercase">Défiler</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
