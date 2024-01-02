import { useState, useEffect } from 'react';

export function useFilterCategory(urlApi, keyWordCategory) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const getDataApi = async () => {
      try {
        const response = await fetch(`${urlApi}/category/${keyWordCategory}`, {
          signal: controller.signal,
        });
        const result = await response.json();
        setIsLoading(false);
        setData(result);
      } catch (error) {
        controller.abort();
      }
    };
    getDataApi();
    return () => {
      controller.abort();
    };
  }, [keyWordCategory]);

  return { data, isLoading };
}
