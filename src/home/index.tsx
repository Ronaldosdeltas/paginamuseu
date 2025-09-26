import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import Itacover from "/src/assets/images/Itacover.jpg";
import itaord from "/src/assets/images/itaord.png";
import maracá from "/src/assets/images/maracá.jpg";
import sportIta from "/src/assets/images/sportIta.jpg";
import itachitão from "/src/assets/images/itachitão.jpeg";
import paroquiaitarema from "/src/assets/images/paroquiaitarema.avif";
import IgrejaAlmofala from "/src/assets/images/IgrejaAlmofala.jpg";

export function Home() {
  // Inicializar AOS
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  // Estado para o carrossel e seções expansíveis
  const staticImage = {
    src: Itacover,
    alt: "Imagem de capa do Museu Itaa",
  };

  const carouselImages = [
    {
      src: sportIta,
      alt: "Imagem do Museu Itaa",
      path: "https://www.instagram.com/reel/DOjvgJOEYoa/",
      caption: "final Compeonato futsal",
    },
    {
      src: itaord,
      alt: "Instagram com notícias da cidade",
      path: "https://www.instagram.com/itaremaordinariaof/reels/",
      caption: "Notícias da Cidade",
    },
    {
      src: maracá,
      path: "https://www.instagram.com/reel/DOW4OtjkWSc/",
      alt: "Dia 7 de Setembro",
      caption: "Dia 7 de Setembro",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuseumExpanded, setIsMuseumExpanded] = useState(false);
  const [isHistoryExpanded, setIsHistoryExpanded] = useState(false); // Novo estado para a história

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
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
      <div
        className="w-full mt-20 justify-center flex rounded-lg shadow-lg overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <img
          src={staticImage.src}
          alt={staticImage.alt}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Carrossel */}
      <div className="w-full bg-gray-200 flex justify-center items-center  rounded-lg shadow-lg">
        <div
          className="max-w-100 mx-auto mt-20 relative z-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-3xl font-medium text-gray-800 text-center mb-4">
            Notícias Atuais
          </h2>
          <div className="relative w-full max-w-5xl mx-auto mt-0 overflow-hidden mb-10 rounded-lg shadow-lg">
            <button
              onClick={goToPrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-amber-50 rounded-full text-black text-3xl z-10 hover:text-amber-300"
              aria-label="Imagem anterior"
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
                  className="w-full flex-shrink-0 relative"
                  target={image.path.startsWith("http") ? "_blank" : undefined}
                  rel={image.path.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  {index === currentIndex && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                      {image.caption}
                    </div>
                  )}
                </Link>
              ))}
            </div>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-amber-50 rounded-full text-black text-3xl z-10 hover:text-amber-300"
              aria-label="Próxima imagem"
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
                  aria-label={`Ir para imagem ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Programação */}
      <div
        className="bg-gray-100 py-12 px-5 md:px-10 m-4 rounded-lg shadow-lg"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-medium text-gray-800 text-left mb-8">
            Programação do Museu local
          </h2>
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Exposições Atuais
              </h3>
              <p className="text-gray-600 mb-4">
                Confira as exposições em destaque que exploram a cultura e história
                de Itarema. Venha visitar e mergulhe na arte e nas tradições locais.
              </p>
              <Link
                to="/museu/acervoonline"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition"
              >
                Ver Exposições
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Eventos Futuros
              </h3>
              <p className="text-gray-600 mb-4">
                Participe dos próximos eventos culturais que celebram a diversidade
                de Itarema. Fique atento às datas e participe!
              </p>
              <Link
                to="/programacao/eventos"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition"
              >
                Ver Eventos
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Destaques Culturais */}
      <div
        className="bg-gray-100 max-w-6xl py-12 md:px-10 mx-auto flex flex-col justify-center items-center mt-10 px-5 mb-10 rounded-lg shadow-lg"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <h2 className="text-3xl font-medium text-gray-800 text-left mb-8 mt-8">
          Destaques Culturais
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 mb-8 gap-6">
          {[
            {
              title: "Raízes de Itarema",
              description: "Os 70 anos da paróquia de Itarema.",
              image: paroquiaitarema,
              path: "https://youtu.be/XtHA4LkxcOI?si=gm_oJ38DlM90Iqu2",
            },
            {
              title: "Festival da Cultura",
              description: "Cobertura do festival cultural de Itachitão de 2025.",
              image: itachitão,
              path: "https://www.instagram.com/p/DLsnhGCpmAK/",
            },
            {
              title: "Religião Católica de itarema (História)",
              description: "Conheça a Historia do Início da Religião Católica de Itarema.",
              image: IgrejaAlmofala,
              path: "https://youtu.be/yzANlfe1TVs?si=bDl8i7p15K0eQSJe",
            },
          ].map((highlight, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={highlight.image}
                alt={highlight.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 mb-4">{highlight.description}</p>
                {highlight.path.startsWith("http") ? (
                  <a
                    href={highlight.path}
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Assistir
                  </a>
                ) : (
                  <Link
                    to={highlight.path}
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition"
                  >
                    Assistir
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seção de Sobre a Cidade */}
      <div
        className="bg-gray-100 py-12 px-5 md:px-10 m-4 rounded-lg shadow-lg"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl text-gray-800 text-left font-sans font-medium mb-8">
            Sobre o Primeiro Nome da Cidade
          </h2>
          <div className="text-white text-center font-medium bg-blue-400 p-6 rounded-lg shadow-md">
            <p className="mb-4">
              {isHistoryExpanded ? (
                <>
                  A cidade de Itarema é uma alusão ao nome dado pelos índios por causa
                  de uma pedra com forma de obelisco em alto mar que só era visível em
                  maré baixa. Este vem do tupi ita (pedra), rema (cheiro agradável) e
                  significa pedra de cheiro agradável ou pedra cheirosa.
                  Sua denominação original era Tanque do Meio e, desde 1937, Itarema.
                  As terras às margens do rio Aracatiaçu eram habitadas pelos índios 
                  Tremembé, antes da chegada das entradas de franceses e portugueses,
                  bem como das missões religiosas portugueses que tinham como intuito a
                  catequização dos indígenas.
                </>
              ) : (
                <>
                  A cidade de Itarema é uma alusão ao nome dado pelos índios por causa
                  de uma pedra com forma de obelisco em alto mar que só era visível em
                  maré baixa...{" "}
                  <button
                    onClick={() => setIsHistoryExpanded(true)}
                    className="text-amber-300 hover:text-amber-200 underline"
                  >
                    Continuar Lendo
                  </button>
                </>
              )}
            </p>
            {isHistoryExpanded && (
              <button
                onClick={() => setIsHistoryExpanded(false)}
                className="text-amber-300 hover:text-amber-200 underline px-3 mb-4"
              >
                Recolher
              </button>
            )}
            <a
              href="https://itaremaprevi.com.br/institucional/conheca-a-cidade/"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Saiba Mais sobre a História
            </a>
          </div>
        </div>
      </div>

      {/* Seção de Sobre o Museu */}
      <div
        className="bg-gray-100 py-12 px-5 md:px-10 m-4 rounded-lg shadow-lg"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl text-gray-800 text-left font-sans font-medium mb-8">
            Sobre o Museu Vicente de Paula Rios
          </h2>
          <div className="text-white text-center font-medium bg-blue-400 p-6 rounded-lg shadow-md">
            <p className="mb-4">
              {isMuseumExpanded ? (
                <>
                  O Museu Vicente de Paula Rios, localizado no coração de Itarema, é um espaço dedicado à preservação e divulgação da rica história e cultura local. Fundado em 1990, o museu abriga uma coleção diversificada que inclui artefatos indígenas, objetos históricos e exposições que retratam a evolução da cidade, desde suas raízes indígenas até os dias atuais. O nome do museu homenageia Vicente de Paula Rios, uma figura ilustre da região, conhecida por suas contribuições à educação e à cultura. Nosso objetivo é proporcionar uma experiência educativa e imersiva, conectando visitantes com as tradições e histórias de Itarema.
                </>
              ) : (
                <>
                  O Museu Vicente de Paula Rios, localizado no coração de Itarema, é um espaço dedicado à preservação e divulgação da rica história e cultura local. Fundado em 1990, o museu abriga uma coleção diversificada que inclui artefatos indígenas, objetos históricos e exposições que retratam a evolução da cidade...{" "}
                  <button
                    onClick={() => setIsMuseumExpanded(true)}
                    className="text-amber-300 hover:text-amber-200 underline"
                  >
                    Continuar Lendo
                  </button>
                </>
              )}
            </p>
            {isMuseumExpanded && (
              <button
                onClick={() => setIsMuseumExpanded(false)}
                className="text-amber-300 hover:text-amber-200 px-3 underline mb-4"
              >
                Recolher
              </button>
            )}
            <a
              href="https://www.guiadasartes.com.br/ceara/itarema/museu-vicente-de-paula-rios"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Saiba Mais sobre o Museu
            </a>
          </div>
        </div>
      </div>

      {/* Seção de Newsletter */}
      <div
        className="py-10 px-5 w-full justify-center flex md:px-10 m-4 "
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-medium text-gray-800 text-left mb-4">
            Fique por Dentro
          </h2>
          <p className="text-gray-600 mb-6">
            Inscreva-se para receber novidades sobre eventos e exposições do Museu
            Itaa.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-500 transition"
            >
              Inscrever-se
            </button>
          </form>
        </div>
      </div>

      {/* Seção de Localização */}
      <div
        className="bg-gray-100 flex flex-col w-full items-center justify-center mt-5 "
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.633081210379!2d-39.916420326034746!3d-2.921409997054933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c1ffbe3035b6f5%3A0x9fd0b9522cd9a977!2sCentro%20Hist%C3%B3rico%20e%20Cultura%20Museu%20Vicente%20de%20Paula%20Rios!5e0!3m2!1sen!2sbr!4v1727204147384!5m2!1sen!2sbr"
          width="100%"
          height="110"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="rounded-lg"
        ></iframe>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Rua Principal, 123, Centro - Itarema, CE
          </p>
          <p className="text-gray-600">
            Aberto de Terça a Domingo, das 9h às 17h
          </p>
          <Link
            to="https://www.google.com/maps/place/Centro+Hist%C3%B3rico+e+Cultura+Museu+Vicente+de+Paula+Rios/@-2.9213997,-39.9164549,17z/data=!4m6!3m5!1s0x7c1ffbe3035b6f5:0x9fd0b9522cd9a977!8m2!3d-2.92141!4d-39.9138454!16s%2Fg%2F11krkw1g6_?authuser=0&entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white mb-5 px-4 py-2 rounded-lg hover:bg-blue-500 transition mt-4"
          >
            Abrir no Google Maps
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="bg-[#116cc2] text-white py-8 px-5 w-full mt-2"
        data-aos="fade-up"
        data-aos-delay="900"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <Link to="/" className="hover:text-amber-300">
              Home
            </Link>
            <Link to="/programacao" className="hover:text-amber-300">
              Programação
            </Link>
            <Link to="/visite" className="hover:text-amber-300">
              Visite
            </Link>
            <Link to="/apoie" className="hover:text-amber-300">
              Apoie
            </Link>
          </div>
          <div className="text-center md:text-left">
            <p className="mb-2">Contato: museuitaa@itarema.gov.br</p>
            <p>Rua Principal, 123, Centro - Itarema, CE</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.itarema.ce.gov.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300"
            >
              Prefeitura Municipal
            </a>
            <a
              href="https://www.instagram.com/itaremaordinariaof/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300"
            >
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