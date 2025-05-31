import Header from "@/components/header"
import FeaturedPosts from "@/components/featured-posts"
import ArticleGrid from "@/components/article-grid"
import Footer from "@/components/footer"
import EbookModal from "@/components/ebook-modal"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-x-hidden">
      {/* Padrão de fundo sutil */}
      <div className="fixed inset-0 bg-pattern pointer-events-none opacity-50"></div>

      <Header />
      <main className="container mx-auto px-4 mt-8 relative z-10 max-w-7xl">
        <FeaturedPosts />
        <ArticleGrid />
      </main>
      <Footer />
      <EbookModal />
    </div>
  )
}
