import { URL_PETICION } from "../config";
import type { IpLocationData } from "../types/IpAddress";

interface responseIpGeolocalizacion {
    message: string;
    error: string;
    data: IpLocationData | [];
}
export async function obtenerLocalizacionIP({ ip, }: { ip: string; }): Promise<responseIpGeolocalizacion> {
    const url = URL_PETICION + `/${ip}`;
    try {
        console.log(url);
        const response = await fetch(url)
        console.log(response);
        const json = await response.json();
        console.log(json);

        const { message, error, data } = json as responseIpGeolocalizacion;

        return { message, error, data };
    } catch (error) {
        console.error(error);
        return { message: "Error en el servidor", error: "No se pudo obtener la localización de la IP", data: [] };
    }
}
