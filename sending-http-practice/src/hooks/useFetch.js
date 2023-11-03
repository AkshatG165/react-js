import { useEffect, useState } from 'react';

export default function useFetch(FetchFunc, initialValue) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState();

  useEffect(() => {
    async function FetchData() {
      try {
        setIsLoading(true);
        const response = await FetchFunc();
        setData(response);
        setIsLoading(false);
      } catch (e) {
        setError({ message: e.message || 'Not able to fetch data' });
        setIsLoading(false);
      }
    }
    FetchData();
  }, []);
  return { isLoading, data, setData, error };
}
