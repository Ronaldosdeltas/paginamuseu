import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";

export function Header() {
  const [isAcervoOpen, setIsAcervoOpen] = useState(false);
  const [isCulturaOpen, setIsCulturaOpen] = useState(false);
  const [isExposicoesOpen, setIsExposicoesOpen] = useState(false);
  const [isVisiteOpen, setIsVisiteOpen] = useState(false);
  const [isApoieOpen, setIsApoieOpen] = useState(false);

  const acervoRef = useRef<HTMLDivElement>(null);
  const culturaRef = useRef<HTMLDivElement>(null);
  const exposicoesRef = useRef<HTMLDivElement>(null);
  const visiteRef = useRef<HTMLDivElement>(null);
  const apoieRef = useRef<HTMLDivElement>(null);

  const toggleAcervo = () => setIsAcervoOpen(!isAcervoOpen);
  const toggleCultura = () => setIsCulturaOpen(!isCulturaOpen);
  const toggleExposicoes = () => setIsExposicoesOpen(!isExposicoesOpen);
  const toggleVisite = () => setIsVisiteOpen(!isVisiteOpen);
  const toggleApoie = () => setIsApoieOpen(!isApoieOpen);

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (acervoRef.current && !acervoRef.current.contains(event.target as Node)) {
        setIsAcervoOpen(false);
      }
      if (culturaRef.current && !culturaRef.current.contains(event.target as Node)) {
        setIsCulturaOpen(false);
      }
      if (exposicoesRef.current && !exposicoesRef.current.contains(event.target as Node)) {
        setIsExposicoesOpen(false);
      }
      if (visiteRef.current && !visiteRef.current.contains(event.target as Node)) {
        setIsVisiteOpen(false);
      }
      if (apoieRef.current && !apoieRef.current.contains(event.target as Node)) {
        setIsApoieOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-gray-900 w-full py-6 flex items-center justify-between px-5 relative z-50">
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-amber-50 text-2xl font-bold hover:text-amber-300">
          Museu das Culturas Indígenas
        </Link>
        <nav className="flex space-x-6">
          <div className="relative" ref={acervoRef}>
            <button
              onClick={toggleAcervo}
              className="text-amber-50 text-lg font-semibold hover:text-amber-300 focus:outline-none flex items-center"
            >
              Acervo
              {isAcervoOpen ? <AiOutlineDown className="ml-1 text-lg" /> : < AiOutlineRight className="ml-1 text-lg" />}
            </button>
            {isAcervoOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
                <Link
                  to="/acervo/pesquisa"
                  className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                  onClick={() => setIsAcervoOpen(false)}
                >
                  Pesquisa e Referência
                </Link>
                <Link
                  to="/acervo/online"
                  className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                  onClick={() => setIsAcervoOpen(false)}
                >
                  Acervo Online
                </Link>
                <Link
                  to="/acervo/boletins"
                  className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                  onClick={() => setIsAcervoOpen(false)}
                >
                  Boletins do Acervo
                </Link>
              </div>
            )}
          </div>
          <div className="relative" ref={culturaRef}>
            <button
              onClick={toggleCultura}
              className="text-amber-50 text-lg font-semibold hover:text-amber-300 focus:outline-none flex items-center"
            >
              Cultura Indígena
              {isCulturaOpen ? <AiOutlineDown className="ml-1 text-lg" /> : <AiOutlineRight className="ml-1 text-lg" />}
            </button>
            {isCulturaOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
                <Link
                  to="/cultura/historia"
                  className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                  onClick={() => setIsCulturaOpen(false)}
                >
                  História Indígena
                </Link>
                <Link
                  to="/cultura/tradicoes"
                  className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                  onClick={() => setIsCulturaOpen(false)}
                >
                  Tradições
                </Link>
                <Link
                  to="/cultura/arte"
                  className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                  onClick={() => setIsCulturaOpen(false)}
                >
                  Arte Indígena
                </Link>
              </div>
            )}
          </div>
          <div className="relative" ref={exposicoesRef}>
            <button
              onClick={toggleExposicoes}
              className="text-amber-50 text-lg font-semibold hover:text-amber-300 focus:outline-none flex items-center"
            >
              Exposições e Programação
              {isExposicoesOpen ? <AiOutlineDown className="ml-1 text-lg" /> : <AiOutlineRight className="ml-1 text-lg" />}
            </button>
            {isExposicoesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
                <Link
                  to="/exposicoes/atual"
                  className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                  onClick={() => setIsExposicoesOpen(false)}
                >
                  Exposição Atual
                </Link>
                <Link
                  to="/exposicoes/passadas"
                  className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                  onClick={() => setIsExposicoesOpen(false)}
                >
                  Exposições Passadas
                </Link>
                <Link
                  to="/exposicoes/eventos"
                  className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                  onClick={() => setIsExposicoesOpen(false)}
                >
                  Eventos Futuros
                </Link>
              </div>
            )}
          </div>
          <div className="relative" ref={visiteRef}>
            <button
              onClick={toggleVisite}
              className="text-amber-50 text-lg font-semibold hover:text-amber-300 focus:outline-none flex items-center"
            >
              Visite
              {isVisiteOpen ? <AiOutlineDown className="ml-1 text-lg" /> : <AiOutlineRight className="ml-1 text-lg" />}
            </button>
            {isVisiteOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
                <Link
                  to="/visite/horarios"
                  className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                  onClick={() => setIsVisiteOpen(false)}
                >
                  Horários
                </Link>
                <Link
                  to="/visite/localizacao"
                  className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                  onClick={() => setIsVisiteOpen(false)}
                >
                  Localização
                </Link>
                <Link
                  to="/visite/tickets"
                  className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                  onClick={() => setIsVisiteOpen(false)}
                >
                  Compra de Tickets
                </Link>
              </div>
            )}
          </div>
          <div className="relative" ref={apoieRef}>
            <button
              onClick={toggleApoie}
              className="text-amber-50 text-lg font-semibold hover:text-amber-300 focus:outline-none flex items-center"
            >
              Apoie
              {isApoieOpen ? <AiOutlineDown className="ml-1 text-lg" /> : <AiOutlineRight className="ml-1 text-lg" />}
            </button>
            {isApoieOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
                <Link
                  to="/apoie/doacao"
                  className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                  onClick={() => setIsApoieOpen(false)}
                >
                  Faça uma Doação
                </Link>
                <Link
                  to="/apoie/parcerias"
                  className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                  onClick={() => setIsApoieOpen(false)}
                >
                  Parcerias
                </Link>
                <Link
                  to="/apoie/voluntariado"
                  className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                  onClick={() => setIsApoieOpen(false)}
                >
                  Voluntariado
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}