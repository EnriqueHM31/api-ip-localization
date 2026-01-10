import { FaSearch } from "react-icons/fa";
import Etiqueta from "../components/Atomos/Etiqueta";
import FondoWave from "../components/Atomos/FondoWave";
import FormIpAddress from "../components/sections/IpAddress";

export default function Hero() {
    return (
        <div className="max-w-7xl w-full flex flex-col items-center justify-center mx-auto">

            <Etiqueta text="Encontrar la ubicación de una IP" icon={<FaSearch />} />

            <section className="flex flex-col items-center justify-center py-5 gap-8   w-full ">
                <h1 className="text-white text-6xl font-bold mt-5">Search IP Address</h1>

                <div className="flex items-center flex-col gap-5 w-full ">
                    <FormIpAddress />
                </div>
            </section>

            <FondoWave />
        </div>
    )

}