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

import {HOME_TABS} from './screen-name';
import {responsive} from '@/utils';
import {color} from '@/theme';
import {Home, Category, History, Following, Me} from '@/screens';
import {palette} from '@/theme/palette';
import {AuthStack} from '@/navigation/stack';
import {useIsLoggedIn} from '@/hooks/useIsLoggedIn';

const BOTTOM_TAB_BAR_HEIGHT = responsive.getHeight(50);
const Tab = createBottomTabNavigator();

// const ICONS = Object.freeze({
//   [HOME_TABS.HOME]: ImageSource.HomeIcon,
//   [HOME_TABS.CATEGORY]: ImageSource.CategoryTabbarIcon,
//   [HOME_TABS.SCAN]: ImageSource.ScanTabbarIcon,
//   [HOME_TABS.CART]: ImageSource.CartTabbarIcon,
//   [HOME_TABS.ACCOUNT]: ImageSource.ProfileTabbarIcon,
// });

const TAB_BAR_NAMES = Object.freeze({
  [HOME_TABS.HOME]: 'Trang chủ',
  [HOME_TABS.CATEGORY]: 'Chuyên mục',
  [HOME_TABS.HISTORY]: 'Lịch sử',
  [HOME_TABS.FOLLOW]: 'Theo dõi',
  [HOME_TABS.ACCOUNT]: 'Tôi',
});

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
              case 0:
                return (
                  <TabBarItem
                    isFocused={isFocused}
                    name={TAB_BAR_NAMES[route.name]}
                    icon={'home'}
                  />
                );
              case 1:
                return (
                  <TabBarItem
                    isFocused={isFocused}
                    name={TAB_BAR_NAMES[route.name]}
                    icon={'menu'}
                  />
                );
              case 2:
                return (
                  <TabBarItem
                    isFocused={isFocused}
                    name={TAB_BAR_NAMES[route.name]}
                    icon={'clock-time-five'}
                  />
                );
              case 3:
                return (
                  <TabBarItem
                    isFocused={isFocused}
                    name={TAB_BAR_NAMES[route.name]}
                    icon={'star'}
                  />
                );
              case 4:
                return (
                  <TabBarItem
                    isFocused={isFocused}
                    name={TAB_BAR_NAMES[route.name]}
                    icon={'account'}
                  />
                );
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

export function MainTabBar() {
  const {isLoggedIn} = useIsLoggedIn();

  return (
    <Tab.Navigator tabBar={TabBarButton}>
      <Tab.Screen name={HOME_TABS.HOME} component={Home} />
      <Tab.Screen name={HOME_TABS.CATEGORY} component={Category} />
      <Tab.Screen name={HOME_TABS.HISTORY} component={History} />
      <Tab.Screen
        name={HOME_TABS.FOLLOW}
        component={isLoggedIn ? Following : AuthStack}
      />
      <Tab.Screen
        name={HOME_TABS.ACCOUNT}
        component={isLoggedIn ? Me : AuthStack}
      />
    </Tab.Navigator>
  );
}
