import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Como o WhatsApp pode revolucionar o atendimento da sua empresa",
      description: "Descubra as principais estratégias para transformar o WhatsApp em uma ferramenta profissional de atendimento ao cliente.",
      date: "2024-01-15",
      author: "Richard Wagner",
      category: "Atendimento",
      readTime: "5 min",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "CRM via WhatsApp: O futuro das vendas está aqui",
      description: "Entenda como integrar seu processo de vendas ao WhatsApp e aumentar suas conversões em até 40%.",
      date: "2024-01-10",
      author: "José Carlos",
      category: "Vendas",
      readTime: "7 min",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Automação inteligente: Como responder clientes 24/7",
      description: "Aprenda a configurar respostas automáticas eficientes que mantêm seus clientes engajados mesmo fora do horário comercial.",
      date: "2024-01-05",
      author: "Richard Wagner",
      category: "Automação",
      readTime: "6 min",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Cases de sucesso: Empresas que cresceram com a Zapers",
      description: "Conheça histórias reais de empresas que transformaram seu atendimento e vendas usando nossa plataforma.",
      date: "2023-12-28",
      author: "José Carlos",
      category: "Cases",
      readTime: "8 min",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Métricas que importam: KPIs para WhatsApp Business",
      description: "Descubra quais indicadores acompanhar para medir o sucesso do seu atendimento via WhatsApp.",
      date: "2023-12-20",
      author: "Richard Wagner",
      category: "Analytics",
      readTime: "4 min",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Segurança e privacidade no WhatsApp empresarial",
      description: "Entenda as melhores práticas para manter a segurança dos dados dos seus clientes.",
      date: "2023-12-15",
      author: "José Carlos",
      category: "Segurança",
      readTime: "6 min",
      image: "/placeholder.svg"
    }
  ];

  const categories = ["Todos", "Atendimento", "Vendas", "Automação", "Cases", "Analytics", "Segurança"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
            Blog <span className="text-primary">Zapers</span>
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
                variant={category === "Todos" ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth px-4 py-2"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-elegant transition-smooth cursor-pointer">
                <div className="aspect-video bg-secondary/20 rounded-t-lg mb-4 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                    onClick={() => window.location.href = `/blog/${post.id}`}
                  >
                    Ler artigo
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
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
            <input 
              type="email" 
              placeholder="Seu melhor email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
            />
            <Button size="lg" className="gradient-bg text-white font-semibold">
              Assinar Newsletter
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;