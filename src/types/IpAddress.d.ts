export type IpLocationData = {
    ip: string;
    location: {
        continent_name: string;
        country_name: string;
        country_name_official: string;
        country_capital: string;
        state_prov: string;
        city: string;
        zipcode: string;
        latitude: string;
        longitude: string;
        country_flag: string;
        country_emoji: string;
        is_eu: boolean;
    };
    country_metadata: {
        calling_code: string;
        tld: string;
        languages: string[];
    };
    currency: {
        code: string;
        name: string;
        symbol: string;
    };
    error?: string;
    message?: string
};