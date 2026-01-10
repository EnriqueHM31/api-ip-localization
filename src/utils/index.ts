import type { IpLocationData } from "../types/IpAddress";

export const valueOrNS = (value?: string | null) =>
  value && value.trim() !== "" ? value : "N/S";

export function VerificarError({ data, codigo, palabraIncluida, }: { data: IpLocationData; codigo: string; palabraIncluida: string; }) {
  return (
    data?.message?.includes(codigo) ||
    data?.message?.includes(palabraIncluida)
  );
}
