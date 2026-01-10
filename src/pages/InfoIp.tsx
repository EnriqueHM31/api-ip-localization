import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { obtenerLocalizacionIP } from "../services/obtenerLocalizacion";
import Loading from "../components/Atomos/Loading";
import IpLocationCard from "../components/sections/DataIP";
import { useLocalizacion } from "../hooks/Localizacion";
import type { IpLocationData } from "../types/IpAddress";
import NotFound from "./NotFound";

const mockIpLocation = {
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


export default function PageInfoIp() {
    const { ip } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState<IpLocationData>();
    const { isValidIP } = useLocalizacion();

    useEffect(() => {

        async function ObtenerDatosIp() {

            console.log(ip);
            if (!ip) {
                navigate("/");
                return;
            };
            setTimeout(async () => {
                const response = await obtenerLocalizacionIP({ ip });
                //const response = mockIpLocation as IpLocationData;
                setData(response as IpLocationData);
            }, 3000);
        }

        ObtenerDatosIp();
    }, [ip, navigate]);

    if (!isValidIP(ip as string)) {
        return <NotFound />
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