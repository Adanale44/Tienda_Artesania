import Link from "next/link"
import Navbar from "@/components/navbar"
import SearchBar from "@/components/search-bar"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="max-w-4xl mx-auto p-4">
          {/* Search Bar */}
          <SearchBar />

          {/* Profile Icon */}
          <div className="flex mb-6">    
          </div>

          {/* Welcome Content */}
          <div className="space-y-4 mb-8">
            <h1 className="text-xl font-medium">Bienvenid@ a nuestra tienda de jarras artesanas</h1>
            <p>Cada jarra que ves acá fue hecha a mano, con paciencia, barro y mucho corazón.</p>
            <p>Creemos en lo simple, en lo único y en lo hecho con alma.</p>
            <p>Gracias por visitarnos.</p>
            <p>Explorá, elegí y sentite como en casa.</p>
          </div>

          {/* Start Button */}
          <div className="flex justify-center mb-8">
            <Link href="/productos" className="buy-button uppercase">
              EMPEZAR
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <Navbar />
    </main>
  )
}
