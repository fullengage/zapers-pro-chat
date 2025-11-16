import { Button } from "@/components/ui/button";
import { Users, Filter, User, MoreHorizontal } from "lucide-react";

const CRMSection = () => {
  const features = [
    {
      icon: Users,
      title: "Capture novos leads do WhatsApp imediatamente",
    },
    {
      icon: Filter,
      title: "Organize possíveis clientes num funil de vendas",
    },
    {
      icon: User,
      title: "Organize-se com perfis para todos os clientes",
    },
    {
      icon: MoreHorizontal,
      title: "Mais recursos de CRM de vendas para WhatsApp",
    }
  ];

  return (
    <section id="crm" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Um CRM de Vendas dentro do seu WhatsApp
          </h2>
          <p className="text-xl text-muted-foreground">
            Transforme conversas em vendas com ferramentas de gestão de leads e clientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="group bg-card rounded-2xl p-8 border border-border text-center hover:shadow-elegant transition-smooth hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth mx-auto">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="rounded-full px-8 font-semibold" asChild>
            <a href="https://wa.me/5517997915318" target="_blank" rel="noopener noreferrer">
              Otimizar minhas vendas
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CRMSection;
