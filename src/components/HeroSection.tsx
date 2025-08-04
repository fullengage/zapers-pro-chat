import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 gradient-hero text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Social Proof Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/30">
            <CheckCircle className="text-green-300 mr-2 w-5 h-5" />
            <span className="text-sm font-semibold">Solução inovadora para comunicação empresarial</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
            A EVOLUÇÃO DO WHATSAPP
            <span className="block text-yellow-300">NO SEU</span>
            <span className="block text-green-300">NEGÓCIO</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 font-medium leading-relaxed max-w-4xl mx-auto">
            <strong>Transforme a experiência de vendas e suporte pelo WhatsApp!</strong>
            <br />
            Com o Zapers, sua equipe atende mais rápido, vende mais e oferece um suporte muito mais profissional.
            <br />
            <span className="text-yellow-300 font-bold">Tenha todas as conversas organizadas, respostas ágeis e o histórico sempre à mão — tudo em um só lugar, sem complicação.</span>
          </p>
          
          {/* CTA Principal */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button variant="cta" size="xl">
              🚀 EXPERIMENTE GRÁTIS
            </Button>
            <Button variant="outline-white" size="xl">
              ▶️ VER DEMONSTRAÇÃO (2 min)
            </Button>
          </div>
          
          {/* Urgência */}
          <div className="bg-purple-800 text-white rounded-lg p-4 inline-block mb-8 border border-purple-600 shadow-glow">
            <div className="flex items-center justify-center space-x-2">
              <Clock className="text-yellow-300 w-5 h-5" />
              <span className="font-bold">DEMONSTRAÇÃO GRATUITA - Solicite agora!</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;