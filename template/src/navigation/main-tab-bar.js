/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from 'react';

import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {responsive} from '@/utils';
import {color} from '@/theme';
import {palette} from '@/theme/palette';
import {useIsLoggedIn} from '@/hooks/useIsLoggedIn';

const BOTTOM_TAB_BAR_HEIGHT = responsive.getHeight(50);
const Tab = createBottomTabNavigator();

const TAB_BAR_NAMES = Object.freeze({});

const styles = StyleSheet.create({
  badge: {
    alignItems: 'center',
    backgroundColor: color.error,
    borderRadius: 20,
    height: 20,
    justifyContent: 'center',
    position: 'absolute',
    right: 3,
    top: 0,
    width: 20,
  },
  badgeTx: {
    color: color.palette.white,
    fontSize: 10,
    fontWeight: '600',
    marginLeft: 1,
  },
  img1: {
    height: responsive.getWidth(20),
    width: responsive.getWidth(20),
  },
  img2: {
    height: responsive.getWidth(40),
    width: responsive.getWidth(40),
  },
  tabBarButton: {alignItems: 'center', flex: 1},
  tabBarContent: {
    alignItems: 'center',
    flexDirection: 'row',
    height: BOTTOM_TAB_BAR_HEIGHT,
  },
  tabBarItem1: {alignItems: 'center'},
  tabBarLabel: {
    color: palette.grey,
    marginTop: 4,
    fontSize: 11,
  },
  tabBarRoot: {
    backgroundColor: 'white',
    height: 70,
  },
  focusedStyle: {
    color: palette.primary,
  },
});

const ICON_SIZE = responsive.getFontSize(25);

const TabBarItem = props => {
  const {name, icon, isFocused} = props;
  const iconColor = isFocused ? palette.primary : palette.grey;
  return (
    <View style={styles.tabBarItem1}>
      <MaterialCommunityIcons color={iconColor} name={icon} size={ICON_SIZE} />
      <Text style={styles.tabBarLabel}>{name}</Text>
    </View>
  );
};

const TabBarButton = props => {
  const {state, descriptors, navigation} = props;

  return (
    <SafeAreaView style={styles.tabBarRoot}>
      <View style={styles.tabBarContent}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          const barItem = () => {
            switch (index) {
              //Tab bar item here
              default:
                return null;
            }
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={styles.tabBarButton}>
              {barItem()}
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};
/**
 * All Tab bar below.
 */
export function MainTabBar() {
  const {isLoggedIn} = useIsLoggedIn();

  return (
    <Tab.Navigator tabBar={TabBarButton}>
    </Tab.Navigator>
  );
}
