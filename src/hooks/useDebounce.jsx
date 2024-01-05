import { useEffect, useState } from 'react';

export function useDebounce(value, delay = 800) {
  const [debounceValue, setDebounceValue] = useState('');

  useEffect(() => {
    const setTime = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(setTime);
    };
  }, [value, delay]);

  return debounceValue;
}
