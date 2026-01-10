import { valueOrNS } from "../../utils";
import Item from "../Atomos/EtiquetaInfo";


interface DataLocationProps {
    location: {
        country_name: string;
        state_prov: string;
        city: string;
        zipcode: string;
        latitude: string;
        longitude: string;
    };
}
export default function DataLocation({ location }: DataLocationProps) {
    return (
        <section className="w-full max-w-7xl mx-auto ">
            <h2 className="text-2xl font-semibold">📍 Location</h2>

            <div className="flex flex-wrap rounded-xl py-6 gap-6">
                <Item label="Country" value={valueOrNS(location.country_name)} />
                <Item label="State / Province" value={valueOrNS(location.state_prov)} />
                <Item label="City" value={valueOrNS(location.city)} />
                <Item label="Zip Code" value={valueOrNS(location.zipcode)} />
                <Item label="Latitude" value={valueOrNS(location.latitude)} />
                <Item label="Longitude" value={valueOrNS(location.longitude)} />
            </div>
        </section>
    )
}