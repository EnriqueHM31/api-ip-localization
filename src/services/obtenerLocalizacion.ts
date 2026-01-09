import type { FormEvent } from "react";
import { URL_PETICION } from "../config/IpAddress";


export function obtenerLocalizacionIP(event: FormEvent<HTMLFormElement>, ip: string) {
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