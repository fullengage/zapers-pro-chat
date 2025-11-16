# 🚀 Instruções para Configurar o Funil de CNPJ no Supabase

## Passo 1: Executar a Migração

Para criar a tabela `leads_cnpj` no seu Supabase, siga um dos métodos abaixo:

### Método A: Via Dashboard Supabase (Recomendado)

1. Acesse o dashboard do seu projeto Supabase: https://supabase.com/dashboard/project/anmzxbljzkyuvrrarqtu
2. Vá para **SQL Editor**
3. Clique em **New query**
4. Copie e cole o conteúdo do arquivo `supabase/migrations/create_leads_cnpj_table.sql`
5. Clique em **Run** para executar a migração

### Método B: Via CLI (se tiver configurado)

```bash
# Se você tem o Supabase CLI configurado
supabase db push
```

## Passo 2: Verificar a Tabela

Após executar a migração, verifique se a tabela foi criada:

1. No Dashboard Supabase, vá para **Table Editor**
2. Procure pela tabela `leads_cnpj`
3. Confirme que todas as colunas foram criadas:
   - `id` (UUID, Primary Key)
   - `cnpj` (TEXT)
   - `empresa` (TEXT)
   - `cnae` (TEXT, nullable)
   - `nome` (TEXT)
   - `whatsapp` (TEXT)
   - `data` (TIMESTAMP)
   - `origem` (TEXT)
   - `status` (TEXT)
   - `created_at` (TIMESTAMP)
   - `updated_at` (TIMESTAMP)

## Passo 3: Testar a Aplicação

1. Execute o projeto localmente:
   ```bash
   npm run dev
   ```
2. Acesse `http://localhost:5173`
3. Clique no botão **"🔍 Consultar CNPJ com IA"**
4. Digite um CNPJ válido (ex: 04.709.760/0001-20 - Magazine Luiza)
5. Preencha nome e WhatsApp
6. Verifique se os dados aparecem na tabela `leads_cnpj` no Supabase

## Passo 4: Webhook n8n (Já Configurado) ✅

O webhook do n8n já está configurado e integrado:

- **URL**: `https://autowebhook.chathook.com.br/webhook/recebe-cnpj`
- **Status**: ✅ Ativo no código
- **Payload**: Dados completos do lead são enviados automaticamente
- **Tratamento**: Erros no webhook não quebram o fluxo do usuário

### Payload Enviado:
```json
{
  "cnpj": "12345678000190",
  "empresa": "Razão Social da Empresa",
  "cnae": "Descrição do CNAE Principal",
  "nome": "Nome do Lead",
  "whatsapp": "17997915318",
  "origem": "hero_cnpj_modal"
}
```

## 🎯 Fluxo Completo Implementado

✅ **Botão Principal**: "🔍 Consultar CNPJ com IA"  
✅ **Modal CNPJ**: Captura CNPJ, nome e WhatsApp  
✅ **BrasilAPI**: Consulta dados da empresa automaticamente  
✅ **Supabase**: Salva leads no banco de dados  
✅ **n8n Webhook**: Envia dados para automação **(JÁ ATIVO)**  
✅ **UX Profissional**: Loading states e validações  
✅ **Copy Conversativa**: Textos focados em benefícios  

## 🔧 Próximos Passos

- Configurar fluxo da IA (James/Mila) no Chatwoot para receber os dados
- Criar templates de mensagem personalizados por CNAE
- Implementar automação de follow-up no WhatsApp

---

**Importante**: A aplicação já funciona para capturar leads. O webhook do n8n é opcional e pode ser configurado posteriormente.
