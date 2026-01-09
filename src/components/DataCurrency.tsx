import Item from "./EtiquetaInfo";

interface DataCurrencyProps {
    currency: {
        code: string;
        name: string;
        symbol: string;
    };
}

export default function DataCurrency({ currency }: DataCurrencyProps) {
    return (
        <section className="w-full max-w-7xl mx-auto ">
            <h2 className="text-2xl font-semibold mb-4">💱 Currency</h2>

            <div className="flex flex-wrap rounded-xl py-6 gap-6">
                <Item label="Name" value={currency.name} />
                <Item label="Code" value={currency.code} />
                <Item label="Symbol" value={currency.symbol} />
            </div>
        </section>
    )
}