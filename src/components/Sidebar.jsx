import { useAuth } from "../hooks/useAuth";
import { useQuiosco } from "../hooks/useQuiosco"
import { Categoria } from "./Categoria"


export const Sidebar = () => {
  const {categorias} = useQuiosco();
  const {logout, user} = useAuth({middleware: 'auth'});
  return (
    <aside className="md:w-72">
      <div className="p-4">
        <img src="img/logo.svg" alt="Imagen Logo" 
          className="w-40"
        />
      </div>
      <p className="my-10 text-xl text-center">{user?.name}</p>
      <div className="mt-10">
        {
          categorias.map(categoria => (
            <Categoria key={categoria.id}
              {...categoria}
            />
          ))
        }
      </div>
      <div className="my-5 px-5">
        <button type="button"
          className="cursor-pointer text-center bg-red-500 hover:bg-red-700 text-white w-full p-3 font-bold truncate"
          onClick={logout}
        >
          Cancelar Order
        </button>
      </div>
    </aside>
  )
}
