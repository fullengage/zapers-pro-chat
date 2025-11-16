import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 to-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-12 shadow-elegant border border-border text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Proteja sua comunicação corporativa agora mesmo.
            </h2>
                        
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 font-semibold gap-2" asChild>
                <a href="https://wa.me/5517997915318" target="_blank" rel="noopener noreferrer">
                  🚀 Quero Monitorar meu WhatsApp com ZapCode
                </a>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success"></div>
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success"></div>
                <span>Setup gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success"></div>
                <span>Suporte dedicado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
