import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import FondoWave from "../components/Atomos/FondoWave";
export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center py-5 gap-8 min-h-screen">
            <h1 className="text-white text-9xl font-bold animate-bounce ">404</h1>
            <p className="text-white text-4xl font-bold animate-bounce">La página que buscas no existe</p>
            <Link to="/" className="bg-blue-700 text-white px-4 py-2 rounded-md font-bold flex items-center gap-2 cursor-pointer hover:bg-white transition-all duration-300 hover:text-blue-950 ease-in">
                <FaHome />
                <p>Volver al inicio</p>
            </Link>

            <FondoWave />
        </div>
    )
}