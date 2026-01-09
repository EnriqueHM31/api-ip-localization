type LoadingProps = {
    text?: string;
};

export default function Loading({ text = "Cargando..." }: LoadingProps) {
    return (
        <div className="flex items-center justify-center min-h-[40vh]">
            <div className="flex text-5xl font-bold text-white">
                {text.split("").map((char, index) => (
                    <span
                        key={index}
                        className="inline-block loading-jump"
                        style={{
                            animationDelay: `${index * 0.05}s`,
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </div>
        </div>
    );
}
