import { useEffect, useState } from 'react';

function useFetch<T>(url: string, country?: string) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let changeableUrl = url;
    if (country) {
      changeableUrl = `${url}countries/${country}`;
    }

    async function getFetchUrl() {
      const response = await fetch(changeableUrl);
      const json = await response.json();

      setData(json);
      setLoading(false);
    }

    getFetchUrl();
  }, [url, country, setData, setLoading]);

  return { data, loading };
}

export { useFetch };
