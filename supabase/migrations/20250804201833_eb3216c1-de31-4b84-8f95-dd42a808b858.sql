-- Criar tabela para posts do blog
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  slug TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL,
  author_name TEXT NOT NULL,
  author_avatar TEXT,
  featured_image TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  read_time INTEGER DEFAULT 5,
  tags TEXT[] DEFAULT '{}',
  meta_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  published_at TIMESTAMP WITH TIME ZONE
);

-- Ativar RLS
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Políticas RLS
CREATE POLICY "Qualquer pessoa pode ver posts publicados" 
ON public.blog_posts 
FOR SELECT 
USING (published = true);

CREATE POLICY "Usuários autenticados podem ver todos os posts" 
ON public.blog_posts 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Usuários autenticados podem criar posts" 
ON public.blog_posts 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Usuários autenticados podem atualizar posts" 
ON public.blog_posts 
FOR UPDATE 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Usuários autenticados podem deletar posts" 
ON public.blog_posts 
FOR DELETE 
USING (auth.uid() IS NOT NULL);

-- Função para atualizar automaticamente a coluna updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para atualizar updated_at
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Índices para performance
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON public.blog_posts(published);
CREATE INDEX idx_blog_posts_category ON public.blog_posts(category);
CREATE INDEX idx_blog_posts_published_at ON public.blog_posts(published_at DESC) WHERE published = true;