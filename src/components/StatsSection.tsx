const StatsSection = () => {
  const stats = [
    {
      number: "99%",
      title: "Segurança",
      description: "Dados protegidos com criptografia"
    },
    {
      number: "24/7",
      title: "Disponibilidade",
      description: "Sistema sempre ativo"
    },
    {
      number: "100%",
      title: "Controle",
      description: "Total visibilidade das comunicações"
    },
    {
      number: "Cloud",
      title: "Armazenamento",
      description: "Dados seguros na nuvem"
    }
  ];

  return (
    <section id="resultados" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4">NOSSA TECNOLOGIA</h2>
          <p className="text-xl text-gray-300">Recursos que garantem máxima eficiência</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group"
            >
              {/* Número destacado */}
              <div className="text-4xl font-extrabold mb-2 text-yellow-400 group-hover:text-yellow-300 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              {/* Título com bom contraste */}
              <h3 className="text-xl font-bold text-white mb-2">
                {stat.title}
              </h3>
              {/* Descrição mais clara */}
              <p className="text-gray-200">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
