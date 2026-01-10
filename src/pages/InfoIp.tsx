import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import Loading from "../components/Atomos/Loading";
import IpLocationCard from "../components/sections/DataIP";
import { useLocalizacion } from "../hooks/Localizacion";
import { obtenerLocalizacionIP } from "../services/obtenerLocalizacion";
import type { IpLocationData } from "../types/IpAddress";
import { normalizeError } from "../utils/error";
import NotFound from "./NotFound";

/*const mockIpLocation = {
    ip: "8.8.8.8",
    location: {
        continent_code: "NA",
        continent_name: "North America",
        country_code2: "US",
        country_code3: "USA",
        country_name: "United States",
        country_name_official: "United States of America",
        country_capital: "Washington, D.C.",
        state_prov: "California",
        state_code: "US-CA",
        district: "Santa Clara",
        city: "Mountain View",
        zipcode: "94043-1351",
        latitude: "37.42240",
        longitude: "-122.08421",
        is_eu: false,
        country_flag: "https://ipgeolocation.io/static/flags/us_64.png",
        geoname_id: "6301403",
        country_emoji: "🇺🇸",
    },
    country_metadata: {
        calling_code: "+1",
        tld: ".us",
        languages: ["en-US", "es-US", "haw", "fr"],
    },
    currency: {
        code: "USD",
        name: "US Dollar",
        symbol: "$",
    },
};
*/

export default function PageInfoIp() {
    const { ip } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState<IpLocationData>();
    const { isValidIP } = useLocalizacion();

    useEffect(() => {
        if (!ip) {
            navigate("/");
            return;
        }


        const ObtenerDatosIp = async () => {
            const response = await obtenerLocalizacionIP({ ip });
            setData(response as IpLocationData);
        };

        ObtenerDatosIp();

    }, [ip, navigate]);

    if (!isValidIP(ip as string)) {
        return <NotFound />
    }

    if (data?.message) {
        navigate("/");
        const Error = normalizeError(data);
        toast.error(`${Error.type}: ${Error.message}`);
        return
    }



    return (
        <div className="flex flex-col items-center justify-center text-white  ">
            {!data ?
                <Loading text="Buscando localización..." />
                :
                <IpLocationCard data={data as IpLocationData} />
            }
        </div >
    );
}