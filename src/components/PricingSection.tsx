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
    <section id="precos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-6">PLANOS PARA EMPRESAS COM OPERAÇÕES COMPLEXAS DE WHATSAPP</h2>
          
          {/* Who uses ZAPCODE section */}
          <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-2xl">💬</span>
              <h3 className="text-2xl font-black">Quem usa o ZAPCODE?</h3>
            </div>
            <div className="text-left space-y-4 max-w-3xl mx-auto">
              <p className="text-lg text-gray-700">
                O ZAPCODE não é para qualquer empresa.
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
                Não é uma ferramenta para pequenas empresas como padarias ou pizzarias que atendem de um único número — nosso foco é otimizar operações complexas e aumentar o desempenho de times que já atendem em escala.
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
              >
                SOLICITAR ORÇAMENTO
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;