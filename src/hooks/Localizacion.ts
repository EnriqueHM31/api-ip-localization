import { useRef, useState, type KeyboardEvent } from "react";
import { BottonsKeys } from "../constants";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function useLocalizacion() {
    const [values, setValues] = useState(["", "", "", ""]);
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
    const navigate = useNavigate();

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

    const isValidIP = (ip: string) => {
        const parts = ip.split(".");
        if (parts.length !== 4) return false;

        return parts.every(
            (part) =>
                part !== "" &&
                !isNaN(Number(part)) &&
                Number(part) >= 0 &&
                Number(part) <= 255
        );
    };

    const handleBuscar = () => {
        if (!isValidIP(ipValue)) {
            toast.error("La IP introducida no es válida");
            return;
        }
        navigate(`/${ipValue}`);
    };

    return {
        values,
        inputsRef,
        handleChange,
        handleKeyDown,
        ipValue,
        handleBuscar,
        isValidIP
    }

}