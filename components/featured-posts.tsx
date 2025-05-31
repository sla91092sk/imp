"use client"

import { useEbookModal } from "@/hooks/use-ebook-modal"

export default function FeaturedPosts() {
  const { openModal } = useEbookModal()

  return (
    <section id="featured-posts" className="mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          id="main-featured-post"
          className="lg:col-span-2 rounded-lg overflow-hidden relative min-h-[400px] flex items-end p-8 group featured-post-clickable bg-black hover-lift hover-glow animate-slide-in-up"
          onClick={() => openModal("desenvolvimento")}
        >
          <div className="absolute inset-0 w-full h-full z-0">
            <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 group-hover:scale-105 transition-transform duration-700"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 group-hover:from-black/95 transition-all duration-500"></div>
          <div className="absolute top-6 right-6 z-20">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-yellow-400/30 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-float">
              <span className="text-2xl">🧠</span>
            </div>
          </div>
          <div className="relative z-20">
            <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded font-headline group-hover:bg-yellow-300 transition-colors duration-300">
              DESTAQUE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 group-hover:underline group-hover:text-yellow-100 transition-all duration-300">
              O Guia Completo para Construir uma Mentalidade Inabalável
            </h2>
          </div>
        </div>

        <div
          id="style-featured-post"
          className="rounded-lg overflow-hidden relative min-h-[250px] flex items-end p-6 group featured-post-clickable bg-black hover-lift hover-glow animate-slide-in-up"
          style={{ animationDelay: "0.2s" }}
          onClick={() => openModal("estilo")}
        >
          <div className="absolute inset-0 w-full h-full z-0">
            <div className="w-full h-full bg-gradient-to-br from-gray-800 via-black to-yellow-900/20 group-hover:scale-105 transition-transform duration-700"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 group-hover:from-black/95 transition-all duration-500"></div>
          <div className="absolute top-4 right-4 z-20">
            <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-yellow-400/30 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-float">
              <span className="text-lg">👔</span>
            </div>
          </div>
          <div className="relative z-20">
            <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded font-headline group-hover:bg-yellow-300 transition-colors duration-300">
              ESTILO
            </span>
            <h3 className="text-2xl font-bold text-white mt-2 group-hover:underline group-hover:text-yellow-100 transition-all duration-300">
              5 Peças de Roupa que Todo Homem Deveria Ter no Guarda-Roupa
            </h3>
          </div>
        </div>

        <div
          id="finance-featured-post"
          className="rounded-lg overflow-hidden relative min-h-[250px] flex items-end p-6 group featured-post-clickable bg-black hover-lift hover-glow animate-slide-in-up"
          style={{ animationDelay: "0.4s" }}
          onClick={() => openModal("financas")}
        >
          <div className="absolute inset-0 w-full h-full z-0">
            <div className="w-full h-full bg-gradient-to-br from-green-900/30 via-black to-gray-800 group-hover:scale-105 transition-transform duration-700"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 group-hover:from-black/95 transition-all duration-500"></div>
          <div className="absolute top-4 right-4 z-20">
            <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-yellow-400/30 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-float">
              <span className="text-lg">💰</span>
            </div>
          </div>
          <div className="relative z-20">
            <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded font-headline group-hover:bg-yellow-300 transition-colors duration-300">
              FINANÇAS
            </span>
            <h3 className="text-2xl font-bold text-white mt-2 group-hover:underline group-hover:text-yellow-100 transition-all duration-300">
              Como Começar a Investir com Pouco Dinheiro Ainda Este Mês
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
