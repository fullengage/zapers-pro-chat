import { Shield, Archive, UserX, Lock, Database, TrendingUp, Filter, ClipboardCheck } from "lucide-react";

const ProblemSolutionSection = () => {
  const solutions = [
    {
      icon: Shield,
      title: "🇧🇷 Plataforma 100% Brasileira",
      description: "Dados hospedados e tratados sob a legislação nacional."
    },
    {
      icon: Lock,
      title: "LGPD-first + Compliance Operacional",
      description: "Logs, políticas e relatórios completos de auditoria."
    },
    {
      icon: TrendingUp,
      title: "Analytics Avançado de WhatsApp",
      description: "KPIs de SLA, tempo de resposta, performance de equipe e funil de conversas."
    },
    {
      icon: UserX,
      title: "UX WhatsApp-first",
      description: "Interface rápida, moderna e fluida para operações que vivem no WhatsApp — menos distração, mais produtividade."
    },
    {
      icon: Filter,
      title: "CRM de Vendas para WhatsApp",
      description: "Capture leads, organize clientes em um funil de vendas e gerencie perfis para impulsionar suas conversas comerciais."
    },
    {
      icon: ClipboardCheck,
      title: "Gestão de Equipe e Performance",
      description: "Crie tarefas, defina metas, avalie o desempenho da equipe e controle permissões de acesso com facilidade."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Por que escolher a ZapCode?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Plataforma 100% Brasileira, LGPD-first, com Analytics Avançado e Governança e Controle para sua operação.
            </p>
          </div>
          
          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div 
                  key={index} 
                  className="group bg-card rounded-2xl p-8 border border-border hover:shadow-elegant transition-smooth hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Stats Row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-sm text-muted-foreground">Uptime garantido</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Suporte dedicado</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">+500</div>
              <p className="text-sm text-muted-foreground">Empresas ativas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Cloud seguro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
