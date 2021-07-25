/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app or storybook.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigation, so head over there
 * if you're interested in adding screens and navigators.
 */
import '../utils/ignore-warnings';
import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';
import {enableScreens} from 'react-native-screens';

import {navigationRef, RootNavigator} from '../navigation';
import {AppProvider} from '@/provider';

enableScreens(true);

/**
 * This is the root component of our app.
 */

export function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        // staleTime: Infinity,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <AppProvider>
          <RootNavigator ref={navigationRef} />
        </AppProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
