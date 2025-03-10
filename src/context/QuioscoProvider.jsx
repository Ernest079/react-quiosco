import { createContext, useState } from "react"
import { categorias as categoriasDB } from "../data/categorias"


const QuioscoContext = createContext();

export const QuioscoProvider = ({children}) => {

  const [categorias, setCategorias] = useState(categoriasDB);
  const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
  const [modal, setModal] = useState(false);

  const hanndleModal = () => {
    setModal(!modal);
  }

  const handleClickCategory = (id) => {
    const categoria = categorias.filter(categoria => categoria.id === id)[0]
    setCategoriaActual(categoria)
  }

  return (
    <QuioscoContext.Provider
      value = {{ 
        categorias,
        categoriaActual,
        handleClickCategory,
        modal,
        hanndleModal,
      }}
    >
      {children}
    </QuioscoContext.Provider>
    
  )
}

export default QuioscoContext;
