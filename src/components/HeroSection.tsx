import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FileText, ShoppingCart, MessageSquare } from "lucide-react";
import heroProfessional from "@/assets/hero-professional.png";

const HeroSection = () => {
  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Inteligência e Segurança
              <br />
              <span className="text-foreground">em WhatsApps profissionais</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Monitoramento inteligente de múltiplas contas de WhatsApp garantindo conformidade e performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full px-8 font-semibold text-base">
                Fale com um especialista
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="rounded-full px-8 font-semibold text-base">
                    ▶️ Veja como funciona
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full h-auto p-0 bg-black border-0">
                  <div className="relative w-full h-0 pb-[56.25%]">
                    <iframe
                      src="https://www.youtube.com/embed/okmis967jwk?autoplay=1"
                      title="Demonstração ZapCode"
                      className="absolute inset-0 w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Right Content - Professional Image with Floating Cards */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Professional Image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={heroProfessional} 
                alt="Professional Business Person" 
                className="h-full w-auto object-contain"
              />
            </div>

            {/* Floating Feature Cards */}
            <div className="absolute top-12 right-12 bg-card shadow-card rounded-xl p-6 max-w-xs animate-float border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Analisar e Resumir</h3>
                  <p className="text-sm text-muted-foreground">
                    Analisar o sentimento da conversa, atribuir uma nota e resumir os pontos principais.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute top-64 right-8 bg-card shadow-card rounded-xl p-6 max-w-xs animate-float border border-border" style={{ animationDelay: '1s' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <ShoppingCart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Avaliar Potencial de Compra</h3>
                  <p className="text-sm text-muted-foreground">
                    Analisar o interesse do cliente e atribuir uma pontuação de compra.
                  </p>
                </div>
              </div>
            </div>

            {/* User Profile Card */}
            <div className="absolute bottom-12 right-20 bg-card shadow-elegant rounded-2xl p-6 w-72 border border-border animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                    RD
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Rafael Dias</h3>
                    <p className="text-xs text-muted-foreground">rafael.dias@zapcode.io</p>
                  </div>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                  <svg width="4" height="16" viewBox="0 0 4 16" fill="currentColor">
                    <circle cx="2" cy="2" r="2"/>
                    <circle cx="2" cy="8" r="2"/>
                    <circle cx="2" cy="14" r="2"/>
                  </svg>
                </button>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3">(11) 91234-5678</p>
              
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-foreground">
                  Vendas
                </span>
                <span className="px-3 py-1 bg-success/10 text-success rounded-full text-xs font-medium">
                  Conectado
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Companies Section */}
      <div className="container mx-auto px-6 mt-20">
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl py-8 px-6 border border-border">
          <p className="text-center text-sm text-muted-foreground font-medium mb-6">
            Empresas que confiam no ZapCode
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-2xl font-bold text-foreground">POSITIVO</div>
            <div className="text-2xl font-bold text-foreground">QFROTAS</div>
            <div className="text-2xl font-bold text-foreground">GSK</div>
            <div className="text-2xl font-bold text-foreground">SERVIER</div>
            <div className="text-2xl font-bold text-foreground">EUROFARMA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
