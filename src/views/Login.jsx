
export const Login = () => {
  return (
    <>
    <h1 className="text-4xl font-black">L O G I N</h1>
    <p>To make an order you should login</p>
    <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
      <form action="">
        
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
        
        <input type="submit" 
          value = "Login"
          className="bg-yellow-500 text-white hover:bg-yellow-600 w-full mt-5 p-3 uppercase font-bold cursor-pointer"
        />
      </form>
    </div>
    <nav className="mt-5">
      <a href="/auth/registro"> Don't have an account? Create one </a>
    </nav>
  </>
  )
}
