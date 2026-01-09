import { FaGithub } from "react-icons/fa"
import LinkButton from "./LinkButton"
import ICONO from "../../public/icon.png"


export default function NavBar() {
    return (
        <nav className="flex justify-between items-center py-1 px-8">
            <div className="flex items-center gap-4">
                <picture className="size-12 bg-white rounded-full p-2 object-cover flex items-center justify-center">
                    <img src={ICONO} alt="logo" className=" object-cover" />
                </picture>
                <h1 className="text-white text-2xl font-bold">Search IP Address</h1>
            </div>
            <LinkButton text="Portafolio de proyectos HM" icon={<FaGithub />} />
        </nav>
    )
}