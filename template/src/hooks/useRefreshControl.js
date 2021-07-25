import {useEffect, useState} from 'react';
import {wait} from '@/utils';

export function useRefreshControl(isRefreshing, refetch) {
  useEffect(() => {
    (async () => {
      if (isRefreshing) {
        try {
          await refetch();
        } catch (e) {
          console.error(e);
        }
      }
    })();
  }, [isRefreshing]);
}

export function useFlatListRefresh(refetch) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);
    wait(1000).then(refetch);
    setIsRefreshing(false);
  };

  return {
    isRefreshing,
    onRefresh,
  };
}
