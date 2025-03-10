import { formatPrice } from "../helpers"
import { useQuiosco } from "../hooks/useQuiosco"

export const Producto = ({nombre, precio, imagen, categoria_id, id}) => {
  
  const {hanndleModal} = useQuiosco();
  
  return (
    <div className="border-0 p-3 shadow bg-white">
      <img src={`/img/${imagen}.jpg`} alt={`imagen ${nombre}`} 
        className="w-full"
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatPrice(precio)}
        </p>
        <button type="button"
          className="bg-yellow-500 hover:bg-yellow-700 text-white w-full p-3 font-bold mt-5 uppercase cursor-pointer"
          onClick={hanndleModal}
        >
          Agregar
        </button>
      </div>
    </div>
  )
}
