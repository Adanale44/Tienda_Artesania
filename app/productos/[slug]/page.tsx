import Navbar from "@/components/navbar";
import BackButton from "@/components/back-button";
import SearchBar from "@/components/search-bar";
import { getProductBySlug } from "@/lib/products";

export default function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);

  // Fallback en caso de que no se encuentre el producto
  if (!product) {
    return (
      <main className="min-h-screen flex flex-col">
        <div className="flex-1">
          <div className="max-w-4xl mx-auto p-3 sm:p-4">
            <SearchBar />
            <BackButton />
            <div className="flex mb-4 sm:mb-6"></div>
            <div className="text-center py-8 sm:py-12">
              <h1 className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4">
                Producto no encontrado
              </h1>
              <p className="text-sm sm:text-base">
                Lo sentimos, el producto que buscas no está disponible.
              </p>
            </div>
          </div>
        </div>
        <Navbar />
      </main>
    );
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

          {/* Product Detail */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="sm:w-1/2 p-3">
              {/* Usamos la nueva clase image-container con una proporción diferente para la página de detalle */}
              <div className="image-container" style={{ paddingBottom: "75%" }}>
                <img
                  src={product.image || "/placeholder.svg?height=300&width=300"}
                  alt={product.name}
                  className="product-image"
                />
              </div>
            </div>

            <div className="sm:w-1/2">
              <h1 className="text-lg sm:text-xl font-medium mb-2 sm:mb-4">
                {product.name}
              </h1>
              <p className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
                {product.price}
              </p>

              <button className="buy-button w-full mb-4 text-sm sm:text-base py-2">
                Comprar
              </button>

              <div className="text-xs sm:text-sm mt-4 sm:mt-8 space-y-3 sm:space-y-4">
                <p className="mb-2">{product.description}</p>

                <div>
                  <h3 className="font-medium mb-1 sm:mb-2">CARACTERÍSTICAS:</h3>
                  <ul className="list-disc pl-4 sm:pl-5 space-y-0.5 sm:space-y-1 text-[10px] sm:text-xs">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <p className="text-[10px] sm:text-xs">
                  <span className="font-medium">Material del jarrón:</span>{" "}
                  {product.material}
                </p>

                {product.dimensions && (
                  <p className="text-[10px] sm:text-xs">
                    <span className="font-medium">Dimensiones:</span>{" "}
                    {product.dimensions}
                  </p>
                )}

                {product.color && (
                  <p className="text-[10px] sm:text-xs">
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
  );
}
