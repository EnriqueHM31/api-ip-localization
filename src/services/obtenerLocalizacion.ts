import { URL_PETICION } from "../config";
import { toast } from "sonner";
import type { IpLocationData } from "../types/IpAddress";


export function obtenerLocalizacionIP({ ip }: { ip: string }) {
    return fetch(URL_PETICION + ip)
        .then((response) => response.json())
        .then((data: IpLocationData) => {
            toast.success("Se encontró la localización de la IP");
            return data;
        })
        .catch(() => {
            toast.error("Error al obtener la localización de la IP");
        });
}