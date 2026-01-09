import Item from "./EtiquetaInfo";
import type { IpLocationData } from "../types/IpAddress.d";
interface Props {
    data: IpLocationData;
}

export default function IpLocationCard({ data }: Props) {
    const { ip, location, country_metadata, currency } = data;

    return (
        <>
            {/* ================= HEADER ================= */}
            <header className="flex items-center justify-between border-b border-white pb-6 w-full max-w-7xl" >
                <div>
                    <h1 className="text-4xl font-bold text-center text-white">
                        Información de la IP {ip}
                    </h1>
                </div>
                <div className="flex items-center gap-3 justify-center">
                    <span className="text-4xl text-white flex items-center justify-center">{location.country_emoji}</span>
                    <img
                        src={location.country_flag}
                        alt={location.country_name}
                        className=" object-contain rounded shadow"
                    />
                </div>
            </header >

            <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto py-10">

                {/* ================= LOCATION ================= */}
                <section className="w-full max-w-7xl mx-auto ">
                    <h2 className="text-2xl font-semibold">📍 Location</h2>

                    <div className="flex flex-wrap rounded-xl py-6 gap-6">
                        <Item label="Country" value={location.country_name} />
                        <Item label="State / Province" value={location.state_prov} />
                        <Item label="City" value={location.city} />
                        <Item label="Zip Code" value={location.zipcode} />
                        <Item label="Latitude" value={location.latitude} />
                        <Item label="Longitude" value={location.longitude} />
                    </div>
                </section>

                {/* ================= COUNTRY INFO ================= */}
                <section className="w-full max-w-7xl mx-auto ">
                    <h2 className="text-2xl font-semibold mb-4">🌍 Country Information</h2>

                    <div className="flex flex-wrap rounded-xl py-6 gap-6">
                        <Item label="Official Name" value={location.country_name_official} />
                        <Item label="Capital" value={location.country_capital} />
                        <Item label="Continent" value={location.continent_name} />
                        <Item
                            label="European Union"
                            value={location.is_eu ? "Yes" : "No"}
                            highlight={location.is_eu ? "success" : "danger"}
                        />
                    </div>
                </ section>

                {/* ================= METADATA ================= */}
                <section className="w-full max-w-7xl mx-auto ">
                    <h2 className="text-2xl font-semibold mb-4">☎️ Country Metadata</h2>

                    <div className="flex flex-wrap rounded-xl py-6 gap-6">
                        <Item label="Calling Code" value={country_metadata.calling_code} />
                        <Item label="Top Level Domain" value={country_metadata.tld} />
                        <Item
                            label="Languages"
                            value={country_metadata.languages.join(", ")}
                            colSpan
                        />
                    </div>
                </section>

                {/* ================= CURRENCY ================= */}
                <section className="w-full max-w-7xl mx-auto ">
                    <h2 className="text-2xl font-semibold mb-4">💱 Currency</h2>

                    <div className="flex flex-wrap rounded-xl py-6 gap-6">
                        <Item label="Name" value={currency.name} />
                        <Item label="Code" value={currency.code} />
                        <Item label="Symbol" value={currency.symbol} />
                    </div>
                </section>
            </div>

        </>
    );
}
