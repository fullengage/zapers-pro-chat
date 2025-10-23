import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Target, Shield, Heart } from "lucide-react";

const QuemSomos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              QUEM SOMOS
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              A ZapCode é uma solução brasileira inovadora que transforma o WhatsApp no CRM da sua empresa: 
              unificando atendimentos, vendas e suporte em um só lugar simples, ágil e profissional.
            </p>
          </div>
        </div>
      </section>

      {/* Missão */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-elegant">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-3xl font-bold">Nossa Missão</h2>
              </div>
              <p className="text-xl leading-relaxed text-muted-foreground">
                Conectar equipes e clientes em um único canal de relacionamento — o WhatsApp —, 
                acelerando vendas, aumentando a produtividade e elevando a qualidade do atendimento.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Fundadores */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-6">
                Por trás da ZapCode
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 shadow-elegant">
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 text-primary mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold">Richard Wagner</h3>
                    <p className="text-primary font-semibold">Fundador e Diretor de Tecnologia</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Responsável pelo desenvolvimento, arquitetura da plataforma, integrações e 
                  sistemas de automação e segurança.
                </p>
              </Card>

              <Card className="p-8 shadow-elegant">
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 text-primary mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold">José Carlos</h3>
                    <p className="text-primary font-semibold">Fundador e Diretor Comercial</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Lidera a estratégia de mercado, parcerias, vendas e comunicação, garantindo que 
                  a ferramenta entregue valor real aos clientes.
                </p>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl mx-auto">
                Fundada por quem vive tecnologia e conhece os desafios do dia a dia comercial. Juntos, 
                reunimos experiência em software e mercado que nos permite oferecer não só uma ferramenta 
                de CRM via WhatsApp, mas uma verdadeira parceira de crescimento para empresas que querem 
                atender melhor, vender mais e fidelizar clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compromissos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-6">
                Nosso Compromisso
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 shadow-elegant text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Atendimento Unificado</h3>
                <p className="text-muted-foreground">
                  Para todos os canais via WhatsApp, prevendo histórico completo e insights valiosos.
                </p>
              </Card>

              <Card className="p-6 shadow-elegant text-center">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Automação Inteligente</h3>
                <p className="text-muted-foreground">
                  Para respostas rápidas, envio de mensagens padronizadas e fluxos inteligentes — 
                  com foco em produtividade e experiência do cliente.
                </p>
              </Card>

              <Card className="p-6 shadow-elegant text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Suporte Dedicado</h3>
                <p className="text-muted-foreground">
                  Suporte técnico dedicado e consultoria estratégica para implantação e uso contínuo da ferramenta.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Por que Zapers */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black mb-8">
              Por que ZapCode?
            </h2>
            <p className="text-xl leading-relaxed mb-8">
              Porque você quer vender com humanidade, sem abrir mão da organização e rapidez de um CRM. 
              Nossa plataforma foi desenhada para ser intuitiva, segura e robusta — do microempreendedor 
              ao time de vendas estruturado.
            </p>
            <p className="text-xl leading-relaxed">
              <strong>Pronto para transformar o WhatsApp no centro de relacionamento da sua empresa?</strong> 
              {" "}Fale com a gente — nós da ZapCode estamos prontos para elevar sua comunicação a um novo patamar.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuemSomos;