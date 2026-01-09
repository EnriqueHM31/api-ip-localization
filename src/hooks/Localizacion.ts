import { useRef, useState, type KeyboardEvent } from "react";
import { BottonsKeys } from "../constants";

export function useLocalizacion() {
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
        if (e.key === BottonsKeys.espacio && values[index] === BottonsKeys.vacio && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };


    const ipValue = values.join(".");

    return {
        values,
        inputsRef,
        handleChange,
        handleKeyDown,
        ipValue,
    }

}