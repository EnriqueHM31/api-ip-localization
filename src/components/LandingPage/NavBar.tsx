import { FaGithub } from "react-icons/fa"
import LinkButton from "../Atomos/LinkButton"
import ICONO from "/icon.png"
import { Link, useLocation } from "react-router-dom";
import FormIpAddress from "../sections/IpAddress";
import { matchPath } from "react-router-dom";


export default function NavBar() {

    const location = useLocation();

    const isHome = matchPath(location.pathname, "/");
    return (
        <nav className={`flex 
            ${isHome ? "flex-row" : "flex-col"}
            md:flex-row justify-between items-center py-1  w-full md:max-w-7xl mx-auto px-3 md:px-0 gap-5 md:gap-0`}>
            <Link to="/" className="flex items-center gap-4">
                <picture className="size-8 md:size-12 bg-white rounded-full p-1 md:p-2 object-cover flex items-center justify-center">
                    <img src={ICONO} alt="logo" className=" object-cover" />
                </picture>
                <h1 className="text-white text-lg md:text-2xl font-bold">Search IP Address</h1>
            </Link>
            {
                location.pathname === "/" ?
                    <LinkButton text="Portafolio de proyectos HM" icon={<FaGithub />} /> :
                    <section className="flex items-center justify-center  w-full max-w-fit ">
                        <FormIpAddress styleForm="flex-col md:flex-row justify-end" styleInput="w-15 h-9" stylePoint="text-xl h-7" styleButton="px-4 py-2 text-sm" />
                    </section>
            }
        </nav>
    )
}