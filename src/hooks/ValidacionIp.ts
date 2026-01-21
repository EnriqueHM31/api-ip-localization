import { useEffect, useState } from "react";
import { obtenerLocalizacionIP } from "../services/obtenerLocalizacion";
import type { IpLocationData } from "../types/IpAddress";
import { normalizeError } from "../utils/error";
import type { UseValidationIpResult } from "../types/Hooks";
import { toast } from "sonner";

export function useValidationIp(ip?: string): UseValidationIpResult {

    const [data, setData] = useState<IpLocationData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<UseValidationIpResult["error"]>();

    useEffect(() => {
        if (!ip) return;

        const fetchIp = async () => {
            setLoading(true);
            setError(undefined);
            const { error, data } = await obtenerLocalizacionIP({ ip });

            console.log(error);
            // ❌ Error de API
            if (error !== null) {
                const errorNormalized = normalizeError(error);
                setError(errorNormalized);
                setLoading(false);
                return;
            }
            toast.success("Localización obtenida", { duration: 3000 });
            setData(data as IpLocationData);
            setLoading(false);
        };

        fetchIp();
    }, [ip]);

    return { data, loading, error };
}
