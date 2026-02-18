import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string | null;
  details?: string;
  technologies?: string[];
  link?: string;
}

const defaultProjects: Project[] = [
  // Projets Web
  {
    id: 1,
    title: "Site WordPress",
    description: "Création d'un site web avec WordPress, optimisé SEO.",
    category: "Web",
    image: "/e1.png",
    details: "Site vitrine complet pour une entreprise locale avec système de réservation en ligne. Intégration de plugins personnalisés et optimisation des performances.",
    technologies: ["WordPress", "WooCommerce", "SEO", "PHP"],
    link: "https://example.com"
  },
  {
    id: 2,
    title: "Application React",
    description: "Dashboard analytique avec React et TypeScript.",
    category: "Web",
    image: "/a1.png",
    details: "Application web moderne pour l'analyse de données en temps réel avec graphiques interactifs et export PDF.",
    technologies: ["React", "TypeScript", "Chart.js", "Node.js"],
    link: "https://denti-info.vercel.app/"
  },
  {
    id: 3,
    title: "E-commerce Shopify",
    description: "Boutique en ligne avec Shopify et personnalisation complète.",
    category: "Web",
    image: "/s1.png",
    details: "Configuration complète d'une boutique Shopify avec thème personnalisé, intégration paiement et optimisation conversion.",
    technologies: ["Shopify", "Liquid", "HTML/CSS", "Payment API"],
    link: "https://shop.example.com"
  },
  {
    id: 4,
    title: "Landing Page Vite",
    description: "Page d'atterrissage haute performance avec Vite et Tailwind.",
    category: "Web",
    image: "/l1.png",
    details: "Landing page optimisée pour le SEO avec animations fluides et formulaire de contact interactif.",
    technologies: ["Vite", "Tailwind CSS", "JavaScript", "Netlify"],
    link: "https://landing.example.com"
  },
  
  // Projets Design
  {
    id: 5,
    title: "Design Figma",
    description: "Maquette UI/UX réalisée sur Figma pour un client.",
    category: "Design",
    image: "/r1.jpeg",
    details: "Design complet d'une application mobile de livraison de repas. Création de wireframes, prototypes interactifs et design system.",
    technologies: ["Figma", "UI/UX", "Prototyping", "Design System"],
    link: "https://figma.com/example"
  },
  {
    id: 13,
    title: "Prototype Mobile",
    description: "Prototype interactif d'application de livraison.",
    category: "Design",
    image: "/r2.jpeg",
    details: "Prototype haute-fidélité avec animations et micro-interactions pour une application de livraison de repas.",
    technologies: ["Figma", "Interactive Prototyping", "Mobile UX", "Animation"],
    link: null
  },
  {
    id: 6,
    title: "Branding Startup",
    description: "Identité visuelle complète pour une startup tech.",
    category: "Design",
    image: "/d1.png",
    details: "Création de l'identité visuelle complète : logo, charte graphique, cartes de visite, et guidelines de marque.",
    technologies: ["Illustrator", "Photoshop", "Branding", "Guidelines"],
    link: null
  },
  {
    id: 7,
    title: "Interface Mobile",
    description: "Design d'une application bancaire mobile.",
    category: "Design",
    image: "/b5.png",
    details: "Conception UX/UI pour une application bancaire avec focus sur la sécurité et l'expérience utilisateur.",
    technologies: ["Figma", "Mobile Design", "UX Research", "Prototyping"],
    link: "https://mobile.example.com"
  },
  {
    id: 8,
    title: "Site Web Design",
    description: "Maquette responsive pour un site corporate.",
    category: "Design",
    image: "/b1.png",
    details: "Design web responsive avec attention aux détails et optimisation pour tous les appareils.",
    technologies: ["Figma", "Responsive Design", "Web Design", "CSS Grid"],
    link: null
  },
  
  // Projets Graphisme
  {
    id: 9,
    title: "Création Canva",
    description: "Visuels marketing et supports de communication.",
    category: "Graphisme",
    image: "/b2.png",
    details: "Création de l'identité visuelle complète pour une startup : logo, cartes de visite, flyers, et templates pour les réseaux sociaux.",
    technologies: ["Canva", "Branding", "Marketing Digital", "Social Media"],
    link: null
  },
  {
    id: 10,
    title: "Logo Design",
    description: "Création de logos pour plusieurs entreprises.",
    category: "Graphisme",
    image: "/b3.png",
    details: "Conception de logos uniques et mémorables avec différentes variations (couleur, noir & blanc, inversé).",
    technologies: ["Illustrator", "Vector Design", "Logo Design", "Creative Suite"],
    link: null
  },
  {
    id: 11,
    title: "Affiches Publicitaires",
    description: "Campagne d'affiches pour événement musical.",
    category: "Graphisme",
    image: "/f1.png",
    details: "Création d'une série d'affiches pour un festival de musique avec déclinaisons pour différents formats.",
    technologies: ["Photoshop", "InDesign", "Print Design", "Typography"],
    link: null
  },
  {
    id: 12,
    title: "Social Media Kit",
    description: "Templates pour réseaux sociaux.",
    category: "Graphisme",
    image: "/b6.png",
    details: "Création de 50+ templates pour Instagram, Facebook, LinkedIn avec charte graphique cohérente.",
    technologies: ["Canva", "Social Media", "Template Design", "Brand Consistency"],
    link: null
  },
];

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <span className="w-8 h-px bg-gold" />
            <h2 className="font-display text-4xl font-bold">Mes Projets</h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-surface border border-border rounded-xl overflow-hidden hover:border-gold/40 transition-all duration-300 hover:shadow-gold cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image area */}
              <div className="relative h-52 bg-surface-2 overflow-hidden">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                    <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs">Aucune capture</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-xs text-gold font-body uppercase tracking-widest">{project.category}</span>
                <h3 className="font-display text-lg font-bold mt-1 mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{project.description}</p>
                <div className="mt-3 flex items-center text-gold text-xs font-body">
                  <span>Voir les détails</span>
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project details modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-surface border border-border rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs text-gold font-body uppercase tracking-widest">{selectedProject.category}</span>
                  <h3 className="font-display text-2xl font-bold mt-1">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {selectedProject.image && (
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover" />
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h4 className="font-display text-lg font-bold mb-2">Description</h4>
                  <p className="text-muted-foreground font-body leading-relaxed">{selectedProject.description}</p>
                </div>

                {selectedProject.details && (
                  <div>
                    <h4 className="font-display text-lg font-bold mb-2">Détails du projet</h4>
                    <p className="text-muted-foreground font-body leading-relaxed">{selectedProject.details}</p>
                  </div>
                )}

                {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                  <div>
                    <h4 className="font-display text-lg font-bold mb-2">Technologies utilisées</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-gold/10 text-gold text-xs font-body rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.link && (
                  <div>
                    <h4 className="font-display text-lg font-bold mb-2">Lien du projet</h4>
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors font-body"
                    >
                      <span>Voir le projet</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
