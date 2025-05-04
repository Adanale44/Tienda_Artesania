import Link from "next/link"
import Navbar from "@/components/navbar"
import ProductCard from "@/components/product-card"
import BackButton from "@/components/back-button"
import SearchBar from "@/components/search-bar"
import { getAllProducts } from "@/lib/products"

export default function Productos() {
  const products = getAllProducts()

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
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {products.map((product) => (
              <Link href={`/productos/${product.slug}`} key={product.id}>
                <ProductCard name={product.name} price={product.price} image={product.image} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <Navbar />
    </main>
  )
}
