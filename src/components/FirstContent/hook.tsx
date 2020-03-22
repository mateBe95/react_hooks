import { useState, useEffect } from "react";

interface CoronaValue {
    value: number;
    detail: string;
}

interface CoronaData {
    confirmed: CoronaValue;
    recovered: CoronaValue;
    deaths: CoronaValue;
}

function useFetch(url: string) {
    const [data, setData] = useState<CoronaData | undefined>(undefined);
    const [loading, setLoading] = useState(true)
   
      async function fetchUrl() {
        const response = await fetch(url);
        const json = await response.json();

        setData(json);
        setLoading(false)
      }

      useEffect(() => {
        fetchUrl();
    }, []);
  
    return {data, loading};
  }
  
  export { useFetch }