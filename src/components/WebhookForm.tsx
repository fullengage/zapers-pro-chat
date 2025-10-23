import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Building2, User, Phone, CheckCircle2 } from "lucide-react";

const WEBHOOK_URL = "https://autowebhook.chathook.com.br/webhook/9744f9d4-7b89-487d-bd5a-7358ebc3c27a";

// Validation schema
const formSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  company: z.string().trim().min(1, "Nome da empresa é obrigatório").max(100, "Nome muito longo"),
  whatsapp: z.string()
    .trim()
    .min(1, "WhatsApp é obrigatório")
    .regex(/^\(?([1-9]{2})\)?[-.\s]?([9]{1})?(\d{4})[-.\s]?(\d{4})$/, 
      "Formato inválido. Use (DDD) + número. Ex: (11) 99999-9999")
    .transform(val => val.replace(/\D/g, ''))
});

export default function WebhookForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Format WhatsApp as user types
  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '').slice(0, 11);
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 11) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    }
    return value;
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setWhatsapp(formatted);
    // Clear error when user types
    if (errors.whatsapp) {
      setErrors(prev => ({ ...prev, whatsapp: "" }));
    }
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setErrors({});
    
    // Validate form data
    const validation = formSchema.safeParse({ name, email, company, whatsapp });
    
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);
      toast.error("Por favor, corrija os erros no formulário");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          Name: validation.data.name, 
          NomeEmpresa: validation.data.company, 
          email: validation.data.email,
          whatsapp: validation.data.whatsapp
        }),
      });
      if (!res.ok) throw new Error("request_failed");
      setStatus("success");
      toast.success("Enviado com sucesso! Entraremos em contato em breve.");
      setName("");
      setCompany("");
      setEmail("");
      setWhatsapp("");
    } catch {
      setStatus("error");
      toast.error("Falha ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full min-h-[calc(100vh-8rem)] bg-gradient-to-br from-primary/5 via-background to-primary/5 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Solicite uma Demonstração
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra como a ZapCode pode transformar a gestão do WhatsApp da sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Info Card */}
          <div className="order-2 lg:order-1">
            <Card className="rounded-3xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-8 md:p-10 shadow-2xl border-0">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Por que escolher a ZapCode?
              </h2>
              <p className="text-primary-foreground/95 text-base md:text-lg leading-relaxed mb-8">
                Conecte equipes, organize conversas e transforme informações em resultados. Com a ZapCode, tudo fica salvo na nuvem, com inteligência e segurança para o crescimento do seu negócio.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Atendimento Ágil</h3>
                    <p className="text-primary-foreground/90 text-sm">Resposta rápida por WhatsApp e e-mail em horário comercial</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Sem Compromisso</h3>
                    <p className="text-primary-foreground/90 text-sm">Conheça a plataforma sem obrigações ou contratos longos</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Dados Seguros</h3>
                    <p className="text-primary-foreground/90 text-sm">Proteção total das suas informações com criptografia avançada</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Form Card */}
          <Card className="order-1 lg:order-2 p-8 md:p-10 rounded-3xl shadow-2xl border-2 bg-card backdrop-blur">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Informe seus dados</h3>
              <p className="text-muted-foreground">
                Preencha o formulário e entraremos em contato rapidamente
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-semibold">
                    Nome Completo <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors(prev => ({ ...prev, name: "" }));
                      }}
                      required
                      placeholder="José Alves Silva"
                      className={`pl-11 h-12 ${errors.name ? "border-destructive" : ""}`}
                    />
                  </div>
                  {errors.name && <p className="text-destructive text-sm">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-semibold">
                    E-mail Corporativo <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors(prev => ({ ...prev, email: "" }));
                      }}
                      required
                      placeholder="jose@suaempresa.com.br"
                      className={`pl-11 h-12 ${errors.email ? "border-destructive" : ""}`}
                    />
                  </div>
                  {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-base font-semibold">
                    Nome da Empresa <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="company"
                      type="text"
                      value={company}
                      onChange={(e) => {
                        setCompany(e.target.value);
                        if (errors.company) setErrors(prev => ({ ...prev, company: "" }));
                      }}
                      required
                      placeholder="Sua Empresa Ltda"
                      className={`pl-11 h-12 ${errors.company ? "border-destructive" : ""}`}
                    />
                  </div>
                  {errors.company && <p className="text-destructive text-sm">{errors.company}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-base font-semibold">
                    WhatsApp <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="whatsapp"
                      type="tel"
                      value={whatsapp}
                      onChange={handleWhatsAppChange}
                      required
                      placeholder="(11) 99999-9999"
                      maxLength={15}
                      className={`pl-11 h-12 ${errors.whatsapp ? "border-destructive" : ""}`}
                    />
                  </div>
                  {errors.whatsapp && <p className="text-destructive text-sm">{errors.whatsapp}</p>}
                  <p className="text-xs text-muted-foreground">Informe o DDD + número com 9 dígitos</p>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  disabled={loading} 
                  className="w-full h-12 text-lg font-semibold"
                  size="lg"
                >
                  {loading ? "Enviando..." : "Solicitar Demonstração"}
                </Button>
                
                {status === "success" && (
                  <div className="mt-4 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-800 dark:text-green-200 text-sm font-medium">
                      ✓ Enviado com sucesso! Entraremos em contato em breve.
                    </p>
                  </div>
                )}
                
                {status === "error" && (
                  <div className="mt-4 p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-red-800 dark:text-red-200 text-sm font-medium">
                      ✗ Falha ao enviar. Por favor, tente novamente.
                    </p>
                  </div>
                )}
              </div>

              <p className="text-xs text-muted-foreground text-center pt-2">
                Ao enviar este formulário, você concorda em receber comunicações sobre nossos produtos e serviços. Seus dados estão protegidos conforme nossa política de privacidade.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
