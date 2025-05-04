export interface Product {
    id: number
    name: string
    price: string
    image: string
    slug: string
    description: string
    features: string[]
    material: string
    dimensions?: string
    color?: string
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: "Jarrón de estudio desconocido - WGP retro vintage",
      price: "43.99 USD",
      image: "/placeholder.svg?height=200&width=200",
      slug: "jarron-estudio",
      description:
        "Jarrón de estudio vintage con acabado mate y diseño minimalista. Perfecto para decoración de interiores con estilo retro.",
      features: [
        "Diseño retro vintage de los años 70",
        "Acabado mate con textura suave al tacto",
        "Pieza única hecha a mano por artesanos locales",
        "Ideal para decoración de interiores",
      ],
      material: "Cerámica de alta calidad con esmalte mate",
      dimensions: "Alto: 25cm, Diámetro: 15cm",
      color: "Verde oliva con detalles en beige",
    },
    {
      id: 2,
      name: "Jarrón de cerámica marrón",
      price: "43.99 USD",
      image: "/placeholder.svg?height=200&width=200",
      slug: "jarron-ceramica-marron",
      description:
        "Elegante jarrón de cerámica en tono marrón chocolate con acabado brillante. Perfecto para arreglos florales o como pieza decorativa.",
      features: [
        "Acabado brillante de alta calidad",
        "Resistente a manchas y fácil de limpiar",
        "Diseño versátil que combina con diferentes estilos de decoración",
        "Base estable y resistente",
      ],
      material: "Cerámica esmaltada con acabado brillante",
      dimensions: "Alto: 30cm, Diámetro: 18cm",
      color: "Marrón chocolate",
    },
    {
      id: 3,
      name: "Jarrón de cerámica beige",
      price: "43.99 USD",
      image: "/placeholder.svg?height=200&width=200",
      slug: "jarron-ceramica-beige",
      description:
        "Jarrón de cerámica en tono beige con forma tradicional y acabado semi-mate. Ideal para espacios minimalistas y decoración nórdica.",
      features: [
        "Diseño tradicional con toques contemporáneos",
        "Acabado semi-mate que aporta elegancia",
        "Fabricado con técnicas artesanales",
        "Perfecto para flores secas o artificiales",
      ],
      material: "Cerámica artesanal con acabado semi-mate",
      dimensions: "Alto: 22cm, Diámetro: 12cm",
      color: "Beige arena",
    },
    {
      id: 4,
      name: "Jarrón De Fresa De Cerámica Para Decoración Del Hogar",
      price: "54.99 USD",
      image: "/placeholder.svg?height=200&width=200",
      slug: "jarron-fresa",
      description:
        "Divertido y original jarrón con forma de fresa en cerámica roja brillante. Perfecto para añadir un toque de color y alegría a cualquier espacio.",
      features: [
        "Diseño único con forma de fresa",
        "Color rojo vibrante con acabado brillante",
        "Detalles verdes en la parte superior simulando hojas",
        "Pieza de conversación ideal para cualquier habitación",
        "Perfecto como regalo original",
      ],
      material: "Cerámica de alta temperatura con esmalte brillante",
      dimensions: "Alto: 20cm, Ancho: 15cm",
      color: "Rojo brillante con detalles verdes",
    },
    {
      id: 5,
      name: "Set de 3 jarrones de cerámica Ingrid 14,5 cm",
      price: "53.99 USD",
      image: "/placeholder.svg?height=200&width=200",
      slug: "set-jarrones-ingrid",
      description:
        "Elegante set de 3 jarrones de cerámica en tonos marrones complementarios. Perfectos para crear composiciones decorativas en cualquier espacio.",
      features: [
        "Set de 3 jarrones de diferentes tonalidades de marrón",
        "Tamaño compacto ideal para espacios pequeños",
        "Diseño contemporáneo con líneas limpias",
        "Perfectos para usar juntos o por separado",
        "Acabado brillante de alta calidad",
      ],
      material: "Cerámica esmaltada con acabado brillante",
      dimensions: "Alto: 14.5cm, Diámetro: 10cm (cada jarrón)",
      color: "Diferentes tonos de marrón (claro, medio y oscuro)",
    },
  ]
  
  export function getProductBySlug(slug: string): Product | undefined {
    return products.find((product) => product.slug === slug)
  }
  
  export function getAllProducts(): Product[] {
    return products
  }
  