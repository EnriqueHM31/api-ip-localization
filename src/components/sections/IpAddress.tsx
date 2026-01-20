import { useLocalizacion } from "../../hooks/Localizacion";
import type { PropsFormIpAddress } from "../../types/Components";

export default function FormIpAddress({ styleForm = "flex-col max-w-4xl ", styleInput = "w-16 h-10 md:w-28 md:h-14 text-lg md:text-3xl my-5 ", stylePoint = "text-4xl h-10 md:h-14", styleButton = "px-8 py-2 text-lg md:text-xl" }: PropsFormIpAddress) {

    const { values, inputsRef, handleChange, handleKeyDown, ipValue, handleBuscar } = useLocalizacion();

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleBuscar();
            }}
            className={`flex w-full  items-center gap-5 ${styleForm}`}
        >
            <div className="flex justify-end gap-2">
                {values.map((val, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <input
                            ref={(el) => {
                                inputsRef.current[index] = el;
                            }}
                            type="text"
                            inputMode="numeric"
                            maxLength={3}
                            id={`input-${index}`}
                            value={val}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className={`${styleInput} bg-white text-center font-semibold text-blue-950 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />

                        {index < 3 && (
                            <span className={`${stylePoint} font-bold select-none text-white`}>
                                .
                            </span>
                        )}
                    </div>
                ))}
            </div>

            <input type="hidden" value={ipValue} />

            <button
                type="submit"
                className={`${styleButton} bg-blue-600 cursor-pointer rounded-2xl font-bold text-white transition-all duration-300 hover:bg-white hover:text-blue-950`}
            >
                Buscar
            </button>
        </form>

    );
}
