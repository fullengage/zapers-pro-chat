import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { toast } from "sonner";

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
    <section className="w-full bg-gradient-to-b from-primary/10 to-transparent py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="hidden lg:block">
            <div className="rounded-2xl bg-primary text-primary-foreground p-8 shadow-xl">
              <h2 className="text-3xl font-extrabold tracking-tight mb-4">Solicite uma demonstração</h2>
              <p className="text-primary-foreground/90 text-base leading-relaxed">
                Conecte equipes, organize conversas e transforme informações em resultados. Com a ZapCode, tudo fica salvo na nuvem, com inteligência e segurança para o crescimento do seu negócio. Monitore várias contas de WhatsApp em um só lugar. 
                <br />
                Informe seus dados e aguarde nosso contato. Respondemos rápido pelo WhatsApp e e-mail.
              </p>
              <ul className="mt-6 space-y-3 text-primary-foreground/90 text-sm">
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary-foreground" /> Atendimento ágil e personalizado
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary-foreground" /> Sem compromisso
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary-foreground" /> Seus dados estão seguros
                </li>
              </ul>
            </div>
          </div>

          <Card className="p-6 md:p-8 rounded-2xl shadow-elegant border bg-background/70 backdrop-blur">
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-bold">Informe seus dados</h3>
              <p className="text-muted-foreground text-sm mt-1">
                Responderemos em poucos minutos em horário comercial.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name <span className="text-red-500">*</span></Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors(prev => ({ ...prev, name: "" }));
                    }}
                    required
                    placeholder="e.g. José Alves"
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors(prev => ({ ...prev, email: "" }));
                    }}
                    required
                    placeholder="e.g. jose@empresa.com"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">NomeEmpresa <span className="text-red-500">*</span></Label>
                  <Input
                    id="company"
                    type="text"
                    value={company}
                    onChange={(e) => {
                      setCompany(e.target.value);
                      if (errors.company) setErrors(prev => ({ ...prev, company: "" }));
                    }}
                    required
                    placeholder="e.g. ZapCode"
                    className={errors.company ? "border-red-500" : ""}
                  />
                  {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp <span className="text-red-500">*</span></Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    value={whatsapp}
                    onChange={handleWhatsAppChange}
                    required
                    placeholder="(11) 99999-9999"
                    maxLength={15}
                    className={errors.whatsapp ? "border-red-500" : ""}
                  />
                  {errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>}
                  <p className="text-xs text-muted-foreground">Informe o DDD + número</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-3 pt-2">
                <Button type="submit" disabled={loading} className="w-full md:w-auto px-6">
                  {loading ? "Enviando..." : "Quero ser contatado"}
                </Button>
                {status === "success" && (
                  <span className="text-green-600 text-sm">Enviado com sucesso. Obrigado!</span>
                )}
                {status === "error" && (
                  <span className="text-red-600 text-sm">Falha ao enviar. Tente novamente.</span>
                )}
              </div>

              <p className="text-[11px] text-muted-foreground mt-1">
                Ao enviar, você concorda em receber contato sobre nossos produtos e serviços.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
