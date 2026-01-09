import { useRef, useState, type FormEvent, type KeyboardEvent } from "react";
const apiKey = import.meta.env.VITE_KEY_API_IP;
const URL_PETICION = `https://api.ipgeolocation.io/v2/ipgeo?apiKey=${apiKey}&ip=`
export default function FormIpAddress() {
    const [values, setValues] = useState(["", "", "", ""]);
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, value: string) => {
        if (!/^\d{0,3}$/.test(value)) return;

        const newValues = [...values];
        newValues[index] = value;
        setValues(newValues);

        if (value.length === 3 && index < 3) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (
        index: number,
        e: KeyboardEvent<HTMLInputElement>
    ) => {
        if (e.key === "Backspace" && values[index] === "" && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    function obtenerLocalizacionIP(event: FormEvent<HTMLFormElement>, ip: string) {
        event.preventDefault();
        return fetch(URL_PETICION + ip)
            .then((response) => response.json())
            .then((data) => {
                console.log("Localización de la IP:", data);
                return data;
            })
            .catch((error) => {
                console.error("Error al obtener la localización de la IP:", error);
            });
    }

    const ipValue = values.join(".");

    return (
        <form className="flex items-center flex-col gap-5 w-full max-w-4xl" onSubmit={(e) => obtenerLocalizacionIP(e, ipValue)}>

            <div className="flex gap-2 justify-end my-5 ">
                {values.map((val, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <input
                            ref={(el) => {
                                inputsRef.current[index] = el;
                            }}
                            type="text"
                            inputMode="numeric"
                            id={`input-${index}`}
                            maxLength={3}
                            value={val}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className=" w-28 h-14 bg-white text-3xl text-center font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
            "
                        />
                        {index < 3 && (
                            <span className="text-4xl h-14 font-bold select-none text-white flex items-end">
                                .
                            </span>
                        )}
                    </div>
                ))}

            </div>
            <input type="hidden" value={ipValue} />
            <button type="submit" className="bg-blue-600 cursor-pointer text-white px-8 py-3 rounded-2xl font-bold text-2xl" >Buscar</button>
        </form>
    );
}
