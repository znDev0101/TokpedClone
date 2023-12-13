import { useEffect } from 'react';
import { useState } from 'react';

export function fetchData(url) {
  const [data, setData] = useState([]);

  const getData = async (url) => {
    const response = await fetch(url, {
      method: 'GET',
    });
    const results = await response.json();
    setData(results);
  };

  useEffect(() => {
    getData(url);
  }, []);

  return { data };
}
