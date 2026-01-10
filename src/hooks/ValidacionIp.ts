import { useEffect, useState } from "react";
import { obtenerLocalizacionIP } from "../services/obtenerLocalizacion";
import type { IpLocationData } from "../types/IpAddress";
import { normalizeError } from "../utils/error";
import type { UseValidationIpResult } from "../types/hooks";

export function useValidationIp(ip?: string): UseValidationIpResult {

    const [data, setData] = useState<IpLocationData>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<UseValidationIpResult["error"]>();



    useEffect(() => {
        if (!ip) return;

        const fetchIp = async () => {
            setLoading(true);
            setError(undefined);

            const response = await obtenerLocalizacionIP({ ip });

            // ❌ Error de API
            if (response?.message) {
                const normalized = normalizeError(response);
                setError(normalized);
                setLoading(false);
                return;
            }

            setData(response as IpLocationData);
            setLoading(false);
        };

        fetchIp();
    }, [ip]);

    return { data, loading, error };
}
