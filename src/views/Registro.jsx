
export const Registro = () => {
  return (
    <>
      <h1 className="text-4xl font-black">Create an account</h1>
      <p>Crea tu cuenta llenando el formulario</p>
      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form action="">
          <div className="mb-4">
            <label className="text-slate-800"
              htmlFor="name"
            >
              Name:
            </label>
            <input type="text" 
              id="name"
              className="mt-2 w-full p-3 bg-gray-50"
              name = "name"
              placeholder="Enter your name"
            />
          </div>
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
            />
          </div>
          <div className="mb-4">
            <label className="text-slate-800"
              htmlFor="password_confirmation"
            >
              Confirm your password:
            </label>
            <input type="password" 
              id="password_confirmation"
              className="mt-2 w-full p-3 bg-gray-50"
              name = "password_confirmation"
              placeholder="Confirm your password"
            />
          </div>
          <input type="submit" 
            value = "Register"
            className="bg-indigo-600 text-white hover:bg-indigo-800 w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          />
        </form>
      </div>
      <nav className="mt-5">
        <a href="/auth/login"> DoCreate one </a>
      </nav>
    </>
  )
}
