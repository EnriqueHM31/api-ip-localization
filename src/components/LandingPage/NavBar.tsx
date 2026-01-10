import { FaGithub } from "react-icons/fa"
import LinkButton from "../Atomos/LinkButton"
import ICONO from "/icon.png"
import { useLocation } from "react-router-dom";
import FormIpAddress from "../sections/IpAddress";


export default function NavBar() {

    const location = useLocation();
    return (
        <nav className="flex justify-between items-center py-1  w-full max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
                <picture className="size-12 bg-white rounded-full p-2 object-cover flex items-center justify-center">
                    <img src={ICONO} alt="logo" className=" object-cover" />
                </picture>
                <h1 className="text-white text-2xl font-bold">Search IP Address</h1>
            </div>
            {
                location.pathname === "/" ?
                    <LinkButton text="Portafolio de proyectos HM" icon={<FaGithub />} /> :
                    <section className="flex items-center justify-center  w-full max-w-fit py-8 ">
                        <FormIpAddress styleForm="flex-row justify-end" styleInput="w-15 h-9" stylePoint="text-xl h-7" styleButton="px-4 py-1 text-lg" />
                    </section>
            }
        </nav>
    )
}