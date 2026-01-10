export type NormalizedError =
    | { type: "BOGON"; message: string }
    | { type: "NETWORK"; message: string }
    | { type: "UNKNOWN"; message: string };