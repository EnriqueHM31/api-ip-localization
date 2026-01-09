import NavBar from "./components/NavBar"
import FondoWave from "./components/FondoWave"
import Etiqueta from "./components/Etiqueta"
import { FaSearch } from "react-icons/fa";
import Hero from "./pages/Hero"

function App() {

  return (
    <div className="w-full min-h-screen animated-bg flex pt-10 flex-col relative">
      <NavBar />

      <Etiqueta text="Encontrar la ubicación de una IP" icon={<FaSearch />} />

      <Hero />

      <FondoWave />
    </div>
  )
}

export default App
