import type { IpLocationData } from "../types/IpAddress";
import { TypesErrors } from "../constants";
import { VerificarError } from "./index";


export const normalizeError = (data: IpLocationData) => {
    if (VerificarError({ data, codigo: TypesErrors.Bogon.codigo, palabraIncluida: TypesErrors.Bogon.palabraIncluida })) {
        return {
            type: TypesErrors.Bogon.type,
            message: TypesErrors.Bogon.message,
        };
    }

    if (VerificarError({ data, codigo: TypesErrors.Dominio.codigo, palabraIncluida: TypesErrors.Dominio.palabraIncluida })) {
        return {
            type: TypesErrors.Dominio.type,
            message: TypesErrors.Dominio.message,
        };
    }

    return {
        type: TypesErrors.Desconocido.type,
        message: TypesErrors.Desconocido.message,
    };
};
