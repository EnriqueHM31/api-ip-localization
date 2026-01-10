import type { IpLocationData } from "./IpAddress";

export interface PropsEtiqueta {
    text: string;
    icon: React.ReactNode;
}

export interface ItemProps {
    label: string;
    value: string;
    highlight?: "success" | "danger";
    colSpan?: boolean;
}

export interface PropsLinkButton {
    text: string;
    icon: React.ReactNode;
}

export interface LoadingProps {
    text?: string;
};

export interface DataCountryProps {
    location: {
        country_name_official: string;
        country_capital: string;
        continent_name: string;
        is_eu: boolean;
    };
}

export interface DataCurrencyProps {
    currency: {
        code: string;
        name: string;
        symbol: string;
    };
}

export interface DataLocationProps {
    location: {
        country_name: string;
        state_prov: string;
        city: string;
        zipcode: string;
        latitude: string;
        longitude: string;
    };
}

export interface DataMetadataProps {
    country_metadata: {
        calling_code: string;
        tld: string;
        languages: string[];
    };
}

export interface HeaderInfoProps {
    ip: string;
    location: {
        country_emoji: string;
        country_flag: string;
        country_name: string;
    };
}

export interface PropsIpLocationCard {
    data: IpLocationData;
}

export interface PropsFormIpAddress {
    styleForm?: string;
    styleInput?: string;
    stylePoint?: string;
    styleButton?: string;
}