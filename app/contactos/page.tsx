import Link from "next/link"
import Navbar from "@/components/navbar"
import BackButton from "@/components/back-button"
import SearchBar from "@/components/search-bar"

export default function Contactos() {
  // Datos de contacto
  const contactData = {
    whatsapp: "5491112412901", // Número sin espacios ni símbolos para el enlace
    whatsappDisplay: "54+ 9 11 12412901", // Número formateado para mostrar
    email: "RobinsonArtesanal@gmail.com",
    github: "RobinsonArtesanal",
    instagram: "adanale_32", // Actualizado con la cuenta específica
  }

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="max-w-4xl mx-auto p-3 sm:p-4">
          {/* Search Bar */}
          <SearchBar />

          {/* Back Button */}
          <BackButton />

          {/* Profile Icon */}
          <div className="flex mb-4 sm:mb-6">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#733535]"></div>
          </div>

          {/* Contacts Content */}
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <h1 className="text-xl sm:text-2xl font-medium text-center mb-4 sm:mb-6">Contactos</h1>

            {/* WhatsApp */}
            <Link
              href={`https://wa.me/${contactData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 py-2 hover:bg-white/20 px-2 rounded-sm transition-colors"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 bg-[#25D366] rounded-full flex items-center justify-center text-white text-xs">
                WA
              </div>
              <p className="text-sm sm:text-base">Whatsapp: {contactData.whatsappDisplay}</p>
            </Link>

            {/* Gmail */}
            <Link
              href={`mailto:${contactData.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 py-2 hover:bg-white/20 px-2 rounded-sm transition-colors"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 bg-[#DB4437] rounded-full flex items-center justify-center text-white text-xs">
                G
              </div>
              <p className="text-sm sm:text-base">Gmail: {contactData.email}</p>
            </Link>

            {/* GitHub */}
            <Link
              href={`https://github.com/${contactData.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 py-2 hover:bg-white/20 px-2 rounded-sm transition-colors"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 bg-[#333] rounded-full flex items-center justify-center text-white text-xs">
                GH
              </div>
              <p className="text-sm sm:text-base">GitHub: {contactData.github}</p>
            </Link>

            {/* Instagram */}
            <Link
              href={`https://www.instagram.com/${contactData.instagram}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 py-2 hover:bg-white/20 px-2 rounded-sm transition-colors"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 bg-gradient-to-tr from-[#feda75] via-[#fa7e1e] to-[#d62976] rounded-full flex items-center justify-center text-white text-xs">
                IG
              </div>
              <p className="text-sm sm:text-base">Instagram: @{contactData.instagram}</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <Navbar />
    </main>
  )
}
