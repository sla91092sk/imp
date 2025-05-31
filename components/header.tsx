"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import ThemeToggle from "./theme-toggle"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const categories = [
    { name: "Desenvolvimento", slug: "desenvolvimento" },
    { name: "Relacionamentos", slug: "relacionamentos" },
    { name: "Estilo", slug: "estilo" },
    { name: "Perfumes", slug: "perfumes" },
    { name: "Finanças", slug: "financas" },
    { name: "Saúde", slug: "saude" },
    { name: "Cultura", slug: "cultura" },
    { name: "Carreira", slug: "carreira" },
  ]

  return (
    <header
      id="header"
      className="bg-black/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-black/20 border-b border-gray-800/50"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a
            href="#"
            className="text-2xl md:text-3xl font-bold text-white font-headline hover:text-yellow-400 transition-colors duration-300"
          >
            Imparável
          </a>

          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-5">
            {categories.map((category) => (
              <a key={category.slug} href="#" className="nav-link-item hover-lift" data-category={category.slug}>
                {category.name}
              </a>
            ))}
            <a href="#" className="nav-link-item hover-lift">
              Sobre
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover-lift p-2 rounded-lg hover:bg-gray-800/50">
              <Search className="h-6 w-6" />
            </button>
            <button
              id="mobile-menu-button"
              className="lg:hidden text-gray-300 hover:text-yellow-400 transition-all duration-300 hover-lift p-2 rounded-lg hover:bg-gray-800/50"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden bg-black/90 backdrop-blur-sm border-t border-gray-800/50",
          isMobileMenuOpen ? "block animate-slide-in-up" : "hidden",
        )}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          {categories.map((category, index) => (
            <a
              key={category.slug}
              href="#"
              className="nav-link-item hover-lift animate-slide-in-up"
              data-category={category.slug}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category.name}
            </a>
          ))}
          <a href="#" className="nav-link-item hover-lift animate-slide-in-up" style={{ animationDelay: "0.8s" }}>
            Sobre
          </a>
        </nav>
      </div>
    </header>
  )
}
