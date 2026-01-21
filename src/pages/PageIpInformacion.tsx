import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import IpLocationCard from "../components/sections/DataIP";
import { useValidationIp } from "../hooks/ValidacionIp";
import NotFound from "./Page404";

export default function PageInfoIp() {
    const { ip } = useParams();
    const navigate = useNavigate();

    const { data, loading, error } = useValidationIp(ip);

    useEffect(() => {
        if (error) {
            toast.error(`${error.message}`, { duration: 3000 });
            navigate("/");
        }

    }, [error, navigate]);

    if (!ip) return <NotFound />;

    if (loading) return <div className="flex flex-col items-center justify-center text-white px-2 min-h-screen"></div>

    if (!data) return null;

    return (
        <div className="flex flex-col items-center justify-center text-white px-2 min-h-screen">
            <IpLocationCard data={data} />
        </div>
    );
}
