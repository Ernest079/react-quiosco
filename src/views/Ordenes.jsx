import useSWR from "swr"
import { clienteAxios } from "../config/axios";
import { formatPrice } from "../helpers";
import { useQuiosco } from "../hooks/useQuiosco";

export const Ordenes = () => {
  const token = localStorage.getItem('AUTH_TOKEN');
  const fetcher = () => {
    return (clienteAxios('/api/pedidos',{
      headers:{
        Authorization: `Bearer ${token}`
      }
    }))
  }
  const {data, error, isLoading} = useSWR('/api/pedidos', fetcher, {
    refreshInterval: 1000,
  });
  
  const {handleCompletar} = useQuiosco();

  if(isLoading){
    return "Cargando..."
  }
  console.log(data.data.data);
  return (
    <div>
      <h1 className="text-4xl font-black">Ordenes</h1>
      <p className="text-2xl my-10">Administrador de Ordenes</p>
      <div className="grid grid-cols-2 gap-2">
        {data.data.data.map(pedido => (
          <div key={pedido.id} className="p-5 bg-white shadow space-y-2 border-b">
            <p className="text-xl font-bold text-slate-600">
              Contenido del pedido: 
            </p>
            {
              pedido.productos.map(producto => (
                <div key={producto.id} className="border-b border-b-slate-200 last-of-type:border-none py-4">
                  <p className="text-sm">ID: {producto.id}</p>
                  <p>{producto.nombre}</p>
                  <p>Cantidad: {''}
                    <span className="font-bold">{producto.pivot.cantidad}</span>
                  </p>
                </div>
              ))
            }
            <p className="text-lg font-bold text-slate-600">
              Cliente: {''}
              <span className="font-normal">{pedido.user.name}</span>
            </p>
            <p className="text-lg font-bold text-amber-500">
              Total: {''}
              <span className="font-normal text-slate-600">{formatPrice(pedido.total)}</span>
            </p>
            <button type="button" name="" id=""
                className={"bg-yellow-400 hover:bg-amber-500 px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer"}
                onClick={() => handleCompletar(pedido.id)}
            >
              Completar
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
