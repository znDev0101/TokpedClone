import { useEffect } from 'react';
import { useState } from 'react';

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controlled = new AbortController();
    setLoading(true);
    const getData = async () => {
      try {
        const response = await fetch(url, {
          signal: controlled.signal,
          method: 'GET',
        });
        const results = await response.json();
        setLoading(false);
        setData(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
    return () => {
      controlled.abort();
    };
  }, []);

  return { data, loading };
}
