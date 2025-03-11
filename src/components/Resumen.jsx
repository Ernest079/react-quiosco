import { formatPrice } from "../helpers";
import { useQuiosco } from "../hooks/useQuiosco"
import { ResumenProducto } from "./ResumenProducto";

export const Resumen = () => {
  const {pedido, total} = useQuiosco();

  const comprobarPedido = () => pedido.length === 0;
  

  return (
    <aside className="w-72 h-screen overflow-y-scroll p-5">
      <h1 className="text-4xl font-black">Mi Pedido</h1>
      <p className="text-lg my-5">
        Aqui podras ver el resumen de tu pedido
      </p>
      <div className="py-10">
        {
          pedido.length === 0 ? (
            <p className="text-center text-2xl">
              NO hay elementos aun
            </p>
          ) : (            
              pedido.map(producto => (
                <ResumenProducto producto = {producto}
                  key={producto.id}
                />
              ))
          )
        }
      </div>
      <p className="text-xl mt-10">
        Total: {}
        {formatPrice(total)}
      </p>
      {
        !comprobarPedido() && (
          <form className="w-full">
            <div className="mt-5">
              <input type="submit" name="" id="" value="Confirmar Pedido"
                className={"bg-yellow-400 hover:bg-amber-500 px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer"}
                disabled = {comprobarPedido()}
              />

            </div>
          </form>
        )  
        
      }
    </aside>
  )
}
