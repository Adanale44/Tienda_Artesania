import Navbar from "@/components/navbar"
import BackButton from "@/components/back-button"
import SearchBar from "@/components/search-bar"

export default function SobreNosotros() {
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

          {/* About Us Content */}
          <div className="space-y-4 mb-8">
            <h1 className="text-2xl font-medium text-center mb-6">Sobre nosostros</h1>
            <p className="text-sm">
              En un pequeño pueblo rodeado de paisajes tranquilos y caminos de tierra, nació una idea sencilla: crear
              jarras únicas, hechas completamente a mano, con la pasión de quienes las imaginan en cada trazo, en cada
              curva.
            </p>
            <p className="text-sm">
              Nuestra historia comenzó hace más de una década, cuando decidimos transformar nuestra pasión por la
              cerámica en un oficio y un lugar del hecho de barro. Las primeras piezas eran humildes, pero tenían algo
              especial: una belleza que brotaba a montones, colores inspirados en la tierra y contaba la sensación
              "hecho a mano" que tanto nos gusta.
            </p>
            <p className="text-sm">
              Con el tiempo, las personas comenzaron a notarlo. Primero vinieron los vecinos, luego visitantes
              ocasionales y, finalmente, personas de todas partes que querían llevar un pedacito de nuestro trabajo a
              sus casas. Las redes sociales hicieron su parte, mostrando al mundo estas piezas únicas que creaban
              nuestras manos.
            </p>
            <p className="text-sm">
              La tienda creció, se renovó. Sin perder su esencia, se convirtió en un espacio vivo, donde cada pieza
              sigue contando su propia historia. No hay dos iguales. Algunas parecen agua, otras vino, otras simplemente
              arte para contemplar.
            </p>
            <p className="text-sm">
              Hoy, esta tienda es un retrato fiel. No por sus ventas, sino porque logró lo más difícil: hacer que el
              mundo moderno se detenga un momento... para admirar una artería del barro y el corazón.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <Navbar />
    </main>
  )
}
