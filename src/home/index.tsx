
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import Museuitaa from "/src/assets/images/museuitaa.jpeg";

export function Home() {
  // Imagem estática no topo
  const staticImage = {
    src: Museuitaa,
    alt: "Imagem de capa do Museu Itaa",
  };

  // Imagens para o carrossel
  const carouselImages = [
    {
      src: Museuitaa,
      alt: "Imagem do Museu Itaa",
      path: "/visite/horarios",
      caption: "Horários",
    },
    {
      src: "/src/assets/images/localizacao.jpg", // Substitua pelo caminho da sua imagem
      alt: "Imagem de Localização",
      path: "/visite/localizacao",
      caption: "Localização",
    },
    {
      src: "/src/assets/images/tickets.jpg", // Substitua pelo caminho da sua imagem
      path: "/visite/tickets",
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
    <div>
      {/* Imagem estática no topo */}
      <div className="w-full">
        <img
          src={staticImage.src}
          alt={staticImage.alt}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Carrossel abaixo da imagem estática */}
      <div className="relative w-full max-w-5xl mx-auto mt-10 overflow-hidden mb-10">
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
  );
}