import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { useAppSelector } from '../hooks/useTypedRedux'
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

const BottomTabsNavigator: React.FC = () => {
  const { products } = useAppSelector((state) => state.cart)

  return (
    <BottomTabs.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.primaryDark,
        tabBarInactiveTintColor: Colors.primary,
      }}
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
          headerShown: false,
          headerTitle: 'Your Cart',
          headerTintColor: Colors.primaryDark,
          tabBarIcon: renderTabBarIcon('cart'),
          tabBarBadge: products.length ? products.length : undefined,
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default BottomTabsNavigator
