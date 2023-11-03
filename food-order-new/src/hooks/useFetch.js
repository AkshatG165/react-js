import { useEffect, useState } from 'react';

export default function useFetch(fetchFunc, initialValue) {
  const [data, setData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const menu = await fetchFunc();
        setData(menu);
        setIsLoading(false);
      } catch (e) {
        setError({ message: e.message || 'Unable to fetch menu' });
      }
    }
    fetchData();
  }, []);
  return { data, isLoading, error };
}
