import useSWR from "swr";
import { Producto } from "../components/Producto"
// import { productos } from "../data/productos"
import { useQuiosco } from "../hooks/useQuiosco"
import { clienteAxios } from "../config/axios";


export const Inicio = () => {

  const {categoriaActual} = useQuiosco();

  //Consulta SWR
  const token = localStorage.getItem('AUTH_TOKEN');
  const fetcher = () => clienteAxios('/api/productos', {
    headers: {
      Authorization: `Bearer: ${token}`
    }
  }).then(data => data.data);
  const {data, error, isLoading} = useSWR('/api/productos', fetcher,{
    refreshInterval: 1000,
  });

  if(isLoading){
    return 'Cargando...'
  }
  const products = data.data.filter(product => product.categoria_id === categoriaActual.id);

  return (
    <>
      <h1 className="text-4xl font-black">{categoriaActual.nombre}</h1>
      <p className="text-2xl my-10">Elige y personaliza tu pedido</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {
          products.map(producto => (
            <Producto key={producto.imagen} 
              producto = {producto}
              botonAgregar = {true}
            />
          ))
        }
      </div>
    </>
  )
}
