import {useAppData} from '@/provider';

export function useIsLoggedIn() {
  const {user} = useAppData();

  const isLoggedIn = user && typeof user === 'object';
  return {
    isLoggedIn,
  };
}
