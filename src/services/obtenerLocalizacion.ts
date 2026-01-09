import type { FormEvent } from "react";
import { URL_PETICION } from "../config";
import { toast } from "sonner";


export function obtenerLocalizacionIP(event: FormEvent<HTMLFormElement>, ip: string) {
    event.preventDefault();
    return fetch(URL_PETICION + ip)
        .then((response) => response.json())
        .then((data) => {
            toast.success("Se encontró la localización de la IP");
            return data;
        })
        .catch(() => {
            toast.error("Error al obtener la localización de la IP");
        });
}