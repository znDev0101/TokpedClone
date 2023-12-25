import { useEffect } from 'react';
import { useState } from 'react';

export function fetchData(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controlled = new AbortController();
    const getData = async (url) => {
      try {
        const response = await fetch(url, {
          signal: controlled.signal,
          method: 'GET',
        });
        const results = await response.json();
        setData(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData(url);
    console.log('component rendred success');
    return () => {
      controlled.abort();
      console.log('request api cancel');
    };
  }, []);

  return { data };
}
