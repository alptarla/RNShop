import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { RouteProp } from '@react-navigation/native'
import React from 'react'
import CartScreen from '../screens/CartScreen'
import Colors from '../theme/Colors'
import { BottomTabsParamList } from '../types'
import HomeTabNavigator from './HomeTabNavigator'

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>()

type ScreenOptionsParams = {
  route: RouteProp<BottomTabsParamList, keyof BottomTabsParamList>
  navigation: any
}

const screenOptions = ({
  route,
}: ScreenOptionsParams): BottomTabNavigationOptions => ({
  tabBarShowLabel: false,
  tabBarActiveTintColor: Colors.primaryDark,
  tabBarInactiveTintColor: Colors.primary,
  tabBarIcon: ({ color, size }) => {
    return route.name === 'HomeTab' ? (
      <Icon
        name="shopping"
        color={color}
        size={size}
      />
    ) : route.name === 'CartScreen' ? (
      <Icon
        name="cart"
        color={color}
        size={size}
      />
    ) : null
  },
})

const BottomTabsNavigator: React.FC = () => (
  <BottomTabs.Navigator
    initialRouteName="HomeTab"
    screenOptions={screenOptions}
  >
    <BottomTabs.Screen
      name="HomeTab"
      component={HomeTabNavigator}
      options={{
        headerShown: false,
      }}
    />
    <BottomTabs.Screen
      name="CartScreen"
      component={CartScreen}
    />
  </BottomTabs.Navigator>
)

export default BottomTabsNavigator
