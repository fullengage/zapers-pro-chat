import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      description: "Para equipes pequenas começando",
      price: "Sob consulta",
      isPopular: false,
      features: [
        "Até 10 números WhatsApp",
        "Até 15 agentes",
        "Dashboard básico",
        "Relatórios de volume",
        "Suporte por email",
        "Controle de permissões"
      ]
    },
    {
      name: "Professional",
      description: "Para operações consolidadas",
      price: "Sob consulta",
      isPopular: true,
      features: [
        "Até 25 números WhatsApp",
        "Até 50 agentes",
        "Dashboard avançado",
        "Relatórios customizáveis",
        "Suporte prioritário",
        "Integração CRM",
        "Automações básicas",
        "API de integração"
      ]
    },
    {
      name: "Enterprise",
      description: "Para grandes operações",
      price: "Sob consulta",
      isPopular: false,
      features: [
        "WhatsApp ilimitados",
        "Agentes ilimitados",
        "Dashboard executivo",
        "Relatórios em tempo real",
        "Suporte 24/7 dedicado",
        "API completa",
        "Treinamento completo",
        "Automações avançadas",
        "Chatbots personalizados",
        "Rastreamento total"
      ]
    }
  ];

  return (
    <section id="precos" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Planos que se adaptam ao seu negócio
          </h2>
          <p className="text-xl text-muted-foreground">
            Escolha o plano ideal para sua operação e escale conforme necessário
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`group relative bg-card rounded-2xl p-8 border transition-smooth hover:-translate-y-1 ${
                plan.isPopular 
                  ? 'border-primary shadow-elegant scale-105' 
                  : 'border-border shadow-card hover:shadow-elegant'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Mais popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-foreground">{plan.price}</div>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="text-primary mt-0.5 w-5 h-5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full rounded-full font-semibold" 
                variant={plan.isPopular ? "default" : "outline"} 
                size="lg"
                asChild
              >
                <a href="https://wa.me/5517997915318" target="_blank" rel="noopener noreferrer">
                  Falar com especialista
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-card text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Precisa de um plano personalizado?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Entre em contato com nossa equipe para criar uma solução sob medida 
              para as necessidades específicas da sua empresa
            </p>
            <Button size="lg" className="rounded-full px-8 font-semibold" asChild>
              <a href="https://wa.me/5517997915318" target="_blank" rel="noopener noreferrer">
                Solicitar proposta customizada
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
