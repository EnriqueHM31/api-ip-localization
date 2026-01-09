interface PropsEtiqueta {
    text: string;
    icon: React.ReactNode;
}

export default function Etiqueta({ text, icon }: PropsEtiqueta) {
    return (
        <div className="bg-white text-blue-950 font-bold rounded-2xl flex items-center gap-2 pe-4 max-w-fit mx-auto mt-5">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-tl-2xl rounded-bl-2xl">
                {icon}
            </div>
            <p>{text}</p>
        </div>
    )
}