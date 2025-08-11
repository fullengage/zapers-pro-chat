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

          {/* CRM Help Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-gray-800 mb-8">Como o WhatsApp CRM pode ajudar?</h3>
            
            <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-8">
              <Accordion type="single" collapsible defaultValue="item-3" className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    WhatsApp CRM para Vendas
                  </AccordionTrigger>
                  <AccordionContent className="text-left space-y-2">
                    <div className="mb-3">
                      <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">ZAPCODE</span>
                    </div>
                    <p>O WhatsApp é ótimo para conversar, mas não nasceu para fechar vendas. Com a ZAPCODE, você transforma o seu WhatsApp em uma máquina de vendas organizada e eficiente.</p>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span>Capte novos leads automaticamente</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span>Organize cada contato em um funil de vendas claro</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span>Centralize informações com perfis completos de clientes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span>Gerencie todo o processo comercial sem sair do WhatsApp</span>
                      </li>
                    </ul>
                    <p className="mt-4 font-semibold text-primary">Com a ZAPCODE, seu atendimento deixa de ser improviso e vira processo.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    WhatsApp CRM para Equipes
                  </AccordionTrigger>
                  <AccordionContent className="text-left space-y-2">
                    <div className="mb-3">
                      <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">ZAPCODE</span>
                    </div>
                    <p>Quando sua equipe usa o WhatsApp de forma tradicional, o caos começa: números espalhados, celulares diferentes, conversas perdidas… A ZAPCODE resolve isso conectando todo mundo em um único lugar.</p>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span>Conecte vários números do WhatsApp</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span>Controle quem acessa cada conversa</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span>Troque mensagens internas com a equipe</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span>Tenha todos os recursos de CRM no próprio WhatsApp</span>
                      </li>
                    </ul>
                    <p className="mt-4 font-semibold text-primary">Com a ZAPCODE, seu time trabalha junto, vê tudo e não perde nenhuma oportunidade.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    WhatsApp CRM para Gerentes
                  </AccordionTrigger>
                  <AccordionContent className="text-left space-y-2">
                    <div className="mb-3">
                      <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">ZAPCODE</span>
                    </div>
                    <p>Cansado de se perguntar se aquele cliente já foi respondido? Com a ZAPCODE, os gerentes têm visão total sobre cada conversa e controle sobre todo o processo de vendas no WhatsApp.</p>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span>Crie e atribua tarefas para a equipe</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span>Defina metas e acompanhe o desempenho</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span>Controle permissões e acessos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span>Tenha todos os recursos de CRM direto no WhatsApp</span>
                      </li>
                    </ul>
                    <p className="mt-4 font-semibold text-primary">Com a ZAPCODE, você deixa de apagar incêndios e passa a gerenciar com clareza, rapidez e resultados.</p>
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