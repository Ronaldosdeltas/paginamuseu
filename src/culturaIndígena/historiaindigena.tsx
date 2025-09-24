import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Itacover from "/src/assets/images/Itacover.jpg";
import itaord from "/src/assets/images/itaord.png";

export function HistoriaIndigena() {
  // Inicializar AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  // Dados para a galeria de destaques
  const destaquesIndigenas = [
    {
      id: 1,
      title: "Cerâmica Tremembé",
      description: "Vasos cerimoniais usados em rituais indígenas.",
      image: Itacover, 
    },
    {
      id: 2,
      title: "Ferramentas de Pesca",
      description: "Redes e arpões dos povos Tremembé.",
      image: itaord, 
    },
    {
      id: 3,
      title: "Ornamentos Sagrados",
      description: "Colares e pulseiras com conchas e pedras.",
      image: Itacover,
    },
  ];

  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="w-full mt-20 justify-center flex rounded-lg shadow-lg overflow-hidden relative" data-aos="fade-up">
        <img src={Itacover} alt="História Indígena de Itarema" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">História Indígena de Itarema</h1>
            <p className="text-lg mb-6">Conheça a rica herança dos povos Tremembé e sua influência na cultura local.</p>
            <Link to="/" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition">
              Voltar à Home
            </Link>
          </div>
        </div>
      </div>

      {/* Seção de Conteúdo */}
      <div className="max-w-5xl mx-auto mt-10 px-5" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-3xl font-medium text-gray-800 text-left mb-8">A Herança dos Tremembé</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">
            Os povos Tremembé são parte fundamental da história de Itarema. Antes da chegada dos colonizadores, eles habitavam a região costeira, vivendo da pesca, agricultura e coleta. Sua cultura é marcada por rituais, artesanato e uma profunda conexão com a natureza, especialmente com o mar e a Pedra Cheirosa, que inspirou o nome da cidade.
          </p>
          <p className="text-gray-600 mb-4">
            No Museu Itaa, preservamos artefatos como cerâmicas, ferramentas de pesca e ornamentos que contam a história desses povos. Explore abaixo alguns destaques da nossa coleção.
          </p>
          <Link
            to="/acervo-online"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition"
          >
            Ver Acervo Completo
          </Link>
        </div>
      </div>

      {/* Galeria de Destaques */}
      <div className="max-w-6xl mx-auto mt-10 px-5 mb-10" data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-3xl font-medium text-gray-800 text-left mb-8">Destaques do Acervo Indígena</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destaquesIndigenas.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={item.id * 100}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 opacity-0 hover:opacity-100 transition-opacity">{item.description}</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#116cc2] text-white py-8 px-5 w-full mt-10" data-aos="fade-up" data-aos-delay="300">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <Link to="/" className="hover:text-amber-300">Home</Link>
            <Link to="/programacao" className="hover:text-amber-300">Programação</Link>
            <Link to="/visite" className="hover:text-amber-300">Visite</Link>
            <Link to="/apoie" className="hover:text-amber-300">Apoie</Link>
            <Link to="/acervo-online" className="hover:text-amber-300">Acervo Online</Link>
          </div>
          <div className="text-center md:text-left">
            <p className="mb-2">Contato: museuitaa@itarema.gov.br</p>
            <p>Rua Principal, 123, Centro - Itarema, CE</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.itarema.ce.gov.br/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">Prefeitura Municipal</a>
            <a href="https://www.instagram.com/itaremaordinariaof/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">Instagram</a>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-4 text-center text-sm">
          &copy; 2025 Museu Itaa. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}