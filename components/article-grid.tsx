"use client"

import { useState } from "react"
import { articlesData } from "@/data/articles"
import ArticleCard from "./article-card"

export default function ArticleGrid() {
  const [articlesLoaded, setArticlesLoaded] = useState(6)
  const [isLoading, setIsLoading] = useState(false)

  const loadMoreArticles = async () => {
    setIsLoading(true)
    // Simular carregamento
    await new Promise((resolve) => setTimeout(resolve, 800))
    setArticlesLoaded((prev) => prev + 3)
    setIsLoading(false)
  }

  const visibleArticles = articlesData.slice(0, articlesLoaded)
  const hasMoreArticles = articlesLoaded < articlesData.length

  return (
    <section id="latest-posts" className="relative">
      <h2 className="text-3xl font-bold text-white mb-8 font-headline tracking-wide animate-slide-in-up">
        Últimos Artigos
      </h2>
      <div id="articles-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleArticles.map((article, index) => (
          <ArticleCard key={index} article={article} index={index} />
        ))}
      </div>
      {hasMoreArticles && (
        <div className="text-center mt-12">
          <button
            id="load-more-button"
            className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-all duration-300 font-headline tracking-wider hover-lift animate-pulse-glow disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={loadMoreArticles}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Carregando...
              </span>
            ) : (
              "Carregar Mais"
            )}
          </button>
        </div>
      )}
    </section>
  )
}
