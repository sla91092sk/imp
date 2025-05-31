"use client"

import { useState } from "react"
import type { Article } from "@/types/article"

interface ArticleCardProps {
  article: Article
  index: number
}

const getCategoryGradient = (category: string) => {
  const gradients = {
    Desenvolvimento: "from-blue-900/20 via-gray-900 to-black",
    Relacionamentos: "from-pink-900/20 via-gray-900 to-black",
    Estilo: "from-yellow-900/20 via-gray-900 to-black",
    Saúde: "from-green-900/20 via-gray-900 to-black",
    Cultura: "from-purple-900/20 via-gray-900 to-black",
    Carreira: "from-indigo-900/20 via-gray-900 to-black",
    Finanças: "from-emerald-900/20 via-gray-900 to-black",
    Perfumes: "from-amber-900/20 via-gray-900 to-black",
  }
  return gradients[category as keyof typeof gradients] || "from-gray-900 via-black to-gray-800"
}

const getCategoryIcon = (category: string) => {
  const icons = {
    Desenvolvimento: "🧠",
    Relacionamentos: "💝",
    Estilo: "👔",
    Saúde: "💪",
    Cultura: "🎭",
    Carreira: "🚀",
    Finanças: "💰",
    Perfumes: "🌟",
  }
  return icons[category as keyof typeof icons] || "📝"
}

export default function ArticleCard({ article, index }: ArticleCardProps) {
  const [isLoaded, setIsLoaded] = useState(true)
  const gradientClass = getCategoryGradient(article.category)
  const categoryIcon = getCategoryIcon(article.category)

  return (
    <div
      className="bg-zinc-900 rounded-lg overflow-hidden group hover-lift hover-glow border border-gray-800/50 animate-slide-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="h-48 w-full overflow-hidden relative">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradientClass} z-10 group-hover:opacity-80 transition-opacity duration-300`}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-30"></div>
        <div className="absolute bottom-4 left-4 right-4 z-40">
          <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-yellow-400/30 group-hover:bg-yellow-400/30 transition-all duration-300 animate-float">
            <span className="text-xl">{categoryIcon}</span>
          </div>
        </div>
        <div className="absolute top-4 right-4 z-40">
          <div className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
            <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-6 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded font-headline relative z-10 group-hover:bg-yellow-300 transition-colors duration-300">
          {article.category.toUpperCase()}
        </span>
        <h3 className="text-xl font-bold text-white mt-4 h-20 group-hover:underline leading-tight relative z-10 group-hover:text-yellow-100 transition-colors duration-300">
          {article.title}
        </h3>
      </div>
    </div>
  )
}
