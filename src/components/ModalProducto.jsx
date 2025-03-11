import { useEffect, useState } from "react";
import { formatPrice } from "../helpers";
import { useQuiosco } from "../hooks/useQuiosco"

export const ModalProducto = () => {

  const {hanndleModal, producto, agregarPedido, pedido} = useQuiosco();

  const {nombre, categoria_id, imagen, precio, id} = producto;
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {  
    if(pedido.some(peidoState => peidoState.id === producto.id)){
      const productoEdicion = pedido.filter(pedidoState => pedidoState.id === producto.id)[0];
    } 
  },[pedido])
  

  const handdleIncrement = () => {
    if(cantidad<5){
      setCantidad(cantidad + 1);
    }
  }

  const handdleDecrement = () => {
    if(cantidad >1){
      setCantidad(cantidad - 1);
    }
  }

  return (
    <>
      <div className="md:flex gap-10 ">
        <div className="md:w-1/3">
          <img src={`/img/${imagen}.jpg`} alt="Imagen Producto" />
        </div>
        <div className="md:w-2/3">
          <div className="flex justify-end">
            <button type="button" onClick={hanndleModal}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
          <h1 className="text-3xl font-bold mt-5">{nombre}</h1>
          <p className="mt-5 font-black text-4xl text-amber-500">{formatPrice(precio)}</p>
          <div className="flex gap-4 mt-5">
            <button onClick={handdleDecrement} type="button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
            <p className="text-3xl">{cantidad}</p>
            <button onClick={handdleIncrement} type="button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

            </button>
          </div>
          <button type="button" className="bg-yellow-500 hover:bg-amber-600 text-white px-5 py-2 mt-5 font-bold uppercase rounded cursor-pointer"
            onClick={() => {agregarPedido({...producto, cantidad}); hanndleModal();} }
          >
            Añadir al pedido
          </button>
        </div>
      </div>
    </>
  )
}
