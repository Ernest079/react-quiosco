import { useQuiosco } from "../hooks/useQuiosco";

export const Categoria = ({nombre, id, icono}) => {

  const {handleClickCategory, categoriaActual} = useQuiosco();

  return (
    <div className={`${categoriaActual.id === id ? 'bg-amber-400' : 'bg-white'} flex items-center gap-4 border-0 w-full p-3 hover:bg-amber-400 cursor-pointer`}>
      
      <img src={`/img/icono_${icono}.svg`} alt="Imagen Icono" 
        className="w-12"
      />
      <button className="text-lg font-bold cursor-pointer truncate border" 
        type="button"
        onClick={() => handleClickCategory(id)}
      >
        {nombre}
      </button>
      
    </div>
  )
}
