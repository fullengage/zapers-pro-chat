import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from "lucide-react";
import logo from '/logo-zapcode.png';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Soluções", href: "#solucoes" },
      { name: "Preços", href: "#precos" },
      { name: "Recursos", href: "#recursos" }
    ],
    company: [
      { name: "Quem somos", href: "/quem-somos" },
      { name: "Blog", href: "/blog" },
      { name: "Contato", href: "#contato" }
    ]
  };

  const contactInfo = [
    {
      icon: Mail,
      text: "contato@zapcode.com.br",
      href: "mailto:contato@zapcode.com.br"
    },
    {
      icon: Phone,
      text: "(17) 99791-5318",
      href: "https://wa.me/5517997915318"
    },
    {
      icon: MapPin,
      text: "São Paulo, SP"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <img src={logo} alt="ZapCode" className="h-12 w-auto mb-4" />
            <p className="text-muted-foreground mb-6 max-w-sm">
              Transforme o WhatsApp no CRM da sua empresa com inteligência e segurança
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Produto</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/') ? (
                    <Link 
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-border pt-8 mb-8">
          <h3 className="font-bold text-foreground mb-4">Contato</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              const content = (
                <>
                  <IconComponent className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{contact.text}</span>
                </>
              );
              
              return contact.href ? (
                <a 
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-3 hover:text-primary transition-smooth"
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={index} className="flex items-center gap-3">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ZapCode. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
