import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import LoginScreen from '../screens/LoginScreen'
import { RootStackParamList } from '../types'
import BottomTabsNavigator from './BottomTabsNavigator'

const RootStack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator: React.FC = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name="LoginScreen"
      component={LoginScreen}
    />
    <RootStack.Screen
      name="BottomTabs"
      component={BottomTabsNavigator}
      options={{ headerShown: false }}
    />
  </RootStack.Navigator>
)

export default RootNavigator
