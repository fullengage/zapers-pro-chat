import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Search, Building2, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface CnpjModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CompanyData {
  razao_social: string;
  nome_fantasia?: string;
  cnae_fiscal_descricao: string;
  descricao_situacao_cadastral: string;
  cnpj: string;
}

export const CnpjModal = ({ isOpen, onClose }: CnpjModalProps) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [cnpj, setCnpj] = useState("");
  const [loading, setLoading] = useState(false);
  const [companyData, setCompanyData] = useState<CompanyData | null>(null);
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [error, setError] = useState("");

  const formatCnpj = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length <= 14) {
      return cleaned.replace(
        /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/,
        "$1.$2.$3/$4-$5"
      );
    }
    return value;
  };

  const handleCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCnpj(e.target.value);
    setCnpj(formatted);
    setError("");
  };

  const searchCnpj = async () => {
    const cleanCnpj = cnpj.replace(/\D/g, "");
    if (cleanCnpj.length !== 14) {
      setError("CNPJ inválido. Digite 14 números.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Simular etapas de carregamento para percepção de tecnologia
      setStep(2);
      
      const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cleanCnpj}`);
      
      if (!response.ok) {
        throw new Error("CNPJ não encontrado");
      }

      const data = await response.json();
      setCompanyData({
        razao_social: data.razao_social,
        nome_fantasia: data.nome_fantasia,
        cnae_fiscal_descricao: data.cnae_fiscal_descricao,
        descricao_situacao_cadastral: data.descricao_situacao_cadastral,
        cnpj: cnpj
      });

      setStep(3);
    } catch (err) {
      setError("Não encontramos este CNPJ. Verifique e tente novamente.");
      setStep(1);
    } finally {
      setLoading(false);
    }
  };

  const submitLead = async () => {
    if (!nome.trim()) {
      setError("Por favor, informe seu nome.");
      return;
    }

    const cleanWhatsapp = whatsapp.replace(/\D/g, "");
    if (cleanWhatsapp.length < 10) {
      setError("WhatsApp inválido. Digite DDD + número.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Salvar lead no Supabase
      const { error: supabaseError } = await supabase
        .from('leads_cnpj')
        .insert({
          cnpj: cnpj.replace(/\D/g, ""),
          empresa: companyData?.razao_social,
          cnae: companyData?.cnae_fiscal_descricao,
          nome: nome.trim(),
          whatsapp: cleanWhatsapp,
          origem: "hero_cnpj_modal",
          status: "pendente"
        });

      if (supabaseError) {
        console.error("Erro ao salvar no Supabase:", supabaseError);
        // Continuar mesmo se der erro no Supabase para não quebrar o fluxo
      }

      // Criar mensagem personalizada
      const mensagemPersonalizada = `Olá, sou o ${nome.trim()} e meu WhatsApp é ${whatsapp}. Recebi o diagnóstico do CNPJ ${cnpj} da empresa ${companyData?.razao_social}.`;
      
      // Preparar payload para webhook n8n
      const webhookPayload = {
        cnpj: cnpj.replace(/\D/g, ""),
        empresa: companyData?.razao_social,
        cnae: companyData?.cnae_fiscal_descricao,
        nome: nome.trim(),
        whatsapp: cleanWhatsapp,
        mensagem: mensagemPersonalizada,
        origem: "hero_cnpj_modal"
      };

      console.log("Payload para webhook n8n:", webhookPayload);
      
      // Enviar para webhook do n8n
      try {
        const webhookResponse = await fetch('https://autowebhook.chathook.com.br/webhook/recebe-cnpj', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(webhookPayload)
        });
        
        if (!webhookResponse.ok) {
          console.error("Erro no webhook n8n:", webhookResponse.status);
          // Continuar mesmo se der erro no webhook para não quebrar o fluxo
        }
      } catch (webhookError) {
        console.error("Erro ao enviar para webhook n8n:", webhookError);
        // Continuar mesmo se der erro no webhook para não quebrar o fluxo
      }
      
      // Simular tempo de processamento
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStep(4);
    } catch (err) {
      console.error("Erro ao processar lead:", err);
      setError("Erro ao enviar dados. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const resetModal = () => {
    setStep(1);
    setCnpj("");
    setNome("");
    setWhatsapp("");
    setCompanyData(null);
    setError("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={resetModal}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            {step === 1 && "🚀 Deixe um CNPJ e te surpreendo no WhatsApp"}
            {step === 2 && "🔎 Analisando dados..."}
            {step === 3 && "📊 Empresa encontrada!"}
            {step === 4 && "✅ Surpresa enviada!"}
          </DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-4">
            <div className="text-center text-sm text-muted-foreground mb-4">
              Me dê um CNPJ e vou te surpreender com informações exclusivas no seu WhatsApp
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input
                id="cnpj"
                placeholder="00.000.000/0001-00"
                value={cnpj}
                onChange={handleCnpjChange}
                maxLength={18}
                className="text-center text-lg"
              />
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button 
              onClick={searchCnpj} 
              disabled={loading || cnpj.replace(/\D/g, "").length !== 14}
              className="w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Preparando surpresa...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 mr-2" />
                  🚀 Me surpreenda!
                </>
              )}
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Consultando Receita Federal...</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Carregando CNAE, faturamento estimado e dados públicos...</p>
              <p className="text-xs text-muted-foreground">Analisando riscos e oportunidades...</p>
            </div>
          </div>
        )}

        {step === 3 && companyData && (
          <div className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Empresa encontrada:</h3>
              </div>
              
              <div className="space-y-1 text-sm">
                <p><strong>Razão Social:</strong> {companyData.razao_social}</p>
                {companyData.nome_fantasia && (
                  <p><strong>Nome Fantasia:</strong> {companyData.nome_fantasia}</p>
                )}
                <p><strong>CNAE Principal:</strong> {companyData.cnae_fiscal_descricao}</p>
                <p><strong>Situação:</strong> 
                  <span className={`ml-1 px-2 py-1 rounded text-xs ${
                    companyData.descricao_situacao_cadastral === 'ATIVA' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {companyData.descricao_situacao_cadastral}
                  </span>
                </p>
              </div>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              <p className="mb-3">Para receber a surpresa completa no seu WhatsApp, confirme seus dados:</p>
              <p className="text-xs italic">Vou te enviar informações exclusivas que ninguém mais tem!</p>
            </div>

            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="nome">Seu nome</Label>
                <Input
                  id="nome"
                  placeholder="Digite seu nome completo"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input
                  id="whatsapp"
                  placeholder="(17) 99791-5318"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                />
              </div>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button 
              onClick={submitLead} 
              disabled={loading}
              className="w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Enviando surpresa...
                </>
              ) : (
                "🚀 Receber surpresa no WhatsApp"
              )}
            </Button>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">🎉 Surpresa preparada, {nome}!</h3>
              <p className="text-sm text-muted-foreground">
                As informações exclusivas estão chegando no seu WhatsApp agora!
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 text-left space-y-3">
              <p className="font-semibold text-sm">Sua mensagem personalizada:</p>
              <div className="bg-white p-3 rounded border text-xs italic">
                "Olá, sou o {nome} e meu WhatsApp é {whatsapp}. Recebi o diagnóstico do CNPJ {cnpj} da empresa {companyData?.razao_social}."
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 text-left space-y-2">
              <p className="font-semibold text-sm">🎁 Você vai receber:</p>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Dados ocultos do seu CNPJ</li>
                <li>• Análise exclusiva da sua empresa</li>
                <li>• Oportunidades que seus concorrentes não veem</li>
                <li>• Riscos que você precisa conhecer</li>
                <li>• Como nossa IA pode revolucionar seu negócio</li>
              </ul>
            </div>

            <Button onClick={resetModal} className="w-full">
              🚀 Fechar e esperar surpresa!
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
