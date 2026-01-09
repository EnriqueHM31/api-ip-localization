import FormIpAddress from "./IpAddress";

export default function SectionHero() {

    return (
        <section className="flex flex-col items-center justify-center py-5 gap-8">
            <h1 className="text-white text-6xl font-bold mt-20">Search IP Address</h1>

            <div className="flex items-center flex-col gap-5 w-full max-w-4xl">
                <FormIpAddress />
            </div>
        </section>
    )
}