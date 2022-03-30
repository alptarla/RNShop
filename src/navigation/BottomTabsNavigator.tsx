import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import CartScreen from '../screens/CartScreen'
import { BottomTabsParamList } from '../types'
import HomeTabNavigator from './HomeTabNavigator'

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>()

const BottomTabsNavigator: React.FC = () => (
  <BottomTabs.Navigator initialRouteName="HomeTab">
    <BottomTabs.Screen
      name="HomeTab"
      component={HomeTabNavigator}
      options={{ headerShown: false }}
    />
    <BottomTabs.Screen
      name="CartScreen"
      component={CartScreen}
    />
  </BottomTabs.Navigator>
)

export default BottomTabsNavigator
