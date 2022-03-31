import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import CartScreen from '../screens/CartScreen'
import Colors from '../theme/Colors'
import { BottomTabsParamList } from '../types'
import HomeTabNavigator from './HomeTabNavigator'

const renderTabBarIcon = (name: string) => {
  return ({ color, size }: { color: string; size: number }) => (
    <Icon
      name={name as any}
      color={color}
      size={size}
    />
  )
}

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>()

const BottomTabsNavigator: React.FC = () => (
  <BottomTabs.Navigator
    initialRouteName="HomeTab"
    screenOptions={({ route }) => ({
      tabBarShowLabel: false,
      tabBarActiveTintColor: Colors.primaryDark,
      tabBarInactiveTintColor: Colors.primary,
    })}
  >
    <BottomTabs.Screen
      name="HomeTab"
      component={HomeTabNavigator}
      options={{
        headerShown: false,
        tabBarIcon: renderTabBarIcon('shopping'),
      }}
    />
    <BottomTabs.Screen
      name="CartScreen"
      component={CartScreen}
      options={{
        tabBarIcon: renderTabBarIcon('cart'),
      }}
    />
  </BottomTabs.Navigator>
)

export default BottomTabsNavigator
