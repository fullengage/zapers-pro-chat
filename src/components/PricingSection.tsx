import { Button } from "@/components/ui/button";
import { Check, Flame } from "lucide-react";
import { useState, useEffect } from "react";

const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 18
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const plans = [
    {
      name: "STARTER",
      description: "Para empresas iniciando operações multi-canal",
      price: "Sob consulta",
      isPopular: false,
      features: [
        "Até 10 números de WhatsApp conectados",
        "Gestão de equipe de até 15 agentes",
        "Dashboard básico de conversas",
        "Relatórios de volume e resposta",
        "Suporte por email",
        "Controle básico de permissões"
      ]
    },
    {
      name: "PROFISSIONAL",
      description: "Para empresas com operações consolidadas",
      price: "Sob consulta",
      isPopular: true,
      features: [
        "Até 25 números de WhatsApp conectados",
        "Gestão de equipe de até 50 agentes",
        "Dashboard avançado com métricas",
        "Relatórios detalhados e customizáveis",
        "Suporte prioritário",
        "Controle avançado de permissões",
        "Integração com CRM externo",
        "Automações básicas"
      ]
    },
    {
      name: "EMPRESARIAL",
      description: "Para grandes operações com múltiplas equipes",
      price: "Sob consulta",
      isPopular: false,
      features: [
        "Números de WhatsApp ilimitados",
        "Gestão de equipe ilimitada",
        "Dashboard executivo completo",
        "Relatórios em tempo real",
        "Suporte dedicado 24/7",
        "API completa para integração",
        "Treinamento para toda equipe",
        "Automações avançadas",
        "Chatbots personalizados ilimitados",
        "Rastreabilidade total de conversas"
      ]
    }
  ];

  return (
    <>
      {/* Sales Management Challenge Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black mb-8 text-gray-900">
              O desafio de gerenciar uma equipe de vendas no WhatsApp
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Se você é supervisor ou gerente de vendas, sabe como é difícil garantir que cada lead seja respondido rapidamente, que todas as conversas estejam organizadas e que ninguém perca oportunidades.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-red-200">
                <div className="text-red-500 text-2xl mb-3">📌</div>
                <p className="text-gray-800 font-semibold">Conversas espalhadas em vários números.</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-red-200">
                <div className="text-red-500 text-2xl mb-3">📌</div>
                <p className="text-gray-800 font-semibold">Dúvida se o cliente foi atendido ou não.</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-red-200">
                <div className="text-red-500 text-2xl mb-3">📌</div>
                <p className="text-gray-800 font-semibold">Falta de controle sobre quem respondeu o quê.</p>
              </div>
            </div>
            
            <div className="bg-red-100 border border-red-300 rounded-xl p-6 mb-8">
              <p className="text-lg font-bold text-red-800">
                O resultado? Vendas perdidas, retrabalho e zero visibilidade sobre o que realmente está acontecendo no time.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-200">
              <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                Com o <span className="font-black text-purple-600">ZAPCODE</span>, você centraliza todos os números de WhatsApp em um só painel, acompanha cada interação, define tarefas e mede o desempenho de cada vendedor — tudo em tempo real.
              </p>
              <div className="text-2xl font-black text-green-600">
                💬 Mais controle, mais vendas, menos dor de cabeça.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="precos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-6">WhatsApp CRM para empresas em crescimento acelerado</h2>
          
          {/* Who uses ZAPCODE section */}
          <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-2xl">💬</span>
              <h3 className="text-2xl font-black">O ZAPCODE foi pensado para sua empresa!</h3>
            </div>
            <div className="text-left space-y-4 max-w-3xl mx-auto">
              <p className="text-lg text-gray-700">
                O ZAPCODE é a solução que faltava no seu dia a dia
              </p>
              <p className="text-lg text-gray-700">
                Ele foi criado para organizações que gerenciam grandes volumes de conversas, com múltiplos canais de WhatsApp e equipes dedicadas ao atendimento e vendas.
              </p>
              <div className="bg-white rounded-lg p-6 mt-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                    <span className="font-semibold">Para quem trabalha com 10 ou mais números de WhatsApp</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                    <span className="font-semibold">Tem uma equipe inteira atendendo clientes</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                    <span className="font-semibold">Precisa de controle, rastreabilidade e relatórios</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                É uma solução completa para empresas que precisam qualificar contatos e otimizar o atendimento. Com ela, é possível criar várias equipes, distribuir conversas entre agentes de forma inteligente — levando em conta critérios como canal, horário ou fila de espera. Ideal para empresas que desejam segmentar o atendimento por setor (comercial, suporte, financeiro, etc.) ou até por produto e serviço, garantindo mais agilidade, organização e eficiência em cada interação.
              </p>
            </div>
          </div>
          
          {/* Contact Banner */}
          <div className="gradient-bg text-white rounded-xl p-6 max-w-2xl mx-auto shadow-elegant">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Flame className="text-yellow-300 w-6 h-6" />
              <span className="font-black text-xl">SOLICITE UMA DEMONSTRAÇÃO GRATUITA</span>
              <Flame className="text-yellow-300 w-6 h-6" />
            </div>
            <div className="text-lg font-semibold">
              Entre em contato e conheça nossa solução
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card bg-white p-10 rounded-2xl border-2 transition-smooth relative ${
                plan.isPopular 
                  ? 'border-purple-500 bg-purple-50 transform scale-105 shadow-elegant' 
                  : 'border-gray-200 shadow-card'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-6 py-1 rounded-full text-sm font-bold">
                  MAIS POPULAR
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-4">
                  <div className="text-3xl font-black text-purple-600">{plan.price}</div>
                </div>
                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-bold">
                  DEMONSTRAÇÃO GRATUITA
                </div>
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="text-purple-500 mt-1 mr-3 w-5 h-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full" 
                variant={plan.isPopular ? "hero" : "default"} 
                size="lg"
                asChild
              >
                <a href="https://wa.me/5517997915318" target="_blank" rel="noopener noreferrer">
                  FALAR COM ESPECIALISTA
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
};

export default PricingSection;