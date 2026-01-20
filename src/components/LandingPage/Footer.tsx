import {
    FaEnvelope,
    FaMapMarkerAlt
} from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import { toast } from "sonner";

export default function Footer() {

    const handleCopiarEmail = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        if (!navigator.clipboard) {
            toast.error("No se pudo copiar el correo electrónico");
            return;
        };
        navigator.clipboard.writeText("luisenriquehernandezmarin0@gmail.com");
        e.currentTarget.blur();
        toast.success("Correo electrónico copiado");
    }

    return (
        <div className="relative">
            <footer className="bg-white text-gray-900 z-50">
                <div className="max-w-7xl mx-auto">

                    <div className="mx-auto flex md:flex-row flex-col  justify-between items-start max-w-7xl gap-10 px-6 py-3 ">
                        {/* BRAND */}
                        <div className="space-y-4 flex-1">
                            <div className="flex items-center justify-center md:justify-start gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-white font-bold">
                                    HM
                                </div>
                                <span className="text-lg font-semibold text-black">
                                    HM Projects
                                </span>
                            </div>

                            <p className="text-sm text-blue-950 text-center md:text-left">
                                Diseño y desarrollo de experiencias web modernas, rápidas y escalables.
                            </p>

                            <ul className="space-y-2 text-sm flex flex-col gap-2 items-center md:items-start">
                                <li className="flex items-center gap-2">
                                    <FaEnvelope className="text-blue-950" />
                                    lxxxxxxxx@gmail.com
                                    <button className="ml-2 text-blue-950 hover:text-blue-600 transition-all duration-300 cursor-pointer" onClick={handleCopiarEmail}>
                                        <IoCopy />
                                    </button>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-blue-950" />
                                    México
                                </li>
                            </ul>
                        </div>

                        <div className="flex-1"></div>


                        {/* NEWSLETTER */}
                        <div className="flex-1 flex flex-col items-center md:items-start">
                            <h4 className="mb-4 text-sm font-semibold  tracking-wider text-black">
                                Enviar comentarios
                            </h4>

                            <form className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full rounded-md bg-white px-4 py-2 text-sm  text-blue-950 outline-none ring-1 ring-zinc-700 focus:ring-2 focus:ring-blue-600"
                                />
                                <input
                                    type="text"
                                    placeholder="Comentario"
                                    className="w-full rounded-md bg-white px-4 py-2 text-sm text-blue-950 outline-none ring-1 ring-zinc-700 focus:ring-2 focus:ring-blue-600"
                                />
                                <button
                                    type="submit"
                                    className="w-full rounded-md  bg-blue-950 py-2 text-sm font-semibold text-white  cursor-pointer hover:bg-blue-600 transition-all duration-400"
                                >
                                    Enviar Comentario
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* BOTTOM */}
                    <div className="border-t-2 border-blue-950 py-4 text-center text-xs text-blue-950 mx-5 md:mx-0">
                        © {new Date().getFullYear()} HM Projects. Todos los derechos reservados.
                    </div>
                </div>
            </footer>
        </div>
    );
}
