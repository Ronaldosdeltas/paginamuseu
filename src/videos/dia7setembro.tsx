export function Dia7setembro() {
  return (
    <div className="flex flex-col mt-5 mb-5 w-full items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Dia 7 de Setembro: Independência do Brasil</h1>
      <div className="w-full max-w-4xl mb-5  p-4 bg-white rounded-lg shadow-md">
        <video
          src="/src/assets/videos/dia7setembro.mp4" // Caminho relativo ao arquivo no diretório public
          controls
          className=" w-600 h-auto rounded-lg"
          poster="/src/assets/images/Itacover.jpg" // Opcional: imagem de capa enquanto o vídeo carrega
        >
          Seu navegador não suporta a tag de vídeo.
        </video>
      </div>
    </div>
  );
}