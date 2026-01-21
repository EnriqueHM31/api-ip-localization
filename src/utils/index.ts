
export const valueOrNS = (value?: string | null) =>
  value && value.trim() !== "" ? value : "N/S";

export function VerificarError({ error, codigo, palabraIncluida, }: { error: string; codigo: string; palabraIncluida: string; }) {
  return (
    error?.includes(codigo) ||
    error?.includes(palabraIncluida)
  );
}
