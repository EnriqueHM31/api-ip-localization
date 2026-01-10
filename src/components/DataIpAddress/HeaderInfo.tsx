import type { HeaderInfoProps } from "../../types/Components";

export default function HeaderInfo({ ip, location }: HeaderInfoProps) {
    return (
        <header className="flex items-center justify-between border-b border-gray-400 py-6 w-full max-w-7xl" >
            <div>
                <h1 className="text-4xl font-bold text-center text-white">
                    Información de la IP {ip}
                </h1>
            </div>
            <div className="flex items-center gap-3 justify-center">
                <span className="text-4xl text-white flex items-center justify-center">{location.country_emoji}</span>
                <img
                    src={location.country_flag}
                    alt={location.country_name}
                    className=" object-contain rounded shadow"
                />
            </div>
        </header >
    )
}   