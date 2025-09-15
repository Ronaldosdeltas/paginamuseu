import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import Itacover from "/src/assets/images/Itacover.jpg";

export function Home() {
  // Imagem estática no topo
  const staticImage = {
    src: Itacover,
    alt: "Imagem de capa do Museu Itaa",
  };

  // Imagens para o carrossel
  const carouselImages = [
    {
      src: Itacover,
      alt: "Imagem do Museu Itaa",
      path: "/visite/horarios",
      caption: "Horários",
    },
    {
      src: Itacover,
      alt: "Imagem de Localização",
      path: "/visite/localizacao",
      caption: "Localização",
    },
    {
      src: Itacover,
      path: "/videos",
      alt: "Imagem de Compra de Tickets",
      caption: "Compra de Tickets",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Muda a imagem a cada 5 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, [carouselImages.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col w-full items-center justify-center">
      {/* Imagem estática no topo */}
      <div className="w-full mt-20 justify-center flex rounded-lg shadow-lg overflow-hidden">
        <img
          src={staticImage.src}
          alt={staticImage.alt}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Carrossel abaixo da imagem estática */}
      <div className="max-w-4xl mx-auto mt-20 px-5">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Notícias Atuais</h2>
        <div className="relative w-full max-w-5xl mx-auto mt-0 overflow-hidden mb-10 rounded-lg shadow-lg">
          <button
            onClick={goToPrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black text-3xl z-10 hover:text-amber-300"
          >
            <AiOutlineLeft />
          </button>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carouselImages.map((image, index) => (
              <Link
                to={image.path}
                key={index}
                className="w-full flex-shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                  {image.caption}
                </div>
              </Link>
            ))}
          </div>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black text-3xl z-10 hover:text-amber-300"
          >
            <AiOutlineRight />
          </button>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-white" : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Seção de Programação */}
      <div className="bg-gray-100 py-12 px-5 md:px-10 m-4 rounded-lg shadow-lg">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Programação do Museu local</h2>
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Exposições Atuais</h3>
              <p className="text-gray-600 mb-4">
                Confira as exposições em destaque que exploram a cultura e história de Itarema.
                Venha visitar e mergulhe na arte e nas tradições locais.
              </p>
              <Link
                to="/exposicoes/atual"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition"
              >
                Ver Exposições
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Eventos Futuros</h3>
              <p className="text-gray-600 mb-4">
                Participe dos próximos eventos culturais que celebram a diversidade de Itarema.
                Fique atento às datas e participe!
              </p>
              <Link
                to="/exposicoes/eventos"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition"
              >
                Ver Eventos
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Sobre Nós */}
      <div className="bg-gray-100 py-12 px-5 md:px-10 m-4 rounded-lg shadow-lg">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">História da Cidade</h2>
          <div className="text-white text-center font-medium bg-blue-400 p-6 rounded-lg shadow-md">
            <p className="mb-4">
              A cidade de Itarema é uma alusão ao nome dado pelos índios por causa de uma pedra com forma de obelisco em alto mar que só era visível em maré baixa. Este vem do tupi ita (pedra), rema (cheiro agradável) e significa pedra de cheiro agradável ou pedra cheirosa.
            </p>
            <p className="mb-4">
              A cidade Chamou-se primitivamente Tanque do Meio, ocupando terras litorâneas entre os lugares denominados Tanque de Cima e Tanque de Baixo, reservatórios destinados ao abastecimento de água aos moradores das respectivas vizinhanças. Desse fragmentos de progresso nasceria a povoação, composta na maioria de habitantes e de atividades diversificadas.
            </p>
           
            <Link
                to="/exposicoes/eventos"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition"
              >
                Saiba Mais sobre a Cidade
              </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#116cc2] text-white py-8 px-5 w-full mt-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Navegação */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <Link to="/" className="hover:text-amber-300">Home</Link>
            <Link to="/programacao" className="hover:text-amber-300">Programação</Link>
            <Link to="/visite" className="hover:text-amber-300">Visite</Link>
            <Link to="/apoie" className="hover:text-amber-300">Apoie</Link>
          </div>

          {/* Contatos */}
          <div className="text-center md:text-left">
            <p className="mb-2">Contato: museuitaa@itarema.gov.br</p>
            <p>Rua Principal, 123, Centro - Itarema, CE</p>
          </div>

          {/* Redes Sociais */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">
              Instagram
            </a>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-4 text-center text-sm">
          &copy; 2025 Museu Itaa. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
