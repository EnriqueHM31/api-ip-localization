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

    if (VerificarError({ data, codigo: TypesErrors.Requerida.codigo, palabraIncluida: TypesErrors.Requerida.palabraIncluida })) {
        return {
            type: TypesErrors.Requerida.type,
            message: TypesErrors.Requerida.message,
        };
    }

    if (VerificarError({ data, codigo: TypesErrors.Invalido.codigo, palabraIncluida: TypesErrors.Invalido.palabraIncluida })) {
        return {
            type: TypesErrors.Invalido.type,
            message: TypesErrors.Invalido.message,
        };
    }

    if (VerificarError({ data, codigo: TypesErrors.Servicio.codigo, palabraIncluida: TypesErrors.Servicio.palabraIncluida })) {
        return {
            type: TypesErrors.Servicio.type,
            message: TypesErrors.Servicio.message,
        };
    }

    if (VerificarError({ data, codigo: TypesErrors.Servidor.codigo, palabraIncluida: TypesErrors.Servidor.palabraIncluida })) {
        return {
            type: TypesErrors.Servidor.type,
            message: TypesErrors.Servidor.message,
        };
    }

    return {
        type: TypesErrors.Desconocido.type,
        message: TypesErrors.Desconocido.message,
    };
};
