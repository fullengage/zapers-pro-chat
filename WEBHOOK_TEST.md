# 🧪 Teste do Webhook n8n - CNPJ Leads (Mensagem Surpresa)

## 📡 Endpoint Configurado

**URL**: `https://autowebhook.chathook.com.br/webhook/recebe-cnpj`  
**Método**: `POST`  
**Content-Type**: `application/json`

## 📋 Payload Enviado

Quando um usuário completa o fluxo de surpresa CNPJ, este payload é enviado:

```json
{
  "cnpj": "04709760000120",
  "empresa": "MAGAZINE LUIZA S.A.",
  "cnae": "4741-5/00 - Comércio varejista de móveis",
  "nome": "João da Silva",
  "whatsapp": "17997915318",
  "mensagem": "Olá, sou o João da Silva e meu WhatsApp é (17) 99791-5318. Recebi o diagnóstico do CNPJ 04.709.760/0001-20 da empresa MAGAZINE LUIZA S.A.",
  "origem": "hero_cnpj_modal"
}
```

### Campo `mensagem` (Novo):
- **Formato**: Texto personalizado com nome, WhatsApp, CNPJ e empresa
- **Uso**: Pode ser enviado diretamente no WhatsApp ou como base para resposta da IA
- **Exemplo**: "Olá, sou o João da Silva e meu WhatsApp é (17) 99791-5318. Recebi o diagnóstico do CNPJ 04.709.760/0001-20 da empresa MAGAZINE LUIZA S.A."

## 🔄 Fluxo no n8n

Sugestão de fluxo para configurar no n8n:

### 1. Webhook Trigger
- **Path**: `/webhook/recebe-cnpj`
- **Method**: POST
- **Response Code**: 200

### 2. Chatwoot Integration
- **Action**: Create conversation
- **Inbox**: WhatsApp
- **Contact**: Criar/atualizar com WhatsApp
- **Message**: Template personalizado baseado no CNAE

### 3. IA James/Mila (Surpresa)
- **Analyze**: CNAE e tipo de empresa
- **Generate**: Diagnóstico surpresa personalizado
- **Send**: Mensagem inicial no WhatsApp com tom de exclusividade

## 📝 Template de Mensagem Sugerido

### Mensagem Inicial no WhatsApp (Tom de Surpresa):

```
🎉 Olá, {nome}! Sou a IA da ZapCode e preparei uma surpresa para você!

Recebi seu CNPJ {cnpj} da {empresa} e descobri informações que poucos conhecem...

🔍 **Dados exclusivos encontrados:**
• Razão Social: {empresa}
• CNAE: {cnae}
• Situação: ATIVA

💎 **A surpresa que preparei:**
Baseado no seu segmento de {cnae_description}, identifiquei 3 oportunidades que seus concorrentes estão ignorando e 2 riscos que podem estar custando dinheiro para você agora.

Quer descobrir? 🚀
```

## 🧪 Como Testar

### Teste Manual via cURL:

```bash
curl -X POST https://autowebhook.chathook.com.br/webhook/recebe-cnpj \
  -H "Content-Type: application/json" \
  -d '{
    "cnpj": "04709760000120",
    "empresa": "MAGAZINE LUIZA S.A.",
    "cnae": "4741-5/00 - Comércio varejista de móveis",
    "nome": "Teste ZapCode",
    "whatsapp": "17997915318",
    "mensagem": "Olá, sou o Teste ZapCode e meu WhatsApp é (17) 99791-5318. Recebi o diagnóstico do CNPJ 04.709.760/0001-20 da empresa MAGAZINE LUIZA S.A.",
    "origem": "hero_cnpj_modal"
  }'
```

### Teste via Aplicação:

1. Execute `npm run dev`
2. Acesse `http://localhost:5173`
3. Clique em **"🚀 Deixe um CNPJ e te surpreendo no WhatsApp"**
4. Digite CNPJ: `04.709.760/0001-20`
5. Preencha nome e WhatsApp
6. Verifique os logs no console do navegador
7. Confirme o recebimento no seu fluxo n8n

## 📊 Estrutura de Dados para Análise

### Campos Disponíveis:

| Campo | Formato | Exemplo | Uso Sugerido |
|-------|---------|---------|--------------|
| `cnpj` | String numérica | "04709760000120" | Identificador único |
| `empresa` | String | "MAGAZINE LUIZA S.A." | Personalização |
| `cnae` | String | "4741-5/00 - Comércio..." | Segmentação |
| `nome` | String | "João da Silva" | Tratamento pessoal |
| `whatsapp` | String numérica | "17997915318" | Contato direto |
| `mensagem` | String | "Olá, sou o João..." | **Mensagem pronta para WhatsApp** |
| `origem` | String | "hero_cnpj_modal" | Análise de canal |

## 🎯 Próximos Passos no n8n

1. **Configurar trigger** webhook
2. **Mapear campos** para Chatwoot
3. **Criar templates** surpresa por CNAE
4. **Implementar IA** para diagnóstico exclusivo
5. **Configurar follow-up** automático
6. **Métricas** de conversão da surpresa

## 📈 KPIs para Monitorar

- **Taxa de cliques** no botão surpresa
- **Taxa de conclusão** do fluxo CNPJ
- **Tempo de resposta** da IA com surpresa
- **Conversão** WhatsApp → Engajamento
- **Engajamento** por CNAE
- **Retorno** sobre o funil surpresa

---

**Status**: ✅ Botão surpresa configurado e webhook ativo  
**Próxima ação**: Configurar fluxo surpresa no n8n  
**Teste**: Use o cURL acima ou teste via aplicação
