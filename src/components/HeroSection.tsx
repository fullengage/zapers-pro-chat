import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, ShoppingCart } from "lucide-react";
import heroProfessional from "@/assets/carousel-1-Bhp6gsJO.png";
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
              🚀 <strong>celere sua prospecção no WhatsApp</strong> Digite qualquer CNPJ e receba instantaneamente, via IA, todos os dados essenciais da empresa para abordar melhor e vender mais.<strong> Plataforma 100% brasileira</strong> com <strong>LGPD-first</strong> pode transformar sua operação.
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
            <div className="absolute top-12 right-[320px] xl:right-[360px] lg:right-[280px] bg-card shadow-card rounded-xl p-6 max-w-xs animate-float border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                   100% Brasileiro + LGPD-first
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Dados protegidos sob legislação nacional.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="absolute top-48 right-[300px] xl:right-[340px] lg:right-[260px] bg-card shadow-card rounded-xl p-6 max-w-xs animate-float border border-border"
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
              className="absolute bottom-12 right-[260px] xl:right-[300px] lg:right-[240px] bg-card shadow-elegant rounded-2xl p-6 w-72 border border-border animate-float"
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

      {/* Why Choose ZapCode Section - MELHORADO */}
      <div className="container mx-auto px-6 mt-20 mb-20">
        <div className="bg-gradient-to-br from-card/80 via-card/50 to-background backdrop-blur-xl rounded-3xl py-16 px-8 border border-border/50 shadow-2xl relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-0"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-0"></div>

          <div className="text-center mb-16 relative z-10">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm font-semibold text-primary">✨ Plataforma Completa</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
              Por que escolher a ZapCode?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Plataforma <strong className="text-foreground">100% Brasileira</strong>, <strong className="text-foreground">LGPD-first</strong>, com <strong className="text-foreground">Analytics Avançado</strong> e <strong className="text-foreground">Governança</strong> para sua operação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 relative z-10">
            {/* Feature 1 */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 hover:from-primary/15 hover:to-primary/5 border border-white/10 hover:border-primary/30 rounded-2xl p-8 text-center space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🇧🇷</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Plataforma 100% Brasileira</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dados hospedados e tratados sob a legislação nacional com total compliance e segurança.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 hover:from-primary/15 hover:to-primary/5 border border-white/10 hover:border-primary/30 rounded-2xl p-8 text-center space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">LGPD-first + Compliance</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Logs, políticas e relatórios completos de auditoria para total conformidade legal.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 hover:from-primary/15 hover:to-primary/5 border border-white/10 hover:border-primary/30 rounded-2xl p-8 text-center space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Analytics Avançado</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                KPIs de SLA, tempo de resposta, performance de equipe e funil de conversas em tempo real.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 hover:from-primary/15 hover:to-primary/5 border border-white/10 hover:border-primary/30 rounded-2xl p-8 text-center space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">UX WhatsApp-first</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Interface rápida, moderna e fluida para operações que vivem no WhatsApp.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 hover:from-primary/15 hover:to-primary/5 border border-white/10 hover:border-primary/30 rounded-2xl p-8 text-center space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">CRM de Vendas</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Capture leads, organize clientes em funil e gerencie perfis para impulsionar vendas.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 hover:from-primary/15 hover:to-primary/5 border border-white/10 hover:border-primary/30 rounded-2xl p-8 text-center space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Gestão de Equipe</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Crie tarefas, defina metas, avalie performance e controle permissões com facilidade.
              </p>
            </div>
          </div>

          {/* Stats Row - Melhorado */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-t border-border/30 px-2 relative z-10">
            <div className="text-center group cursor-default">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
              <div className="text-sm text-muted-foreground font-medium">Uptime Garantido</div>
              <div className="h-1 w-8 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto mt-3 group-hover:w-12 transition-all duration-300"></div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-sm text-muted-foreground font-medium">Suporte Dedicado</div>
              <div className="h-1 w-8 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto mt-3 group-hover:w-12 transition-all duration-300"></div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-sm text-muted-foreground font-medium">Empresas Ativas</div>
              <div className="h-1 w-8 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto mt-3 group-hover:w-12 transition-all duration-300"></div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-sm text-muted-foreground font-medium">Cloud Seguro</div>
              <div className="h-1 w-8 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto mt-3 group-hover:w-12 transition-all duration-300"></div>
            </div>
          </div>

          {/* CTA Section - Melhorado */}
          <div className="text-center mt-12 relative z-10">
            <p className="text-xl font-semibold text-foreground mb-6">
              🚀 <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Pronto para transformar sua operação?</span>
            </p>
            <Button 
              size="lg"
              onClick={() => setIsCnpjModalOpen(true)}
              className="rounded-full px-8 font-semibold bg-gradient-to-r from-primary to-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 text-white border-0"
            >
              🚀 Testar diagnóstico gratuito agora
            </Button>
            <p className="text-xs text-muted-foreground mt-4">✓ Sem cartão de crédito | ✓ Acesso imediato | ✓ Análise em tempo real</p>
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