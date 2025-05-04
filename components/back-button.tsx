"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-1 text-[#373434] hover:text-[#733535] transition-colors mb-4"
      aria-label="Volver atrás"
    >
      <ArrowLeft className="w-5 h-5" />
      <span className="text-sm font-medium">Volver</span>
    </button>
  )
}
