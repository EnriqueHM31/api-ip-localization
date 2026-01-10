import { useLocalizacion } from "../../hooks/Localizacion";

interface PropsFormIpAddress {
    styleForm?: string;
    styleInput?: string;
    stylePoint?: string;
    styleButton?: string;
}
export default function FormIpAddress({ styleForm = "flex-col max-w-4xl ", styleInput = "w-28 h-14 text-3xl my-5", stylePoint = "text-4xl h-14", styleButton = "px-8 py-2 text-2xl" }: PropsFormIpAddress) {

    const { values, inputsRef, handleChange, handleKeyDown, ipValue, handleBuscar } = useLocalizacion();

    return (
        <form className={`flex items-center flex-col gap-5 w-full ${styleForm}`} >

            <div className="flex gap-2 justify-end  ">
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
                            className={` ${styleInput} text-blue-950  bg-white  text-center font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {index < 3 && (
                            <span className={`${stylePoint} font-bold select-none text-white flex items-end`}>
                                .
                            </span>
                        )}
                    </div>
                ))}

            </div>
            <input type="hidden" value={ipValue} />
            <button
                type="button"
                onClick={handleBuscar}
                className={`${styleButton} bg-blue-600 cursor-pointer text-white rounded-2xl font-bold  hover:bg-white transition-all duration-300 hover:text-blue-950 ease-in`}
            >
                Buscar
            </button>
        </form >
    );
}
