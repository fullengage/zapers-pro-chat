import { Button } from "@/components/ui/button";
import { Archive, Cloud, Folder, Download, History, MessageSquare, Users, Settings } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import carousel1 from "@/assets/carousel-1.png";
import carousel2 from "@/assets/carousel-2.png";
import carousel3 from "@/assets/carousel-3.png";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Archive,
      title: "ARMAZENAMENTO",
      subtitle: "Organize informações importantes",
      color: "indigo",
      features: [
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
      ],
      stat: "∞",
      statText: "Espaço para armazenamento"
    },
    {
      icon: MessageSquare,
      title: "COMUNICAÇÃO",
      subtitle: "Centralize todas as mensagens",
      color: "blue",
      features: [
        {
          icon: MessageSquare,
          text: "WhatsApp Business integrado"
        },
        {
          icon: Users,
          text: "Chat em equipe unificado"
        },
        {
          icon: Settings,
          text: "Automação de respostas"
        },
        {
          icon: Cloud,
          text: "Sincronização em tempo real"
        }
      ],
      stat: "24/7",
      statText: "Disponibilidade total"
    },
    {
      icon: Users,
      title: "GESTÃO DE EQUIPE",
      subtitle: "Controle total da produtividade",
      color: "green",
      features: [
        {
          icon: Users,
          text: "Gerenciamento de usuários"
        },
        {
          icon: Settings,
          text: "Permissões personalizadas"
        },
        {
          icon: History,
          text: "Relatórios de desempenho"
        },
        {
          icon: MessageSquare,
          text: "Atribuição de conversas"
        }
      ],
      stat: "100%",
      statText: "Controle administrativo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      indigo: {
        gradient: "from-indigo-500 to-purple-600",
        text: "text-indigo-600",
        icon: "text-indigo-500",
        bg: "bg-indigo-50",
        border: "border-indigo-100",
        statBg: "bg-indigo-50",
        statBorder: "border-indigo-100",
        statText: "text-indigo-600"
      },
      blue: {
        gradient: "from-blue-500 to-indigo-600",
        text: "text-blue-600",
        icon: "text-blue-500",
        bg: "bg-blue-50",
        border: "border-blue-100",
        statBg: "bg-blue-50",
        statBorder: "border-blue-100",
        statText: "text-blue-600"
      },
      green: {
        gradient: "from-green-500 to-emerald-600",
        text: "text-green-600",
        icon: "text-green-500",
        bg: "bg-green-50",
        border: "border-green-100",
        statBg: "bg-green-50",
        statBorder: "border-green-100",
        statText: "text-green-600"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="solucoes" className="py-20 gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-6">SOLUÇÕES COMPLETAS PARA SUA EMPRESA</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ferramentas profissionais para <strong>otimizar e proteger</strong> as comunicações da sua equipe
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            const colors = getColorClasses(solution.color);
            
            return (
              <div key={index} className="feature-card bg-white p-8 rounded-2xl shadow-card border border-gray-100">
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${colors.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-elegant`}>
                    <IconComponent className="text-white w-8 h-8" />
                  </div>
                  <h3 className={`text-2xl font-black mb-3 ${colors.text}`}>{solution.title}</h3>
                  <p className="text-lg font-semibold text-gray-600">{solution.subtitle}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {solution.features.map((feature, featureIndex) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <div key={featureIndex} className="flex items-start">
                        <FeatureIcon className={`${colors.icon} mt-1 mr-3 w-5 h-5`} />
                        <span className="font-semibold text-gray-700">{feature.text}</span>
                      </div>
                    );
                  })}
                </div>
                
                <div className={`${colors.statBg} p-6 rounded-xl border ${colors.statBorder}`}>
                  <div className="text-center">
                    <div className={`text-3xl font-black ${colors.statText} mb-2`}>{solution.stat}</div>
                    <p className={`font-semibold ${colors.statText.replace('600', '700')}`}>{solution.statText}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* WhatsApp CRM Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="mb-12">
            <Carousel className="w-full max-w-3xl mx-auto" opts={{ align: "start", loop: true }}>
              <CarouselContent>
                <CarouselItem>
                  <div className="p-1">
                    <img 
                      src={carousel1} 
                      alt="WhatsApp CRM Feature 1" 
                      className="w-full h-auto rounded-3xl"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <img 
                      src={carousel2} 
                      alt="WhatsApp CRM Feature 2" 
                      className="w-full h-auto rounded-3xl"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <img 
                      src={carousel3} 
                      alt="WhatsApp CRM Feature 3" 
                      className="w-full h-auto rounded-3xl"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* CRM Help Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-gray-800 mb-8">Como o WhatsApp CRM pode ajudar?</h3>
            
            <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-8">
              <Accordion type="single" collapsible defaultValue="item-3" className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    WhatsApp CRM para vendas
                  </AccordionTrigger>
                  <AccordionContent className="text-left space-y-2">
                    <p>O WhatsApp foi feito para conversas casuais e não para conversas de vendas importantes. Impulsione seu WhatsApp com a Kommo: feita para gerir todo o seu processo de vendas.</p>
                    <ul className="list-disc list-inside space-y-1 mt-4">
                      <li>Capture novos leads do WhatsApp imediatamente</li>
                      <li>Organize possíveis clientes num funil de vendas</li>
                      <li>Organize-se com perfis para todos os clientes</li>
                      <li>Mais recursos de CRM de vendas para WhatsApp</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    WhatsApp CRM para equipes
                  </AccordionTrigger>
                  <AccordionContent className="text-left space-y-2">
                    <p>Quando as equipes usam o WhatsApp, as coisas podem ficar confusas rapidamente: números de telefone separados, aparelhos diferentes… é uma dor de cabeça. Por isso que a Kommo ajuda as equipes a se conectarem e compartilharem o acesso em um único aplicativo.</p>
                    <ul className="list-disc list-inside space-y-1 mt-4">
                      <li>Conecte vários números do WhatsApp</li>
                      <li>Controle o acesso à caixa de entrada</li>
                      <li>Bate-papo com colegas</li>
                      <li>Mais recursos de CRM do WhatsApp para equipes</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    WhatsApp CRM para gerentes
                  </AccordionTrigger>
                  <AccordionContent className="text-left space-y-2">
                    <p>Ainda não sabe se alguém respondeu a esse novo cliente em potencial? Na Kommo, os gerentes não precisam se perguntar - é fácil colocar todos os membros da equipe na tarefa.</p>
                    <ul className="list-disc list-inside space-y-1 mt-4">
                      <li>Crie e gerencie tarefas</li>
                      <li>Defina metas e avalie o desempenho do WhatsApp</li>
                      <li>Controle quem tem acesso a quê</li>
                      <li>Mais recursos do CRM do WhatsApp para gerentes</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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