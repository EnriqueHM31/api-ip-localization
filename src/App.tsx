import IpVerificationCode from "./components/IpAddress"
import NavBar from "./components/NavBar"
import { FaSearch } from "react-icons/fa"


function App() {
  return (
    <div className="w-full min-h-screen animated-bg flex pt-10 flex-col ">
      <NavBar />
      <div className="bg-white text-blue-950 font-bold rounded-2xl flex items-center gap-2 pe-4 max-w-fit mx-auto mt-5">
        <div className="bg-blue-600 text-white px-4 py-2 rounded-tl-2xl rounded-bl-2xl">
          <FaSearch />
        </div>
        <p>Encontrar la ubicación de una IP</p>
      </div>

      <section className="flex flex-col items-center justify-center py-5 gap-8">

        <h1 className="text-white text-6xl font-bold mt-20">Search IP Address</h1>

        <form className="flex items-center flex-col gap-5 w-full max-w-4xl">
          <IpVerificationCode />
          <button type="submit" className="bg-blue-600 cursor-pointer text-white px-8 py-3 rounded-2xl font-bold text-2xl">Buscar</button>
        </form>
      </section>
    </div>
  )
}

export default App
