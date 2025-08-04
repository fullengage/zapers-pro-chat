import { Button } from "@/components/ui/button";
import { Building, ShoppingBag, Zap, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      icon: Building,
      company: "Paschoalotto",
      industry: "Escritório de Advocacia",
      testimonial: "O Zapers revolucionou nossa comunicação interna. Conseguimos monitorar todas as interações e manter nosso sigilo profissional com total segurança.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: ShoppingBag,
      company: "MilkyMoo",
      industry: "Indústria Alimentícia",
      testimonial: "A capacidade de armazenar e visualizar mensagens e arquivos com facilidade transformou nossa produtividade. Recomendo para qualquer empresa!",
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600"
    },
    {
      icon: Zap,
      company: "Maxy Dist. Solar",
      industry: "Distribuidora de Energia",
      testimonial: "Com o Zapers, conseguimos monitorar e proteger as comunicações da nossa equipe de vendas. O resultado foi um aumento de 40% na eficiência.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  const StarRating = () => (
    <div className="flex justify-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="text-yellow-400 w-5 h-5 fill-current" />
      ))}
    </div>
  );

  return (
    <section id="depoimentos" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-6">O QUE FALAM SOBRE NÓS?</h2>
          <p className="text-xl text-gray-300">Depoimentos de clientes que confiam em nossa solução</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => {
            const IconComponent = testimonial.icon;
            return (
              <div key={index} className="testimonial-card text-gray-800 p-8 rounded-2xl shadow-card">
                <div className="p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-16 h-16 ${testimonial.bgColor} rounded-full flex items-center justify-center mr-4`}>
                      <IconComponent className={`${testimonial.iconColor} w-8 h-8`} />
                    </div>
                    <div>
                      <h4 className="font-black text-xl">{testimonial.company}</h4>
                      <p className="text-gray-600">{testimonial.industry}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-4">"{testimonial.testimonial}"</p>
                </div>
                <StarRating />
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="xl">
            🏆 JUNTE-SE A ESTES CLIENTES SATISFEITOS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;