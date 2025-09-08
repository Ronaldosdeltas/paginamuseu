import { useRef, useState, useEffect,} from "react";
import { AiOutlineRight, AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import { Header } from "../header";

export function HeaderMenuMobi() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleAcervo = () => setIsAcervoOpen(!isAcervoOpen);
  const toggleCultura = () => setIsCulturaOpen(!isCulturaOpen);
  const toggleExposicoes = () => setIsExposicoesOpen(!isExposicoesOpen);
  const toggleVisite = () => setIsVisiteOpen(!isVisiteOpen);
  const toggleApoie = () => setIsApoieOpen(!isApoieOpen);

  const navigate = useNavigate();

  const handleMobileNav = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };




  // Fecha o menu ao clicar fora
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
      if (
  isMobileMenuOpen &&
  !(event.target instanceof Element && event.target.closest(".mobile-menu"))
) {
  setIsMobileMenuOpen(false);
}
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-gray-900 w-full py-6 px-5 relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo e Título à esquerda */}
        <Link to="/" className="text-amber-50 text-2xl font-bold hover:text-amber-300 flex items-center">
          <img src="/src/assets/images/Brasao_itarema.png" alt="Brasão de Itarema" className="mr-4 w-10 h-10 object-contain" />
          Itarema Cultura
        </Link>

        {/* Ícone de hambúrguer à direita */}
        <button onClick={toggleMobileMenu} className="text-amber-50 text-2xl md:hidden">
          <AiOutlineMenu />
        </button>

        {/* Menu lateral para mobile */}
        <div
          className={`fixed top-0 left-0 w-64 bg-gray-800 h-full transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 mobile-menu`}
        >
          <div className="p-5">
            <button onClick={toggleMobileMenu} className="text-amber-50 text-2xl mb-4">
              <AiOutlineMenu />
            </button>
            <nav className="flex flex-col space-y-4">
              <div className="relative" ref={acervoRef}>
                <button
                  onClick={toggleAcervo}
                  className="text-amber-50 text-lg font-semibold hover:text-amber-300 focus:outline-none flex items-center"
                >
                  Museu
                  {isAcervoOpen ? <AiOutlineDown className="ml-1 text-lg" /> : <AiOutlineRight className="ml-1 text-lg" />}
                </button>
                {isAcervoOpen && (
                  <div className="mt-2 space-y-2">
                   <button
                className="block px-4 py-2 text-amber-50 hover:bg-gray-700 text-left w-full"
                onClick={() => handleMobileNav("/acervo/pesquisa")}
              >
                Pesquisa e Referência
              </button>
                    <button
                className="block px-4 py-2 text-amber-50 hover:bg-gray-700 text-left w-full"
                onClick={() => handleMobileNav("/acervoonline")}
              >
                Acervo Online
              </button>
                    <button
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                      onClick={() => handleMobileNav("/acervoonline")}                    >
                      Boletins do Acervo
                    </button>
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
                  <div className="mt-2 space-y-2">
                    <button
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                      onClick={() => handleMobileNav("/culturaindigena")}
                    >
                      História Indígena
                    </button>
                    <button
                      
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                      onClick={() => handleMobileNav("/tradicao")}
                    >
                      Tradições
                    </button>
                    <button
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                      onClick={() => handleMobileNav("/arteindigena")}
                    >
                      Arte Indígena
                    </button>
                  </div>
                )}
              </div>
              <div className="relative" ref={exposicoesRef}>
                <button
                  onClick={toggleExposicoes}
                  className="text-amber-50 text-lg font-semibold hover:text-amber-300 focus:outline-none flex items-center"
                >
                 Programação
                  {isExposicoesOpen ? <AiOutlineDown className="ml-1 text-lg" /> : <AiOutlineRight className="ml-1 text-lg" />}
                </button>
                {isExposicoesOpen && (
                  <div className="mt-2 space-y-2">
                    <Link
                      to="/exposicoes/atual"
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Exposição Atual
                    </Link>
                    <Link
                      to="/exposicoes/passadas"
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Exposições Passadas
                    </Link>
                    <Link
                      to="/exposicoes/eventos"
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                      onClick={() => setIsMobileMenuOpen(false)}
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
                  <div className="mt-2 space-y-2">
                    <Link
                      to="/visite/horarios"
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Horários
                    </Link>
                    <Link
                      to="/visite/localizacao"
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Localização
                    </Link>
                    <Link
                      to="/visite/tickets"
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                      onClick={() => setIsMobileMenuOpen(false)}
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
                  <div className="mt-2 space-y-2">
                    <Link
                      to="/apoie/doacao"
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Faça uma Doação
                    </Link>
                    <Link
                      to="/apoie/parcerias"
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Parcerias
                    </Link>
                    <Link
                      to="/apoie/voluntariado"
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Voluntariado
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}