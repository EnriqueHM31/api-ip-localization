import type { PropsLinkButton } from "../../types/Components";

export default function LinkButton({ text, icon }: PropsLinkButton) {
    return (
        <a href="https://github.com/EnriqueHM31?tab=repositories" target="_blank" className="bg-white text-blue-950 px-4 py-2 rounded-md font-bold flex items-center gap-2 cursor-pointer hover:bg-blue-600 transition-all duration-300 hover:text-white ease-in">
            <p className="hidden md:block">{text}</p>
            {icon}
        </a>
    )
}