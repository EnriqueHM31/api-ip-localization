import IpVerificationCode from "./components/IpAddress"
import NavBar from "./components/NavBar"
import { FaSearch } from "react-icons/fa"

function App() {

  return (
    <div className="w-full min-h-screen animated-bg flex pt-10 flex-col relative">
      <NavBar />
      <div className="bg-white text-blue-950 font-bold rounded-2xl flex items-center gap-2 pe-4 max-w-fit mx-auto mt-5">
        <div className="bg-blue-600 text-white px-4 py-2 rounded-tl-2xl rounded-bl-2xl">
          <FaSearch />
        </div>
        <p>Encontrar la ubicación de una IP</p>
      </div>

      <section className="flex flex-col items-center justify-center py-5 gap-8">

        <h1 className="text-white text-6xl font-bold mt-20">Search IP Address</h1>

        <div className="flex items-center flex-col gap-5 w-full max-w-4xl">
          <IpVerificationCode />
        </div>
      </section>
      <div className="absolute bottom-0 flex items-end w-full h-full pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" >
          <path fill="#f3f4f5" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  )
}

export default App
