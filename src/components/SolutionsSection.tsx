import { Button } from "@/components/ui/button";
import { MessageSquare, Users, TrendingUp, Shield, Zap, Clock } from "lucide-react";

const SolutionsSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Multi-canal unificado",
      description: "Gerencie múltiplos números WhatsApp em uma única plataforma integrada"
    },
    {
      icon: Users,
      title: "Gestão de equipes",
      description: "Atribua conversas, defina permissões e acompanhe o desempenho em tempo real"
    },
    {
      icon: TrendingUp,
      title: "Analytics avançado",
      description: "Dashboards completos com métricas de desempenho e produtividade"
    },
    {
      icon: Shield,
      title: "Segurança empresarial",
      description: "Criptografia de ponta a ponta e conformidade com LGPD"
    },
    {
      icon: Zap,
      title: "Automações inteligentes",
      description: "Respostas automáticas, chatbots e workflows personalizados"
    },
    {
      icon: Clock,
      title: "Histórico completo",
      description: "Busca avançada e acesso ilimitado ao histórico de conversas"
    }
  ];

  return (
    <section id="solucoes" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-xl text-muted-foreground">
            Recursos completos para transformar o WhatsApp no CRM da sua empresa
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="group bg-card rounded-2xl p-8 border border-border hover:shadow-elegant transition-smooth hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="rounded-full px-8 font-semibold" asChild>
            <a href="https://wa.me/5517997915318" target="_blank" rel="noopener noreferrer">
              Solicitar demonstração
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
