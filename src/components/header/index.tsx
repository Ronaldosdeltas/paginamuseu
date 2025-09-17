import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { AiOutlineRight, AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import Brasaoitarema from "../../assets/images/Brasaoitarema.png";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAcervoOpen, setIsAcervoOpen] = useState(false);
  const [isCulturaOpen, setIsCulturaOpen] = useState(false);
  const [isExposicoesOpen, setIsExposicoesOpen] = useState(false);
  const [isVisiteOpen, setIsVisiteOpen] = useState(false);
  const [isApoieOpen, setIsApoieOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Novo estado para detectar scroll

  const acervoRef = useRef<HTMLDivElement>(null);
  const culturaRef = useRef<HTMLDivElement>(null);
  const exposicoesRef = useRef<HTMLDivElement>(null);
  const visiteRef = useRef<HTMLDivElement>(null);
  const apoieRef = useRef<HTMLDivElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null); // Ref para o botão de abrir o menu

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleAcervo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAcervoOpen(!isAcervoOpen);
  };
  const toggleCultura = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsCulturaOpen(!isCulturaOpen);
  };
  const toggleExposicoes = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExposicoesOpen(!isExposicoesOpen);
  };
  const toggleVisite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisiteOpen(!isVisiteOpen);
  };
  const toggleApoie = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsApoieOpen(!isApoieOpen);
  };

  const navigate = useNavigate();

  const handleMobileNav = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  // Fecha o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Ignora cliques no botão de abrir o menu
      if (menuToggleRef.current && menuToggleRef.current.contains(event.target as Node)) {
        return;
      }

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

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Detecta o scroll da página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
     <header
      className={`bg-[#116cc2] flex flex-col w-full items-center justify-center py-6 px-5 fixed top-0 left-0 z-50 shadow-md transition-all duration-300 ${
        isScrolled ? "bg-opacity-5" : "bg-opacity-100"
      }`}
    >
      <div className="flex items-center justify-between w-full px-3  ">

        {/* Logo e Título à esquerda */}
        <Link
          to="/"
          className="text-amber-50 text-2xl font-bold hover:text-amber-300 flex items-center"
        >
          <img
            src={Brasaoitarema}
            alt="Brasão de Itarema"
            className="mr-4 w-10 h-10 object-contain transform hover:rotate-360 transition-transform duration-500"
          />
          Itarema Cultura
        </Link>

        {/* Ícone de barra à direita */}
        <button
          ref={menuToggleRef} // Adiciona a ref ao botão de abrir o menu
          onClick={toggleMobileMenu}
          className="text-amber-50 text-2xl md:hidden px-1"
        >
          <AiOutlineMenu />
        </button>

        {/* Menu lateral para mobile */}
        <div
          className={`fixed top-0 left-0 w-64 bg-[#116cc2] h-full transform ${
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
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Navegando para /museu/pesquisaref");
                        handleMobileNav("/museu/pesquisaref");
                      }}
                    >
                      Pesquisa e Referência
                    </button>
                    <button
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700 text-left w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Navegando para /museu/acervoonline");
                        handleMobileNav("/museu/acervoonline");
                      }}
                    >
                      Acervo Online
                    </button>
                    <button
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700 text-left w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Navegando para /museu/boletins");
                        handleMobileNav("/museu/boletins");
                      }}
                    >
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
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700 text-left w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Navegando para /culturaindigena/historiaindigena");
                        handleMobileNav("/culturaindigena/historiaindigena");
                      }}
                    >
                      História Indígena
                    </button>
                    <button
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700 text-left w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Navegando para /culturaindigena/tradicao");
                        handleMobileNav("/culturaindigena/tradicao");
                      }}
                    >
                      Tradições
                    </button>
                    <button
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700 text-left w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Navegando para /culturaindigena/arteindigena");
                        handleMobileNav("/culturaindigena/arteindigena");
                      }}
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
                    <button
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700 text-left w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Navegando para /programacao/atual");
                        handleMobileNav("/programacao/atual");
                      }}
                    >
                      Exposição Atual
                    </button>
                    <button
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700 text-left w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Navegando para /exposicoes/passadas");
                        handleMobileNav("/exposicoes/passadas");
                      }}
                    >
                      Exposições Passadas
                    </button>
                    <button
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700 text-left w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Navegando para /exposicoes/eventos");
                        handleMobileNav("/exposicoes/eventos");
                      }}
                    >
                      Eventos Futuros
                    </button>
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
                    <button
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700 text-left w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Navegando para /visite/horarios");
                        handleMobileNav("/visite/horarios");
                      }}
                    >
                      Horários
                    </button>
                    <button
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700 text-left w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Navegando para /visite/localizacao");
                        handleMobileNav("/visite/localizacao");
                      }}
                    >
                      Localização
                    </button>
                    <button
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700 text-left w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Navegando para /visite/tickets");
                        handleMobileNav("/visite/tickets");
                      }}
                    >
                      Compra de Tickets
                    </button>
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
                    <button
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700 text-left w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Navegando para /apoie/doacao");
                        handleMobileNav("/apoie/doacao");
                      }}
                    >
                      Faça uma Doação
                    </button>
                    <button
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700 text-left w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Navegando para /apoie/parcerias");
                        handleMobileNav("/apoie/parcerias");
                      }}
                    >
                      Parcerias
                    </button>
                    <button
                      className="block px-4 py-2 text-amber-50 hover:bg-gray-700 text-left w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Navegando para /apoie/voluntariado");
                        handleMobileNav("/apoie/voluntariado");
                      }}
                    >
                      Voluntariado
                    </button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>

        {/* Menu desktop (oculto em mobile) */}
        <nav className="hidden md:flex space-x-6 px-26">
          <div className="relative" ref={acervoRef}>
            <button
              onClick={toggleAcervo}
              className="text-amber-50 text-lg font-semibold hover:text-amber-300 focus:outline-none flex items-center"
            >
              Museu
              {isAcervoOpen ? <AiOutlineDown className="ml-1 text-lg" /> : <AiOutlineRight className="ml-1 text-lg" />}
            </button>
            {isAcervoOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
                <Link
                  to="/museu/pesquisaref"
                  className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                  onClick={() => setIsAcervoOpen(false)}
                >
                  Pesquisa e Referência
                </Link>
                <Link
                  to="/museu/acervoonline"
                  className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                  onClick={() => setIsAcervoOpen(false)}
                >
                  Acervo Online
                </Link>
                <Link
                  to="/museu/boletins"
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
                  to="/culturaindigena/historiaindigena"
                  className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                  onClick={() => setIsCulturaOpen(false)}
                >
                  História Indígena
                </Link>
                <Link
                  to="/culturaindigena/tradicao"
                  className="block px-4 py-2 text-amber-50 hover:bg-gray-700"
                  onClick={() => setIsCulturaOpen(false)}
                >
                  Tradições
                </Link>
                <Link
                  to="/culturaindigena/arteindigena"
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
                  to="/programacao/atual"
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
       