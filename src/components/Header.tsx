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
      {/* Main Header - Clean & Professional */}
      <header className="sticky top-0 z-50 bg-card shadow-sm border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="ZapCode Logo" className="h-16 w-auto" />
          </div>
          
          <nav className="hidden lg:flex space-x-8 items-center">
            <a href="/" className="text-foreground hover:text-primary transition-smooth text-sm font-medium">
              Início
            </a>
            <a href="#solucoes" className="text-foreground hover:text-primary transition-smooth text-sm font-medium">
              Soluções
            </a>
            <Link to="/blog" className="text-foreground hover:text-primary transition-smooth text-sm font-medium">
              Blog
            </Link>
            <Link to="/quem-somos" className="text-foreground hover:text-primary transition-smooth text-sm font-medium">
              Quem somos
            </Link>
            <Link to="/formulario" className="text-foreground hover:text-primary transition-smooth text-sm font-medium">
              Formulário
            </Link>
          </nav>
          
          <div className="hidden lg:flex items-center space-x-3">
            {user ? (
              <>
                <Link to="/dashboard">
                  <Button variant="ghost" size="sm" className="gap-2">
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
                <Button variant="default" size="lg" className="rounded-full px-8 font-semibold">
                  Agende uma demonstração
                </Button>
                <Link to="/auth">
                  <Button variant="outline" size="lg" className="rounded-full px-8 font-semibold">
                    Entrar
                  </Button>
                </Link>
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
              <Link to="/formulario" className="font-semibold hover:text-primary transition-smooth">
                Formulário
              </Link>
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
