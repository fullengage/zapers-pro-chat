import { Shield, Archive, UserX, Lock, Database, TrendingUp } from "lucide-react";

const ProblemSolutionSection = () => {
  const problems = [
    {
      icon: Shield,
      title: "Falta de Segurança",
      description: "Dados corporativos expostos em aplicativos pessoais",
      bgColor: "bg-red-50",
      borderColor: "border-red-500",
      iconColor: "text-red-500",
      textColor: "text-red-700"
    },
    {
      icon: Archive,
      title: "Desorganização",
      description: "Dificuldade em armazenar e encontrar conversas",
      bgColor: "bg-red-50",
      borderColor: "border-red-500",
      iconColor: "text-red-500",
      textColor: "text-red-700"
    },
    {
      icon: UserX,
      title: "Falta de Controle",
      description: "Impossibilidade de monitorar comunicações",
      bgColor: "bg-red-50",
      borderColor: "border-red-500",
      iconColor: "text-red-500",
      textColor: "text-red-700"
    }
  ];

  const solutions = [
    {
      icon: Lock,
      title: "Proteção de Dados",
      description: "Criptografia e segurança corporativa para suas conversas",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-500",
      iconColor: "text-purple-500",
      textColor: "text-purple-700"
    },
    {
      icon: Database,
      title: "Armazenamento Eficiente",
      description: "Organize e visualize mensagens e arquivos com facilidade",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-500",
      iconColor: "text-purple-500",
      textColor: "text-purple-700"
    },
    {
      icon: TrendingUp,
      title: "Monitoramento Completo",
      description: "Acompanhe todas as interações da sua equipe",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-500",
      iconColor: "text-purple-500",
      textColor: "text-purple-700"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Problem */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-8 text-red-600">
              ❌ DESAFIOS NA COMUNICAÇÃO CORPORATIVA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {problems.map((problem, index) => {
                const IconComponent = problem.icon;
                return (
                  <div key={index} className={`${problem.bgColor} p-8 rounded-xl border-l-4 ${problem.borderColor} transition-smooth hover:shadow-card`}>
                    <IconComponent className={`${problem.iconColor} w-12 h-12 mb-4`} />
                    <h3 className={`text-xl font-bold mb-3 ${problem.textColor}`}>{problem.title}</h3>
                    <p className="text-gray-700">{problem.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Solution */}
          <div className="text-center">
            <h2 className="text-4xl font-black mb-8 text-purple-600">
              ✅ A SOLUÇÃO ZAPCODE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div key={index} className={`${solution.bgColor} p-8 rounded-xl border-l-4 ${solution.borderColor} transition-smooth hover:shadow-card`}>
                    <IconComponent className={`${solution.iconColor} w-12 h-12 mb-4`} />
                    <h3 className={`text-xl font-bold mb-3 ${solution.textColor}`}>{solution.title}</h3>
                    <p className="text-gray-700">{solution.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;