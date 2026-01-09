import { highlightColors } from "../constants";
interface ItemProps {
    label: string;
    value: string;
    highlight?: "success" | "danger";
    colSpan?: boolean;
}


export default function Item({ label, value, highlight, colSpan }: ItemProps) {
    return (
        <div
            className={`flex flex-col gap-1 overflow-hidden bg-white rounded-2xl ${colSpan ? "md:col-span-2" : ""}`}
        >
            <span className="text-sm text-white  py-2 font-bold text-center w-full bg-blue-600 px-6">{label}</span>
            <span
                className={`text-lg font-semibold px-8 text-center ${highlight === highlightColors.sucess
                    ? "text-green-400"
                    : highlight === highlightColors.danger
                        ? "text-red-400"
                        : "text-blue-950"
                    }`}
            >
                {value}
            </span>
        </div>
    );
}
