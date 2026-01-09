import type { IpLocationData } from "../../types/IpAddress";
import DataLocation from "../DataIpAddress/DataLocation";
import DataCountry from "../DataIpAddress/DataCountry";
import DataMetadata from "../DataIpAddress/DataMetadata";
import DataCurrency from "../DataIpAddress/DataCurrency";
import HeaderInfo from "../DataIpAddress/HeaderInfo";
interface Props {
    data: IpLocationData;
}

export default function IpLocationCard({ data }: Props) {
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
