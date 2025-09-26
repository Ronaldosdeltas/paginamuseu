import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Itacover from "/src/assets/images/Itacover.jpg";

export function Tradicoes() {
  // Inicializar AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  // Dados para as tradições
  const tradicoes = [
    {
      id: 1,
      title: "Festival da Cultura",
      description: "Evento anual com danças, música e culinária típica de Itarema.",
      image: Itacover, // Substitua pela sua imagem
      link: "https://www.instagram.com/itaremaordinariaof/reels/",
    },
    {
      id: 2,
      title: "Culinária Pesqueira",
      description: "Coleta de búzios mariscos.",
      image: Itacover, // Substitua pela sua imagem
      link: "https://www.youtube.com/watch?v=XB4BS4Uzpaw",
    },
    {
      id: 3,
      title: "Histórias de Itarema",
      description: "Vozes e ventos Historias de Itarema.",
      image: Itacover, // Substitua pela sua imagem
      link: "https://www.youtube.com/watch?v=es3Tt_uEa4o",
    },
  ];

  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="w-full mt-20 justify-center flex rounded-lg shadow-lg overflow-hidden relative" data-aos="fade-up">
        <img src={Itacover} alt="Tradições de Itarema" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-slate-700 text-white bg-opacity-40">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Tradições de Itarema</h1>
            <p className="text-lg mb-6">Celebre as práticas culturais que tornam Itarema única.</p>
            <Link to="/" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition">
              Voltar à Home
            </Link>
          </div>
        </div>
      </div>

      {/* Seção de Tradições */}
      <div className="max-w-5xl mx-auto mt-10 px-5" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-3xl font-medium text-gray-800 text-left mb-8">Nossas Tradições</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">
            Itarema é um celeiro de tradições vibrantes, desde festivais que reúnem a comunidade até pratos típicos que refletem a abundância do mar. A lenda da Pedra Cheirosa, que nomeia a cidade, é apenas uma das muitas histórias que conectam passado e presente.
          </p>
          <p className="text-gray-600 mb-4">
            Explore abaixo algumas das tradições mais emblemáticas de Itarema, capturadas em imagens e histórias.
          </p>
          <a
            href="https://www.instagram.com/itaremaordinariaof/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition"
          >
            Veja Mais no Instagram
          </a>
        </div>
      </div>

      {/* Galeria de Tradições */}
      <div className="max-w-6xl mx-auto mt-10 px-5 mb-10" data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-3xl font-medium text-gray-800 text-left mb-8">Destaques das Tradições</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tradicoes.map((item) => (
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
                <div className="absolute inset-0 hover:bg-opacity-20 transition-opacity duration-300 flex items-end">
                  <p className="text-gray-500 bg-white p-4 opacity-0 hover:opacity-100 transition-opacity">{item.description}</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                {item.link.startsWith("http") ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition"
                  >
                    Saiba Mais
                  </a>
                ) : (
                  <Link
                    to={item.link}
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition"
                  >
                    Saiba Mais
                  </Link>
                )}
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
            <Link to="/programacao/eventos" className="hover:text-amber-300">Programação</Link>
            <Link to="/visite/horarios" className="hover:text-amber-300">Visite</Link>
            <Link to="/apoie/doacao" className="hover:text-amber-300">Apoie</Link>
            <Link to="museu/acervoonline" className="hover:text-amber-300">Acervo Online</Link>
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