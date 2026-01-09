const Key = {
    espacio: "Backspace",
} as const;

import { useRef, useState, type KeyboardEvent } from "react";
import { obtenerLocalizacionIP } from "../services/obtenerLocalizacion";

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

    const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === Key.espacio && values[index] === "" && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };


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
                            className=" w-28 h-14 bg-white text-3xl text-center font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <button type="submit" className="bg-blue-600 cursor-pointer text-white px-8 py-2 rounded-2xl font-bold text-2xl hover:bg-white transition-all duration-300 hover:text-blue-950 ease-in" >Buscar</button>
        </form>
    );
}
