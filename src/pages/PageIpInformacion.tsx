import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import Loading from "../components/Atomos/Loading";
import IpLocationCard from "../components/sections/DataIP";
import NotFound from "./Page404";
import { useValidationIp } from "../hooks/ValidacionIp";

export default function PageInfoIp() {
    const { ip } = useParams();
    const navigate = useNavigate();

    const { data, loading, error } = useValidationIp(ip);

    // 🔁 navegación por error
    useEffect(() => {
        if (error) {
            toast.error(`${error.type}: ${error.message}`, { duration: 3000 });
            navigate("/");
        }
    }, [error, navigate]);

    if (!ip) return <NotFound />;

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[40vh]">
                <Loading text="Buscando localización..." />
            </div>
        );
    }

    if (!data) return null;

    return (
        <div className="flex flex-col items-center justify-center text-white px-2">
            <IpLocationCard data={data} />
        </div>
    );
}
