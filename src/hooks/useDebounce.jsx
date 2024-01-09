import { useEffect, useState, useRef } from 'react';

export function useDebounce(keywordSearch, delay = 800) {
  const [debounceValue, setDebounceValue] = useState('');

  useEffect(() => {
    const time = setTimeout(() => {
      setDebounceValue(keywordSearch);
    }, delay);
    return () => {
      clearTimeout(time);
    };
  }, [keywordSearch, delay]);

  return debounceValue;
}
