import Image from "next/image"

interface ProductCardProps {
  name: string
  price: string
  image: string
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="bg-[#d9ccb4] border border-[#373434] rounded-sm overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 bg-white p-2">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={200}
            height={200}
            className="w-full object-contain"
          />
        </div>

        <div className="md:w-2/3 p-4">
          <h3 className="text-lg font-medium mb-2">{name}</h3>
          <p className="text-lg font-bold mb-4">{price}</p>

          <button className="buy-button">Comprar</button>

          <div className="text-xs mt-4">
            <p className="mb-1">CARACTERÍSTICAS: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="mb-1">Material del jarrón: Aliquam id dolor sit amet tellus vulputate porttitor.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
