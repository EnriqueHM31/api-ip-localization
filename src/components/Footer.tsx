import { FaGithub } from "react-icons/fa";
import FondoWave from "./FondoWave";

export default function Footer() {
    return (
        <div className="mt-50">
            <FondoWave />
            <footer className="flex items-center justify-between py-5 gap-8 w-full  mx-auto bg-white absolute bottom-0">
                <div className="flex max-w-7xl w-full mx-auto justify-between">

                    <p className="text-blue-950 text-lg font-bold"> ©2026 Proyectos HM</p>

                    <div className="flex items-center gap-2">
                        <p className="text-blue-950 text-lg font-bold">Proyectos HM</p>
                        <a href="https://github.com/ehmicky/proyectos-hm" target="_blank" rel="noreferrer" className="text-white text-lg font-bold">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </footer>

        </div>
    )
}