import { Button } from "@/components/ui/button";
import { Shield, Eye, Search, Bell, BarChart } from "lucide-react";

const MonitoringSection = () => {
  const monitoringFeatures = [
    {
      icon: Eye,
      text: "Acesso completo a todas as conversas"
    },
    {
      icon: Search,
      text: "Busca avançada por palavras-chave"
    },
    {
      icon: Bell,
      text: "Alertas para palavras sensíveis"
    },
    {
      icon: BarChart,
      text: "Relatórios de produtividade da equipe"
    }
  ];

  return (
    <section id="monitoramento" className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-6 text-purple-800">MONITORAMENTO COMPLETO</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tenha <strong>controle total</strong> sobre todas as comunicações da sua equipe
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="feature-card bg-white p-12 rounded-3xl shadow-card border border-purple-100">
            <div className="text-center mb-10">
              <div className="w-24 h-24 gradient-bg rounded-full flex items-center justify-center mx-auto mb-8 shadow-elegant">
                <Shield className="text-white w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black mb-4 text-purple-600">PROTEÇÃO E SUPERVISÃO</h3>
              <p className="text-lg font-semibold text-gray-600">Acompanhe todas as interações em tempo real</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {monitoringFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start p-4 bg-purple-50 rounded-xl">
                    <IconComponent className="text-purple-500 mt-1 mr-4 w-6 h-6" />
                    <span className="font-semibold text-gray-800">{feature.text}</span>
                  </div>
                );
              })}
            </div>
            
            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-8 rounded-2xl border border-purple-200">
              <div className="text-center">
                <div className="text-4xl font-black text-purple-600 mb-3">100%</div>
                <p className="font-semibold text-purple-700 text-lg">Visibilidade das comunicações</p>
                <p className="text-gray-600 mt-2">Monitore tudo que acontece em sua empresa</p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Button variant="hero" size="xl">
                🛡️ ATIVAR MONITORAMENTO AGORA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitoringSection;