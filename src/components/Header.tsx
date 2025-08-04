import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 px-4 relative overflow-hidden">
        <div className="flex items-center justify-center space-x-2">
          <span className="urgency-badge">⚡</span>
          <span className="font-bold text-sm md:text-base">
            🚀 OFERTA LIMITADA: 30% OFF no primeiro mês + Setup GRATUITO!
          </span>
          <span className="urgency-badge">⚡</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-background shadow-card border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-3 shadow-elegant">
              <span className="text-white font-bold text-2xl">Z</span>
            </div>
            <span className="text-2xl font-black text-foreground">ZAPERS</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="font-semibold hover:text-primary transition-smooth">
              Início
            </a>
            <a href="/quem-somos" className="font-semibold hover:text-primary transition-smooth">
              Quem Somos
            </a>
            <a href="/blog" className="font-semibold hover:text-primary transition-smooth">
              Blog
            </a>
            <a href="#solucoes" className="font-semibold hover:text-primary transition-smooth">
              Soluções
            </a>
            <a href="#precos" className="font-semibold hover:text-primary transition-smooth">
              Preços
            </a>
            <a href="#depoimentos" className="font-semibold hover:text-primary transition-smooth">
              Depoimentos
            </a>
          </nav>
          
          <Button className="hidden md:flex" variant="hero" size="lg">
            DEMONSTRAÇÃO GRÁTIS
          </Button>
          
          <button 
            className="md:hidden text-foreground"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t shadow-card">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="/" className="font-semibold hover:text-primary transition-smooth">
                Início
              </a>
              <a href="/quem-somos" className="font-semibold hover:text-primary transition-smooth">
                Quem Somos
              </a>
              <a href="/blog" className="font-semibold hover:text-primary transition-smooth">
                Blog
              </a>
              <a href="#solucoes" className="font-semibold hover:text-primary transition-smooth">
                Soluções
              </a>
              <a href="#precos" className="font-semibold hover:text-primary transition-smooth">
                Preços
              </a>
              <a href="#depoimentos" className="font-semibold hover:text-primary transition-smooth">
                Depoimentos
              </a>
              <Button variant="hero" size="lg" className="w-full">
                DEMONSTRAÇÃO GRÁTIS
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;