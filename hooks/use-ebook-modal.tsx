"use client"

import { create } from "zustand"

type CategoryType =
  | "desenvolvimento"
  | "relacionamentos"
  | "estilo"
  | "perfumes"
  | "financas"
  | "saude"
  | "cultura"
  | "carreira"
  | null

interface EbookModalStore {
  isOpen: boolean
  category: CategoryType
  openModal: (category: CategoryType) => void
  closeModal: () => void
}

export const useEbookModal = create<EbookModalStore>((set) => ({
  isOpen: false,
  category: null,
  openModal: (category) => set({ isOpen: true, category }),
  closeModal: () => set({ isOpen: false, category: null }),
}))
