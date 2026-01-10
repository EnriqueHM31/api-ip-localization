import { valueOrNS } from "../../utils";
import Item from "../Atomos/EtiquetaInfo";

interface DataCountryProps {
    location: {
        country_name_official: string;
        country_capital: string;
        continent_name: string;
        is_eu: boolean;
    };
}


export default function DataCountry({ location }: DataCountryProps) {
    return (
        <section className="w-full max-w-7xl mx-auto ">
            <h2 className="text-2xl font-semibold mb-4">🌍 Country Information</h2>

            <div className="flex flex-wrap rounded-xl py-6 gap-6">
                <Item label="Official Name" value={valueOrNS(location.country_name_official)} />
                <Item label="Capital" value={valueOrNS(location.country_capital)} />
                <Item label="Continent" value={valueOrNS(location.continent_name)} />
                <Item
                    label="European Union"
                    value={location.is_eu ? "Yes" : "No"}
                    highlight={location.is_eu ? "success" : "danger"}
                />
            </div>
        </ section>
    )
}