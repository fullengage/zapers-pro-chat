# 🚀 Funil de Captura de Leads por CNPJ - ZapCode

## 📋 Visão Geral

Implementação completa do funil de captura de leads usando consulta de CNPJ com IA, substituindo o botão tradicional "Solicitar Demonstração" por uma abordagem mais moderna e conversiva.

## 🎯 Estratégia Implementada

### ✅ **Por que essa abordagem funciona:**

1. **Curiosidade Natural**: Pessoas têm curiosidade sobre os próprios dados empresariais
2. **Zero Fricção**: Não exige email/telefone no primeiro passo
3. **Percepção de Valor**: Mostra capacidades técnicas antes do contato humano
4. **Lead Qualificado**: Quem consulta CNPJ está buscando melhorar processos
5. **IA como Diferencial**: Posiciona a tecnologia como protagonista

## 🔄 Fluxo do Usuário

```
PASSO 1: Clica em "🔍 Consultar CNPJ com IA"
    ↓
PASSO 2: Digita CNPJ (sem compromisso)
    ↓
PASSO 3: Vê loading com mensagens "tecnológicas"
    ↓
PASSO 4: Visualiza dados da empresa encontrados
    ↓
PASSO 5: Preenche nome + WhatsApp para receber diagnóstico
    ↓
PASSO 6: Confirmação e preparação para contato via IA
```

## 🛠️ Componentes Criados

### 1. `CnpjModal.tsx`
- **Modal completo** com 4 estados (input, loading, preview, confirmação)
- **Integração BrasilAPI** para consulta de CNPJ
- **Validações** em tempo real
- **UX profissional** com loading states animados
- **Salvamento automático** no Supabase

### 2. `HeroSection.tsx` (Atualizado)
- **Novo texto focado** em benefícios e curiosidade
- **Botão substituído**: "Solicitar Demonstração" → "🔍 Consultar CNPJ com IA"
- **Copy conversiva** destacando valor da IA

### 3. Migração Supabase
- **Tabela `leads_cnpj`** para armazenar capturas
- **Índices otimizados** para performance
- **RLS configurado** para segurança
- **Políticas de acesso** adequadas

## 📊 Estrutura da Tabela `leads_cnpj`

| Coluna | Tipo | Descrição |
|--------|------|----------|
| `id` | UUID | Primary key |
| `cnpj` | TEXT | CNPJ consultado |
| `empresa` | TEXT | Razão social |
| `cnae` | TEXT | CNAE principal |
| `nome` | TEXT | Nome do lead |
| `whatsapp` | TEXT | WhatsApp para contato |
| `data` | TIMESTAMP | Data da captura |
| `origem` | TEXT | Origem (hero_cnpj_modal) |
| `status` | TEXT | Status do lead |

## 🔌 Integrações Técnicas

### BrasilAPI
- **Endpoint**: `GET https://brasilapi.com.br/api/cnpj/v1/{cnpj}`
- **Dados retornados**: Razão social, CNAE, situação, endereço, etc.
- **Tratamento de erros**: CNPJ inválido, não encontrado, etc.

### Supabase
- **Cliente configurado** em `@/integrations/supabase/client`
- **Tipos TypeScript** atualizados em `types.ts`
- **Inserção automática** de leads com status "pendente"

### n8n (Integrado)
- **Webhook URL**: `https://autowebhook.chathook.com.br/webhook/recebe-cnpj`
- **Payload estruturado** com dados completos do lead
- **Tratamento de erros** para não quebrar o fluxo do usuário
- **Dados enviados**: CNPJ, empresa, CNAE, nome, WhatsApp, origem

## 🎨 UX/UI Implementado

### Estados do Modal
1. **Input**: Campo CNPJ com formatação automática
2. **Loading**: Animações com mensagens "tecnológicas"
3. **Preview**: Dados da empresa com design profissional
4. **Confirmação**: Sucesso com checklist de benefícios

### Validações
- **CNPJ**: 14 dígitos obrigatórios
- **WhatsApp**: DDD + número (mínimo 10 dígitos)
- **Nome**: Campo obrigatório
- **Erros**: Mensagens claras e construtivas

## 📈 Métricas para Acompanhar

### KPIs Sugeridos
- **Taxa de cliques** no novo botão vs. antigo
- **Taxa de conclusão** do fluxo CNPJ
- **Qualidade dos leads** (CNAEs mais comuns)
- **Conversão WhatsApp** após diagnóstico
- **Custo por lead qualificado**

### Eventos para Tracking
```javascript
// Exemplos de eventos para analytics
track('cnpj_modal_opened')
track('cnpj_search_started', { cnpj_length: 14 })
track('cnpj_company_found', { cnae: 'xxxx' })
track('lead_captured', { has_whatsapp: true })
track('diagnosis_requested')
```

## 🚀 Próximos Passos

### Imediato
1. **Executar migração** SQL no Supabase
2. **Testar fluxo** completo com CNPJs reais
3. **Configurar webhook** do n8n (se aplicável)

### Médio Prazo
1. **Personalizar mensagens** por CNAE
2. **Implementar IA** James/Mila no Chatwoot
3. **Criar templates** de diagnóstico específicos
4. **Adicionar automação** de follow-up

### Longo Prazo
1. **Machine Learning** para qualificação automática
2. **Integração CRM** para gestão de leads
3. **Dashboard analytics** do funil
4. **A/B testing** de copies e designs

## 🧪 Testes Sugeridos

### CNPJs para Teste
- **Magazine Luiza**: 04.709.760/0001-20
- **Ponto Frio**: 33.064.744/0001-87
- **Americanas**: 00.776.574/0001-56

### Fluxos de Teste
1. **CNPJ inválido**: Verificar mensagem de erro
2. **CNPJ não encontrado**: Testar tratamento
3. **Fluxo completo**: Do início ao fim
4. **Campos vazios**: Validações obrigatórias
5. **Performance**: Tempo de resposta BrasilAPI

## 📞 Suporte e Manutenção

### Logs Importantes
- **Erros BrasilAPI**: CNPJs não encontrados
- **Falhas Supabase**: Problemas de conexão
- **Validações**: Campos inválidos com frequência

### Monitoramento
- **Taxa de sucesso** das consultas CNPJ
- **Performance** do modal (tempo de carregamento)
- **Conversão** por etapa do funil

---

**Status**: ✅ Implementação completa e funcionando  
**Próxima ação**: Executar migração SQL no Supabase  
**Contato**: Para dúvidas, verificar arquivo `INSTRUÇÕES_SUPABASE.md`
