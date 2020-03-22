import {useEffect, useState} from "react";

interface CoronaValue {
    value: number;
    detail: string;
}

interface CoronaData {
    confirmed: CoronaValue;
    recovered: CoronaValue;
    deaths: CoronaValue;
}

type FetchReturn =
    | { data: CoronaData, loading: false }
    | { data: undefined, loading: true };

function useFetch(url: string) {
    const [data, setData] = useState<CoronaData | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getFetchUrl() {
            const response = await fetch(url);
            const json = await response.json();

            setData(json);
            setLoading(false);
        }

        getFetchUrl();
    }, [url]);

    return {data, loading} as FetchReturn;
}

export {useFetch}