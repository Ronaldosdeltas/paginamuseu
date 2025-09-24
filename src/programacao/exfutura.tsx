
import { Link } from "react-router-dom";
export function ExFutura() {
  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen bg-gray-200">
    <div className="flex flex-col max-w-6xl items-center justify-center px-4 bg-sky-400 rounded-lg shadow-lg overflow-hidden-">
      <h1 className="font-medium text-4xl mt-10 text-center mb-10 text-gray-800"
      >Eventos Futuros Serão disponibilizados em breve!</h1>
        </div>
        <Link to="/museu/acervoonline" className="mt-5 mb-10 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition">
        Acervo Atual
        </Link>
    </div>
    )
}