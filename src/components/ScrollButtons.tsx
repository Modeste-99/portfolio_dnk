import { useState, useEffect } from "react";

const ScrollButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-50">
      {/* Bouton haut */}
      <button
        onClick={scrollToTop}
        className="w-12 h-12 bg-gold text-primary-foreground rounded-full shadow-lg hover:bg-gold/90 transition-all duration-300 flex items-center justify-center group"
        title="Remonter en haut"
      >
        <svg 
          className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 15l7-7 7 7" 
          />
        </svg>
      </button>

      {/* Bouton bas */}
      <button
        onClick={scrollToBottom}
        className="w-12 h-12 bg-gold text-primary-foreground rounded-full shadow-lg hover:bg-gold/90 transition-all duration-300 flex items-center justify-center group"
        title="Aller en bas"
      >
        <svg 
          className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7" 
          />
        </svg>
      </button>
    </div>
  );
};

export default ScrollButtons;
