import { Link } from "react-router-dom";
import { useState, } from "react";



export function Doacao() {
  // Inicializar AOS


  // Estado para o formulário de contato
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [formMessage, setFormMessage] = useState("");
  const [copied, setCopied] = useState(false);

  // Manipulador para mudanças nos campos do formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormMessage("");
  };

  // Manipulador para o formulário de contato
  const handleContato = () => {
    const { nome, email, mensagem } = formData;
    if (!nome || !email || !mensagem) {
      setFormMessage("Por favor, preencha todos os campos.");
      return;
    }
    console.log("Contato:", formData);
    setFormMessage("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  // Manipulador para copiar a chave PIX
  const handleCopyPix = () => {
    navigator.clipboard.writeText("museuvicente@itarema.ce.gov.br");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); // Reseta após 3 segundos
  };

  return (
    <div className="flex flex-col w-full items-center justify-center">


      {/* Seção de Doações */}
      <div
        className="bg-gray-100 py-12 px-5 md:px-10 m-4 rounded-lg shadow-lg max-w-5xl w-full"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="max-w-5xl mt-10 mx-auto">
          <h2 className="text-3xl font-medium text-gray-800 text-center mb-8">
            Apoie o Museu Vicente de Paula Rios
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Suas doações ajudam a preservar a história e a cultura de Itarema, garantindo a manutenção do museu e a realização de eventos culturais.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Faça uma Doação via PIX</h3>
            <p className="text-gray-600 mb-4">
              Use a chave PIX abaixo para contribuir com qualquer valor. Sua ajuda faz a diferença!
            </p>
            <div className="bg-blue-100 p-4 rounded-lg mb-4">
              <p className="text-lg font-semibold text-blue-800">
                Chave PIX: museuvicente@itarema.ce.gov.br
              </p>
            </div>
            <button
              onClick={handleCopyPix}
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition"
            >
              {copied ? "Chave Copiada!" : "Copiar Chave PIX"}
            </button>
            <p className="text-gray-600 mt-4">
              As doações são usadas para:
              <ul className="list-disc list-inside text-left mt-2">
                <li>Manutenção e conservação do acervo do museu</li>
                <li>Organização de exposições e eventos culturais</li>
                <li>Projetos educacionais para a comunidade</li>
                <li>Melhorias na infraestrutura e acessibilidade</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      {/* Seção de Benefícios para Doadores */}
      <div
        className="bg-gray-100 py-12 px-5 md:px-10 m-4 rounded-lg shadow-lg max-w-5xl w-full"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-medium text-gray-800 text-center mb-8">
            Benefícios para Doadores
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Ao apoiar o Museu Vicente de Paula Rios, você se torna parte da nossa missão de preservar a cultura de Itarema.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                titulo: "Reconhecimento",
                descricao: "Seu nome será incluído em nossa lista de agradecimentos no site e em eventos.",
                icone: "🏅",
              },
              {
                titulo: "Acesso Exclusivo",
                descricao: "Convites para eventos e exposições exclusivas para doadores.",
                icone: "🎟️",
              },
              {
                titulo: "Visitas Guiadas",
                descricao: "Participe de visitas guiadas especiais com nossos curadores.",
                icone: "🧭",
              },
              {
                titulo: "Impacto Local",
                descricao: "Contribua diretamente para a educação e cultura da comunidade de Itarema.",
                icone: "🌟",
              },
            ].map((beneficio, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl mb-3">{beneficio.icone}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{beneficio.titulo}</h3>
                <p className="text-gray-600">{beneficio.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seção de Contato para Apoio */}
      <div
        className="bg-gray-100 py-12 px-5 md:px-10 m-4 rounded-lg shadow-lg max-w-5xl w-full"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-medium text-gray-800 text-center mb-8">
            Outras Formas de Apoio
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Quer contribuir de outra forma, como voluntariado ou parcerias? Entre em contato conosco!
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nome" className="block text-gray-700 font-medium mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Digite seu nome"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Digite seu e-mail"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="mensagem" className="block text-gray-700 font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Descreva como deseja apoiar o museu"
                  rows={5}
                  required
                ></textarea>
              </div>
            </div>
            <div className="text-center mt-6">
              <button
                onClick={handleContato}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition"
              >
                Enviar Mensagem
              </button>
            </div>
            {formMessage && (
              <p
                className={`text-center mt-4 ${
                  formMessage.includes("sucesso") ? "text-green-600" : "text-red-600"
                }`}
              >
                {formMessage}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Seção de Localização */}
      <div
        className="bg-gray-100 py-12 px-5 md:px-10 m-4 rounded-lg shadow-lg max-w-5xl w-full"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-medium text-gray-800 mb-6">
            Visite-nos
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.633081210379!2d-39.916420326034746!3d-2.921409997054933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c1ffbe3035b6f5%3A0x9fd0b9522cd9a977!2sCentro%20Hist%C3%B3rico%20e%20Cultura%20Museu%20Vicente%20de%20Paula%20Rios!5e0!3m2!1sen!2sbr!4v1727204147384!5m2!1sen!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg mb-6"
          ></iframe>
          <p className="text-gray-600 mb-4">
            Rua Principal, 123, Centro - Itarema, CE
          </p>
          <Link
            to="https://www.google.com/maps/place/Centro+Hist%C3%B3rico+e+Cultura+Museu+Vicente+de+Paula+Rios/@-2.9213997,-39.9164549,17z/data=!4m6!3m5!1s0x7c1ffbe3035b6f5:0x9fd0b9522cd9a977!8m2!3d-2.92141!4d-39.9138454!16s%2Fg%2F11krkw1g6_?authuser=0&entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition"
          >
            Abrir no Google Maps
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="bg-[#116cc2] text-white py-8 px-5 w-full mt-2"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <Link to="/" className="hover:text-amber-300">
              Home
            </Link>
        <Link to="/programacao/eventos" className="hover:text-amber-300">Programação</Link>
            <Link to="/visite/horarios" className="hover:text-amber-300">Visite</Link>
            <Link to="/apoie/doacao" className="hover:text-amber-300">Apoie</Link>
            <Link to="/museu/acervoonline" className="hover:text-amber-300">Acervo Online</Link>
          </div>
          <div className="text-center md:text-left">
            <p className="mb-2">Contato: museuvicente@itarema.ce.gov.br</p>
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
          &copy; 2025 Museu Vicente de Paula Rios. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}