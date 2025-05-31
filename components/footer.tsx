export default function Footer() {
  return (
    <footer className="bg-black mt-16 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-xl font-bold text-white font-headline">SOBRE NÓS</h4>
            <p className="text-gray-400 mt-2">
              Um espaço dedicado ao homem moderno que busca evoluir em todas as áreas da vida. Conteúdo original sobre
              desenvolvimento, estilo e relacionamentos.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white font-headline">NAVEGUE</h4>
            <nav className="flex flex-col space-y-2 mt-2">
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                Início
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                Artigos
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                Contato
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                Política de Privacidade
              </a>
            </nav>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white font-headline">SIGA-NOS</h4>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                FB
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                IG
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                TW
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 border-t border-gray-800 mt-8 pt-6">
          <p>&copy; 2025 Imparável. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
