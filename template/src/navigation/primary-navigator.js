import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {MainTabBar} from '@/navigation/main-tab-bar';

import {screens} from '@/navigation/screen-name';

const Stack = createNativeStackNavigator();

export function PrimaryNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name={screens.MainTabBar} component={MainTabBar} />
    </Stack.Navigator>
  );
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.js in the `useBackButtonHandler` hook.
 */
const exitRoutes = ['welcome'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
