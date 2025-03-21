import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth";

export const AdminSidebar = () => {
  const {logout} = useAuth({middleware: 'auth'});
  
  return (
    <aside className="md:w-72 h-screen">
      <div className="p-4">
        <img src="/img/logo.svg" alt="imagen logotipo" className="w-40"/>
      </div>
      <nav className="p-4 flex flex-col">
        <Link to='/admin' className='font-bold text-lg'>Ordenes</Link>
        <Link to='/admin/productos' className='font-bold text-lg'>Productos</Link>
      </nav>
      <div className="my-5 px-5">
      <button type="button"
          className="cursor-pointer text-center bg-red-500 hover:bg-red-700 text-white w-full p-3 font-bold truncate"
          onClick={logout}
        >
          Cerrar Sesión
        </button>
      </div>
    </aside>
  )
}
