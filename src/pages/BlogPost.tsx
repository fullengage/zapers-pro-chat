import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  category: string;
  author_name: string;
  author_avatar: string;
  featured_image: string;
  published: boolean;
  read_time: number;
  tags: string[];
  meta_description: string;
  created_at: string;
  updated_at: string;
  published_at: string;
}

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single();

      if (error) throw error;
      setPost(data);

      // Buscar posts relacionados da mesma categoria
      if (data) {
        const { data: related } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('category', data.category)
          .eq('published', true)
          .neq('id', data.id)
          .limit(3);

        setRelatedPosts(related || []);
      }
    } catch (error) {
      console.error('Erro ao carregar post:', error);
      navigate('/blog');
    } finally {
      setIsLoading(false);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title,
          text: post?.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Erro ao compartilhar:', error);
      }
    } else {
      // Fallback: copiar URL para clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-32">
          <div className="text-center">
            <p className="text-lg text-muted-foreground">Carregando artigo...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-32">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Artigo não encontrado</h1>
            <Button onClick={() => navigate('/blog')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Blog
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb e botão voltar */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/blog')}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Blog
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Blog</span>
              <span>/</span>
              <Badge variant="secondary">{post.category}</Badge>
            </div>
          </div>

          {/* Header do artigo */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            {post.excerpt && (
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {post.excerpt}
              </p>
            )}

            {/* Meta informações */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <img
                  src={post.author_avatar || "/placeholder.svg"}
                  alt={post.author_name}
                  className="w-6 h-6 rounded-full"
                />
                <span>{post.author_name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {formatDistanceToNow(new Date(post.published_at || post.created_at), { 
                    addSuffix: true, 
                    locale: ptBR 
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.read_time} min de leitura</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleShare}
                className="ml-auto"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Compartilhar
              </Button>
            </div>

            {/* Imagem destacada */}
            {post.featured_image && (
              <div className="mb-12">
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}
          </header>

          {/* Conteúdo do artigo */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-foreground leading-relaxed [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mb-4 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mb-3 [&>h2]:mt-6 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mb-2 [&>h3]:mt-4 [&>p]:mb-4 [&>ul]:mb-4 [&>ol]:mb-4 [&>li]:mb-1 [&>strong]:font-bold [&>em]:italic [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-4 [&>blockquote]:italic"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Call to action */}
          <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Gostou do conteúdo?</h3>
            <p className="text-muted-foreground mb-6">
              Transforme seu WhatsApp em uma ferramenta de vendas com o ChatHoot
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80">
              Solicitar Demonstração
            </Button>
          </div>
        </div>
      </article>

      {/* Posts relacionados */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-secondary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Artigos Relacionados</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <Card 
                  key={relatedPost.id}
                  className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                  onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                >
                  {relatedPost.featured_image && (
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={relatedPost.featured_image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="font-bold text-lg mb-3 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
                      <span>{relatedPost.author_name}</span>
                      <span>{relatedPost.read_time} min</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}