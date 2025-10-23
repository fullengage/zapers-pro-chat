import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      company: "Saúde",
      industry: "Clínicas, Hospitais e Farmácias",
      testimonial:
        "Na área da saúde, cada segundo conta. Com o ZapCode, conseguimos automatizar agendamentos, confirmações e lembretes de consultas, reduzindo erros e garantindo um atendimento mais humano e organizado.",
      author: "Paulo Marcio",
      role: "Diretor de TI",
    },
    {
      company: "Unix Pack",
      industry: "Indústria Alimentícia",
      testimonial:
        "Hoje, representantes, distribuidores e clientes falam com nossa equipe usando um único número do WhatsApp. O ZapCode centralizou toda a comunicação e nos permite acompanhar cada conversa em tempo real. É gestão e transparência no mesmo canal.",
      author: "José Carlos",
      role: "Gerente de Operações",
    },
    {
      company: "KAprinter",
      industry: "Suprimento para impressoras",
      testimonial:
        "Com o ZapCode, nossa equipe comercial ficou 40% mais produtiva. O monitoramento das conversas trouxe clareza, segurança e foco total em resultados. É uma ferramenta indispensável para quem trabalha com metas.",
      author: "Kleber Oliveira",
      role: "Gerente Comercial",
    },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Cada empresa tem um desafio. 
            <br />
            O ZapCode tem uma solução.
          </h2>
          <p className="text-xl text-muted-foreground">
            Descubra como diferentes setores usam nossa tecnologia para transformar o atendimento, aumentar a produtividade e garantir resultados reais.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-6">
                <Quote className="w-10 h-10 text-primary/30" />
              </div>

              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.testimonial}"
              </p>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              <div className="border-t border-border pt-6">
                <div className="font-bold text-foreground text-lg">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
                <div className="text-sm text-primary font-semibold mt-2">
                  {testimonial.company} • {testimonial.industry}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
