import { Button } from "@/components/ui/button";
import { Shield, Phone, Rocket } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">
            PRONTO PARA TRANSFORMAR A COMUNICAÇÃO DA SUA EMPRESA?
          </h2>
          <p className="text-xl mb-10">Junte-se a mais de 5.000 empresas que já confiam no Zapers</p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="outline-white" size="xl">
              <Rocket className="mr-2 w-5 h-5" />
              EXPERIMENTE GRÁTIS POR 7 DIAS
            </Button>
            <Button variant="outline-white" size="xl">
              <Phone className="mr-2 w-5 h-5" />
              FALAR COM ESPECIALISTA
            </Button>
          </div>
          
          <div className="mt-10 flex items-center justify-center space-x-2 text-green-300">
            <Shield className="w-6 h-6" />
            <span className="font-semibold text-lg">Sem compromisso. Cancele quando quiser.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;