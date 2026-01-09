import Item from "./EtiquetaInfo";
interface DataMetadataProps {
    country_metadata: {
        calling_code: string;
        tld: string;
        languages: string[];
    };
}

export default function DataMetadata({ country_metadata }: DataMetadataProps) {
    return (
        <section className="w-full max-w-7xl mx-auto ">
            <h2 className="text-2xl font-semibold mb-4">☎️ Country Metadata</h2>

            <div className="flex flex-wrap rounded-xl py-6 gap-6">
                <Item label="Calling Code" value={country_metadata.calling_code} />
                <Item label="Top Level Domain" value={country_metadata.tld} />
                <Item
                    label="Languages"
                    value={country_metadata.languages.join(", ")}
                    colSpan
                />
            </div>
        </section>
    )
}