
export const valueOrNS = (value?: string | null) =>
  value && value.trim() !== "" ? value : "N/S";
