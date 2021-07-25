/**
 * The root navigator is used to switch between major navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow (which is contained in your PrimaryNavigator) which the user
 * will use once logged in.
 */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import * as RNBootSplash from 'react-native-bootsplash';

import {KeyStorage, load} from '@/utils';
import {useAppData} from '@/provider';
import {PrimaryNavigator} from '@/navigation/primary-navigator';

export const RootNavigator = React.forwardRef((props, ref) => {
  const {setUser} = useAppData();
  useEffect(() => {
    (async () => {
      const user = await load(KeyStorage.USER);
      setUser(user);
    })();
  }, []);

  const onReady = () => RNBootSplash.hide({fade: true});

  return (
    <NavigationContainer onReady={onReady} {...props} ref={ref}>
      <PrimaryNavigator />
    </NavigationContainer>
  );
});

RootNavigator.displayName = 'RootNavigator';
