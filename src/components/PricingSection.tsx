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
      description: "Ideal para pequenas equipes",
      originalPrice: "R$ 129",
      currentPrice: "R$ 90",
      period: "/mês",
      isPopular: false,
      features: [
        "Monitoramento de 5 funcionários",
        "Armazenamento de 50GB",
        "Relatórios básicos",
        "Suporte por email"
      ]
    },
    {
      name: "PROFISSIONAL",
      description: "Perfeito para médias empresas",
      originalPrice: "R$ 299",
      currentPrice: "R$ 209",
      period: "/mês",
      isPopular: true,
      features: [
        "Monitoramento de 20 funcionários",
        "Armazenamento de 200GB",
        "Relatórios avançados",
        "Suporte prioritário",
        "Integração com outras ferramentas"
      ]
    },
    {
      name: "EMPRESARIAL",
      description: "Para grandes corporações",
      originalPrice: "R$ 599",
      currentPrice: "R$ 419",
      period: "/mês",
      isPopular: false,
      features: [
        "Monitoramento ilimitado",
        "Armazenamento ilimitado",
        "Relatórios customizados",
        "Suporte dedicado 24/7",
        "API completa",
        "Treinamento para sua equipe"
      ]
    }
  ];

  return (
    <section id="precos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-6">PLANOS PARA TODOS OS TAMANHOS DE EMPRESA</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para <strong>monitorar e proteger</strong> as comunicações da sua equipe
          </p>
          
          {/* Limited Time Offer */}
          <div className="gradient-bg text-white rounded-xl p-6 max-w-2xl mx-auto mt-8 shadow-elegant">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Flame className="text-yellow-300 w-6 h-6" />
              <span className="font-black text-xl">OFERTA LIMITADA - TERMINA EM:</span>
              <Flame className="text-yellow-300 w-6 h-6" />
            </div>
            <div className="text-3xl font-black">
              {timeLeft.hours}h {timeLeft.minutes}min {timeLeft.seconds}s
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
                  <span className="text-gray-400 line-through text-lg">{plan.originalPrice}</span>
                  <div className="text-4xl font-black text-purple-600">{plan.currentPrice}</div>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-bold">
                  30% OFF PRIMEIRO MÊS
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
                COMEÇAR AGORA
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;