
export const BottonsKeys = {
    espacio: "Backspace",
    vacio: "",
} as const;

export const highlightColors = {
    sucess: "success",
    danger: "danger",

} as const;

export const TypesErrors = {
    Bogon: {
        type: "BOGON",
        message: "La IP es privada o local y no puede ser geolocalizada",
        palabraIncluida: "bogon",
        codigo: "1612769"
    },
    Dominio: {
        type: "DOMINIO",
        message: "No se encontró el dominio especificado",
        palabraIncluida: "domain",
        codigo: "domain"
    },
    Requerida: {
        type: "REQUIRED",
        message: "La IP es requerida",
        palabraIncluida: "requerida",
        codigo: "requerida"
    },
    Invalido: {
        type: "INVALIDO",
        message: "La IP es inválida",
        palabraIncluida: "inválida",
        codigo: "inválida"
    },
    Servicio: {
        type: "SERVICE",
        message: "El servicio no está disponible",
        palabraIncluida: "servicio",
        codigo: "servicio"
    },
    Servidor: {
        type: "SERVER",
        message: "El servidor no está disponible",
        palabraIncluida: "servidor",
        codigo: "servidor"
    },

    Desconocido: {
        type: "UNKNOWN",
        message: "Error desconocido"
    },
} as const;