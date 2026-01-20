import { FaSearch } from "react-icons/fa";
import Etiqueta from "../components/Atomos/Etiqueta";
import FormIpAddress from "../components/sections/IpAddress";

export default function Hero() {
    return (
        <div className=" md:max-w-7xl w-full flex flex-col items-center justify-center mx-auto">

            <Etiqueta text="Encontrar la ubicación de una IP" icon={<FaSearch />} />

            <section className="flex flex-col items-center justify-center py-5 gap-8 w-full  mt-5 mb-50">
                <h1 className="text-white text-3xl md:text-6xl font-bold mt-5 text-center">Search IP Address</h1>

                <div className="flex items-center flex-col gap-5 w-full ">
                    <FormIpAddress />
                </div>
            </section>

        </div>
    )

}