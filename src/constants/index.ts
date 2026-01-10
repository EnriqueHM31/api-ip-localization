
export const BottonsKeys = {
    espacio: "Backspace",
    vacio: "",
} as const;

export const highlightColors = {
    sucess: "success",
    danger: "danger",

} as const;

export const TypesErrors = {
    Bogon: { type: "BOGON", message: "La IP es privada o local y no puede ser geolocalizada", palabraIncluida: "bogon", codigo: "1612769" },
    Desconocido: { type: "UNKNOWN", message: "Error desconocido" },

    Dominio: {
        type: "DOMINIO",
        message: "No se encontró el dominio especificado",
        palabraIncluida: "domain",
        codigo: "domain"
    }
}