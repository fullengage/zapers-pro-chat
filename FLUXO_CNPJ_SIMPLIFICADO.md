# 🚀 Fluxo CNPJ - Caminho Exato Implementado

## 📋 Sequência Passo a Passo

### ✅ **PASSO 1**: Usuário digita o CNPJ da empresa
- **Interface**: Modal com campo CNPJ formatado
- **Validação**: 14 dígitos obrigatórios
- **Exemplo**: `04.709.760/0001-20`

### ✅ **PASSO 2**: Usuário recebe informações do CNPJ
- **API**: BrasilAPI (`https://brasilapi.com.br/api/cnpj/v1/{cnpj}`)
- **Dados exibidos**:
  - Razão Social
  - Nome Fantasia (se houver)
  - CNAE Principal
  - Situação Cadastral
- **UX**: Loading animado com mensagens tecnológicas

### ✅ **PASSO 3**: Usuário preenche nome e WhatsApp
- **Campos obrigatórios**:
  - Nome completo
  - WhatsApp (DDD + número)
- **Validações**: Tempo real para ambos os campos

### ✅ **PASSO 4**: Gera mensagem personalizada
- **Formato**: `"Olá, sou o {nome} e meu WhatsApp é {whatsapp}. Recebi o diagnóstico do CNPJ {cnpj} da empresa {empresa}."`
- **Exemplo real**: `"Olá, sou o João da Silva e meu WhatsApp é (17) 99791-5318. Recebi o diagnóstico do CNPJ 04.709.760/0001-20 da empresa MAGAZINE LUIZA S.A."`

### ✅ **PASSO 5**: Dispara webhook com mensagem para n8n
- **Endpoint**: `https://autowebhook.chathook.com.br/webhook/recebe-cnpj`
- **Método**: POST
- **Payload completo**:
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

## 🔄 Fluxo Visual

```
📱 Usuário clica no botão
    ↓
⌨️ Digita CNPJ: 04.709.760/0001-20
    ↓
🔍 BrasilAPI retorna dados
    ↓
👤 Preenche: João da Silva | (17) 99791-5318
    ↓
💬 Gera mensagem personalizada
    ↓
📡 Envia webhook para n8n
    ↓
✅ Confirmação para usuário
```

## 🎯 O que Acontece em Cada Etapa

### Etapa 1-2: Consulta CNPJ
```javascript
// Busca na BrasilAPI
GET https://brasilapi.com.br/api/cnpj/v1/04709760000120

// Retorna:
{
  "razao_social": "MAGAZINE LUIZA S.A.",
  "cnae_fiscal_descricao": "Comércio varejista de móveis",
  "descricao_situacao_cadastral": "ATIVA"
}
```

### Etapa 3-4: Captura e Mensagem
```javascript
// Dados do formulário
nome = "João da Silva"
whatsapp = "(17) 99791-5318"
cnpj = "04.709.760/0001-20"
empresa = "MAGAZINE LUIZA S.A."

// Gera mensagem
mensagem = "Olá, sou o João da Silva e meu WhatsApp é (17) 99791-5318. Recebi o diagnóstico do CNPJ 04.709.760/0001-20 da empresa MAGAZINE LUIZA S.A."
```

### Etapa 5: Webhook n8n
```javascript
// Envia para webhook
POST https://autowebhook.chathook.com.br/webhook/recebe-cnpj
Content-Type: application/json

// Body completo com todos os dados + mensagem
```

## 📱 Experiência do Usuário

### Tela 1: Input CNPJ
```
🔍 Consultar CNPJ com IA
Digite o CNPJ que você quer consultar
[ 04.709.760/0001-20 ]
[Consultar dados]
```

### Tela 2: Loading
```
🔎 Analisando dados...
Consultando Receita Federal...
Carregando CNAE, faturamento estimado...
Analisando riscos e oportunidades...
```

### Tela 3: Dados + Formulário
```
📊 Empresa encontrada!
MAGAZINE LUIZA S.A.
Comércio varejista de móveis - ATIVA

Para liberar o diagnóstico:
Nome: [João da Silva]
WhatsApp: [(17) 99791-5318]
[➡️ Receber diagnóstico no WhatsApp]
```

### Tela 4: Confirmação
```
✅ Perfeito, João da Silva!
Sua mensagem foi enviada para nossa IA no WhatsApp!

Mensagem enviada:
"Olá, sou o João da Silva e meu WhatsApp é (17) 99791-5318. Recebi o diagnóstico do CNPJ 04.709.760/0001-20 da empresa MAGAZINE LUIZA S.A."
```

## 🚀 Pronto para Produção

O fluxo está 100% implementado seguindo exatamente o caminho solicitado:

1. ✅ CNPJ → BrasilAPI
2. ✅ Dados → Preview profissional  
3. ✅ Formulário → Nome + WhatsApp
4. ✅ Mensagem → "Olá, sou o {nome}..."
5. ✅ Webhook → n8n com payload completo

**Status**: ✅ Funcionando e pronto para uso!
