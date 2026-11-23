import { useEffect, useState } from 'react';

// возвращает value, но только после того, как оно delay мс не менялось
export const useDebounce = <T>(value: T, delay = 500): T => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    // value поменялось раньше — старый таймер отменяем
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
};