interface ProductCardProps {
  name: string
  price: string
  image: string
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="bg-[#d9ccb4] border border-[#373434] rounded-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/3 p-2">
          {/* Usamos la nueva clase image-container */}
          <div className="image-container">
            <img src={image || "/placeholder.svg?height=300&width=300"} alt={name} className="product-image" />
          </div>
        </div>

        <div className="sm:w-2/3 p-3 sm:p-4">
          <h3 className="text-sm sm:text-lg font-medium mb-1 sm:mb-2 line-clamp-2">{name}</h3>
          <p className="text-base sm:text-lg font-bold mb-2 sm:mb-4">{price}</p>

          <button className="buy-button text-sm sm:text-base py-1 px-4 sm:px-6">Comprar</button>

          <div className="text-[10px] sm:text-xs mt-2 sm:mt-4 hidden sm:block">
            <p className="mb-1">CARACTERÍSTICAS: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="mb-1">Material del jarrón: Aliquam id dolor sit amet tellus vulputate porttitor.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
