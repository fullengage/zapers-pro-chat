-- Migration: Create leads_cnpj table
-- Description: Table to store leads captured through CNPJ modal

CREATE TABLE public.leads_cnpj (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  cnpj TEXT NOT NULL,
  empresa TEXT NOT NULL,
  cnae TEXT,
  nome TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  data TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  origem TEXT DEFAULT 'hero_cnpj_modal',
  status TEXT DEFAULT 'pendente',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes for performance
CREATE INDEX idx_leads_cnpj_cnpj ON public.leads_cnpj(cnpj);
CREATE INDEX idx_leads_cnpj_data ON public.leads_cnpj(data);
CREATE INDEX idx_leads_cnpj_status ON public.leads_cnpj(status);

-- Enable Row Level Security
ALTER TABLE public.leads_cnpj ENABLE ROW LEVEL SECURITY;

-- Policy to allow public insertions
CREATE POLICY "Allow public insert for leads_cnpj" ON public.leads_cnpj
  FOR INSERT WITH CHECK (true);

-- Policy to allow read for authenticated users
CREATE POLICY "Allow authenticated read for leads_cnpj" ON public.leads_cnpj
  FOR SELECT USING (auth.role() = 'authenticated');

-- Policy to allow updates for authenticated users
CREATE POLICY "Allow authenticated update for leads_cnpj" ON public.leads_cnpj
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Add comments
COMMENT ON TABLE public.leads_cnpj IS 'Leads capturados através do modal de consulta CNPJ na página principal';
COMMENT ON COLUMN public.leads_cnpj.cnpj IS 'CNPJ da empresa consultada';
COMMENT ON COLUMN public.leads_cnpj.empresa IS 'Razão social da empresa';
COMMENT ON COLUMN public.leads_cnpj.cnae IS 'CNAE principal da empresa';
COMMENT ON COLUMN public.leads_cnpj.nome IS 'Nome do lead';
COMMENT ON COLUMN public.leads_cnpj.whatsapp IS 'WhatsApp do lead';
COMMENT ON COLUMN public.leads_cnpj.data IS 'Data da captura do lead';
COMMENT ON COLUMN public.leads_cnpj.origem IS 'Origem da captura do lead';
COMMENT ON COLUMN public.leads_cnpj.status IS 'Status do lead (pendente, contatado, convertido, etc)';
