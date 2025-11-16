import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SecuritySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            🛡️ Controle e Segurança para sua Comunicação Corporativa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ferramentas poderosas para garantir a integridade e a eficiência da sua equipe no WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">⚠️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Prevenção de Riscos e Compliance
                  </h3>
                  <p className="text-muted-foreground">
                    Nossa plataforma permite que sua equipe detecte falhas de conduta, vazamentos de dados e infrações às políticas internas, 
                    monitorando as comunicações de forma inteligente e em conformidade com a LGPD.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📈</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Decisões Baseadas em Dados
                  </h3>
                  <p className="text-muted-foreground">
                    Acompanhe as interações em tempo real, visualize métricas estratégicas e gere insights para otimizar 
                    performance e compliance da sua operação.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🔍</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Segurança e Compliance em Tempo Real
                  </h3>
                  <p className="text-muted-foreground">
                    Visualize todas as conversas, receba alertas de mensagens fora do padrão e gerencie regras internas 
                    com precisão — garantindo conformidade, segurança e transparência.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">⚙️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Regras Personalizadas para Cada Realidade
                  </h3>
                  <p className="text-muted-foreground">
                    Configure alertas com base em palavras-chave, temas sensíveis ou riscos específicos do seu setor. 
                    Adapte o monitoramento à realidade do seu negócio.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">👤</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Controle Total sobre os Usuários Monitorados
                  </h3>
                  <p className="text-muted-foreground">
                    Gerencie facilmente quem está sob monitoria, veja status de conexão, dados de contato, 
                    grupos/setores vinculados e gestores responsáveis.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link to="/formulario">
                <Button size="lg" className="rounded-full px-8 font-semibold">
                  🚀 Solicitar demonstração
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Visual Representation */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-foreground">📊 Dashboard de Segurança</h4>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Ativo</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">1,247</div>
                      <div className="text-sm text-muted-foreground">Conversas Monitoradas</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-500">23</div>
                      <div className="text-sm text-muted-foreground">Alertas Hoje</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-500">99.8%</div>
                      <div className="text-sm text-muted-foreground">Compliance</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-500">45</div>
                      <div className="text-sm text-muted-foreground">Usuários Ativos</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
                  <h4 className="font-semibold text-foreground mb-4">🚨 Alertas Recentes</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                      <span className="text-red-500">⚠️</span>
                      <div className="flex-1">
                        <div className="text-sm font-medium">Informação sensível detectada</div>
                        <div className="text-xs text-muted-foreground">Vendedor: João • Há 5 min</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                      <span className="text-orange-500">📋</span>
                      <div className="flex-1">
                        <div className="text-sm font-medium">Fora do horário comercial</div>
                        <div className="text-xs text-muted-foreground">Equipe: Vendas • Há 1 hora</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <span className="text-blue-500">🔍</span>
                      <div className="flex-1">
                        <div className="text-sm font-medium">Palavra-chave monitorada</div>
                        <div className="text-xs text-muted-foreground">Setor: Suporte • Há 2 horas</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
