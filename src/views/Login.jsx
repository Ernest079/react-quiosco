import { createRef, useState } from "react"
import { Link } from "react-router-dom";
import { Alerta } from "../components/Alerta";
import { useAuth } from "../hooks/useAuth";


export const Login = () => {

  const emailRef = createRef();
  const passwordRef = createRef();

  const [errores, setErrores] = useState([]);
  const {login} = useAuth({
    middleware: 'guest',
    url: '/'
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const datos = {
      email: emailRef.current.value,
      password : passwordRef.current.value,
    }
    login(datos, setErrores);
  }

  return (
    <>
    <h1 className="text-4xl font-black">L O G I N</h1>
    <p>To make an order you should login</p>
    <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
      <form
        onSubmit={handleSubmit}
        noValidate
      >
        {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null }
        <div className="mb-4">
          <label className="text-slate-800"
            htmlFor="email"
          >
            Email:
          </label>
          <input type="email" 
            id="email"
            className="mt-2 w-full p-3 bg-gray-50"
            name = "email"
            placeholder="Enter your email"
            ref={emailRef}
          />
        </div>
        <div className="mb-4">
          <label className="text-slate-800"
            htmlFor="password"
          >
            Password:
          </label>
          <input type="password" 
            id="password"
            className="mt-2 w-full p-3 bg-gray-50"
            name = "password"
            placeholder="Password"
            ref={passwordRef}
          />
        </div>
        
        <input type="submit" 
          value = "Login"
          className="bg-yellow-500 text-white hover:bg-yellow-600 w-full mt-5 p-3 uppercase font-bold cursor-pointer"
        />
      </form>
    </div>
    <nav className="mt-5">
      <Link to="/auth/registro"> Don't have an account? Create one </Link>
    </nav>
  </>
  )
}
