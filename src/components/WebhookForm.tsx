import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const WEBHOOK_URL = "https://autowebhook.chathook.com.br/webhook/9744f9d4-7b89-487d-bd5a-7358ebc3c27a";

export default function WebhookForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Name: name, NomeEmpresa: company, email }),
      });
      if (!res.ok) throw new Error("request_failed");
      setStatus("success");
      setName("");
      setCompany("");
      setEmail("");
    } catch {
      setStatus("error");
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
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="e.g. José Alves"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="e.g. jose@empresa.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">NomeEmpresa <span className="text-red-500">*</span></Label>
                  <Input
                    id="company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                    placeholder="e.g. ZapCode"
                  />
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
