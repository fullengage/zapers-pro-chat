import { Button } from "@/components/ui/button";
import { Shield, Archive, Eye, Search, Bell, BarChart, Cloud, Folder, Download, History } from "lucide-react";

const SolutionsSection = () => {
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

  const storageFeatures = [
    {
      icon: Cloud,
      text: "Armazenamento seguro na nuvem"
    },
    {
      icon: Folder,
      text: "Organização por categorias e projetos"
    },
    {
      icon: Download,
      text: "Exportação de conversas e arquivos"
    },
    {
      icon: History,
      text: "Histórico completo de interações"
    }
  ];

  return (
    <section id="solucoes" className="py-20 gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-6">SOLUÇÕES COMPLETAS PARA SUA EMPRESA</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ferramentas profissionais para <strong>monitorar e proteger</strong> as comunicações da sua equipe
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Monitoramento e Proteção */}
          <div id="monitoramento" className="feature-card bg-white p-10 rounded-2xl shadow-card border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 shadow-elegant">
                <Shield className="text-white w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black mb-4 text-purple-600">MONITORAMENTO</h3>
              <p className="text-lg font-semibold text-gray-600">Acompanhe todas as interações</p>
            </div>
            
            <div className="space-y-4 mb-8">
              {monitoringFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start">
                    <IconComponent className="text-purple-500 mt-1 mr-3 w-5 h-5" />
                    <span className="font-semibold">{feature.text}</span>
                  </div>
                );
              })}
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
              <div className="text-center">
                <div className="text-3xl font-black text-purple-600 mb-2">100%</div>
                <p className="font-semibold text-purple-700">Visibilidade das comunicações</p>
              </div>
            </div>
          </div>
          
          {/* Armazenamento e Organização */}
          <div className="feature-card bg-white p-10 rounded-2xl shadow-card border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-elegant">
                <Archive className="text-white w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black mb-4 text-indigo-600">ARMAZENAMENTO</h3>
              <p className="text-lg font-semibold text-gray-600">Organize informações importantes</p>
            </div>
            
            <div className="space-y-4 mb-8">
              {storageFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start">
                    <IconComponent className="text-indigo-500 mt-1 mr-3 w-5 h-5" />
                    <span className="font-semibold">{feature.text}</span>
                  </div>
                );
              })}
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
              <div className="text-center">
                <div className="text-3xl font-black text-indigo-600 mb-2">∞</div>
                <p className="font-semibold text-indigo-700">Espaço para armazenamento</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Button variant="hero" size="xl">
            🎯 QUERO TRANSFORMAR MINHA COMUNICAÇÃO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;