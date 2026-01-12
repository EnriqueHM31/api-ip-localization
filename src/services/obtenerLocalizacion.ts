import { URL_PETICION } from "../config";
import { toast } from "sonner";
import type { IpLocationData } from "../types/IpAddress";


export async function obtenerLocalizacionIP({ ip, }: { ip: string; }): Promise<IpLocationData> {
    const url = URL_PETICION + `/${ip}`;
    console.log({ url })
    try {
        const response = await fetch(url)
        console.log({ response })
        const data = await response.json();
        console.log({ data })

        if (!response.ok) {
            return data as IpLocationData;
        }

        toast.success("Se encontró la localización de la IP");
        return data as IpLocationData;
    } catch (error) {
        toast.error("No se pudo obtener la localización de la IP");
        throw error; // ❗ importante
    }
}
