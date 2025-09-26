import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Imagens do acervo
import Artefato1 from "/src/assets/images/Artefato1.png";
import Artefato2 from "/src/assets/images/Artefato2.png";
import Artefato3 from "/src/assets/images/Artefato3.png";
import Artefato4 from "/src/assets/images/Artefato4.png";
import Artefato5 from "/src/assets/images/Artefato5.png"; 
import Artefato6 from "/src/assets/images/Artefato6.png";
import Artefato7 from "/src/assets/images/Artefato7.png";
import Artefato8 from "/src/assets/images/Artefato8.png";
import Artefato9 from "/src/assets/images/Artefato9.png";
import Artefato10 from "/src/assets/images/Artefato10.png";
import Artefato11 from "/src/assets/images/Artefato11.png";
import Artefato12 from "/src/assets/images/Artefato12.png";
import Itacover from "/src/assets/images/Itacover.jpg";



// Tipos para os itens do acervo
interface AcervoItem {
  id: number;
  title: string;
  description: string;
  fullDescription: string; 
  image: any; 
  category: string; 
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

  const acervoItems: AcervoItem[] = [
  {
    id: 1,
    title: "Talheres Indígenas",
    description: "Conjunto de utensílios esculpidos à mão pelo povo Tremembé.",
    fullDescription: "Utensílios produzidos em madeira leve e, em alguns casos, ossos de peixe, revelando técnicas de entalhe transmitidas por gerações. As peças apresentam marcas de uso cotidiano e ritual, associadas à partilha de alimentos e à vida comunitária no litoral.",
    image: Artefato1,
    category: "Artefatos",
  },
  {
    id: 2,
    title: "Vasilhas Cerimoniais",
    description: "Vasilhas de barro usadas em rituais de partilha e oferenda.",
    fullDescription: "Modeladas à mão e queimadas em fornos rudimentares, as vasilhas exibem engobos e grafismos inspirados na natureza costeira. Serviam para armazenar água, mingaus e tinturas durante celebrações comunitárias e momentos de passagem.",
    image: Artefato2,
    category: "Artefatos",
  },
  {
    id: 3,
    title: "Colares de Conchas e bolsas de palha",
    description: "Adornos e bolsas trançadas com materiais do litoral cearense.",
    fullDescription: "Colares montados com conchas recolhidas nas marés e fibras vegetais, combinando estética e significado simbólico. As bolsas, tecidas em palha de carnaúba, utilizam pontos tradicionais e acompanhavam o dia a dia em feiras, pesca e rituais.",
    image: Artefato3,
    category: "Artefatos",
  },
  {
    id: 4,
    title: "Potes de barro",
    description: "Recipientes cerâmicos para armazenar água, grãos e temperos.",
    fullDescription: "Potes moldados por roletes e alisados com seixos, com queima em fogueiras abertas para maior resistência. Versáteis e duráveis, eram usados no preparo de alimentos e na conservação, adequando-se ao clima quente do litoral.",
    image: Artefato4,
    category: "Artefatos",
  },
  {
    id: 5,
    title: "cabaças naturais e potes de barro",
    description: "Conjunto que reúne cabaças secas e cerâmicas utilitárias.",
    fullDescription: "As cabaças, ocas e polidas, funcionavam como cuias, frascos e até instrumentos sonoros; os potes, feitos com argila local, complementavam o conjunto doméstico. A combinação de materiais orgânicos e minerais revela soluções sustentáveis do cotidiano.",
    image: Artefato5,
    category: "Artefatos",
  },
  {
    id: 6,
    title: "Moedas Coloniais antigas",
    description: "Coleção de moedas circulantes no período colonial brasileiro.",
    fullDescription: "Estas moedas, cunhadas em metais como prata e cobre, testemunham a história econômica do Brasil Colônia. Marcadas com símbolos da Coroa Portuguesa, eram utilizadas em transações comerciais tanto nas cidades quanto no interior. Cada peça conta uma parte da narrativa da circulação monetária e da vida cotidiana nos séculos passados.",
    image: Artefato6,
    category: "Dinheiros antigos",
  },
  {
    id: 7,
    title: "Moedas e medalhas antigas",
    description: "Conjunto diversificado de moedas históricas e medalhas comemorativas.",
    fullDescription: "Este acervo reúne peças numismáticas de diferentes períodos, incluindo moedas que foram meio de troca e medalhas cunhadas para celebrar eventos importantes. As medalhas, muitas vezes em bronze ou prata, comemoram feitos históricos, personalidades ou acontecimentos culturais, enquanto as moedas refletem a economia de sua época.",
    image: Artefato7,
    category: "Dinheiros antigos",
  },
  {
    id: 8,
    title: "Instrumentos musicais antigos",
    description: "Teclado e sanfona antigos que representam a evolução da música tradicional.",
    fullDescription: "Este conjunto apresenta dois instrumentos emblemáticos: um teclado antigo, com teclas em marfim e ébano, que era utilizado em salões e igrejas para execução de música erudita; e uma sanfona (acordeão) tradicional, com seu fole característico e palhetas metálicas, instrumento fundamental na música popular e folclórica. Juntos, representam a diversidade musical entre a cultura urbana e rural dos séculos passados.",
    image: Artefato8,
    category: "Instrumentos e maquinas",
  },
  {
    id: 9,
    title: "Vitrola antiga",
    description: "Aparelho de som mecânico para reprodução de discos de vinil.",
    fullDescription: "Esta vitrola, com seu amplificador acústico característico e agulha de aço, era o centro de entretenimento doméstico no início do século XX. Operada manualmente com uma manivela, permitia que as famílias ouvissem músicas, discursos e gravações históricas através de seus discos de 78 RPM, representando uma revolução no acesso à cultura sonora.",
    image: Artefato9,
    category: "Instrumentos e maquinas",
  },
  {
    id: 10,
    title: "Impressora de datilografia e TV antigas",
    description: "Conjunto de equipamentos tecnológicos pioneiros do século XX.",
    fullDescription: "A impressora de datilografia, precursora das impressoras modernas, permitia a produção em série de documentos com qualidade tipográfica. Já a televisão antiga, com sua tela em preto e branco e válvulas a vácuo, trouxe pela primeira vez imagens em movimento para dentro dos lares, transformando radicalmente a comunicação e o entretenimento familiar.",
    image: Artefato10,
    category: "Instrumentos e maquinas",
  },
  {
    id: 11,
    title: "Máquina de escrever antiga",
    description: "Instrumento mecânico para escrita datilográfica, predecessor do computador.",
    fullDescription: "Com seu teclado mecânico característico e sistema de haste com tipos, a máquina de escrever padronizou a escrita comercial e literária por décadas. Cada tecla acionava uma alavanca que impressionava o papel através de uma fita entintada, criando documentos permanentes e legíveis que aceleraram a burocracia e a produção textual em escritórios e redações.",
    image: Artefato11,
    category: "Instrumentos e maquinas",
  },
  {
    id: 12,
    title: "Cédulas antigas",
    description: "Papel-moeda histórico de diferentes períodos e valores.",
    fullDescription: "Estas cédulas, impressas com técnicas de segurança primitivas como marcas d'água e relevos, representam momentos cruciais da história financeira nacional. Desde os primeiros mil-réis até as modernizações do cruzeiro, cada nota carrega elementos artísticos de sua época, retratando figuras históricas, alegorias patrióticas e símbolos do desenvolvimento econômico do país.",
    image: Artefato12,
    category: "Dinheiros antigos",
  },
  
  
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
        <div className="absolute inset-0 flex items-center justify-center  bg-slate-700 text-white bg-opacity-40">
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
          {["Todas", "Artefatos", "Dinheiros antigos", "Instrumentos e maquinas"].map((cat) => (
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
                <p className="text-gray-600 mb-2 text-sm">{item.category}</p>
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
            <p className="text-sm text-gray-500 mb-4">Categoria: {selectedItem.category}</p>
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
           <Link to="/programacao/eventos" className="hover:text-amber-300">Programação</Link>
            <Link to="/visite/horarios" className="hover:text-amber-300">Visite</Link>
            <Link to="/apoie/doacao" className="hover:text-amber-300">Apoie</Link>
            <Link to="/museu/acervoonline" className="hover:text-amber-300">Acervo Online</Link>
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