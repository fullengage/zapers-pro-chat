import { Button } from "@/components/ui/button";
import { MessageSquare, Users, TrendingUp, Shield, Zap, Clock, AlertTriangle, BarChart, SlidersHorizontal } from "lucide-react";

const SolutionsSection = () => {
  const features = [
    {
      icon: AlertTriangle,
      title: "Prevenção de Riscos e Compliance",
      description: "Nossa plataforma permite que sua equipe detecte falhas de conduta, vazamentos de dados e infrações às políticas internas, monitorando as comunicações de forma inteligente e em conformidade com a LGPD."
    },
    {
      icon: BarChart,
      title: "Decisões Baseadas em Dados",
      description: "Acompanhe as interações em tempo real, visualize métricas estratégicas e gere insights para otimizar performance e compliance da sua operação."
    },
    {
      icon: Shield,
      title: "Segurança e Compliance em Tempo Real",
      description: "Visualize todas as conversas, receba alertas de mensagens fora do padrão e gerencie regras internas com precisão — garantindo conformidade, segurança e transparência."
    },
    {
      icon: SlidersHorizontal,
      title: "Regras Personalizadas para Cada Realidade",
      description: "Configure alertas com base em palavras-chave, temas sensíveis ou riscos específicos do seu setor. Adapte o monitoramento à realidade do seu negócio."
    },
    {
      icon: Users,
      title: "Controle Total sobre os Usuários Monitorados",
      description: "Gerencie facilmente quem está sob monitoria, veja status de conexão, dados de contato, grupos/setores vinculados e gestores responsáveis."
    }
  ];

  return (
    <section id="solucoes" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Controle e Segurança para sua Comunicação Corporativa
          </h2>
          <p className="text-xl text-muted-foreground">
            Ferramentas poderosas para garantir a integridade e a eficiência da sua equipe no WhatsApp.
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
