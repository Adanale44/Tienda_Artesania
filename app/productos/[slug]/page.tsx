import Image from "next/image"
import Navbar from "@/components/navbar"
import BackButton from "@/components/back-button"
import SearchBar from "@/components/search-bar"
import { getProductBySlug } from "@/lib/products"

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)

  // Fallback en caso de que no se encuentre el producto
  if (!product) {
    return (
      <main className="min-h-screen flex flex-col">
        <div className="flex-1">
          <div className="max-w-4xl mx-auto p-4">
            <SearchBar />
            <BackButton />
            <div className="flex mb-6">
              <div className="w-8 h-8 rounded-full bg-[#733535]"></div>
            </div>
            <div className="text-center py-12">
              <h1 className="text-2xl font-medium mb-4">Producto no encontrado</h1>
              <p>Lo sentimos, el producto que buscas no está disponible.</p>
            </div>
          </div>
        </div>
        <Navbar />
      </main>
    )
  }

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

          {/* Product Detail */}
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="md:w-1/2">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={400}
                className="w-full object-contain"
              />
            </div>

            <div className="md:w-1/2">
              <h1 className="text-xl font-medium mb-4">{product.name}</h1>
              <p className="text-lg font-bold mb-6">{product.price}</p>

              <button className="buy-button w-full mb-4">Comprar</button>

              <div className="text-sm mt-8 space-y-4">
                <p className="mb-2">{product.description}</p>

                <div>
                  <h3 className="font-medium mb-2">CARACTERÍSTICAS:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs">
                  <span className="font-medium">Material del jarrón:</span> {product.material}
                </p>

                {product.dimensions && (
                  <p className="text-xs">
                    <span className="font-medium">Dimensiones:</span> {product.dimensions}
                  </p>
                )}

                {product.color && (
                  <p className="text-xs">
                    <span className="font-medium">Color:</span> {product.color}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <Navbar />
    </main>
  )
}
