import {useState} from 'react';

export function useCallAPI() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const execute = async api => {
    try {
      setIsLoading(true);
      const apiData = await api;
      if (apiData) {
        setData(apiData);
      }
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      throw e;
    }
  };

  return {
    isLoading,
    data,
    execute,
  };
}
