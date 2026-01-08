import { FaGithub } from "react-icons/fa"
export default function NavBar() {
    return (
        <nav className="flex justify-between items-center py-1 px-8">
            <div className="flex items-center gap-4">
                <picture className="size-12 bg-white rounded-full p-2 object-cover flex items-center justify-center">
                    <img src="/icon.png" alt="logo" className=" object-cover" />
                </picture>
                <h1 className="text-white text-2xl font-bold">Search IP Address</h1>
            </div>
            <a href="https://github.com/EnriqueHM31?tab=repositories" target="_blank" className="bg-white text-blue-950 px-4 py-2 rounded-md font-bold flex items-center gap-2 cursor-pointer hover:bg-blue-600 transition-all duration-300 hover:text-white ease-in">
                <p>Portafolio de proyectos HM</p>
                <FaGithub />
            </a>
        </nav>
    )
}