import { useParams } from "react-router-dom";

export default function PageInfoIp() {
    const { ip } = useParams();

    console.log(ip);
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-5xl font-bold text-center">
                Información de la IP {ip}
            </h1>
        </div>
    );
}