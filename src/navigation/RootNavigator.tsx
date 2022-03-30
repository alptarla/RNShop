import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { useAppSelector } from '../hooks/useTypedRedux'
import LoginScreen from '../screens/LoginScreen'
import { RootStackParamList } from '../types'
import BottomTabsNavigator from './BottomTabsNavigator'

const RootStack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator: React.FC = () => {
  const { token } = useAppSelector((state) => state.auth)

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {token ? (
        <RootStack.Screen
          name="BottomTabs"
          component={BottomTabsNavigator}
        />
      ) : (
        <RootStack.Screen
          name="LoginScreen"
          component={LoginScreen}
        />
      )}
    </RootStack.Navigator>
  )
}

export default RootNavigator
