import { valueOrNS } from "../../utils";
import Item from "../Atomos/EtiquetaInfo";
import type { DataMetadataProps } from "../../types/components";

export default function DataMetadata({ country_metadata }: DataMetadataProps) {
    return (
        <section className="w-full max-w-7xl mx-auto ">
            <h2 className="text-2xl font-semibold mb-4">☎️ Country Metadata</h2>

            <div className="flex flex-wrap rounded-xl py-6 gap-6">
                <Item label="Calling Code" value={valueOrNS(country_metadata.calling_code)} />
                <Item label="Top Level Domain" value={valueOrNS(country_metadata.tld)} />
                <Item
                    label="Languages"
                    value={valueOrNS(country_metadata.languages.join(", "))}
                    colSpan
                />
            </div>
        </section>
    )
}