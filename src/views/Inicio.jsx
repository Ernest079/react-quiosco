import { Producto } from "../components/Producto"
import { productos } from "../data/productos"
import { useQuiosco } from "../hooks/useQuiosco"

export const Inicio = () => {

  const {categoriaActual} = useQuiosco();

  const products = productos.filter(product => product.categoria_id === categoriaActual.id);

  return (
    <>
      <h1 className="text-4xl font-black">{categoriaActual.nombre}</h1>
      <p className="text-2xl my-10">Elige y personaliza tu pedido</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {
          products.map(producto => (
            <Producto key={producto.imagen} 
              producto = {producto}
            />
          ))
        }
      </div>
    </>
  )
}
