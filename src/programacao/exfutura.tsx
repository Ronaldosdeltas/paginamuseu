
import { Link } from "react-router-dom";
export function ExFutura() {
  return (
    <div className="flex flex-col w-full items-center mt-10 justify-center min-h-screen bg-gray-200">
    <div className="flex flex-col max-w-6xl items-center mt-10 justify-center px-4 bg-sky-400 rounded-b-lg shadow-lg overflow-hidden-">
      <h1 className="font-medium text-4xl mt-10 text-center mb-10 text-gray-800"
      >Eventos Futuros Serão disponibilizados em breve!</h1>
        </div>
        <Link to="/museu/acervoonline" className="mt-5 mb-10 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition">
        Acervo Atual
        </Link>

        {/* Footer */}
      <footer className="bg-[#116cc2] text-white py-8 px-5 w-full mt-10" data-aos="fade-up" data-aos-delay="300">
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