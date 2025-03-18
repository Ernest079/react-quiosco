import { createContext, useEffect, useState } from "react"
// import { categorias as categoriasDB } from "../data/categorias"
import { toast } from "react-toastify";

import { clienteAxios } from "../config/axios";


const QuioscoContext = createContext();

export const QuioscoProvider = ({children}) => {

  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [modal, setModal] = useState(false);
  const [producto, setProducto] = useState({});
  const [pedido, setPedido] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0);
    setTotal(nuevoTotal);
  }, [pedido])
  
  const obtenerCategorias = async() => {
    const token = localStorage.getItem('AUTH_TOKEN');

    try {
      const {data} = await clienteAxios('/api/categorias',{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
      setCategorias(data.data);
      setCategoriaActual(data.data[0]);
    } catch (error) {
      console.log(error);
    } 
  }

  useEffect(() => {
    obtenerCategorias();
  }, [])
  

  const hanndleModal = () => {
    setModal(!modal);
  }

  const handleClickCategory = (id) => {
    const categoria = categorias.filter(categoria => categoria.id === id)[0]
    setCategoriaActual(categoria);
  }

  const handdleSetProducto = (producto) => {
    setProducto(producto);
  }

  const agregarPedido = ({categoria_id, ...producto}) => {
    
    if(pedido.some(peidoState => peidoState.id === producto.id)){
      const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ?
        producto : pedidoState);
      setPedido(pedidoActualizado);
      toast.success('Guardado Correctamente');
    } else {
      setPedido([
        ...pedido,
        producto
      ]);
      toast.success('Agregado al Pedido');
    }
  }

  const editarCantidad = (id) => {
    const productoActualizar = pedido.filter(producto => producto.id === id)[0];
    setProducto(productoActualizar);
    setModal(!modal);
  }

  const eliminarProductoPedido = (id) => {
    const pedidoActualizado = pedido.filter(producto => producto.id !== id);
    setPedido(pedidoActualizado);
    toast.success('Pedido Eliminado');
  }

  const handleSubmitNewOrder = async () => {
    const token = localStorage.getItem('AUTH_TOKEN');

    try {
      const {data} = await clienteAxios.post('/api/pedidos', {
        total,
        productos: pedido.map(producto => {
          return {
            id: producto.id,
            cantidad: producto.cantidad
          }
        }),
      },{
        headers:{
          Authorization: `Bearer ${token}`,
        }
      });
      toast.success(data.message);
      setTimeout(() => {
        setPedido([]);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }

  const handleCompletar = async (id) => {
    const token = localStorage.getItem('AUTH_TOKEN');

    try {
      await clienteAxios.put(`/api/pedidos/${id}`, null, {
        headers:{
          Authorization: `Bearer ${token}`,

        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleProductoAgotado = async id => {
    const token = localStorage.getItem('AUTH_TOKEN')
    try {
        await clienteAxios.put(`/api/productos/${id}`, null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (error) {
        console.log(error)
    }
}

  return (
    <QuioscoContext.Provider
      value = {{ 
        categorias,
        categoriaActual,
        handleClickCategory,
        modal,
        hanndleModal,
        producto,
        handdleSetProducto,
        pedido,
        agregarPedido,
        editarCantidad,
        eliminarProductoPedido,
        total,
        handleSubmitNewOrder,
        handleCompletar,
        handleProductoAgotado,
      }}
    >
      {children}
    </QuioscoContext.Provider>
    
  )
}

export default QuioscoContext;
