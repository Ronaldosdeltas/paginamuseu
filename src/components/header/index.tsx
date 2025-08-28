import { Link } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const [isAcervoOpen, setIsAcervoOpen] = useState(false);

  const toggleAcervo = () => {
    setIsAcervoOpen(!isAcervoOpen);
  };

  return (
    <header className="bg-gray-900 w-full py-6 flex items-center justify-between px-5">
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-amber-50 text-2xl font-bold hover:text-amber-300">
          Museu das Culturas Indígenas
        </Link>
        <nav className="flex space-x-6">
          <div className="relative">
            <button
              onClick={toggleAcervo}
              className="text-amber-50 text-lg font-semibold hover:text-amber-300 focus:outline-none"
            >
              Acervo
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
          <Link
            to="/culturaindigena"
            className="text-amber-50 text-lg font-semibold hover:text-amber-300"
          >
            Cultura Indígena
          </Link>
          <Link
            to="/programacao"
            className="text-amber-50 text-lg font-semibold hover:text-amber-300"
          >
            Exposições e Programação
          </Link>
          <Link
            to="/visite"
            className="text-amber-50 text-lg font-semibold hover:text-amber-300"
          >
            Visite
          </Link>
          <Link
            to="/apoie"
            className="text-amber-50 text-lg font-semibold hover:text-amber-300"
          >
            Apoie
          </Link>
        </nav>
      </div>
    </header>
  );
}