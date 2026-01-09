import NavBar from "./components/NavBar"
import SectionHero from "./components/SectionHero"
import FondoWave from "./components/FondoWave"
import Etiqueta from "./components/Etiqueta"
import { FaSearch } from "react-icons/fa";

function App() {

  return (
    <div className="w-full min-h-screen animated-bg flex pt-10 flex-col relative">
      <NavBar />

      <Etiqueta text="Encontrar la ubicación de una IP" icon={<FaSearch />} />

      <SectionHero />

      <FondoWave />
    </div>
  )
}

export default App
