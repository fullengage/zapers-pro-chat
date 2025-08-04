import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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

const categories = ["Todas", "Tecnologia", "Marketing Digital", "Atendimento ao Cliente", "WhatsApp Business", "Chatbots", "Automação"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false });

      if (error) throw error;
      setBlogPosts(data || []);
    } catch (error) {
      console.error('Erro ao carregar posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredPosts = selectedCategory === "Todas" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
            Blog <span className="text-primary">ChatHoot</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dicas, estratégias e insights para transformar seu WhatsApp em uma poderosa ferramenta de negócios
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === selectedCategory ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all px-4 py-2"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">Carregando posts...</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">Nenhum post encontrado para esta categoria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader className="space-y-4">
                    {post.featured_image && (
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    )}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-sm text-muted-foreground">{post.read_time} min</span>
                      </div>
                      <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                        {post.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                    <CardDescription className="text-base leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={post.author_avatar || "/placeholder.svg"}
                          alt={post.author_name}
                          className="w-8 h-8 rounded-full"
                        />
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{post.author_name}</span>
                          <span className="text-xs text-muted-foreground">
                            {formatDistanceToNow(new Date(post.published_at || post.created_at), { 
                              addSuffix: true, 
                              locale: ptBR 
                            })}
                          </span>
                        </div>
                      </div>
                      <Button 
                        onClick={() => navigate(`/blog/${post.slug}`)} 
                        className="w-full"
                      >
                        Ler artigo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Receba nossos artigos no seu email
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Fique por dentro das últimas tendências em WhatsApp Business e CRM. 
            Enviamos conteúdo exclusivo toda semana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Seu melhor email"
              className="flex-1"
            />
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80">
              Assinar Newsletter
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}