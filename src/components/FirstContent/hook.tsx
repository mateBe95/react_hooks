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
| {data: CoronaData, loading: false} 
| {data: undefined, loading: true};

function useFetch(url: string) {
    const [data, setData] = useState<CoronaData | undefined>(undefined);
    const [loading, setLoading] = useState(true);
   
      async function fetchUrl() {
        const response = await fetch(url);
        const json = await response.json();

        setData(json);
        setLoading(false)
      }

      useEffect(() => {
        fetchUrl();
    }, []);
  
    return {data, loading} as FetchReturn;
  }
  
  export { useFetch }