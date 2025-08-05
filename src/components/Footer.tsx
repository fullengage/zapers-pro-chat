import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const solutionLinks = [
    "Monitoramento",
    "Armazenamento", 
    "Segurança",
    "Relatórios"
  ];

  const companyLinks = [
    "Sobre nós",
    "Cases de sucesso",
    "Blog", 
    "Carreiras"
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "contato@zapcode.com.br"
    },
    {
      icon: Phone,
      text: "(17) 99791-5318"
    },
    {
      icon: MapPin,
      text: "São Paulo, SP"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center mr-3 shadow-elegant">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-xl font-bold">ZAPCODE</span>
            </div>
            <p className="text-gray-400">A evolução do WhatsApp no ambiente profissional.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Soluções</h3>
            <ul className="space-y-2 text-gray-400">
              {solutionLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-smooth">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-smooth">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <li key={index} className="flex items-center">
                    <IconComponent className="mr-2 w-4 h-4" />
                    <span>{contact.text}</span>
                  </li>
                );
              })}
            </ul>
            
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href} 
                    className="text-gray-400 hover:text-white transition-smooth"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ZapCode. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;