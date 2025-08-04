const StatsSection = () => {
  const stats = [
    {
      number: "99%",
      title: "Segurança",
      description: "Dados protegidos com criptografia"
    },
    {
      number: "24/7",
      title: "Monitoramento",
      description: "Acompanhamento contínuo"
    },
    {
      number: "97%",
      title: "Satisfação",
      description: "Clientes recomendam o Zapers"
    },
    {
      number: "5.000+",
      title: "Empresas",
      description: "Já confiam em nossa solução"
    }
  ];

  return (
    <section id="resultados" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4">RESULTADOS COMPROVADOS</h2>
          <p className="text-xl text-gray-300">Números que demonstram nossa eficiência</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="stats-number mb-2 group-hover:animate-pulse-slow">{stat.number}</div>
              <h3 className="text-xl font-bold mb-2">{stat.title}</h3>
              <p className="text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;