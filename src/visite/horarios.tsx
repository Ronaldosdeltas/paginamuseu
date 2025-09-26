import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Horarios() {
  // Inicializar AOS
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  // Horários de funcionamento
  const horarios = [
    {
      dia: "Segunda-feira",
      horario: "Fechado",
      observacao: "Descanso semanal",
    },
    {
      dia: "Terça-feira",
      horario: "9h às 18h",
      observacao: "",
    },
    {
      dia: "Quarta-feira",
      horario: "9h às 18h",
      observacao: "",
    },
    {
      dia: "Quinta-feira",
      horario: "9h às 18h",
      observacao: "",
    },
    {
      dia: "Sexta-feira",
      horario: "9h às 18h",
      observacao: "",
    },
    {
      dia: "Sábado",
      horario: "Fechado",
      observacao: "Descanso semanal",
    },
    {
      dia: "Domingo",
      horario: "Fechado",
      observacao: "Descanso semanal",
    },
  ];

  // Informações adicionais
  const infoAdicionais = [
    {
      titulo: "Ingressos",
      descricao: "R$ 5,00 (inteira) | R$ 2,50 (meia-entrada para estudantes, idosos e professores)",
      icone: "🎫",
    },
    {
      titulo: "Acessibilidade",
      descricao: "Rampas de acesso e banheiros adaptados disponíveis",
      icone: "♿",
    },
    {
      titulo: "Estacionamento",
      descricao: "Estacionamento público nas proximidades (gratuito)",
      icone: "🚗",
    },
    {
      titulo: "Contato",
      descricao: "(88) 3645-1234 / turismo@itarema.ce.gov.br",
      icone: "📞",
    },
  ];

  // Estado para o formulário de agendamento
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    data: "",
    horario: "",
    visitantes: "1",
  });
  const [formMessage, setFormMessage] = useState("");

  // Manipulador para mudanças nos campos do formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormMessage(""); // Limpa a mensagem ao alterar os campos
  };

  // Manipulador para o botão de agendamento
  const handleAgendar = () => {
    const { nome, email, data, horario, visitantes } = formData;

    // Validação básica
    if (!nome || !email || !data || !horario || !visitantes) {
      setFormMessage("Por favor, preencha todos os campos.");
      return;
    }

    // Validação do dia da semana
    const selectedDate = new Date(data);
    const dayOfWeek = selectedDate.getDay(); // 0 = Domingo, 1 = Segunda, etc.
    if (dayOfWeek === 0 || dayOfWeek === 1 || dayOfWeek === 6) {
      setFormMessage("O museu está fechado aos domingos, segundas e sábados. Escolha outro dia.");
      return;
    }

    // Simulação de envio (substitua por chamada de API, se necessário)
    console.log("Agendamento:", formData);
    setFormMessage("Agendamento solicitado com sucesso! Entraremos em contato para confirmação.");
    setFormData({ nome: "", email: "", data: "", horario: "", visitantes: "1" }); // Limpa o formulário
  };

  // Opções de horários (9h às 17h, última entrada)
  const horarioOptions = Array.from({ length: 9 }, (_, i) => `${9 + i}:00`);

  return (
    <div className="flex flex-col w-full items-center justify-center">
      {/* Seção Principal de Horários */}
      <div
        className="bg-gray-100 py-12 px-5 md:px-10 m-4 rounded-lg shadow-lg max-w-5xl w-full"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-medium text-gray-800 text-center mt-15 mb-8">
            Horários de Funcionamento
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Venha conhecer o Museu Vicente de Paula Rios e mergulhe na rica história e cultura de Itarema. Nossos horários são pensados para facilitar sua visita.
          </p>
          
          {/* Tabela de Horários */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8" data-aos="fade-up" data-aos-delay="400">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-400 text-white">
                  <th className="py-4 px-6 text-left font-medium">Dia da Semana</th>
                  <th className="py-4 px-6 text-left font-medium">Horário</th>
                  <th className="py-4 px-6 text-left font-medium">Observações</th>
                </tr>
              </thead>
              <tbody>
                {horarios.map((horario, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="py-4 px-6 font-medium text-gray-800">{horario.dia}</td>
                    <td className="py-4 px-6 text-gray-700 font-semibold">
                      <span className={horario.horario === "Fechado" ? "text-red-600" : "text-green-600"}>
                        {horario.horario}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-600 italic">{horario.observacao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Informações Adicionais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-aos="fade-up" data-aos-delay="500">
            {infoAdicionais.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl mb-3">{info.icone}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{info.titulo}</h3>
                <p className="text-gray-600">{info.descricao}</p>
              </div>
            ))}
          </div>

          {/* Botão para Voltar */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="600">
            <Link
              to="/"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition"
            >
              Voltar à Home
            </Link>
          </div>
        </div>
      </div>

      {/* Seção de Agendamento */}
      <div
        className="bg-gray-100 py-12 px-5 md:px-10 m-4 rounded-lg shadow-lg max-w-5xl w-full"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-medium text-gray-800 text-center mb-8">
            Agendar Visita
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Planeje sua visita ao Museu Vicente de Paula Rios. Preencha o formulário abaixo para reservar seu horário.
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
              <div>
                <label htmlFor="data" className="block text-gray-700 font-medium mb-2">
                  Data da Visita
                </label>
                <input
                  type="date"
                  id="data"
                  name="data"
                  value={formData.data}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                  min={new Date().toISOString().split("T")[0]} // Apenas datas futuras
                  required
                />
              </div>
              <div>
                <label htmlFor="horario" className="block text-gray-700 font-medium mb-2">
                  Horário da Visita
                </label>
                <select
                  id="horario"
                  name="horario"
                  value={formData.horario}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                >
                  <option value="">Selecione um horário</option>
                  {horarioOptions.map((horario) => (
                    <option key={horario} value={horario}>
                      {horario}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="visitantes" className="block text-gray-700 font-medium mb-2">
                  Número de Visitantes
                </label>
                <select
                  id="visitantes"
                  name="visitantes"
                  value={formData.visitantes}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="text-center mt-6">
              <button
                onClick={handleAgendar}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition"
              >
                Agendar Visita
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

      {/* Seção de Localização e Mapa */}
      <div
        className="bg-gray-100 py-12 px-5 md:px-10 m-4 rounded-lg shadow-lg max-w-5xl w-full"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-medium text-gray-800 mb-6">
            Como Chegar ao Museu
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
        data-aos-delay="900"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <Link to="/" className="hover:text-amber-300">
              Home
            </Link>
            <Link to="/programacao/eventos" className="hover:text-amber-300">
              Programação
            </Link>
            <Link to="/visite/horarios" className="hover:text-amber-300">
              Visite
            </Link>
            <Link to="/apoie/doacao" className="hover:text-amber-300">
              Apoie
            </Link>
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