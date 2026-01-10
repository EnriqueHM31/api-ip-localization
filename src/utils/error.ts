import type { IpLocationData } from "../types/IpAddress";
import { TypesErrors } from "../constants";


export const normalizeError = (data: IpLocationData) => {
    if (data?.message?.includes(TypesErrors.Bogon.codigo) || data?.message?.includes(TypesErrors.Bogon.palabraIncluida)) {
        return {
            type: TypesErrors.Bogon.type,
            message: TypesErrors.Bogon.message,
        };
    }

    return {
        type: TypesErrors.Desconocido.type,
        message: TypesErrors.Desconocido.message,
    };
};
