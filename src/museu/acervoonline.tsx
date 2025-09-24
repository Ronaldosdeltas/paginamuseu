import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Método alternativo - usando require (se estiver usando CommonJS)

import colheres from "/src/assets/images/colheres.png";
//import maisarte from "/src/assets/images/maisarte.png";
//import vasilhas from "/src/assets/images/vasilhas.png";
//import artefatos from "/src/assets/images/artefatos.png";
//import Artefato5 from "/src/assets/images/Artefato5.png"; 
import Itacover from "/src/assets/images/Itacover.jpg";




// Importe mais imagens conforme necessário

// Tipos para os itens do acervo
interface AcervoItem {
  id: number;
  title: string;
  description: string;
  fullDescription: string; // Para o modal
  image: any; // URL da imagem
  category: string; // Ex.: "Artefatos", "Documentos", "Pinturas"
  date: string; // Ex.: "Século XIX"
}

export function AcervoOnline() {
  // Inicializar AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  // Dados do acervo (adicione mais itens com suas imagens reais)
  const acervoItems: AcervoItem[] = [
    {
      id: 1,
      title: "Pedra Cheirosa - Artefato Indígena",
      description: "Réplica da lendária pedra que inspirou o nome de Itarema.",
      fullDescription: "Descoberta em maré baixa, esta pedra simboliza as raízes tupi da cidade. Feita de basalto com inscrições antigas.",
      image: colheres, // Substitua pela sua imagem real
      category: "Artefatos",
      date: "Pré-colombiano",
    },
    /*
    {
      id: 2,
      title: "Documento de Fundação",
      description: "Registro histórico da fundação de Itarema em 1930.",
      fullDescription: "Assinado pelo prefeito local, este pergaminho detalha os primeiros assentamentos e tradições pesqueiras.",
      image: maisarte, // Substitua pela sua imagem real
      category: "Documentos",
      date: "1930",
    },
    {
      id: 3,
      title: "Pintura de Pescadores",
      description: "Obra local retratando a vida cotidiana no litoral cearense.",
      fullDescription: "Pintada por artista de Itarema, captura a essência da cultura pesqueira com cores vibrantes e detalhes autênticos.",
      image: vasilhas, // Substitua pela sua imagem real
      category: "Pinturas",
      date: "Século XX",
    },
    
    {
      id: 4,
      title: "Ferramentas Ancestrais",
      description: "Conjunto de ferramentas usadas pelos índios Tremembé.",
      fullDescription: "Inclui redes de pesca e cerâmicas, preservando técnicas tradicionais de sobrevivência.",
      image: artefatos, // Adicione mais
      category: "Artefatos",
      date: "Século XVIII",
    },
     /*
      {
      id: 5,
      title: "Ferramentas Ancestrais",
      description: "Conjunto de ferramentas usadas pelos índios Tremembé.",
      fullDescription: "Inclui redes de pesca e cerâmicas, preservando técnicas tradicionais de sobrevivência.",
      image: Artefato5, // Adicione mais
      category: "Artefatos",
      date: "Século XVIII",
    },
    */
    // Adicione mais itens aqui com suas imagens...
  ];

  const [selectedItem, setSelectedItem] = useState<AcervoItem | null>(null); // Para o modal
  const [filterCategory, setFilterCategory] = useState<string>("Todas"); // Filtro
  const [filteredItems, setFilteredItems] = useState<AcervoItem[]>(acervoItems);

  // Aplicar filtro
  useEffect(() => {
    if (filterCategory === "Todas") {
      setFilteredItems(acervoItems);
    } else {
      setFilteredItems(acervoItems.filter(item => item.category === filterCategory));
    }
  }, [filterCategory]);

  // Fechar modal
  const closeModal = () => setSelectedItem(null);

  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="w-full mt-20 justify-center flex rounded-lg shadow-lg overflow-hidden relative" data-aos="fade-up">
        <img src= {Itacover} alt="Capa do Acervo Online" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center  bg-slate-800 text-white bg-opacity-40">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Acervo Online do Museu Itaa</h1>
            <p className="text-lg mb-6">Explore a rica coleção cultural de Itarema de forma digital</p>
            <Link to="/" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition">
              Voltar à Home
            </Link>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="max-w-6xl mx-auto mt-10 px-5" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-3xl font-medium text-gray-800 text-center mb-8">Navegue pelo Acervo</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["Todas", "Artefatos", "Documentos", "Pinturas"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-lg transition ${
                filterCategory === cat
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Galeria */}
      <div className="max-w-6xl mx-auto px-5 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
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
                <div className="absolute inset-0  hover:bg-opacity-20 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 opacity-0 hover:opacity-100 transition-opacity">{item.description}</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-2 text-sm">{item.category} - {item.date}</p>
                <button
                  onClick={() => setSelectedItem(item)}
                  className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-500 transition"
                >
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Detalhes */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
          <div
            className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} className="float-right text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
            <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-4">{selectedItem.title}</h2>
            <p className="text-gray-700 mb-4">{selectedItem.fullDescription}</p>
            <p className="text-sm text-gray-500 mb-4">Categoria: {selectedItem.category} | Data: {selectedItem.date}</p>
            <button
              onClick={closeModal}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500 transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Footer - Copie da Home */}
      <footer className="bg-[#116cc2] text-white py-8 px-5 w-full mt-10" data-aos="fade-up" data-aos-delay="500">
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
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">Instagram</a>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-4 text-center text-sm">
          &copy; 2025 Museu Itaa. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}