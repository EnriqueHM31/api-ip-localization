export interface UseValidationIpResult {
    data?: IpLocationData;
    loading: boolean;
    error?: {
        type: string;
        message: string;
    };
};