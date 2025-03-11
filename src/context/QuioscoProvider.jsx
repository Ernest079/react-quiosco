import { createContext, useState } from "react"
import { categorias as categoriasDB } from "../data/categorias"


const QuioscoContext = createContext();

export const QuioscoProvider = ({children}) => {

  const [categorias, setCategorias] = useState(categoriasDB);
  const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
  const [modal, setModal] = useState(false);
  const [producto, setProducto] = useState({});
  const [pedido, setPedido] = useState([]);

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

  const agregarPedido = ({categoria_id, imagen, ...producto}) => {
    setPedido([
      ...pedido,
      producto
    ])
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
      }}
    >
      {children}
    </QuioscoContext.Provider>
    
  )
}

export default QuioscoContext;
