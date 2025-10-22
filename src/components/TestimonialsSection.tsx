import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      company: "Paschoalotto",
      industry: "Escritório de Advocacia",
      testimonial: "O ZapCode revolucionou nossa comunicação interna. Conseguimos monitorar todas as interações mantendo total segurança e sigilo profissional.",
      author: "Carlos Silva",
      role: "Diretor de TI"
    },
    {
      company: "MilkyMoo",
      industry: "Indústria Alimentícia",
      testimonial: "A organização e facilidade de acesso às conversas transformou nossa produtividade. Recomendo para qualquer empresa que leva comunicação a sério.",
      author: "Ana Santos",
      role: "Gerente de Operações"
    },
    {
      company: "Maxy Dist. Solar",
      industry: "Distribuidora de Energia",
      testimonial: "Com o ZapCode, nossa equipe de vendas aumentou 40% em eficiência. O controle e monitoramento são essenciais para nosso sucesso.",
      author: "Roberto Mendes",
      role: "Gerente Comercial"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Empresas que confiam no ZapCode
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja o que nossos clientes têm a dizer sobre a transformação em suas operações
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-elegant transition-smooth"
            >
              <div className="mb-6">
                <Quote className="w-10 h-10 text-primary/20" />
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.testimonial}"
              </p>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <div className="border-t border-border pt-6">
                <div className="font-bold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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
