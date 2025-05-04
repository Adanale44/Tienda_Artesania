import Link from "next/link"

export default function Navbar() {
  return (
    <div className="bg-[#373434] text-white py-2">
      <div className="max-w-4xl mx-auto flex justify-between px-4">
        <Link href="/contactos" className="contact-button">
          Contactos
        </Link>
        <Link href="/sobre-nosotros" className="contact-button">
          Sobre nosostros
        </Link>
      </div>
    </div>
  )
}
