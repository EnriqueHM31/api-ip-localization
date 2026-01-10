import { URL_PETICION } from "../config";
import { toast } from "sonner";
import type { IpLocationData } from "../types/IpAddress";


export async function obtenerLocalizacionIP({ ip, }: { ip: string; }): Promise<IpLocationData> {
    try {
        const response = await fetch(URL_PETICION + ip);
        const data = await response.json();

        if (!response.ok) {
            console.log({ data })
            return data
        }

        toast.success("Se encontró la localización de la IP");
        return data as IpLocationData;
    } catch (error) {
        toast.error("No se pudo obtener la localización de la IP");
        throw error; // ❗ importante
    }
}
