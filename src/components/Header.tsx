import { Button } from "@/components/ui/button";
import logo from '/logo-zapcode.png';
import { Menu, X, LogOut, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

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
            <img src={logo} alt="Zapcode Logo" className="h-24 w-auto" />
            <span className="text-2xl font-black text-foreground"></span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="font-semibold hover:text-primary transition-smooth">
              Início
            </a>
            <a href="#monitoramento" className="font-semibold hover:text-primary transition-smooth">
              Monitoramento
            </a>
            <a href="#solucoes" className="font-semibold hover:text-primary transition-smooth">
              Soluções
            </a>
            <a href="#precos" className="font-semibold hover:text-primary transition-smooth">
              Preços
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/dashboard">
                  <Button variant="outline" size="sm" className="gap-2">
                    <User className="h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={signOut} className="gap-2">
                  <LogOut className="h-4 w-4" />
                  Sair
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="outline" size="lg">
                    Login
                  </Button>
                </Link>
                <Button variant="hero" size="lg">
                  DEMONSTRAÇÃO GRÁTIS
                </Button>
              </>
            )}
          </div>
          
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
              <a href="#monitoramento" className="font-semibold hover:text-primary transition-smooth">
                Monitoramento
              </a>
              <a href="#solucoes" className="font-semibold hover:text-primary transition-smooth">
                Soluções
              </a>
              <a href="#precos" className="font-semibold hover:text-primary transition-smooth">
                Preços
              </a>
              {user ? (
                <>
                  <Link to="/dashboard">
                    <Button variant="outline" size="lg" className="w-full gap-2">
                      <User className="h-4 w-4" />
                      Dashboard
                    </Button>
                  </Link>
                  <Button variant="ghost" size="lg" onClick={signOut} className="w-full gap-2">
                    <LogOut className="h-4 w-4" />
                    Sair
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/auth">
                    <Button variant="outline" size="lg" className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Button variant="hero" size="lg" className="w-full">
                    DEMONSTRAÇÃO GRÁTIS
                  </Button>
                </>
              )}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
