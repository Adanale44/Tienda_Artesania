import Image from "next/image"
import Navbar from "@/components/navbar"
import BackButton from "@/components/back-button"
import SearchBar from "@/components/search-bar"

export default function Contactos() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="max-w-4xl mx-auto p-4">
          {/* Search Bar */}
          <SearchBar />

          {/* Back Button */}
          <BackButton />

          {/* Profile Icon */}
          <div className="flex mb-6">
            <div className="w-8 h-8 rounded-full bg-[#733535]"></div>
          </div>

          {/* Contacts Content */}
          <div className="space-y-4 mb-8">
            <h1 className="text-2xl font-medium text-center mb-6">Contactos</h1>

            <div className="flex items-center gap-4 py-2">
              <div className="w-8 h-8 flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="WhatsApp"
                  width={32}
                  height={32}
                  className="text-green-500"
                />
              </div>
              <p>Whatsapp: 54+ 9 11 12412901</p>
            </div>

            <div className="flex items-center gap-4 py-2">
              <div className="w-8 h-8 flex-shrink-0">
                <Image src="/placeholder.svg?height=32&width=32" alt="Gmail" width={32} height={32} />
              </div>
              <p>Gmail: RobinsonArtesanal@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <Navbar />
    </main>
  )
}
