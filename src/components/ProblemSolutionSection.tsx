import { Shield, Archive, UserX, Lock, Database, TrendingUp } from "lucide-react";

const ProblemSolutionSection = () => {
  const solutions = [
    {
      icon: Lock,
      title: "Proteção de Dados",
      description: "Criptografia e segurança corporativa de ponta a ponta para todas as suas conversas empresariais"
    },
    {
      icon: Database,
      title: "Armazenamento Inteligente",
      description: "Organize e encontre mensagens, arquivos e históricos com busca avançada e filtros inteligentes"
    },
    {
      icon: TrendingUp,
      title: "Análise em Tempo Real",
      description: "Dashboards completos com métricas de desempenho, SLA e produtividade da equipe"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Por que escolher o ZapCode?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforme a comunicação do seu time com uma plataforma completa, 
              segura e fácil de usar
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
