import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, ShoppingCart } from "lucide-react";
import heroProfessional from "@/assets/carousel-1.png";
import { CnpjModal } from "./CnpjModal";

const HeroSection = () => {
  const [isCnpjModalOpen, setIsCnpjModalOpen] = useState(false);

  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Descubra o que sua equipe esconde no WhatsApp — <span className="text-primary">e como controlar isso</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              🚀 <strong>Teste seu CNPJ</strong> e receba um diagnóstico exclusivo no WhatsApp. 
              Veja como nossa <strong>plataforma 100% brasileira</strong> com <strong>LGPD-first</strong> pode transformar sua operação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="rounded-full px-8 font-semibold text-base"
                onClick={() => setIsCnpjModalOpen(true)}
              >
                🚀 Deixe um CNPJ e te surpreendo no WhatsApp
              </Button>
            </div>
          </div>

          {/* Right Content - Professional Image with Floating Cards */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Professional Image */}
            <div className="absolute inset-0 flex items-center justify-end">
              <img
                src={heroProfessional}
                alt="Profissional usando WhatsApp"
                className="h-full w-auto object-contain"
              />
            </div>

            {/* Floating Feature Cards */}
            <div className="absolute top-12 right-[280px] xl:right-[320px] lg:right-[240px] bg-card shadow-card rounded-xl p-6 max-w-xs animate-float border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    🇧🇷 100% Brasileiro + LGPD-first
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Dados protegidos sob legislação nacional com analytics avançado e governança completa para sua operação.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="absolute top-64 right-[260px] xl:right-[300px] lg:right-[220px] bg-card shadow-card rounded-xl p-6 max-w-xs animate-float border border-border"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <ShoppingCart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    🎯 Controle Total + Analytics
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Monitore KPIs de SLA, tempo de resposta e performance da equipe em tempo real.
                  </p>
                </div>
              </div>
            </div>

            {/* User Profile Card */}
            <div
              className="absolute bottom-12 right-[220px] xl:right-[260px] lg:right-[200px] bg-card shadow-elegant rounded-2xl p-6 w-72 border border-border animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                    🇧🇷
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">ZapCode Enterprise</h3>
                    <p className="text-xs text-muted-foreground">Plataforma Brasileira</p>
                  </div>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                  <svg width="4" height="16" viewBox="0 0 4 16" fill="currentColor">
                    <circle cx="2" cy="2" r="2" />
                    <circle cx="2" cy="8" r="2" />
                    <circle cx="2" cy="14" r="2" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">99.9%</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">24/7</div>
                  <div className="text-xs text-muted-foreground">Suporte</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">500+</div>
                  <div className="text-xs text-muted-foreground">Empresas</div>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  LGPD-first
                </span>
                <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-foreground">
                  Cloud Seguro
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose ZapCode Section */}
      <div className="container mx-auto px-6 mt-20">
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl py-12 px-6 border border-border">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              🚀 Por que escolher a ZapCode?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Plataforma <strong>100% Brasileira</strong>, <strong>LGPD-first</strong>, com Analytics Avançado e Governança para sua operação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Feature 1 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🇧🇷</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Plataforma 100% Brasileira</h3>
              <p className="text-sm text-muted-foreground">
                Dados hospedados e tratados sob a legislação nacional com total compliance e segurança.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">LGPD-first + Compliance</h3>
              <p className="text-sm text-muted-foreground">
                Logs, políticas e relatórios completos de auditoria para total conformidade legal.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Analytics Avançado</h3>
              <p className="text-sm text-muted-foreground">
                KPIs de SLA, tempo de resposta, performance de equipe e funil de conversas em tempo real.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">UX WhatsApp-first</h3>
              <p className="text-sm text-muted-foreground">
                Interface rápida, moderna e fluida para operações que vivem no WhatsApp.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">CRM de Vendas</h3>
              <p className="text-sm text-muted-foreground">
                Capture leads, organize clientes em funil e gerencie perfis para impulsionar vendas.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Gestão de Equipe</h3>
              <p className="text-sm text-muted-foreground">
                Crie tarefas, defina metas, avalie performance e controle permissões com facilidade.
              </p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Garantido</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Suporte Dedicado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Empresas Ativas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Cloud Seguro</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-8">
            <p className="text-lg font-medium text-foreground mb-4">
              🎯 <strong>Pronto para descobrir o que sua equipe esconde?</strong>
            </p>
            <Button 
              size="lg"
              onClick={() => setIsCnpjModalOpen(true)}
              className="rounded-full px-8 font-semibold"
            >
              🚀 Testar diagnóstico gratuito agora
            </Button>
          </div>
        </div>
      </div>

      {/* CNPJ Modal */}
      <CnpjModal 
        isOpen={isCnpjModalOpen} 
        onClose={() => setIsCnpjModalOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;
