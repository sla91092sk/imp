"use client"

import type React from "react"
import { useEffect } from "react"
import { useEbookModal } from "@/hooks/use-ebook-modal"
import { ebookContent } from "@/data/ebook-content"
import { X } from "lucide-react"

export default function EbookModal() {
  const { isOpen, category, closeModal } = useEbookModal()

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, closeModal])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  const content = category ? ebookContent[category] : null
  const title = content?.title || "Conteúdo Indisponível"
  const text =
    content?.text || "<p>O conteúdo para esta categoria ainda não foi adicionado ou a categoria é inválida.</p>"

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <div
      id="ebook-modal"
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-slide-in-up"
      onClick={handleBackdropClick}
    >
      <div className="bg-zinc-800 rounded-lg shadow-2xl w-full max-w-2xl modal-content transform transition-all duration-500 scale-100 opacity-100 hover-lift border border-gray-700/50">
        <div className="flex justify-between items-center p-6 border-b border-zinc-700 bg-gradient-to-r from-zinc-800 to-zinc-900">
          <h3 id="modal-title" className="text-2xl font-bold text-white font-headline">
            {title}
          </h3>
          <button
            id="modal-close-btn"
            className="text-gray-400 hover:text-white transition-all duration-300 hover-lift p-2 rounded-lg hover:bg-gray-700/50"
            onClick={closeModal}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div
          id="modal-body"
          className="p-6 text-gray-300 leading-relaxed overflow-y-auto max-h-[calc(80vh-140px)] bg-gradient-to-b from-zinc-800 to-zinc-900"
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <div className="p-6 border-t border-zinc-700 text-right bg-gradient-to-r from-zinc-900 to-zinc-800">
          <button
            id="modal-close-btn-bottom"
            className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-all duration-300 font-headline tracking-wider hover-lift animate-pulse-glow"
            onClick={closeModal}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  )
}
