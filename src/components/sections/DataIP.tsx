import type { PropsIpLocationCard } from "../../types/Components";
import DataCountry from "../DataIpAddress/DataCountry";
import DataCurrency from "../DataIpAddress/DataCurrency";
import DataLocation from "../DataIpAddress/DataLocation";
import DataMetadata from "../DataIpAddress/DataMetadata";
import HeaderInfo from "../DataIpAddress/HeaderInfo";


export default function IpLocationCard({ data }: PropsIpLocationCard) {
    const { ip, location, country_metadata, currency } = data;

    return (
        <>
            {/* ================= HEADER ================= */}
            <HeaderInfo ip={ip} location={location} />

            <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto py-10">

                {/* ================= LOCATION ================= */}
                <DataLocation location={location} />

                {/* ================= COUNTRY INFO ================= */}
                <DataCountry location={location} />

                {/* ================= METADATA ================= */}
                <DataMetadata country_metadata={country_metadata} />

                {/* ================= CURRENCY ================= */}
                <DataCurrency currency={currency} />
            </div>

        </>
    );
}
